// ── content.jsx ──
const COPY = {
  fr: {
    eyebrow: 'Catalogue Export',
    h1a: 'Fourniture continue de',
    h1b: 'fruits tropicaux',
    h1c: 'de qualité',
    lead: "SOSAF-CI, votre partenaire export basé à Abidjan, Côte d'Ivoire. Mangue, avocat, banane, ananas, noix de coco — du producteur au marché international, avec rigueur et traçabilité.",
    cta1: 'Découvrir nos produits →',
    cta2: 'Nous contacter',
    presEyebrow: 'Qui sommes-nous',
    presTitle: "SOSAF-CI — L'excellence du fruit ivoirien",
    presBody: "SOSAF-CI est une entreprise d'import-export basée à Abidjan, Côte d'Ivoire, spécialisée dans l'exportation de produits agricoles tropicaux vers le marché international. Forts de notre réseau de producteurs, coopératives et stations de conditionnement partenaires, nous assurons une fourniture régulière de fruits de qualité, conformes aux exigences du marché mondial.",
    stats: [['100%', 'Qualité garantie'], ['200+', 'Producteurs partenaires'], ['15+', 'Pays exportateurs']],
    prodEyebrow: 'Notre gamme',
    prodTitle: 'Produits exportés',
    prodLead: "Cinq fruits d'exception, cultivés sous le soleil de Côte d'Ivoire, sélectionnés avec soin pour les marchés les plus exigeants.",
    prodPagesLabel: 'Fiches produits :',
    certEyebrow: 'Qualité',
    certTitle: 'Certifications et contrôle qualité',
    certBody: "SOSAF-CI travaille avec des coopératives et stations de conditionnement certifiées GlobalG.A.P. pour la mangue et la noix de coco, garantissant traçabilité et conformité aux exigences internationales.",
    certList: ['Contrôle qualité avant chaque expédition', 'Respect des normes export internationaux', 'Traçabilité complète, du champ au conteneur', 'Documents fournis selon la commande'],
    certBadgeDesc: 'Bonnes pratiques agricoles, qualité et traçabilité.',
    processEyebrow: 'Process',
    processTitle: 'Comment commander',
    steps: [['01', 'Contactez-nous', 'Par email ou WhatsApp, décrivez vos besoins : produits, volumes, destination.'], ['02', 'Devis sous 24h', 'Recevez une proposition détaillée avec prix et planning.'], ['03', 'Validation & préparation', 'Confirmation, paiement, sélection et conditionnement.'], ['04', 'Expédition', 'Maritime ou aérien, avec tous les documents export.']],
    faqEyebrow: 'Questions fréquentes',
    faqTitle: 'Tout savoir sur SOSAF-CI',
    faq: [['Quels produits exportez-vous ?', 'Mangue (Kent, Amélie), noix de coco, avocat (Hass, Fuerte), banane (Cavendish) et ananas (MD2, Pain de Sucre, Cayenne Lisse).'], ['Quelles certifications qualité possédez-vous ?', 'Nos partenaires disposent de la certification GlobalG.A.P., notamment pour la mangue et la noix de coco.'], ['Quels volumes minimum de commande ?', 'Nous répondons aux commandes par conteneur complet ou par palette, selon vos besoins.'], ['Quels sont les délais et modes d\u2019expédition ?', 'Maritime (10–20 jours, conteneurs réfrigérés) ou aérien (2–5 jours) selon la destination et l\u2019urgence.']],
    contactEyebrow: 'Contact',
    contactTitle: 'Parlons de votre projet',
    contactLead: 'Pour toute demande de cotation, partenariat commercial ou commande à l\u2019export, notre équipe est à votre disposition.',
    ceoTitle: 'Directeur général',
    cfoTitle: 'Directeur administratif et financier',
    addressLabel: 'Adresse',
    emailPrefix: 'Email :',
    phoneWhatsappPrefix: 'Tél / WhatsApp :',
    phonePrefix: 'Tél :',
    formTitle: 'Nous écrire',
    nameLabel: 'Votre nom',
    emailLabel: 'Email',
    messageLabel: 'Message',
    submit: 'Envoyer le message →',
    whatsapp: 'Discuter sur WhatsApp',
    whatsappSub: 'Réponse immédiate sur WhatsApp',
    lightboxClose: 'Fermer',
    lightboxPrev: 'Précédent',
    lightboxNext: 'Suivant',
    navCta: 'Devis →',
    nav: ['Accueil', 'Présentation', 'Produits', 'Certifications', 'Process', 'FAQ', 'Contact'],
    legal: [['Mentions légales', 'mentions-legales.html'], ['Conditions générales de vente', 'cgv.html'], ['Politique de confidentialité', 'confidentialite.html']],
    footerNote: "© 2026 SOSAF-CI — Fourniture continue de fruits tropicaux depuis la Côte d'Ivoire.",
    footerLegal: "RCCM CI-ABJ-03-2024-B21-00015 · Abidjan, Côte d'Ivoire",
    formSent: '✓ Message envoyé — merci !',
    formSending: 'Envoi…',
    formError: "L'envoi a échoué. Réessayez ou écrivez-nous directement par email."
  },
  en: {
    eyebrow: 'Export Catalog',
    h1a: 'A continuous supply of',
    h1b: 'tropical fruit',
    h1c: 'you can trust',
    lead: 'SOSAF-CI, your export partner based in Abidjan, Ivory Coast. Mango, avocado, banana, pineapple, coconut — from grower to international market, with rigor and traceability.',
    cta1: 'Discover our products →',
    cta2: 'Contact us',
    presEyebrow: 'Who we are',
    presTitle: 'SOSAF-CI — Ivorian fruit at its best',
    presBody: 'SOSAF-CI is an import-export company based in Abidjan, Ivory Coast, specialized in exporting tropical agricultural products to the international market. Backed by our network of growers, cooperatives and packing stations, we ensure a steady supply of quality fruit that meets global market standards.',
    stats: [['100%', 'Guaranteed quality'], ['200+', 'Partner growers'], ['15+', 'Export countries']],
    prodEyebrow: 'Our range',
    prodTitle: 'Exported products',
    prodLead: 'Five exceptional fruits, grown under the Ivorian sun, carefully selected for the most demanding markets.',
    prodPagesLabel: 'Product pages:',
    certEyebrow: 'Quality',
    certTitle: 'Certifications & quality control',
    certBody: 'SOSAF-CI works with GlobalG.A.P.-certified cooperatives and packing stations for mango and coconut, guaranteeing traceability and compliance with international requirements.',
    certList: ['Quality control before every shipment', 'Compliance with international export standards', 'Full traceability, from field to container', 'Documents provided per order'],
    certBadgeDesc: 'Good agricultural practices, quality and traceability.',
    processEyebrow: 'Process',
    processTitle: 'How to order',
    steps: [['01', 'Contact us', 'By email or WhatsApp, describe your needs: products, volumes, destination.'], ['02', 'Quote within 24h', 'Receive a detailed proposal with pricing and schedule.'], ['03', 'Confirmation & prep', 'Payment, selection and packing.'], ['04', 'Shipping', 'Sea or air freight, with all export documents.']],
    faqEyebrow: 'Frequently asked',
    faqTitle: 'Everything about SOSAF-CI',
    faq: [['Which products do you export?', 'Mango (Kent, Amélie), coconut, avocado (Hass, Fuerte), banana (Cavendish) and pineapple (MD2, Sugarloaf, Smooth Cayenne).'], ['What quality certifications do you have?', 'Our partners hold GlobalG.A.P. certification, notably for mango and coconut.'], ['What is the minimum order volume?', 'We handle full-container orders as well as pallet-level orders, based on your needs.'], ['What are the shipping times and modes?', 'Sea freight (10–20 days, reefer containers) or air freight (2–5 days) depending on destination and urgency.']],
    contactEyebrow: 'Contact',
    contactTitle: "Let's talk about your project",
    contactLead: 'For any quote request, business partnership or export order, our team is at your disposal.',
    ceoTitle: 'Managing Director',
    cfoTitle: 'Administrative and Finance Director',
    addressLabel: 'Address',
    emailPrefix: 'Email:',
    phoneWhatsappPrefix: 'Phone / WhatsApp:',
    phonePrefix: 'Phone:',
    formTitle: 'Write to us',
    nameLabel: 'Your name',
    emailLabel: 'Email',
    messageLabel: 'Message',
    submit: 'Send message →',
    whatsapp: 'Chat on WhatsApp',
    whatsappSub: 'Immediate reply on WhatsApp',
    lightboxClose: 'Close',
    lightboxPrev: 'Previous',
    lightboxNext: 'Next',
    navCta: 'Get a quote →',
    nav: ['Home', 'About', 'Products', 'Certifications', 'Process', 'FAQ', 'Contact'],
    legal: [['Legal notice', 'legal-notice.html'], ['Terms and conditions of sale', 'terms.html'], ['Privacy policy', 'privacy.html']],
    footerNote: '© 2026 SOSAF-CI — A continuous supply of tropical fruit from Ivory Coast.',
    footerLegal: 'RCCM CI-ABJ-03-2024-B21-00015 · Abidjan, Ivory Coast',
    formSent: '✓ Message sent — thank you!',
    formSending: 'Sending…',
    formError: 'Sending failed. Please try again or email us directly.'
  }
};
const B = (window.SITE_BASE || '') + 'assets/photography/';
const PRODUCTS_FR = [{
  id: 'mango',
  image: B + 'mangue-01.webp',
  gallery: ['mangue-01.webp', 'mangue-02.webp', 'mangue-03.webp', 'mangue-04.webp', 'mangue-05.webp'],
  name: 'Mangue',
  subtitle: "Origine Côte d'Ivoire · Variétés Kent et Amélie",
  fields: [{
    label: 'Variétés',
    value: 'Kent, Amélie'
  }, {
    label: 'Saison',
    value: 'Mars – Juillet'
  }, {
    label: 'Calibre',
    value: '6–12'
  }, {
    label: 'Conditionnement',
    value: 'Carton 4–6 kg'
  }],
  certification: 'GlobalG.A.P.'
}, {
  id: 'coconut',
  image: B + 'coco-02.webp',
  gallery: ['coco-02.webp', 'coco-01.webp', 'coco-03-sacs.webp', 'coco-04-conteneur.webp'],
  name: 'Noix de Coco',
  subtitle: "Origine Côte d'Ivoire · Variété Grand Africa Ouest",
  fields: [{
    label: 'Variété',
    value: 'Grand Africa Ouest'
  }, {
    label: 'Type',
    value: 'Fraîche, Sèche'
  }, {
    label: 'Conditionnement',
    value: 'Sac de 21 kg'
  }],
  certification: 'GlobalG.A.P.'
}, {
  id: 'avocado',
  image: B + 'avocat-04-carton.webp',
  gallery: ['avocat-04-carton.webp', 'avocat-03-carton.webp'],
  name: 'Avocat',
  subtitle: "Origine Côte d'Ivoire · Variétés Hass et Fuerte",
  fields: [{
    label: 'Variétés',
    value: 'Hass, Fuerte'
  }, {
    label: 'Calibre',
    value: '16–22'
  }, {
    label: 'Saison',
    value: "Toute l'année"
  }]
}, {
  id: 'banana',
  image: B + 'banane-02.webp',
  gallery: ['banane-02.webp', 'banane-03-cartons.webp'],
  name: 'Banane',
  subtitle: "Origine Côte d'Ivoire · Variété Cavendish",
  fields: [{
    label: 'Variété',
    value: 'Cavendish'
  }, {
    label: 'Conditionnement',
    value: 'Carton kraft 18.5 kg'
  }]
}, {
  id: 'pineapple',
  image: B + 'ananas-01.webp',
  gallery: ['ananas-01.webp', 'ananas-02.webp', 'ananas-03.webp', 'ananas-04.webp'],
  name: 'Ananas',
  subtitle: "Origine Côte d'Ivoire · Variétés MD2, Cayenne Lisse",
  fields: [{
    label: 'Variétés',
    value: 'MD2, Cayenne Lisse'
  }, {
    label: 'Calibre',
    value: '6–12'
  }, {
    label: 'Conditionnement',
    value: 'Carton 12 kg'
  }]
}];
const EN_OVERRIDES = {
  mango: {
    name: 'Mango',
    subtitle: "Origin Ivory Coast · Kent and Amélie varieties",
    fields: [{
      label: 'Varieties',
      value: 'Kent, Amélie'
    }, {
      label: 'Season',
      value: 'March – July'
    }, {
      label: 'Size',
      value: '6–12'
    }, {
      label: 'Packing',
      value: '4–6 kg carton'
    }]
  },
  coconut: {
    name: 'Coconut',
    subtitle: 'Origin Ivory Coast · West Africa Tall variety',
    fields: [{
      label: 'Variety',
      value: 'West Africa Tall'
    }, {
      label: 'Type',
      value: 'Fresh, Dried'
    }, {
      label: 'Packing',
      value: '21 kg bag'
    }]
  },
  avocado: {
    name: 'Avocado',
    subtitle: 'Origin Ivory Coast · Hass and Fuerte varieties',
    fields: [{
      label: 'Varieties',
      value: 'Hass, Fuerte'
    }, {
      label: 'Size',
      value: '16–22'
    }, {
      label: 'Season',
      value: 'Year-round'
    }]
  },
  banana: {
    name: 'Banana',
    subtitle: 'Origin Ivory Coast · Cavendish variety',
    fields: [{
      label: 'Variety',
      value: 'Cavendish'
    }, {
      label: 'Packing',
      value: '18.5 kg kraft carton'
    }]
  },
  pineapple: {
    name: 'Pineapple',
    subtitle: 'Origin Ivory Coast · MD2, Smooth Cayenne varieties',
    fields: [{
      label: 'Varieties',
      value: 'MD2, Smooth Cayenne'
    }, {
      label: 'Size',
      value: '6–12'
    }, {
      label: 'Packing',
      value: '12 kg carton'
    }]
  }
};
const PRODUCTS_EN = PRODUCTS_FR.map(p => ({
  ...p,
  ...EN_OVERRIDES[p.id]
}));
window.COPY = COPY;
window.PRODUCTS_FR = PRODUCTS_FR;
window.PRODUCTS_EN = PRODUCTS_EN;
window.PRODUCTS = {
  fr: PRODUCTS_FR,
  en: PRODUCTS_EN
};

