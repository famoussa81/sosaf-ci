-- ═══════════════════════════════════════════════════════════════════
--   SOSAF-CI — Ajout colonnes anglaises (bilingue)
--   Exécuter dans Supabase SQL Editor
-- ═══════════════════════════════════════════════════════════════════

-- Colonnes anglaises pour les produits
ALTER TABLE products ADD COLUMN IF NOT EXISTS name_en TEXT DEFAULT '';
ALTER TABLE products ADD COLUMN IF NOT EXISTS subtitle_en TEXT DEFAULT '';

-- Colonnes anglaises pour les caractéristiques
ALTER TABLE product_chars ADD COLUMN IF NOT EXISTS label_en TEXT DEFAULT '';
ALTER TABLE product_chars ADD COLUMN IF NOT EXISTS value_en TEXT DEFAULT '';

-- ═══════════════════════════════════════════════════════════════════
--   Pré-remplir les traductions des 5 produits existants
-- ═══════════════════════════════════════════════════════════════════

-- Mangue
UPDATE products SET name_en = 'Mango', subtitle_en = 'Origin Ivory Coast · Kent and Amélie varieties'
WHERE id = 'a1000000-0000-0000-0000-000000000001';

-- Noix de Coco
UPDATE products SET name_en = 'Coconut', subtitle_en = 'Origin Ivory Coast · Grand Africa West variety'
WHERE id = 'a1000000-0000-0000-0000-000000000002';

-- Avocat
UPDATE products SET name_en = 'Avocado', subtitle_en = 'Origin Ivory Coast · Hass and Fuerte varieties'
WHERE id = 'a1000000-0000-0000-0000-000000000003';

-- Banane
UPDATE products SET name_en = 'Banana', subtitle_en = 'Origin Ivory Coast · Cavendish variety'
WHERE id = 'a1000000-0000-0000-0000-000000000004';

-- Ananas
UPDATE products SET name_en = 'Pineapple', subtitle_en = 'Origin Ivory Coast · MD2, Sugar Loaf, Smooth Cayenne varieties'
WHERE id = 'a1000000-0000-0000-0000-000000000005';

-- Caractéristiques Mangue
UPDATE product_chars SET label_en = 'Varieties', value_en = 'Kent, Amélie'
WHERE product_id = 'a1000000-0000-0000-0000-000000000001' AND label = 'Variétés';
UPDATE product_chars SET label_en = 'Season', value_en = 'March – July'
WHERE product_id = 'a1000000-0000-0000-0000-000000000001' AND label = 'Saison';
UPDATE product_chars SET label_en = 'Size', value_en = '6–12 (depending on variety)'
WHERE product_id = 'a1000000-0000-0000-0000-000000000001' AND label = 'Calibre';
UPDATE product_chars SET label_en = 'Packaging', value_en = 'Air: 6 kg carton / Sea: 4 kg carton'
WHERE product_id = 'a1000000-0000-0000-0000-000000000001' AND label = 'Conditionnement';

-- Caractéristiques Noix de Coco
UPDATE product_chars SET label_en = 'Variety', value_en = 'Grand Africa West'
WHERE product_id = 'a1000000-0000-0000-0000-000000000002' AND label = 'Variété';
UPDATE product_chars SET label_en = 'Origin', value_en = 'Ivory Coast'
WHERE product_id = 'a1000000-0000-0000-0000-000000000002' AND label = 'Origine';
UPDATE product_chars SET label_en = 'Type', value_en = 'Fresh, Dried'
WHERE product_id = 'a1000000-0000-0000-0000-000000000002' AND label = 'Type';
UPDATE product_chars SET label_en = 'Packaging', value_en = '21 kg bag'
WHERE product_id = 'a1000000-0000-0000-0000-000000000002' AND label = 'Conditionnement';

-- Caractéristiques Avocat
UPDATE product_chars SET label_en = 'Varieties', value_en = 'Hass, Fuerte'
WHERE product_id = 'a1000000-0000-0000-0000-000000000003' AND label = 'Variétés';
UPDATE product_chars SET label_en = 'Size', value_en = '16–22'
WHERE product_id = 'a1000000-0000-0000-0000-000000000003' AND label = 'Calibre';
UPDATE product_chars SET label_en = 'Packaging', value_en = 'Air: 6 kg carton / Sea: 4 kg carton'
WHERE product_id = 'a1000000-0000-0000-0000-000000000003' AND label = 'Conditionnement';
UPDATE product_chars SET label_en = 'Season', value_en = 'All year'
WHERE product_id = 'a1000000-0000-0000-0000-000000000003' AND label = 'Saison';

-- Caractéristiques Banane
UPDATE product_chars SET label_en = 'Variety', value_en = 'Cavendish'
WHERE product_id = 'a1000000-0000-0000-0000-000000000004' AND label = 'Variété';
UPDATE product_chars SET label_en = 'Origin', value_en = 'Ivory Coast'
WHERE product_id = 'a1000000-0000-0000-0000-000000000004' AND label = 'Origine';
UPDATE product_chars SET label_en = 'Quantity', value_en = 'Subject to availability'
WHERE product_id = 'a1000000-0000-0000-0000-000000000004' AND label = 'Quantité';
UPDATE product_chars SET label_en = 'Packaging', value_en = '18.5 kg kraft carton'
WHERE product_id = 'a1000000-0000-0000-0000-000000000004' AND label = 'Conditionnement';

-- Caractéristiques Ananas
UPDATE product_chars SET label_en = 'Varieties', value_en = 'MD2, Sugar Loaf, Smooth Cayenne'
WHERE product_id = 'a1000000-0000-0000-0000-000000000005' AND label = 'Variétés';
UPDATE product_chars SET label_en = 'Size', value_en = '6–12'
WHERE product_id = 'a1000000-0000-0000-0000-000000000005' AND label = 'Calibre';
UPDATE product_chars SET label_en = 'Season', value_en = 'All year'
WHERE product_id = 'a1000000-0000-0000-0000-000000000005' AND label = 'Saison';
UPDATE product_chars SET label_en = 'Packaging', value_en = '12 kg carton'
WHERE product_id = 'a1000000-0000-0000-0000-000000000005' AND label = 'Conditionnement';

-- ═══════════════════════════════════════════════════════════════════
--   VÉRIFICATION
-- ═══════════════════════════════════════════════════════════════════
SELECT name, name_en, subtitle_en FROM products ORDER BY sort_order;
SELECT p.name, c.label, c.label_en, c.value, c.value_en 
FROM product_chars c JOIN products p ON c.product_id = p.id
ORDER BY p.sort_order, c.sort_order;
