// One-off generator for the 10 product detail pages (5 fruits × FR/EN).
// Run once with: node scripts/gen-product-pages.js
// Re-run only if a product's SEO copy below changes — it overwrites the HTML files.
'use strict';
const fs = require('fs');
const path = require('path');
const root = path.join(__dirname, '..');

const PRODUCTS = [
  {
    id: 'mango', slugFr: 'mangue', slugEn: 'mango',
    fr: { title: 'Mangue Kent & Amélie — Export Côte d’Ivoire | SOSAF-CI',
      desc: 'Export de mangues Kent et Amélie depuis la Côte d’Ivoire, certifiées GlobalG.A.P. Saison mars–juillet, calibre 6–12. Devis sous 24h.' },
    en: { title: 'Mango, Kent & Amélie Varieties — Export from Ivory Coast | SOSAF-CI',
      desc: 'Mango export (Kent and Amélie varieties) from Ivory Coast, GlobalG.A.P.-certified. Season March–July, size 6–12. Quote within 24h.' },
  },
  {
    id: 'coconut', slugFr: 'noix-de-coco', slugEn: 'coconut',
    fr: { title: 'Noix de Coco — Export Côte d’Ivoire | SOSAF-CI',
      desc: 'Export de noix de coco fraîches et sèches (variété Grand Africa Ouest) depuis la Côte d’Ivoire, certifiées GlobalG.A.P. Sac de 21 kg. Devis sous 24h.' },
    en: { title: 'Coconut — Export from Ivory Coast | SOSAF-CI',
      desc: 'Fresh and dried coconut export (West Africa Tall variety) from Ivory Coast, GlobalG.A.P.-certified. 21 kg bag. Quote within 24h.' },
  },
  {
    id: 'avocado', slugFr: 'avocat', slugEn: 'avocado',
    fr: { title: 'Avocat Hass & Fuerte — Export Côte d’Ivoire | SOSAF-CI',
      desc: 'Export d’avocats Hass et Fuerte depuis la Côte d’Ivoire, disponibles toute l’année, calibre 16–22. Devis sous 24h.' },
    en: { title: 'Avocado, Hass & Fuerte Varieties — Export from Ivory Coast | SOSAF-CI',
      desc: 'Avocado export (Hass and Fuerte varieties) from Ivory Coast, year-round availability, size 16–22. Quote within 24h.' },
  },
  {
    id: 'banana', slugFr: 'banane', slugEn: 'banana',
    fr: { title: 'Banane Cavendish — Export Côte d’Ivoire | SOSAF-CI',
      desc: 'Export de bananes Cavendish depuis la Côte d’Ivoire, carton kraft 18.5 kg. Devis sous 24h.' },
    en: { title: 'Banana, Cavendish Variety — Export from Ivory Coast | SOSAF-CI',
      desc: 'Cavendish banana export from Ivory Coast, 18.5 kg kraft carton. Quote within 24h.' },
  },
  {
    id: 'pineapple', slugFr: 'ananas', slugEn: 'pineapple',
    fr: { title: 'Ananas MD2 & Cayenne Lisse — Export Côte d’Ivoire | SOSAF-CI',
      desc: 'Export d’ananas MD2 et Cayenne Lisse depuis la Côte d’Ivoire, disponibles toute l’année, carton 12 kg. Devis sous 24h.' },
    en: { title: 'Pineapple, MD2 & Smooth Cayenne Varieties — Export from Ivory Coast | SOSAF-CI',
      desc: 'MD2 and Smooth Cayenne pineapple export from Ivory Coast, year-round availability, 12 kg carton. Quote within 24h.' },
  },
];

function page({ lang, base, id, copy, canonicalUrl, altUrl }) {
  const siteBase = base; // '../' for FR (produits/), '../../' for EN (en/products/)
  return `<!-- @dsCard group="Website" viewport="1280x820" name="${copy.title.split(' — ')[0]} (${lang.toUpperCase()})" subtitle="Fiche produit" -->
<!doctype html>
<html lang="${lang}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${copy.title}</title>
<meta name="description" content="${copy.desc}">
<link rel="preconnect" href="https://unpkg.com" crossorigin>
<link rel="dns-prefetch" href="https://unpkg.com">
<link rel="canonical" href="${canonicalUrl}">
<link rel="alternate" hreflang="fr" href="${lang === 'fr' ? canonicalUrl : altUrl}">
<link rel="alternate" hreflang="en" href="${lang === 'en' ? canonicalUrl : altUrl}">
<link rel="alternate" hreflang="x-default" href="${lang === 'fr' ? canonicalUrl : altUrl}">
<link rel="icon" href="${siteBase}assets/logo.svg" type="image/svg+xml">
<meta property="og:type" content="website">
<meta property="og:site_name" content="SOSAF-CI">
<meta property="og:locale" content="${lang === 'fr' ? 'fr_CI' : 'en_US'}">
<meta property="og:title" content="${copy.title}">
<meta property="og:description" content="${copy.desc}">
<meta property="og:url" content="${canonicalUrl}">
<meta property="og:image" content="https://sosafci-export.com/og-image.jpg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${copy.title}">
<meta name="twitter:description" content="${copy.desc}">
<meta name="twitter:image" content="https://sosafci-export.com/og-image.jpg">
<link rel="stylesheet" href="${siteBase}styles.css">
<link rel="stylesheet" href="${siteBase}site.css">
<script type="application/ld+json">{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"${lang === 'en' ? 'Home' : 'Accueil'}","item":"${lang === 'en' ? 'https://sosafci-export.com/en/' : 'https://sosafci-export.com/'}"},{"@type":"ListItem","position":2,"name":"${copy.title.split(' — ')[0].split(',')[0]}","item":"${canonicalUrl}"}]}</script>
<script>window.SITE_BASE="${siteBase}";window.SITE_PAGE="product";window.SITE_LANG="${lang}";</script>
<script src="https://unpkg.com/lucide@0.400.0/dist/umd/lucide.js"></script>
<script src="https://unpkg.com/react@18.3.1/umd/react.production.min.js" crossorigin="anonymous"></script>
<script src="https://unpkg.com/react-dom@18.3.1/umd/react-dom.production.min.js" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/dist/umd/supabase.min.js"></script>
</head>
<body class="page-legal">
<div id="root"></div>
<script src="${siteBase}_ds_bundle.js"></script>
<script src="${siteBase}app-product.js"></script>
<script>window.__root = window.__root || ReactDOM.createRoot(document.getElementById('root')); window.__root.render(React.createElement(window.ProductPage, { productId: "${id}" }));</script>
</body>
</html>
`;
}

for (const p of PRODUCTS) {
  const frUrl = `https://sosafci-export.com/produits/${p.slugFr}.html`;
  const enUrl = `https://sosafci-export.com/en/products/${p.slugEn}.html`;

  const frDir = path.join(root, 'produits');
  fs.mkdirSync(frDir, { recursive: true });
  fs.writeFileSync(path.join(frDir, `${p.slugFr}.html`), page({
    lang: 'fr', base: '../', id: p.id, copy: p.fr, canonicalUrl: frUrl, altUrl: enUrl,
  }));

  const enDir = path.join(root, 'en', 'products');
  fs.mkdirSync(enDir, { recursive: true });
  fs.writeFileSync(path.join(enDir, `${p.slugEn}.html`), page({
    lang: 'en', base: '../../', id: p.id, copy: p.en, canonicalUrl: enUrl, altUrl: frUrl,
  }));

  console.log(`generated produits/${p.slugFr}.html + en/products/${p.slugEn}.html`);
}