// ─── Per-product detail page routing ───
// Maps the stable static ids (also used as React keys) to the FR/EN URL slugs,
// and lets a live Supabase product (UUID id, no slug column) be matched back to
// one of these 5 canonical products by name, so /produits/mangue.html etc. can
// find "the mango row" regardless of whether data came from Supabase or fallback.
const PRODUCT_SLUGS = {
  mango: {
    fr: 'mangue',
    en: 'mango'
  },
  coconut: {
    fr: 'noix-de-coco',
    en: 'coconut'
  },
  avocado: {
    fr: 'avocat',
    en: 'avocado'
  },
  banana: {
    fr: 'banane',
    en: 'banana'
  },
  pineapple: {
    fr: 'ananas',
    en: 'pineapple'
  }
};
const CANONICAL_NAMES = {
  mango: ['mangue', 'mango'],
  coconut: ['noix de coco', 'coconut'],
  avocado: ['avocat', 'avocado'],
  banana: ['banane', 'banana'],
  pineapple: ['ananas', 'pineapple']
};
function normalizeName(s) {
  return (s || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').trim();
}
function matchCanonicalId(name) {
  const n = normalizeName(name);
  for (const id in CANONICAL_NAMES) {
    if (CANONICAL_NAMES[id].some(x => n.indexOf(x) !== -1)) return id;
  }
  return null;
}
function productUrl(id, lang) {
  const slugs = PRODUCT_SLUGS[id];
  if (!slugs) return null;
  return lang === 'en' ? 'products/' + slugs.en + '.html' : 'produits/' + slugs.fr + '.html';
}
window.PRODUCT_SLUGS = PRODUCT_SLUGS;
window.matchCanonicalId = matchCanonicalId;
window.productUrl = productUrl;

// ─── Live products from the admin dashboard (Supabase) ───
// Same project the admin panel writes to. Anon key is RLS-scoped to read-only.
window.SUPABASE_URL = 'https://lwjtftrjcmnzfsdkhuhf.supabase.co';
window.SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx3anRmdHJqY21uemZzZGtodWhmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQxMjA5OTMsImV4cCI6MjA5OTY5Njk5M30.BpXjmooq86Mdgp3GC6OvpO0v9-E0yZJ3sFOsvU-1Gj8';
function getSb() {
  if (window.__sb) return window.__sb;
  if (!window.supabase || !window.supabase.createClient) return null;
  window.__sb = window.supabase.createClient(window.SUPABASE_URL, window.SUPABASE_ANON_KEY, {
    auth: {
      persistSession: false
    }
  });
  return window.__sb;
}

// Returns admin-managed products mapped to the shape ProductsSection/Lightbox expect,
// or null if Supabase is unreachable/empty — callers keep the static PRODUCTS_FR/EN fallback then.
async function fetchLiveProducts(lang) {
  const sb = getSb();
  if (!sb) return null;
  try {
    const [{
      data: products,
      error: pErr
    }, {
      data: chars,
      error: cErr
    }, {
      data: photos,
      error: phErr
    }] = await Promise.all([sb.from('products').select('*').eq('visible', true).order('sort_order'), sb.from('product_chars').select('*').order('sort_order'), sb.from('product_photos').select('*').order('sort_order')]);
    if (pErr || cErr || phErr || !products || !products.length) return null;
    return products.map(p => {
      const myPhotos = photos.filter(ph => ph.product_id === p.id);
      const cover = myPhotos.find(ph => ph.is_cover) || myPhotos[0];
      const myChars = chars.filter(c => c.product_id === p.id);
      return {
        id: p.id,
        slugId: matchCanonicalId(p.name) || matchCanonicalId(p.name_en),
        image: cover ? cover.url : '',
        gallery: myPhotos.length ? myPhotos.map(ph => ph.url) : cover ? [cover.url] : [],
        name: lang === 'en' && p.name_en ? p.name_en : p.name,
        subtitle: lang === 'en' && p.subtitle_en ? p.subtitle_en : p.subtitle,
        fields: myChars.map(c => ({
          label: lang === 'en' && c.label_en ? c.label_en : c.label,
          value: lang === 'en' && c.value_en ? c.value_en : c.value
        })),
        certification: p.cert || undefined
      };
    });
  } catch (e) {
    console.warn('[products] Supabase fetch failed, using static fallback', e);
    return null;
  }
}
window.fetchLiveProducts = fetchLiveProducts;

// Records one visit per browser session; feeds the admin dashboard's live visitor counter.
function trackVisit() {
  if (sessionStorage.getItem('visited')) return;
  sessionStorage.setItem('visited', '1');
  const sb = getSb();
  if (!sb) return;
  sb.from('visits').insert({
    page: window.location.pathname || '/',
    ip: ''
  }).then(() => {});
}
window.trackVisit = trackVisit;

// ── Reveal.jsx ──
function Reveal({
  children,
  delay = 0,
  from = 'up',
  className
}) {
  const ref = React.useRef(null);
  const [visible, setVisible] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          setVisible(true);
          io.unobserve(e.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const offsets = {
    up: 'translateY(36px)',
    left: 'translateX(-40px)',
    right: 'translateX(40px)',
    zoom: 'scale(0.94)'
  };
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    className: className,
    style: {
      opacity: visible ? 1 : 0,
      transform: visible ? 'none' : offsets[from],
      transition: `opacity 800ms var(--ease-out) ${delay}ms, transform 800ms var(--ease-out) ${delay}ms`,
      willChange: 'opacity, transform'
    }
  }, children);
}
function CountUp({
  value
}) {
  const ref = React.useRef(null);
  const [shown, setShown] = React.useState('0');
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const num = parseInt(String(value).replace(/[^0-9]/g, ''), 10);
    const suffix = String(value).replace(/[0-9]/g, '');
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        io.unobserve(e.target);
        const start = performance.now();
        const tick = now => {
          const p = Math.min((now - start) / 1300, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          setShown(Math.round(eased * num) + suffix);
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      });
    }, {
      threshold: 0.5
    });
    io.observe(el);
    return () => io.disconnect();
  }, [value]);
  return /*#__PURE__*/React.createElement("span", {
    ref: ref
  }, shown);
}
window.Reveal = Reveal;
window.CountUp = CountUp;

