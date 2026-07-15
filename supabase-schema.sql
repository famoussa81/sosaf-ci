-- ═══════════════════════════════════════════════════════════════════
--   SOSAF-CI — Supabase Schema (idempotent)
--   Exécute ce script dans Supabase SQL Editor (https://supabase.com)
--   Peut être ré-exécuté sans erreur
-- ═══════════════════════════════════════════════════════════════════

-- 1. Table produits
CREATE TABLE IF NOT EXISTS products (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  subtitle TEXT DEFAULT '',
  cert TEXT DEFAULT '',
  visible BOOLEAN DEFAULT true,
  emoji TEXT DEFAULT '',
  cover_color TEXT DEFAULT '#00ed64',
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- 2. Table caractéristiques des produits
CREATE TABLE IF NOT EXISTS product_chars (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  product_id UUID REFERENCES products(id) ON DELETE CASCADE,
  label TEXT NOT NULL,
  value TEXT NOT NULL,
  sort_order INTEGER DEFAULT 0
);

-- 3. Table photos des produits
CREATE TABLE IF NOT EXISTS product_photos (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  product_id UUID REFERENCES products(id) ON DELETE CASCADE,
  url TEXT NOT NULL,
  is_cover BOOLEAN DEFAULT false,
  sort_order INTEGER DEFAULT 0
);

-- 4. Table messages
CREATE TABLE IF NOT EXISTS messages (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  body TEXT NOT NULL,
  status TEXT DEFAULT 'unread' CHECK (status IN ('unread', 'read', 'treated')),
  created_at TIMESTAMPTZ DEFAULT now()
);

-- 5. Table paramètres
CREATE TABLE IF NOT EXISTS settings (
  key TEXT PRIMARY KEY,
  value TEXT NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- 6. Table visites
CREATE TABLE IF NOT EXISTS visits (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  page TEXT DEFAULT '/',
  ip TEXT DEFAULT '',
  created_at TIMESTAMPTZ DEFAULT now()
);

-- ═══════════════════════════════════════════════════════════════════
--   RLS — Row Level Security (idempotent)
-- ═══════════════════════════════════════════════════════════════════

-- Drop existing policies first to allow re-runs
DROP POLICY IF EXISTS "products_select_public" ON products;
DROP POLICY IF EXISTS "product_chars_select_public" ON product_chars;
DROP POLICY IF EXISTS "product_photos_select_public" ON product_photos;
DROP POLICY IF EXISTS "settings_select_public" ON settings;
DROP POLICY IF EXISTS "products_all_admin" ON products;
DROP POLICY IF EXISTS "product_chars_all_admin" ON product_chars;
DROP POLICY IF EXISTS "product_photos_all_admin" ON product_photos;
DROP POLICY IF EXISTS "settings_all_admin" ON settings;
DROP POLICY IF EXISTS "messages_insert_public" ON messages;
DROP POLICY IF EXISTS "messages_all_admin" ON messages;
DROP POLICY IF EXISTS "visits_insert_public" ON visits;
DROP POLICY IF EXISTS "visits_select_admin" ON visits;

ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE product_chars ENABLE ROW LEVEL SECURITY;
ALTER TABLE product_photos ENABLE ROW LEVEL SECURITY;
ALTER TABLE messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE visits ENABLE ROW LEVEL SECURITY;

-- Lecture publique pour les données du site
CREATE POLICY "products_select_public" ON products FOR SELECT USING (true);
CREATE POLICY "product_chars_select_public" ON product_chars FOR SELECT USING (true);
CREATE POLICY "product_photos_select_public" ON product_photos FOR SELECT USING (true);
CREATE POLICY "settings_select_public" ON settings FOR SELECT USING (true);

-- Écriture admin seulement (nécessite auth)
CREATE POLICY "products_all_admin" ON products FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "product_chars_all_admin" ON product_chars FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "product_photos_all_admin" ON product_photos FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "settings_all_admin" ON settings FOR ALL USING (auth.role() = 'authenticated');

-- Messages : insertion publique, lecture admin
CREATE POLICY "messages_insert_public" ON messages FOR INSERT WITH CHECK (true);
CREATE POLICY "messages_all_admin" ON messages FOR ALL USING (auth.role() = 'authenticated');

-- Visites : insertion publique, lecture admin
CREATE POLICY "visits_insert_public" ON visits FOR INSERT WITH CHECK (true);
CREATE POLICY "visits_select_admin" ON visits FOR SELECT USING (auth.role() = 'authenticated');

-- ═══════════════════════════════════════════════════════════════════
--   INDEXES (idempotent — IF NOT EXISTS)
-- ═══════════════════════════════════════════════════════════════════

CREATE INDEX IF NOT EXISTS idx_product_chars_product_id ON product_chars(product_id);
CREATE INDEX IF NOT EXISTS idx_product_photos_product_id ON product_photos(product_id);
CREATE INDEX IF NOT EXISTS idx_messages_status ON messages(status);
CREATE INDEX IF NOT EXISTS idx_messages_created_at ON messages(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_products_sort_order ON products(sort_order);
