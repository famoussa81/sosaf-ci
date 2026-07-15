-- ═══════════════════════════════════════════════════════════════════
--   SOSAF-CI — Seed : 5 Produits + Caractéristiques + Photos
--   Exécuter dans Supabase SQL Editor
--   URL photos = https://sosafci-export.com/ + nom du fichier
-- ═══════════════════════════════════════════════════════════════════

-- Nettoyer les données existantes (si re-run)
DELETE FROM product_photos;
DELETE FROM product_chars;
DELETE FROM products;

-- ═══════════════════════════════════════════════════════════════════
--   1. MANGUE
-- ═══════════════════════════════════════════════════════════════════
INSERT INTO products (id, name, subtitle, cert, visible, emoji, cover_color, sort_order)
VALUES (
  'a1000000-0000-0000-0000-000000000001',
  'Mangue',
  'Origine Côte d''Ivoire · Variétés Kent et Amélie',
  'GlobalG.A.P.',
  true,
  '🥭',
  '#e8a838',
  1
);

INSERT INTO product_photos (product_id, url, is_cover, sort_order) VALUES
  ('a1000000-0000-0000-0000-000000000001', 'https://sosafci-export.com/mangue-01.jpeg', true, 1),
  ('a1000000-0000-0000-0000-000000000001', 'https://sosafci-export.com/mangue-02.jpeg', false, 2),
  ('a1000000-0000-0000-0000-000000000001', 'https://sosafci-export.com/mangue-03.jpeg', false, 3),
  ('a1000000-0000-0000-0000-000000000001', 'https://sosafci-export.com/mangue-04.jpeg', false, 4),
  ('a1000000-0000-0000-0000-000000000001', 'https://sosafci-export.com/mangue-05.jpeg', false, 5);

INSERT INTO product_chars (product_id, label, value, sort_order) VALUES
  ('a1000000-0000-0000-0000-000000000001', 'Variétés', 'Kent, Amélie', 1),
  ('a1000000-0000-0000-0000-000000000001', 'Saison', 'Mars – Juillet', 2),
  ('a1000000-0000-0000-0000-000000000001', 'Calibre', '6–12 (selon variété)', 3),
  ('a1000000-0000-0000-0000-000000000001', 'Conditionnement', 'Avion : carton 6 kg / Maritime : carton 4 kg', 4);

-- ═══════════════════════════════════════════════════════════════════
--   2. NOIX DE COCO
-- ═══════════════════════════════════════════════════════════════════
INSERT INTO products (id, name, subtitle, cert, visible, emoji, cover_color, sort_order)
VALUES (
  'a1000000-0000-0000-0000-000000000002',
  'Noix de Coco',
  'Origine Côte d''Ivoire · Variété Grand Africa Ouest',
  'GlobalG.A.P.',
  true,
  '🥥',
  '#8b6f47',
  2
);

INSERT INTO product_photos (product_id, url, is_cover, sort_order) VALUES
  ('a1000000-0000-0000-0000-000000000002', 'https://sosafci-export.com/coco-02.jpeg', true, 1),
  ('a1000000-0000-0000-0000-000000000002', 'https://sosafci-export.com/coco-01.jpeg', false, 2),
  ('a1000000-0000-0000-0000-000000000002', 'https://sosafci-export.com/mrim4nu6-WhatsApp-Image-2026-07-13-at-00.14.44-_3_.jpeg', false, 3),
  ('a1000000-0000-0000-0000-000000000002', 'https://sosafci-export.com/mrim4nsj-WhatsApp-Image-2026-07-13-at-00.14.44-_1_.jpeg', false, 4);

INSERT INTO product_chars (product_id, label, value, sort_order) VALUES
  ('a1000000-0000-0000-0000-000000000002', 'Variété', 'Grand Africa Ouest', 1),
  ('a1000000-0000-0000-0000-000000000002', 'Origine', 'Côte d''Ivoire', 2),
  ('a1000000-0000-0000-0000-000000000002', 'Type', 'Fraîche, Sèche', 3),
  ('a1000000-0000-0000-0000-000000000002', 'Conditionnement', 'Sac de 21 kg', 4);

-- ═══════════════════════════════════════════════════════════════════
--   3. AVOCAT
-- ═══════════════════════════════════════════════════════════════════
INSERT INTO products (id, name, subtitle, cert, visible, emoji, cover_color, sort_order)
VALUES (
  'a1000000-0000-0000-0000-000000000003',
  'Avocat',
  'Origine Côte d''Ivoire · Variétés Hass et Fuerte',
  '',
  true,
  '🥑',
  '#4a7c3f',
  3
);