// ── Hero.jsx ──
function Hero({
  t
}) {
  const {
    Button
  } = window.ComptoirTropicalSOSAFCIDesignSystem_8722e7;
  const {
    Reveal
  } = window;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      minHeight: '92vh',
      display: 'flex',
      alignItems: 'center',
      background: 'var(--surface-dark)',
      color: 'var(--text-on-dark)',
      padding: '0 48px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid-2",
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 56,
      maxWidth: 1200,
      margin: '0 auto',
      alignItems: 'center',
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-wider)',
      color: 'var(--mango)',
      border: '1px solid oklch(from var(--mango) l c h / 0.3)',
      padding: '6px 14px',
      borderRadius: 'var(--radius-pill)',
      marginBottom: 24
    }
  }, t.eyebrow), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-4xl)',
      lineHeight: 'var(--leading-tight)',
      fontWeight: 500,
      letterSpacing: 'var(--tracking-tight)',
      margin: '0 0 24px'
    }
  }, t.h1a, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--mango)',
      fontStyle: 'italic'
    }
  }, t.h1b), /*#__PURE__*/React.createElement("br", null), t.h1c), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-lg)',
      lineHeight: 'var(--leading-body)',
      color: 'var(--text-on-dark-muted)',
      maxWidth: 520,
      margin: '0 0 32px'
    }
  }, t.lead), /*#__PURE__*/React.createElement("div", {
    className: "btn-row",
    style: {
      display: 'flex',
      gap: 16,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: () => document.getElementById('produits')?.scrollIntoView({
      behavior: 'smooth'
    })
  }, t.cta1), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    onClick: () => document.getElementById('contact')?.scrollIntoView({
      behavior: 'smooth'
    })
  }, t.cta2)))), /*#__PURE__*/React.createElement(Reveal, {
    from: "zoom",
    delay: 200,
    className: "hero-logo"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: (window.SITE_BASE || '') + 'assets/logo-hero.webp',
    alt: "SOSAF-CI \u2014 Fruits de C\xF4te d'Ivoire",
    width: "1120",
    height: "1120",
    decoding: "async",
    style: {
      width: '100%',
      maxWidth: 560,
      height: 'auto',
      display: 'block'
    }
  })))));
}
window.Hero = Hero;

