-- ═══════════════════════════════════════════════════════════════════
--   SOSAF-CI — Renforcer RLS (admin = uniquement Mohamed)
--   Exécuter dans Supabase SQL Editor
-- ═══════════════════════════════════════════════════════════════════

-- Supprimer les anciennes politiques admin (trop permissives)
DROP POLICY IF EXISTS "products_all_admin" ON products;
DROP POLICY IF EXISTS "product_chars_all_admin" ON product_chars;
DROP POLICY IF EXISTS "product_photos_all_admin" ON product_photos;
DROP POLICY IF EXISTS "settings_all_admin" ON settings;
DROP POLICY IF EXISTS "messages_all_admin" ON messages;
DROP POLICY IF EXISTS "visits_select_admin" ON visits;

-- Recréer avec restriction par UUID (seul Mohamed peut gérer)
CREATE POLICY "products_all_admin" ON products FOR ALL
  USING (auth.uid() = 'dc54c76e-caad-4f81-b2c1-66bfaaf8eb13');

CREATE POLICY "product_chars_all_admin" ON product_chars FOR ALL
  USING (auth.uid() = 'dc54c76e-caad-4f81-b2c1-66bfaaf8eb13');

CREATE POLICY "product_photos_all_admin" ON product_photos FOR ALL
  USING (auth.uid() = 'dc54c76e-caad-4f81-b2c1-66bfaaf8eb13');

CREATE POLICY "settings_all_admin" ON settings FOR ALL
  USING (auth.uid() = 'dc54c76e-caad-4f81-b2c1-66bfaaf8eb13');

CREATE POLICY "messages_all_admin" ON messages FOR ALL
  USING (auth.uid() = 'dc54c76e-caad-4f81-b2c1-66bfaaf8eb13');

CREATE POLICY "visits_select_admin" ON visits FOR SELECT
  USING (auth.uid() = 'dc54c76e-caad-4f81-b2c1-66bfaaf8eb13');

-- ═══════════════════════════════════════════════════════════════════
--   VÉRIFICATION
-- ═══════════════════════════════════════════════════════════════════
SELECT tablename, policyname, cmd, qual
FROM pg_policies
WHERE schemaname = 'public'
ORDER BY tablename, policyname;