INSERT INTO product_photos (product_id, url, is_cover, sort_order) VALUES
  ('a1000000-0000-0000-0000-000000000003', 'https://sosafci-export.com/mrim90p1-WhatsApp-Image-2026-07-13-at-00.14.44-_6_.jpeg', true, 1),
  ('a1000000-0000-0000-0000-000000000003', 'https://sosafci-export.com/mrim90n5-WhatsApp-Image-2026-07-13-at-00.14.44-_4_.jpeg', false, 2);

INSERT INTO product_chars (product_id, label, value, sort_order) VALUES
  ('a1000000-0000-0000-0000-000000000003', 'Variétés', 'Hass, Fuerte', 1),
  ('a1000000-0000-0000-0000-000000000003', 'Calibre', '16–22', 2),
  ('a1000000-0000-0000-0000-000000000003', 'Conditionnement', 'Avion : carton 6 kg / Maritime : carton 4 kg', 3),
  ('a1000000-0000-0000-0000-000000000003', 'Saison', 'Toute l''année', 4);

-- ═══════════════════════════════════════════════════════════════════
--   4. BANANE
-- ═══════════════════════════════════════════════════════════════════
INSERT INTO products (id, name, subtitle, cert, visible, emoji, cover_color, sort_order)
VALUES (
  'a1000000-0000-0000-0000-000000000004',
  'Banane',
  'Origine Côte d''Ivoire · Variété Cavendish',
  '',
  true,
  '🍌',
  '#f0d84f',
  4
);

INSERT INTO product_photos (product_id, url, is_cover, sort_order) VALUES
  ('a1000000-0000-0000-0000-000000000004', 'https://sosafci-export.com/mrimelu4-WhatsApp-Image-2026-07-13-at-00.14.44-_5_.jpeg', true, 1),
  ('a1000000-0000-0000-0000-000000000004', 'https://sosafci-export.com/mrimelw6-WhatsApp-Image-2026-07-13-at-00.14.44.jpeg', false, 2);

INSERT INTO product_chars (product_id, label, value, sort_order) VALUES
  ('a1000000-0000-0000-0000-000000000004', 'Variété', 'Cavendish', 1),
  ('a1000000-0000-0000-0000-000000000004', 'Origine', 'Côte d''Ivoire', 2),
  ('a1000000-0000-0000-0000-000000000004', 'Quantité', 'Selon disponibilité', 3),
  ('a1000000-0000-0000-0000-000000000004', 'Conditionnement', 'Carton kraft 18.5 kg', 4);

-- ═══════════════════════════════════════════════════════════════════
--   5. ANANAS
-- ═══════════════════════════════════════════════════════════════════
INSERT INTO products (id, name, subtitle, cert, visible, emoji, cover_color, sort_order)
VALUES (
  'a1000000-0000-0000-0000-000000000005',
  'Ananas',
  'Origine Côte d''Ivoire · Variétés MD2, Pain de Sucre, Cayenne Lisse',
  '',
  true,
  '🍍',
  '#d4a843',
  5
);

INSERT INTO product_photos (product_id, url, is_cover, sort_order) VALUES
  ('a1000000-0000-0000-0000-000000000005', 'https://sosafci-export.com/ananas-01.jpeg', true, 1),
  ('a1000000-0000-0000-0000-000000000005', 'https://sosafci-export.com/mrim0t97-WhatsApp-Image-2026-07-13-at-00.14.43-_1_.jpeg', false, 2),
  ('a1000000-0000-0000-0000-000000000005', 'https://sosafci-export.com/mrim0t9k-WhatsApp-Image-2026-07-13-at-00.14.43-_2_.jpeg', false, 3),
  ('a1000000-0000-0000-0000-000000000005', 'https://sosafci-export.com/mrim0tak-WhatsApp-Image-2026-07-13-at-00.14.43.jpeg', false, 4);

INSERT INTO product_chars (product_id, label, value, sort_order) VALUES
  ('a1000000-0000-0000-0000-000000000005', 'Variétés', 'MD2, Pain de Sucre, Cayenne Lisse', 1),
  ('a1000000-0000-0000-0000-000000000005', 'Calibre', '6–12', 2),
  ('a1000000-0000-0000-0000-000000000005', 'Saison', 'Toute l''année', 3),
  ('a1000000-0000-0000-0000-000000000005', 'Conditionnement', 'Carton de 12 kg', 4);

-- ═══════════════════════════════════════════════════════════════════
--   VÉRIFICATION
-- ═══════════════════════════════════════════════════════════════════
SELECT 
  p.name, 
  p.subtitle,
  p.cert,
  (SELECT COUNT(*) FROM product_photos WHERE product_id = p.id) AS photos,
  (SELECT COUNT(*) FROM product_chars WHERE product_id = p.id) AS chars
FROM products p
ORDER BY p.sort_order;