// ── Presentation.jsx ──
function Presentation({
  t
}) {
  const {
    Reveal,
    CountUp
  } = window;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-light)',
      color: 'var(--text-on-light)',
      padding: '96px 48px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid-2",
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 56,
      maxWidth: 1200,
      margin: '0 auto',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-wider)',
      color: 'var(--papaya)',
      fontWeight: 600
    }
  }, t.presEyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-3xl)',
      fontWeight: 500,
      margin: '10px 0 18px'
    }
  }, t.presTitle), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-lg)',
      lineHeight: 'var(--leading-body)',
      color: 'var(--text-on-light-muted)',
      margin: 0
    }
  }, t.presBody)), /*#__PURE__*/React.createElement("div", {
    className: "stats-row",
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 16,
      marginTop: 40
    }
  }, t.stats.map(([num, label]) => /*#__PURE__*/React.createElement("div", {
    key: label,
    style: {
      textAlign: 'center',
      padding: 20,
      border: '1px solid var(--border-on-light)',
      borderRadius: 'var(--radius-lg)',
      background: 'var(--surface-card)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontFamily: 'var(--font-mono)',
      fontSize: 28,
      fontWeight: 700,
      color: 'var(--palm)'
    }
  }, /*#__PURE__*/React.createElement(CountUp, {
    value: num
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'var(--text-on-light-muted)'
    }
  }, label))))), /*#__PURE__*/React.createElement(Reveal, {
    from: "right",
    delay: 120
  }, /*#__PURE__*/React.createElement("div", {
    className: "photo-treated crop-4-5",
    style: {
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-md)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: (window.SITE_BASE || '') + 'assets/photography/mangue-04.webp',
    alt: "R\xE9colte de mangues, C\xF4te d'Ivoire",
    loading: "lazy",
    decoding: "async"
  })))));
}
window.Presentation = Presentation;

