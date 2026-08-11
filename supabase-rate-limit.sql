-- ═══════════════════════════════════════════════════════════════════
--   SOSAF-CI — Limite de débit partagée pour /api/contact
--   Exécuter dans Supabase SQL Editor. Idempotent, ré-exécutable.
--
--   Pourquoi : le compteur en mémoire de api/contact.js vit dans une seule
--   instance lambda. Vercel peut en démarrer plusieurs en parallèle, donc le
--   plafond réel était RATE_MAX × nombre d'instances. Cette table le rend
--   global, et la fonction ci-dessous fait le comptage de façon atomique
--   (INSERT ... ON CONFLICT) pour éviter que deux requêtes simultanées
--   passent toutes les deux.
-- ═══════════════════════════════════════════════════════════════════

-- 1. Table des compteurs
CREATE TABLE IF NOT EXISTS contact_rate_limits (
  ip           TEXT PRIMARY KEY,
  window_start TIMESTAMPTZ NOT NULL DEFAULT now(),
  count        INTEGER NOT NULL DEFAULT 1
);

CREATE INDEX IF NOT EXISTS idx_contact_rate_limits_window
  ON contact_rate_limits(window_start);

-- 2. RLS : aucune policy publique.
--    La clé anon (celle du site, publique) n'a donc aucun accès.
--    L'API serveur utilise SUPABASE_SERVICE_ROLE_KEY, qui contourne RLS.
ALTER TABLE contact_rate_limits ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "contact_rate_limits_no_public" ON contact_rate_limits;

-- 3. Fonction de comptage atomique.
--    Renvoie TRUE si l'IP a dépassé le plafond (donc : bloquer).
CREATE OR REPLACE FUNCTION check_contact_rate_limit(
  client_ip      TEXT,
  max_requests   INTEGER,
  window_seconds INTEGER
)
RETURNS BOOLEAN
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  current_count INTEGER;
  cutoff        TIMESTAMPTZ := now() - make_interval(secs => window_seconds);
BEGIN
  -- Purge des fenêtres expirées (garde la table petite).
  DELETE FROM contact_rate_limits WHERE window_start < cutoff;

  INSERT INTO contact_rate_limits AS r (ip, window_start, count)
  VALUES (client_ip, now(), 1)
  ON CONFLICT (ip) DO UPDATE
    SET count = CASE WHEN r.window_start < cutoff THEN 1 ELSE r.count + 1 END,
        window_start = CASE WHEN r.window_start < cutoff THEN now() ELSE r.window_start END
  RETURNING r.count INTO current_count;

  RETURN current_count > max_requests;
END;
$$;

-- 4. Exécutable seulement par le rôle serveur, pas par anon.
REVOKE ALL ON FUNCTION check_contact_rate_limit(TEXT, INTEGER, INTEGER) FROM PUBLIC;
REVOKE ALL ON FUNCTION check_contact_rate_limit(TEXT, INTEGER, INTEGER) FROM anon;
GRANT EXECUTE ON FUNCTION check_contact_rate_limit(TEXT, INTEGER, INTEGER) TO service_role;

-- ═══════════════════════════════════════════════════════════════════
--   VÉRIFICATION
--   5 premiers appels -> false, le 6e -> true (RATE_MAX = 5).
-- ═══════════════════════════════════════════════════════════════════
-- SELECT check_contact_rate_limit('1.2.3.4', 5, 900);
-- SELECT * FROM contact_rate_limits WHERE ip = '1.2.3.4';
-- DELETE FROM contact_rate_limits WHERE ip = '1.2.3.4';