// ── ProductsSection.jsx ──
function ProductsSection({
  t,
  products,
  onOpenGallery
}) {
  const {
    ProductCard
  } = window.ComptoirTropicalSOSAFCIDesignSystem_8722e7;
  const {
    Reveal
  } = window;
  return /*#__PURE__*/React.createElement("section", {
    id: "produits",
    style: {
      background: 'var(--surface-dark)',
      color: 'var(--text-on-dark)',
      padding: '96px 48px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: 56
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-wider)',
      color: 'var(--mango)',
      fontWeight: 600
    }
  }, t.prodEyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-3xl)',
      fontWeight: 500,
      margin: '10px 0 14px'
    }
  }, t.prodTitle), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-lg)',
      color: 'var(--text-on-dark-muted)',
      maxWidth: 600,
      margin: '0 auto'
    }
  }, t.prodLead))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))',
      gap: 24
    }
  }, products.map((p, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: p.id,
    delay: i * 90,
    from: "zoom"
  }, /*#__PURE__*/React.createElement(ProductCard, {
    image: p.image,
    name: p.name,
    subtitle: p.subtitle,
    fields: p.fields,
    certification: p.certification,
    photoCount: p.gallery.length,
    onOpenGallery: () => onOpenGallery(p)
  })))), window.productUrl && /*#__PURE__*/React.createElement("p", {
    style: {
      textAlign: 'center',
      marginTop: 40,
      fontSize: 14,
      color: 'var(--text-on-dark-muted)'
    }
  }, t.prodPagesLabel, ' ', products.map((p, i) => {
    const sid = p.slugId || p.id;
    const href = window.productUrl(sid, window.SITE_LANG || 'fr');
    if (!href) return null;
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: p.id
    }, i > 0 && ' · ', /*#__PURE__*/React.createElement("a", {
      href: href,
      style: {
        color: 'var(--mango)',
        textDecoration: 'none'
      }
    }, p.name));
  }))));
}
window.ProductsSection = ProductsSection;

// ── CertificationsSection.jsx ──
function CertificationsSection({
  t
}) {
  const {
    Icon
  } = window.ComptoirTropicalSOSAFCIDesignSystem_8722e7;
  const {
    Reveal
  } = window;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-light)',
      color: 'var(--text-on-light)',
      padding: '96px 48px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid-2",
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 56,
      maxWidth: 1200,
      margin: '0 auto',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Reveal, {
    from: "left"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-wider)',
      color: 'var(--papaya)',
      fontWeight: 600
    }
  }, t.certEyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-3xl)',
      fontWeight: 500,
      margin: '10px 0 18px'
    }
  }, t.certTitle), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-lg)',
      lineHeight: 'var(--leading-body)',
      color: 'var(--text-on-light-muted)',
      margin: '0 0 20px'
    }
  }, t.certBody), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, t.certList.map(item => /*#__PURE__*/React.createElement("li", {
    key: item,
    style: {
      display: 'flex',
      gap: 10,
      fontSize: 15
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 18,
    color: "var(--palm)"
  }), " ", item))))), /*#__PURE__*/React.createElement(Reveal, {
    from: "zoom",
    delay: 140
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-on-light)',
      borderRadius: 'var(--radius-lg)',
      padding: 40,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 72,
      height: 72,
      borderRadius: '50%',
      background: 'var(--success-bg)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 auto 18px'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "shield-check",
    size: 34,
    color: "var(--palm)"
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 22,
      margin: '0 0 8px'
    }
  }, "GlobalG.A.P."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      color: 'var(--text-on-light-muted)',
      margin: 0
    }
  }, t.certBadgeDesc)))));
}
window.CertificationsSection = CertificationsSection;

// ── ProcessSection.jsx ──
const PROCESS_ICONS = ['mail', 'file-text', 'check-circle-2', 'ship'];
function ProcessSection({
  t
}) {
  const {
    Icon
  } = window.ComptoirTropicalSOSAFCIDesignSystem_8722e7;
  const {
    Reveal
  } = window;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-dark)',
      color: 'var(--text-on-dark)',
      padding: '96px 48px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1100,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: 56
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-wider)',
      color: 'var(--mango)',
      fontWeight: 600
    }
  }, t.processEyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-3xl)',
      fontWeight: 500,
      margin: '10px 0 0'
    }
  }, t.processTitle)), /*#__PURE__*/React.createElement("div", {
    className: "process-row",
    style: {
      display: 'flex',
      gap: 0,
      alignItems: 'flex-start',
      justifyContent: 'center',
      flexWrap: 'wrap'
    }
  }, t.steps.map(([num, title, desc], i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: num
  }, /*#__PURE__*/React.createElement(Reveal, {
    delay: i * 110,
    from: "up"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '1 1 220px',
      maxWidth: 240,
      textAlign: 'center',
      padding: '0 12px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      letterSpacing: '0.1em',
      color: 'var(--mango)',
      marginBottom: 12
    }
  }, num), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 60,
      height: 60,
      borderRadius: '50%',
      background: 'oklch(from var(--mango) l c h / 0.1)',
      border: '1px solid oklch(from var(--mango) l c h / 0.25)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 auto 16px',
      color: 'var(--mango)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: PROCESS_ICONS[i],
    size: 26
  })), /*#__PURE__*/React.createElement("h4", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 18,
      margin: '0 0 8px'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      color: 'var(--text-on-dark-muted)',
      lineHeight: 1.6,
      margin: 0
    }
  }, desc))), i < t.steps.length - 1 && /*#__PURE__*/React.createElement("div", {
    className: "process-connector",
    style: {
      width: 40,
      height: 2,
      background: 'var(--border-on-dark)',
      marginTop: 42,
      flexShrink: 0
    }
  }))))));
}
window.ProcessSection = ProcessSection;

// ── FaqSection.jsx ──
function FaqSection({
  t
}) {
  const {
    FaqAccordion
  } = window.ComptoirTropicalSOSAFCIDesignSystem_8722e7;
  const {
    Reveal
  } = window;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-dark)',
      color: 'var(--text-on-dark)',
      padding: '96px 48px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 760,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: 40
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-wider)',
      color: 'var(--mango)',
      fontWeight: 600
    }
  }, t.faqEyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-3xl)',
      fontWeight: 500,
      margin: '10px 0 0'
    }
  }, t.faqTitle))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 120
  }, /*#__PURE__*/React.createElement(FaqAccordion, {
    items: t.faq.map(([q, a]) => ({
      q,
      a
    }))
  }))));
}
window.FaqSection = FaqSection;

// ── ContactSection.jsx ──
function ContactSection({
  t
}) {
  const {
    Button,
    FormField,
    Input,
    Textarea,
    WhatsAppIcon
  } = window.ComptoirTropicalSOSAFCIDesignSystem_8722e7;
  const {
    Reveal
  } = window;
  const [sent, setSent] = React.useState(false);
  const [sending, setSending] = React.useState(false);
  const [errors, setErrors] = React.useState([]);
  const submit = async e => {
    e.preventDefault();
    if (sending) return;
    setErrors([]);
    setSending(true);
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      const json = await res.json().catch(() => ({}));
      if (res.ok && json.success) setSent(true);else setErrors(json.errors && json.errors.length ? json.errors : [t.formError]);
    } catch (err) {
      setErrors([t.formError]);
    } finally {
      setSending(false);
    }
  };
  const label = {
    fontFamily: 'var(--font-mono)',
    fontSize: 11,
    textTransform: 'uppercase',
    letterSpacing: 'var(--tracking-wide)',
    color: 'var(--palm)',
    fontWeight: 600,
    display: 'block',
    marginBottom: 4
  };
  const line = {
    fontSize: 15,
    color: 'var(--text-on-light-muted)',
    margin: 0
  };
  const link = {
    color: 'var(--papaya)',
    textDecoration: 'underline',
    textUnderlineOffset: 2
  };
  return /*#__PURE__*/React.createElement("section", {
    id: "contact",
    style: {
      background: 'var(--surface-light)',
      color: 'var(--text-on-light)',
      padding: '96px 48px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid-2",
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 56,
      maxWidth: 1100,
      margin: '0 auto',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(Reveal, {
    from: "left"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-wider)',
      color: 'var(--papaya)',
      fontWeight: 600
    }
  }, t.contactEyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-3xl)',
      fontWeight: 500,
      margin: '10px 0 16px'
    }
  }, t.contactTitle), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-lg)',
      color: 'var(--text-on-light-muted)',
      lineHeight: 'var(--leading-body)',
      marginBottom: 32
    }
  }, t.contactLead), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 24,
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: label
  }, t.ceoTitle), /*#__PURE__*/React.createElement("p", {
    style: {
      ...line,
      color: 'var(--text-on-light)',
      fontWeight: 600
    }
  }, "Bouramala Yaya Sanogo"), /*#__PURE__*/React.createElement("p", {
    style: line
  }, t.emailPrefix, " ", /*#__PURE__*/React.createElement("a", {
    href: "mailto:sosaf.ci.export@gmail.com",
    style: link
  }, "sosaf.ci.export@gmail.com")), /*#__PURE__*/React.createElement("p", {
    style: line
  }, t.phoneWhatsappPrefix, " ", /*#__PURE__*/React.createElement("a", {
    href: "tel:+22389134555",
    style: link
  }, "+223 89 13 45 55"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: label
  }, t.cfoTitle), /*#__PURE__*/React.createElement("p", {
    style: {
      ...line,
      color: 'var(--text-on-light)',
      fontWeight: 600
    }
  }, "Amadou Dioro Cisse"), /*#__PURE__*/React.createElement("p", {
    style: line
  }, t.phonePrefix, " ", /*#__PURE__*/React.createElement("a", {
    href: "tel:+22390017373",
    style: link
  }, "+223 90 01 73 73"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: label
  }, t.addressLabel), /*#__PURE__*/React.createElement("p", {
    style: line
  }, "SOSAF-CI"), /*#__PURE__*/React.createElement("p", {
    style: line
  }, "Abidjan, Cocody, Angr\xE9, 9\xE8me Tranche"), /*#__PURE__*/React.createElement("p", {
    style: line
  }, "Lot N446B, \xCElot N20"), /*#__PURE__*/React.createElement("p", {
    style: line
  }, "23 BP 1099 Abidjan 23, C\xF4te d'Ivoire"))), /*#__PURE__*/React.createElement(Button, {
    variant: "whatsapp",
    size: "lg",
    onClick: () => window.open('https://wa.me/22389134555', '_blank')
  }, /*#__PURE__*/React.createElement(WhatsAppIcon, {
    size: 22,
    color: "#fff"
  }), " ", t.whatsapp), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13,
      color: 'var(--palm)',
      fontWeight: 600,
      marginTop: 10
    }
  }, t.whatsappSub)), /*#__PURE__*/React.createElement(Reveal, {
    from: "right",
    delay: 120
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-on-light)',
      borderRadius: 'var(--radius-lg)',
      padding: 32,
      boxShadow: 'var(--shadow-sm)'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 20,
      margin: '0 0 20px'
    }
  }, t.formTitle), sent ? /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--palm)',
      fontWeight: 600
    }
  }, t.formSent) : /*#__PURE__*/React.createElement("form", {
    onSubmit: submit,
    noValidate: true
  }, /*#__PURE__*/React.createElement(FormField, {
    label: t.nameLabel
  }, /*#__PURE__*/React.createElement(Input, {
    name: "name",
    required: true
  })), /*#__PURE__*/React.createElement(FormField, {
    label: t.emailLabel
  }, /*#__PURE__*/React.createElement(Input, {
    name: "email",
    type: "email",
    required: true
  })), /*#__PURE__*/React.createElement(FormField, {
    label: t.messageLabel
  }, /*#__PURE__*/React.createElement(Textarea, {
    name: "message",
    required: true
  })), /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "_honeypot",
    tabIndex: -1,
    autoComplete: "off",
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      left: '-9999px',
      width: 1,
      height: 1,
      opacity: 0
    }
  }), errors.length > 0 && /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: '0 0 16px',
      paddingLeft: 18,
      color: 'var(--papaya)',
      fontSize: 14,
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, errors.map(msg => /*#__PURE__*/React.createElement("li", {
    key: msg
  }, msg))), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    disabled: sending,
    style: {
      width: '100%',
      justifyContent: 'center'
    }
  }, sending ? t.formSending : t.submit)), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: 'var(--text-on-light-muted)',
      marginTop: 20,
      paddingTop: 16,
      borderTop: '1px solid var(--border-on-light)'
    }
  }, "RCCM : CI-ABJ-03-2024-B21-00015")))));
}
window.ContactSection = ContactSection;

// ── Footer.jsx ──
function FooterLink({
  label,
  href = '#',
  small
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      color: hover ? 'var(--mango)' : 'var(--text-on-dark-muted)',
      fontSize: small ? 12 : 13,
      textDecoration: 'none',
      transition: 'color var(--motion-fast) var(--ease-standard)',
      padding: '6px 2px',
      display: 'inline-block'
    }
  }, label);
}
function Footer({
  t,
  base = ''
}) {
  const anchors = ['accueil', 'presentation', 'produits', 'certifications', 'process', 'faq', 'contact'];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--surface-dark)',
      color: 'var(--text-on-dark-muted)',
      padding: '40px clamp(16px,5vw,24px)',
      textAlign: 'center',
      borderTop: '1px solid var(--border-on-dark)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: (window.SITE_BASE || '') + 'assets/logo.svg',
    alt: "SOSAF-CI",
    style: {
      height: 40,
      opacity: 0.7,
      marginBottom: 16,
      transition: 'opacity var(--motion-base) var(--ease-standard)'
    },
    onMouseEnter: e => {
      e.currentTarget.style.opacity = 1;
    },
    onMouseLeave: e => {
      e.currentTarget.style.opacity = 0.7;
    }
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      gap: 20,
      flexWrap: 'wrap',
      marginBottom: 8
    }
  }, t.nav.map((item, i) => /*#__PURE__*/React.createElement(FooterLink, {
    key: item,
    label: item,
    href: base + 'index.html#' + anchors[i]
  }))), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      gap: 18,
      flexWrap: 'wrap',
      marginBottom: 16,
      paddingTop: 12,
      borderTop: '1px solid var(--border-on-dark)',
      maxWidth: 620,
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  }, (t.legal || []).map(([label, href]) => /*#__PURE__*/React.createElement(FooterLink, {
    key: href,
    small: true,
    label: label,
    href: base + href
  }))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 12,
      margin: 0
    }
  }, t.footerNote), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: 'var(--tracking-wide)',
      margin: '8px 0 0',
      opacity: 0.7
    }
  }, t.footerLegal));
}
window.Footer = Footer;

// ── Lightbox.jsx ──
// Static fallback products carry bare filenames; live Supabase products carry full storage URLs.
function photoSrc(name) {
  return /^https?:\/\//.test(name) ? name : (window.SITE_BASE || '') + 'assets/photography/' + name;
}
function Lightbox({
  product,
  index,
  onClose,
  onPrev,
  onNext,
  t
}) {
  const {
    Icon
  } = window.ComptoirTropicalSOSAFCIDesignSystem_8722e7;
  const copy = t || window.COPY[window.SITE_LANG || 'fr'];
  const [fade, setFade] = React.useState(false);
  React.useEffect(() => {
    setFade(true);
    const id = setTimeout(() => setFade(false), 40);
    return () => clearTimeout(id);
  }, [index, product]);
  React.useEffect(() => {
    if (!product) return;
    const onKey = e => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [product, onClose, onPrev, onNext]);
  // Preload the neighbouring gallery images so next/prev feels instant.
  React.useEffect(() => {
    if (!product) return;
    const n = product.gallery.length;
    [(index + 1) % n, (index - 1 + n) % n].forEach(i => {
      const im = new Image();
      im.src = photoSrc(product.gallery[i]);
    });
  }, [product, index]);
  if (!product) return null;
  const src = photoSrc(product.gallery[index]);
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      background: 'oklch(from var(--canopy) l c h / 0.94)',
      backdropFilter: 'blur(14px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": copy.lightboxClose,
    style: {
      position: 'absolute',
      top: 24,
      right: 24,
      width: 44,
      height: 44,
      borderRadius: '50%',
      background: 'oklch(from var(--ivory) l c h / 0.1)',
      border: '1px solid var(--border-on-dark)',
      color: '#fff',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "x",
    size: 20
  })), /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    className: "lightbox-row",
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onPrev,
    "aria-label": copy.lightboxPrev,
    style: {
      flex: '0 0 auto',
      width: 48,
      height: 48,
      borderRadius: '50%',
      border: '1px solid var(--border-on-dark)',
      background: 'oklch(from var(--canopy) l c h / 0.6)',
      color: '#fff',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-left",
    size: 22
  })), /*#__PURE__*/React.createElement("div", {
    className: "lightbox-stage",
    style: {
      flex: '0 0 auto',
      width: 'min(70vw, 880px)',
      height: 'min(68vh, 620px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: product.name,
    style: {
      maxWidth: '100%',
      maxHeight: '100%',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-lg)',
      objectFit: 'contain',
      opacity: fade ? 0 : 1,
      transition: 'opacity 220ms var(--ease-out)'
    }
  })), /*#__PURE__*/React.createElement("button", {
    onClick: onNext,
    "aria-label": copy.lightboxNext,
    style: {
      flex: '0 0 auto',
      width: 48,
      height: 48,
      borderRadius: '50%',
      border: '1px solid var(--border-on-dark)',
      background: 'oklch(from var(--canopy) l c h / 0.6)',
      color: '#fff',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-right",
    size: 22
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--text-on-dark-muted)',
      fontFamily: 'var(--font-mono)',
      fontSize: 13
    }
  }, index + 1, " / ", product.gallery.length, " \u2014 ", product.name));
}
window.Lightbox = Lightbox;

// ── WhatsAppFloat.jsx ──
function WhatsAppFloat({
  phone = '22389134555'
}) {
  const {
    Icon,
    WhatsAppIcon
  } = window.ComptoirTropicalSOSAFCIDesignSystem_8722e7;
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", {
    href: 'https://wa.me/' + phone,
    target: "_blank",
    rel: "noopener noreferrer",
    "aria-label": "WhatsApp",
    className: "wa-float",
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position: 'fixed',
      bottom: 24,
      right: 24,
      width: 60,
      height: 60,
      borderRadius: '50%',
      background: '#25D366',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 500,
      boxShadow: hover ? '0 10px 28px rgba(37,211,102,0.45)' : '0 6px 18px rgba(37,211,102,0.3)',
      transform: hover ? 'translateY(-3px)' : 'none',
      transition: 'transform var(--motion-fast) var(--ease-out), box-shadow var(--motion-fast), opacity var(--motion-fast)'
    }
  }, /*#__PURE__*/React.createElement(WhatsAppIcon, {
    size: 30,
    color: "#fff"
  }));
}
window.WhatsAppFloat = WhatsAppFloat;

// ── App.jsx ──
function App() {
  const {
    Nav
  } = window.ComptoirTropicalSOSAFCIDesignSystem_8722e7;
  const lang = window.SITE_LANG || 'fr';
  const base = window.SITE_BASE || '';
  const assets = base + 'assets/';
  const [gallery, setGallery] = React.useState({
    product: null,
    index: 0
  });
  const t = window.COPY[lang];
  const [products, setProducts] = React.useState(window.PRODUCTS[lang]);
  React.useEffect(() => {
    let cancelled = false;
    if (window.fetchLiveProducts) {
      window.fetchLiveProducts(lang).then(live => {
        if (!cancelled && live && live.length) setProducts(live);
      });
    }
    return () => {
      cancelled = true;
    };
  }, [lang]);
  React.useEffect(() => {
    window.trackVisit && window.trackVisit();
  }, []);
  const anchors = ['accueil', 'presentation', 'produits', 'certifications', 'process', 'faq'];
  const links = t.nav.slice(0, -1).map((label, i) => ({
    label,
    href: '#' + anchors[i]
  }));
  const otherLang = lang === 'fr' ? 'EN' : 'FR';
  const otherHref = lang === 'fr' ? 'en/index.html' : '../index.html';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement(Nav, {
    logo: assets + 'logo.svg',
    links: links,
    cta: t.navCta,
    lang: otherLang,
    onLangToggle: () => {
      window.location.href = otherHref;
    }
  }), /*#__PURE__*/React.createElement("div", {
    id: "accueil"
  }, /*#__PURE__*/React.createElement(window.Hero, {
    t: t
  })), /*#__PURE__*/React.createElement("div", {
    id: "presentation"
  }, /*#__PURE__*/React.createElement(window.Presentation, {
    t: t
  })), /*#__PURE__*/React.createElement(window.ProductsSection, {
    t: t,
    products: products,
    onOpenGallery: p => setGallery({
      product: p,
      index: 0
    })
  }), /*#__PURE__*/React.createElement("div", {
    id: "certifications"
  }, /*#__PURE__*/React.createElement(window.CertificationsSection, {
    t: t
  })), /*#__PURE__*/React.createElement("div", {
    id: "process"
  }, /*#__PURE__*/React.createElement(window.ProcessSection, {
    t: t
  })), /*#__PURE__*/React.createElement("div", {
    id: "faq"
  }, /*#__PURE__*/React.createElement(window.FaqSection, {
    t: t
  })), /*#__PURE__*/React.createElement(window.ContactSection, {
    t: t
  }), /*#__PURE__*/React.createElement(window.Footer, {
    t: t
  }), /*#__PURE__*/React.createElement(window.WhatsAppFloat, null), /*#__PURE__*/React.createElement(window.Lightbox, {
    t: t,
    product: gallery.product,
    index: gallery.index,
    onClose: () => setGallery({
      product: null,
      index: 0
    }),
    onPrev: () => setGallery(g => ({
      ...g,
      index: (g.index - 1 + g.product.gallery.length) % g.product.gallery.length
    })),
    onNext: () => setGallery(g => ({
      ...g,
      index: (g.index + 1) % g.product.gallery.length
    }))
  }));
}

// The compiled design-system bundle also contains this file; without the guard it would paint
// the landing page for a split second on legal pages before their own render replaces it.
// `__ds_ns` only exists inside the compiled design-system bundle, which also contains this file.
// Rendering from there too would mount the app twice (visible flicker, replayed reveal animations)
// and would paint the landing page for a split second on legal pages.
if (typeof __ds_ns === 'undefined' && (window.SITE_PAGE || 'home') === 'home') {
  window.__root = window.__root || ReactDOM.createRoot(document.getElementById('root'));
  window.__root.render(/*#__PURE__*/React.createElement(App, null));
}