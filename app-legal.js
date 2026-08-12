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
    productCopyTitle: 'Le produit en détail',
    heroLogoAlt: "SOSAF-CI — Fruits de Côte d'Ivoire",
    presImageAlt: "Récolte de mangues, Côte d'Ivoire",
    rccmLabel: 'RCCM :',
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
    productCopyTitle: 'The product in detail',
    heroLogoAlt: 'SOSAF-CI — Fruit from Ivory Coast',
    presImageAlt: 'Mango harvest, Ivory Coast',
    rccmLabel: 'RCCM:',
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
// Repli quand une fiche saisie en admin n'a aucune photo.
const PLACEHOLDER_IMAGE = (window.SITE_BASE || '') + 'assets/logo-hero.webp';

// Repli utilisé seulement si Supabase est injoignable. Les valeurs ci-dessous sont
// alignées sur les lignes products/product_chars réelles : toute divergence se verrait
// comme un changement de fiche au rechargement.
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
    value: '6–12 (selon variété)'
  }, {
    label: 'Conditionnement',
    value: 'Avion : carton 6 kg / Maritime : carton 4 kg'
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
    label: 'Origine',
    value: "Côte d'Ivoire"
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
    label: 'Conditionnement',
    value: 'Avion : carton 6 kg / Maritime : carton 4 kg'
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
    label: 'Origine',
    value: "Côte d'Ivoire"
  }, {
    label: 'Quantité',
    value: 'Selon disponibilité'
  }, {
    label: 'Conditionnement',
    value: 'Carton kraft 18.5 kg'
  }]
}, {
  id: 'pineapple',
  image: B + 'ananas-01.webp',
  gallery: ['ananas-01.webp', 'ananas-02.webp', 'ananas-03.webp', 'ananas-04.webp'],
  name: 'Ananas',
  subtitle: "Origine Côte d'Ivoire · Variétés MD2, Pain de Sucre, Cayenne Lisse",
  fields: [{
    label: 'Variétés',
    value: 'MD2, Pain de Sucre, Cayenne Lisse'
  }, {
    label: 'Calibre',
    value: '6–12'
  }, {
    label: 'Saison',
    value: "Toute l'année"
  }, {
    label: 'Conditionnement',
    value: 'Carton de 12 kg'
  }]
}];
const EN_OVERRIDES = {
  mango: {
    name: 'Mango',
    subtitle: 'Origin Ivory Coast · Kent and Amélie varieties',
    fields: [{
      label: 'Varieties',
      value: 'Kent, Amélie'
    }, {
      label: 'Season',
      value: 'March – July'
    }, {
      label: 'Size',
      value: '6–12 (depending on variety)'
    }, {
      label: 'Packaging',
      value: 'Air: 6 kg carton / Sea: 4 kg carton'
    }]
  },
  coconut: {
    name: 'Coconut',
    subtitle: 'Origin Ivory Coast · Grand Africa West variety',
    fields: [{
      label: 'Variety',
      value: 'Grand Africa West'
    }, {
      label: 'Origin',
      value: 'Ivory Coast'
    }, {
      label: 'Type',
      value: 'Fresh, Dried'
    }, {
      label: 'Packaging',
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
      label: 'Packaging',
      value: 'Air: 6 kg carton / Sea: 4 kg carton'
    }, {
      label: 'Season',
      value: 'All year'
    }]
  },
  banana: {
    name: 'Banana',
    subtitle: 'Origin Ivory Coast · Cavendish variety',
    fields: [{
      label: 'Variety',
      value: 'Cavendish'
    }, {
      label: 'Origin',
      value: 'Ivory Coast'
    }, {
      label: 'Quantity',
      value: 'Subject to availability'
    }, {
      label: 'Packaging',
      value: '18.5 kg kraft carton'
    }]
  },
  pineapple: {
    name: 'Pineapple',
    subtitle: 'Origin Ivory Coast · MD2, Sugar Loaf, Smooth Cayenne varieties',
    fields: [{
      label: 'Varieties',
      value: 'MD2, Sugar Loaf, Smooth Cayenne'
    }, {
      label: 'Size',
      value: '6–12'
    }, {
      label: 'Season',
      value: 'All year'
    }, {
      label: 'Packaging',
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
// Marques diacritiques combinantes laissees par la normalisation NFD. Construit via
// RegExp pour garder la plage lisible en ASCII plutot que des caracteres combinants
// invisibles dans la source.
const COMBINING_MARKS = new RegExp('[\u0300-\u036f]', 'g');
function normalizeName(s) {
  return (s || '').toLowerCase().normalize('NFD').replace(COMBINING_MARKS, '').trim();
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
// ─── Texte long des fiches produit ───
// Rédigé uniquement à partir de ce que le site affirme déjà : variétés, saison,
// calibres et conditionnement viennent des lignes products/product_chars ; les délais
// et modes d'acheminement, les volumes de commande et le délai de devis viennent de la
// FAQ ; la mention GlobalG.A.P. suit le champ `cert` (donc mangue et noix de coco
// seulement) et attribue la certification aux partenaires, comme la section
// Certifications. Aucun marché, incoterm, volume ni pays d'origine supplémentaire n'est
// avancé ici : ces éléments doivent venir du client avant d'être publiés.
const PRODUCT_COPY = {
  mango: {
    fr: ["La mangue est le produit phare du catalogue SOSAF-CI. Nous nous approvisionnons auprès de producteurs, de coopératives et de stations de conditionnement partenaires en Côte d'Ivoire, autour de deux variétés complémentaires. La Kent offre une chair peu fibreuse et une bonne tenue au transport, ce qui en fait la référence des circuits d'export longue distance. L'Amélie, variété ouest-africaine, se distingue par un parfum plus marqué et une texture plus fondante.", "La campagne s'étend de mars à juillet. Les calibres proposés vont de 6 à 12 fruits par colis selon la variété, ce qui permet d'ajuster chaque lot aux attentes du marché de destination.", "Le conditionnement dépend du mode d'acheminement retenu : carton de 6 kg pour le fret aérien, qui met 2 à 5 jours, carton de 4 kg pour le maritime en conteneur réfrigéré, qui met 10 à 20 jours selon la destination. Nos coopératives et stations de conditionnement partenaires pour la mangue sont certifiées GlobalG.A.P. Chaque expédition fait l'objet d'un contrôle qualité, avec une traçabilité complète du champ au conteneur.", "Nous traitons aussi bien les commandes par conteneur complet que par palette. Décrivez-nous vos volumes, votre calibre et votre destination : vous recevez une proposition détaillée sous 24 heures."],
    en: ["Mango is the flagship product in the SOSAF-CI catalogue. We source from partner growers, cooperatives and packing stations in Ivory Coast, around two complementary varieties. Kent has low-fibre flesh and travels well, which makes it the reference for long-distance export. Amélie, a West African variety, stands out for its stronger aroma and softer texture.", "The season runs from March to July. Sizes range from 6 to 12 fruits per box depending on the variety, so each lot can be matched to the expectations of its destination market.", "Packaging follows the shipping mode: a 6 kg carton for air freight, which takes 2 to 5 days, and a 4 kg carton for sea freight in reefer containers, which takes 10 to 20 days depending on destination. Our partner cooperatives and packing stations for mango are GlobalG.A.P.-certified. Every shipment undergoes a quality check, with full traceability from field to container.", "We handle full-container orders as well as pallet-level orders. Tell us your volumes, sizes and destination, and you will receive a detailed proposal within 24 hours."]
  },
  coconut: {
    fr: ["SOSAF-CI exporte la noix de coco de variété Grand Africa Ouest, produite en Côte d'Ivoire. Elle est proposée sous deux formes, fraîche et sèche, selon l'usage visé et la durée de transport acceptable pour votre filière.", "Le conditionnement se fait en sacs de 21 kg. L'acheminement se fait par voie maritime en conteneur, comptez 10 à 20 jours, ou par fret aérien en 2 à 5 jours lorsque le délai prime.", "Nos coopératives et stations de conditionnement partenaires pour la noix de coco sont certifiées GlobalG.A.P. Chaque lot est contrôlé avant expédition et bénéficie d'une traçabilité complète, du champ au conteneur. Les documents d'export sont fournis selon les exigences de la commande.", "Commandes par conteneur complet ou par palette. Indiquez-nous la forme souhaitée, fraîche ou sèche, vos volumes et votre destination : devis détaillé sous 24 heures."],
    en: ["SOSAF-CI exports Grand Africa West coconut, grown in Ivory Coast. It is available in two forms, fresh and dried, depending on the intended use and the transit time your supply chain can accommodate.", "It is packed in 21 kg bags. Shipping is by sea container, allow 10 to 20 days, or by air freight in 2 to 5 days when lead time matters most.", "Our partner cooperatives and packing stations for coconut are GlobalG.A.P.-certified. Every lot is inspected before shipment and carries full traceability from field to container. Export documents are provided according to the requirements of the order.", "Full-container or pallet-level orders. Tell us which form you need, fresh or dried, along with your volumes and destination, and you will receive a detailed quote within 24 hours."]
  },
  avocado: {
    fr: ["L'avocat figure au catalogue SOSAF-CI toute l'année, en deux variétés. La Hass, à peau granuleuse qui fonce à maturité, est la variété la plus demandée à l'international. La Fuerte, à peau lisse et à chair plus douce, complète la gamme.", "Les calibres proposés vont de 16 à 22 fruits par colis. La disponibilité sur l'ensemble de l'année permet de sécuriser un approvisionnement régulier plutôt qu'une fenêtre saisonnière courte.", "Le conditionnement suit le mode d'acheminement : carton de 6 kg pour l'aérien, en 2 à 5 jours, carton de 4 kg pour le maritime en conteneur réfrigéré, en 10 à 20 jours. Chaque expédition fait l'objet d'un contrôle qualité et d'une traçabilité complète, du champ au conteneur.", "Commandes par conteneur complet ou par palette. Précisez calibre, volumes et destination : proposition détaillée sous 24 heures."],
    en: ["Avocado is in the SOSAF-CI catalogue all year, in two varieties. Hass, with its pebbled skin that darkens as it ripens, is the most requested variety internationally. Fuerte, with smooth skin and milder flesh, completes the range.", "Sizes range from 16 to 22 fruits per box. Year-round availability makes it possible to secure steady supply rather than a short seasonal window.", "Packaging follows the shipping mode: a 6 kg carton for air freight, in 2 to 5 days, and a 4 kg carton for sea freight in reefer containers, in 10 to 20 days. Every shipment undergoes a quality check and carries full traceability from field to container.", "Full-container or pallet-level orders. Specify size, volumes and destination, and you will receive a detailed proposal within 24 hours."]
  },
  banana: {
    fr: ["SOSAF-CI exporte la banane de variété Cavendish, produite en Côte d'Ivoire. C'est la variété de référence du commerce international, retenue pour sa régularité de calibre et sa tenue sur les circuits longs.", "Les volumes sont proposés selon disponibilité : nous confirmons la quantité mobilisable au moment du devis plutôt que d'annoncer un tonnage théorique.", "Le conditionnement se fait en carton kraft de 18,5 kg. L'expédition se fait par voie maritime en conteneur réfrigéré, comptez 10 à 20 jours, ou par fret aérien en 2 à 5 jours. Chaque expédition fait l'objet d'un contrôle qualité avant départ, avec traçabilité complète du champ au conteneur.", "Commandes par conteneur complet ou par palette. Communiquez-nous vos volumes et votre destination : nous revenons vers vous sous 24 heures avec une proposition détaillée."],
    en: ["SOSAF-CI exports Cavendish bananas grown in Ivory Coast. It is the reference variety in international trade, chosen for its consistent sizing and its resilience on long routes.", "Volumes are offered subject to availability: we confirm the quantity we can actually mobilise at quotation stage rather than announcing a theoretical tonnage.", "Bananas are packed in 18.5 kg kraft cartons. Shipping is by sea in reefer containers, allow 10 to 20 days, or by air freight in 2 to 5 days. Every shipment is quality-checked before departure, with full traceability from field to container.", "Full-container or pallet-level orders. Send us your volumes and destination and we will come back within 24 hours with a detailed proposal."]
  },
  pineapple: {
    fr: ["L'ananas est disponible toute l'année dans notre catalogue, en trois variétés. Le MD2 est le standard des marchés d'export, apprécié pour sa couleur et sa régularité. Le Pain de Sucre et la Cayenne Lisse offrent des profils différents, pour les acheteurs qui cherchent à se démarquer du MD2.", "Les calibres proposés vont de 6 à 12 fruits par colis. La production s'étale sur l'année, ce qui permet un approvisionnement continu plutôt que par campagne.", "Le conditionnement se fait en cartons de 12 kg. L'acheminement se fait par voie maritime en conteneur réfrigéré, en 10 à 20 jours, ou par fret aérien en 2 à 5 jours selon la destination et l'urgence. Contrôle qualité avant chaque expédition et traçabilité complète, du champ au conteneur.", "Commandes par conteneur complet ou par palette. Indiquez-nous la variété, les calibres, vos volumes et votre destination : devis détaillé sous 24 heures."],
    en: ["Pineapple is available all year in our catalogue, in three varieties. MD2 is the export-market standard, valued for its colour and consistency. Sugar Loaf and Smooth Cayenne offer different profiles, for buyers looking to differentiate from MD2.", "Sizes range from 6 to 12 fruits per box. Production runs across the year, which allows continuous supply rather than campaign-based sourcing.", "Pineapples are packed in 12 kg cartons. Shipping is by sea in reefer containers, in 10 to 20 days, or by air freight in 2 to 5 days depending on destination and urgency. Quality control before every shipment and full traceability, from field to container.", "Full-container or pallet-level orders. Tell us the variety, sizes, volumes and destination, and you will receive a detailed quote within 24 hours."]
  }
};
window.PRODUCT_COPY = PRODUCT_COPY;
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
        // Un produit saisi en admin sans photo donnait image: '' — le navigateur resout
        // src="" vers l'URL de la page et telecharge le HTML comme image.
        image: cover ? cover.url : PLACEHOLDER_IMAGE,
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
  const sb = getSb();
  // Ne marquer la session qu'une fois le client disponible : marquer avant perdait
  // définitivement la visite quand supabase-js n'était pas encore chargé.
  if (!sb) return;
  sessionStorage.setItem('visited', '1');
  sb.from('visits').insert({
    page: window.location.pathname || '/',
    ip: ''
  }).then(function (res) {
    if (res && res.error) console.warn('[visits] insert failed', res.error);
  });
}
window.trackVisit = trackVisit;

// Landing on a URL with a #hash (a footer link from a product page, a shared link) fails
// silently on this site: the browser looks for the target while #root is still empty, gives
// up, and leaves the visitor on the hero. Call after mount to perform the scroll React
// deferred, then again once lazy images have settled the layout. Returns a cleanup function
// so it can be used directly as a useEffect body.
function scrollToHash() {
  const hash = window.location.hash;
  if (!hash || hash.length < 2) return function () {};
  const go = function () {
    const el = document.getElementById(decodeURIComponent(hash.slice(1)));
    if (!el) return;
    // 'instant', not 'auto': 'auto' defers to the global `scroll-behavior: smooth`, which
    // animates the jump over several frames — wrong on arrival (the visitor watches the whole
    // page fly past) and it silently never completes in a tab that isn't producing frames.
    el.scrollIntoView({
      behavior: 'instant',
      block: 'start'
    });
  };
  const raf = requestAnimationFrame(go);
  const timer = setTimeout(go, 400);
  return function () {
    cancelAnimationFrame(raf);
    clearTimeout(timer);
  };
}
window.scrollToHash = scrollToHash;

// ── legal-content.jsx ──
// Documents légaux SOSAF-CI. À faire relire par un conseil juridique avant mise en ligne.
const LEGAL_DOCS = {
  mentions: {
    slug: 'mentions-legales',
    eyebrow: 'Informations légales',
    title: 'Mentions légales',
    updated: 'Dernière mise à jour : août 2026',
    intro: "Conformément aux dispositions légales en vigueur en République de Côte d'Ivoire, les informations suivantes sont portées à la connaissance des utilisateurs du site sosaf-ci.com.",
    sections: [{
      h: "Éditeur du site",
      p: ["Le présent site est édité par SOSAF-CI, société d'import-export de produits agricoles tropicaux."],
      dl: [['Dénomination sociale', 'SOSAF-CI'], ['Forme juridique', 'SARL'], ['Capital social', '1 000 000 FCFA'], ['Siège social', "Abidjan, Cocody, Angré, 9ème Tranche — Lot N446B, Îlot N20 — 23 BP 1099 Abidjan 23, Côte d'Ivoire"], ['RCCM', 'CI-ABJ-03-2024-B21-00015'], ['Centre des impôts de rattachement', 'SAID II Plateaux — Djibi'], ['Agence CNPS de rattachement', 'Cocody'], ['Directeur de la publication', 'Bouramala Yaya Sanogo, Directeur général'], ['Email', 'sosaf.ci.export@gmail.com'], ['Téléphone', '+223 89 13 45 55']]
    }, {
      h: "Hébergement",
      p: ["Le site est hébergé par Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis — vercel.com."]
    }, {
      h: "Propriété intellectuelle",
      p: ["L'ensemble des éléments composant le site — textes, photographies, logotype, charte graphique, illustrations et structure — est la propriété exclusive de SOSAF-CI ou de ses partenaires, et est protégé par la législation ivoirienne et internationale relative à la propriété intellectuelle.", "Toute reproduction, représentation, adaptation ou exploitation, totale ou partielle, sur quelque support que ce soit, est interdite sans autorisation écrite préalable de SOSAF-CI."]
    }, {
      h: "Responsabilité",
      p: ["SOSAF-CI s'efforce d'assurer l'exactitude et la mise à jour des informations publiées sur le site. Les caractéristiques produits, calibres, saisons et conditionnements sont donnés à titre indicatif et peuvent varier selon les récoltes et les campagnes.", "Seules les informations figurant sur un devis ou une confirmation de commande signés par SOSAF-CI ont valeur contractuelle.", "SOSAF-CI ne saurait être tenue responsable des dommages directs ou indirects résultant de l'accès au site ou de l'utilisation des informations qui y figurent."]
    }, {
      h: "Liens externes",
      p: ["Le site peut contenir des liens vers des sites tiers. SOSAF-CI n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu."]
    }, {
      h: "Droit applicable",
      p: ["Le présent site et les présentes mentions légales sont soumis au droit ivoirien. Tout litige relatif à leur interprétation ou à leur exécution relève de la compétence des tribunaux d'Abidjan."]
    }]
  },
  cgv: {
    slug: 'cgv',
    eyebrow: 'Conditions',
    title: 'Conditions générales de vente',
    updated: 'Dernière mise à jour : août 2026',
    intro: "Les présentes conditions générales de vente régissent les relations entre SOSAF-CI, société d'import-export établie à Abidjan, et ses clients professionnels dans le cadre de la vente à l'export de fruits tropicaux.",
    sections: [{
      h: '1. Champ d\u2019application',
      p: ["Les présentes conditions s'appliquent à toute commande passée auprès de SOSAF-CI par un acheteur professionnel. Toute commande implique l'acceptation sans réserve des présentes conditions, qui prévalent sur les conditions d'achat de l'acheteur, sauf accord écrit contraire."]
    }, {
      h: '2. Produits',
      p: ["SOSAF-CI commercialise des fruits tropicaux frais d'origine Côte d'Ivoire : mangue (Kent, Amélie), noix de coco, avocat (Hass, Fuerte), banane (Cavendish) et ananas (MD2, Cayenne Lisse, Pain de Sucre).", "Les calibres, variétés, saisons et conditionnements indiqués sur le site le sont à titre indicatif. La disponibilité effective dépend des campagnes de récolte et des conditions agroclimatiques."]
    }, {
      h: '3. Commandes et devis',
      p: ["Toute demande donne lieu à l'établissement d'un devis détaillé, transmis sous 24 heures ouvrées. Le devis précise les produits, volumes, calibres, conditionnements, prix unitaires, incoterm applicable, délais et modalités de paiement.", "La vente est réputée conclue à réception par SOSAF-CI du devis signé par l'acheteur et de l'acompte prévu. SOSAF-CI se réserve le droit de refuser toute commande pour motif légitime."]
    }, {
      h: '4. Prix et incoterms',
      p: ["Les prix sont exprimés hors taxes, dans la devise indiquée au devis, et s'entendent selon l'incoterm convenu (Incoterms® 2020), le plus souvent FOB Abidjan ou CFR port de destination.", "Les prix sont fermes pour la durée de validité du devis. Au-delà, ils sont susceptibles de révision en fonction des cours, des coûts de fret et des charges portuaires."]
    }, {
      h: '5. Paiement',
      p: ["Sauf accord particulier, les commandes sont réglées selon les modalités précisées au devis : acompte à la commande et solde avant embarquement, virement bancaire, ou crédit documentaire irrévocable.", "Tout retard de paiement entraîne de plein droit l'application de pénalités de retard au taux légal en vigueur, sans qu'un rappel soit nécessaire, ainsi que la suspension des expéditions en cours."]
    }, {
      h: '6. Qualité, contrôle et certifications',
      p: ["Chaque lot fait l'objet d'un contrôle qualité avant expédition. SOSAF-CI travaille avec des coopératives et stations de conditionnement certifiées GlobalG.A.P. pour la mangue et la noix de coco.", "Les documents accompagnant l'expédition (certificat phytosanitaire, certificat d'origine, liste de colisage, facture commerciale, connaissement) sont fournis selon la nature de la commande et la destination."]
    }, {
      h: '7. Expédition et transfert des risques',
      p: ["Les expéditions sont réalisées par voie maritime en conteneurs réfrigérés (10 à 20 jours) ou par voie aérienne (2 à 5 jours), selon la destination et l'urgence.", "Le transfert des risques s'opère conformément à l'incoterm convenu. Les délais d'acheminement sont donnés à titre indicatif ; SOSAF-CI ne saurait être tenue responsable des retards imputables au transporteur, aux autorités portuaires ou douanières, ou à un cas de force majeure."]
    }, {
      h: '8. Réclamations',
      p: ["Toute réclamation relative à la qualité ou à la conformité de la marchandise doit être notifiée par écrit dans un délai de 48 heures suivant le déchargement, accompagnée d'un rapport d'expertise et de photographies datées.", "S'agissant de produits frais et périssables, aucune réclamation ne sera recevable au-delà de ce délai ou en cas de rupture de la chaîne du froid après transfert des risques."]
    }, {
      h: '9. Force majeure',
      p: ["SOSAF-CI ne saurait être tenue responsable de l'inexécution de ses obligations en cas de force majeure : intempéries exceptionnelles, épidémie végétale, grève portuaire, fermeture de frontière, décision administrative ou tout événement échappant à son contrôle raisonnable."]
    }, {
      h: '10. Droit applicable et litiges',
      p: ["Les présentes conditions sont soumises au droit ivoirien. En cas de litige, les parties rechercheront une solution amiable. À défaut d'accord, compétence exclusive est attribuée aux tribunaux d'Abidjan."]
    }]
  },
  confidentialite: {
    slug: 'confidentialite',
    eyebrow: 'Données personnelles',
    title: 'Politique de confidentialité',
    updated: 'Dernière mise à jour : août 2026',
    intro: "SOSAF-CI attache une importance particulière à la protection des données personnelles de ses clients, prospects et visiteurs. La présente politique décrit les données collectées, leur usage et les droits dont vous disposez.",
    sections: [{
      h: 'Responsable du traitement',
      p: ["Le responsable du traitement est SOSAF-CI, dont le siège social est situé à Abidjan, Cocody, Angré, 9ème Tranche — Lot N446B, Îlot N20, 23 BP 1099 Abidjan 23, Côte d'Ivoire.", "Pour toute question relative à vos données : sosaf.ci.export@gmail.com."]
    }, {
      h: 'Données collectées',
      p: ["Nous ne collectons que les données strictement nécessaires au traitement de votre demande :"],
      ul: ["Identité et coordonnées professionnelles : nom, adresse email, numéro de téléphone, société et pays.", "Contenu de votre message : nature de la demande, produits, volumes et destination.", "Données techniques de connexion : adresse IP, type de navigateur, pages consultées, à des fins de sécurité et de mesure d'audience."]
    }, {
      h: 'Finalités et bases légales',
      p: ["Les données sont traitées pour répondre à vos demandes de devis et de renseignement, établir et exécuter les contrats commerciaux, assurer le suivi de la relation client et satisfaire à nos obligations légales, comptables et douanières.", "Les traitements reposent selon les cas sur votre consentement, sur l'exécution de mesures précontractuelles ou contractuelles, ou sur notre intérêt légitime à développer notre activité."]
    }, {
      h: 'Destinataires',
      p: ["Les données sont destinées aux équipes commerciales et administratives de SOSAF-CI. Elles peuvent être communiquées à nos partenaires logistiques, transitaires, transporteurs et établissements bancaires lorsque l'exécution de la commande l'exige, ainsi qu'aux autorités administratives et douanières sur réquisition.", "SOSAF-CI ne vend ni ne loue vos données à des tiers."]
    }, {
      h: 'Durée de conservation',
      p: ["Les demandes de contact non suivies d'une relation commerciale sont conservées trois ans à compter du dernier échange. Les données liées à une commande sont conservées pendant la durée de la relation commerciale, puis archivées conformément aux délais légaux de conservation comptable et douanière."]
    }, {
      h: 'Sécurité',
      p: ["SOSAF-CI met en œuvre des mesures techniques et organisationnelles appropriées pour protéger les données contre la perte, l'altération et l'accès non autorisé : accès restreint aux personnes habilitées, connexions chiffrées, sauvegardes régulières."]
    }, {
      h: 'Cookies',
      p: ["Le site utilise des cookies strictement nécessaires à son fonctionnement, ainsi que, le cas échéant, des cookies de mesure d'audience. Vous pouvez configurer votre navigateur pour les refuser ; certaines fonctionnalités peuvent alors être dégradées."]
    }, {
      h: 'Vos droits',
      p: ["Conformément à la loi n° 2013-450 du 19 juin 2013 relative à la protection des données à caractère personnel en Côte d'Ivoire, vous disposez d'un droit d'accès, de rectification, d'effacement, d'opposition et de limitation du traitement de vos données, ainsi que d'un droit à la portabilité.", "Ces droits s'exercent par simple demande à sosaf.ci.export@gmail.com, accompagnée d'un justificatif d'identité. Une réponse vous sera apportée dans un délai d'un mois.", "Vous pouvez également introduire une réclamation auprès de l'Autorité de Régulation des Télécommunications/TIC de Côte d'Ivoire (ARTCI)."]
    }, {
      h: 'Modifications',
      p: ["SOSAF-CI se réserve le droit de modifier la présente politique afin de l'adapter aux évolutions légales ou à ses pratiques. La date de dernière mise à jour figure en tête de document."]
    }]
  }
};
const LEGAL_DOCS_EN = {
  mentions: {
    slug: 'legal-notice',
    eyebrow: 'Legal information',
    title: 'Legal notice',
    updated: 'Last updated: August 2026',
    intro: 'In accordance with the legal provisions in force in the Republic of Côte d\u2019Ivoire, the following information is made available to users of sosafci-export.com.',
    sections: [{
      h: 'Site publisher',
      p: ['This site is published by SOSAF-CI, an import-export company dealing in tropical agricultural products.'],
      dl: [['Company name', 'SOSAF-CI'], ['Legal form', 'SARL (limited liability company)'], ['Share capital', 'XOF 1,000,000'], ['Registered office', 'Abidjan, Cocody, Angré, 9th Tranche — Lot N446B, Ïlot N20 — 23 BP 1099 Abidjan 23, Ivory Coast'], ['Trade register (RCCM)', 'CI-ABJ-03-2024-B21-00015'], ['Tax office', 'SAID II Plateaux — Djibi'], ['CNPS branch', 'Cocody'], ['Publication director', 'Bouramala Yaya Sanogo, Managing Director'], ['Email', 'sosaf.ci.export@gmail.com'], ['Phone', '+223 89 13 45 55']]
    }, {
      h: 'Hosting',
      p: ['The site is hosted by Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, United States — vercel.com.']
    }, {
      h: 'Intellectual property',
      p: ['All elements making up the site — texts, photographs, logotype, graphic identity, illustrations and structure — are the exclusive property of SOSAF-CI or its partners, and are protected by Ivorian and international intellectual property law.', 'Any reproduction, representation, adaptation or exploitation, in whole or in part, on any medium whatsoever, is prohibited without the prior written consent of SOSAF-CI.']
    }, {
      h: 'Liability',
      p: ['SOSAF-CI endeavours to keep the information published on the site accurate and up to date. Product characteristics, sizes, seasons and packing formats are indicative and may vary with each harvest and campaign.', 'Only the information appearing on a quotation or order confirmation signed by SOSAF-CI is contractually binding.', 'SOSAF-CI cannot be held liable for any direct or indirect damage resulting from access to the site or from the use of the information it contains.']
    }, {
      h: 'External links',
      p: ['The site may contain links to third-party sites. SOSAF-CI exercises no control over those sites and accepts no responsibility for their content.']
    }, {
      h: 'Governing law',
      p: ['This site and this legal notice are governed by Ivorian law. Any dispute relating to their interpretation or performance falls within the jurisdiction of the courts of Abidjan.']
    }]
  },
  cgv: {
    slug: 'terms',
    eyebrow: 'Terms',
    title: 'Terms and conditions of sale',
    updated: 'Last updated: August 2026',
    intro: 'These terms and conditions govern the relationship between SOSAF-CI, an import-export company established in Abidjan, and its business customers in connection with the export sale of tropical fruit.',
    sections: [{
      h: '1. Scope',
      p: ['These terms apply to every order placed with SOSAF-CI by a business buyer. Placing an order implies unreserved acceptance of these terms, which prevail over the buyer\u2019s own purchasing terms unless otherwise agreed in writing.']
    }, {
      h: '2. Products',
      p: ['SOSAF-CI sells fresh tropical fruit originating from Ivory Coast: mango (Kent, Amélie), coconut, avocado (Hass, Fuerte), banana (Cavendish) and pineapple (MD2, Smooth Cayenne, Sugarloaf).', 'The sizes, varieties, seasons and packing formats shown on the site are indicative. Actual availability depends on harvest campaigns and agroclimatic conditions.']
    }, {
      h: '3. Orders and quotations',
      p: ['Every enquiry gives rise to a detailed quotation, issued within 24 working hours. The quotation states the products, volumes, sizes, packing, unit prices, applicable incoterm, lead times and payment terms.', 'The sale is concluded when SOSAF-CI receives the quotation signed by the buyer together with the agreed deposit. SOSAF-CI reserves the right to decline any order on legitimate grounds.']
    }, {
      h: '4. Prices and incoterms',
      p: ['Prices are quoted excluding tax, in the currency stated on the quotation, under the agreed incoterm (Incoterms® 2020), most commonly FOB Abidjan or CFR port of destination.', 'Prices are firm for the validity period of the quotation. Beyond that period they may be revised in line with market rates, freight costs and port charges.']
    }, {
      h: '5. Payment',
      p: ['Unless otherwise agreed, orders are settled as stated on the quotation: deposit on order and balance before shipment, bank transfer, or irrevocable documentary credit.', 'Late payment automatically triggers late-payment interest at the statutory rate, without the need for a reminder, and the suspension of any shipments in progress.']
    }, {
      h: '6. Quality, inspection and certification',
      p: ['Every lot is quality-inspected before shipment. SOSAF-CI works with GlobalG.A.P.-certified cooperatives and packing stations for mango and coconut.', 'The documents accompanying the shipment (phytosanitary certificate, certificate of origin, packing list, commercial invoice, bill of lading) are supplied according to the nature of the order and the destination.']
    }, {
      h: '7. Shipment and transfer of risk',
      p: ['Shipments are made by sea in reefer containers (10 to 20 days) or by air (2 to 5 days), depending on destination and urgency.', 'Risk transfers in accordance with the agreed incoterm. Transit times are indicative; SOSAF-CI cannot be held liable for delays attributable to the carrier, port or customs authorities, or to force majeure.']
    }, {
      h: '8. Claims',
      p: ['Any claim relating to the quality or conformity of the goods must be notified in writing within 48 hours of discharge, together with a survey report and dated photographs.', 'As these are fresh, perishable goods, no claim will be admissible after that period or where the cold chain has been broken after the transfer of risk.']
    }, {
      h: '9. Force majeure',
      p: ['SOSAF-CI cannot be held liable for failure to perform its obligations in the event of force majeure: exceptional weather, plant disease outbreak, port strike, border closure, administrative decision or any event beyond its reasonable control.']
    }, {
      h: '10. Governing law and disputes',
      p: ['These terms are governed by Ivorian law. In the event of a dispute, the parties will seek an amicable settlement. Failing agreement, exclusive jurisdiction is granted to the courts of Abidjan.']
    }]
  },
  confidentialite: {
    slug: 'privacy',
    eyebrow: 'Personal data',
    title: 'Privacy policy',
    updated: 'Last updated: August 2026',
    intro: 'SOSAF-CI attaches particular importance to protecting the personal data of its customers, prospects and visitors. This policy describes the data we collect, how we use it and the rights available to you.',
    sections: [{
      h: 'Data controller',
      p: ['The data controller is SOSAF-CI, whose registered office is at Abidjan, Cocody, Angré, 9th Tranche — Lot N446B, Ïlot N20, 23 BP 1099 Abidjan 23, Ivory Coast.', 'For any question about your data: sosaf.ci.export@gmail.com.']
    }, {
      h: 'Data collected',
      p: ['We collect only the data strictly necessary to handle your request:'],
      ul: ['Identity and business contact details: name, email address, telephone number, company and country.', 'The content of your message: nature of the request, products, volumes and destination.', 'Technical connection data: IP address, browser type, pages viewed, for security and audience measurement.']
    }, {
      h: 'Purposes and legal bases',
      p: ['Data is processed to respond to your quotation and information requests, to establish and perform commercial contracts, to manage the customer relationship and to meet our legal, accounting and customs obligations.', 'Processing rests, depending on the case, on your consent, on pre-contractual or contractual measures, or on our legitimate interest in developing our business.']
    }, {
      h: 'Recipients',
      p: ['Data is intended for the commercial and administrative teams of SOSAF-CI. It may be shared with our logistics partners, freight forwarders, carriers and banks where the performance of the order requires it, and with administrative and customs authorities upon lawful request.', 'SOSAF-CI neither sells nor rents your data to third parties.']
    }, {
      h: 'Retention period',
      p: ['Contact enquiries not followed by a commercial relationship are kept for three years from the last exchange. Data linked to an order is kept for the duration of the commercial relationship, then archived in line with statutory accounting and customs retention periods.']
    }, {
      h: 'Security',
      p: ['SOSAF-CI implements appropriate technical and organisational measures to protect data against loss, alteration and unauthorised access: access restricted to authorised staff, encrypted connections, regular backups.']
    }, {
      h: 'Cookies',
      p: ['The site uses cookies strictly necessary for its operation and, where applicable, audience-measurement cookies. You may configure your browser to refuse them; some features may then be degraded.']
    }, {
      h: 'Your rights',
      p: ['Under law no. 2013-450 of 19 June 2013 on the protection of personal data in Ivory Coast, you have the right to access, rectify, erase, object to and restrict the processing of your data, as well as a right to data portability.', 'These rights may be exercised by simple request to sosaf.ci.export@gmail.com, accompanied by proof of identity. You will receive a reply within one month.', 'You may also lodge a complaint with the Ivorian Telecommunications/ICT Regulatory Authority (ARTCI).']
    }, {
      h: 'Changes',
      p: ['SOSAF-CI reserves the right to amend this policy to reflect legal developments or changes in its practices. The date of the latest update appears at the top of the document.']
    }]
  }
};
const LEGAL_NAV = [{
  key: 'mentions',
  label: 'Mentions légales',
  href: 'mentions-legales.html'
}, {
  key: 'cgv',
  label: 'CGV',
  href: 'cgv.html'
}, {
  key: 'confidentialite',
  label: 'Confidentialité',
  href: 'confidentialite.html'
}];
const LEGAL_NAV_EN = [{
  key: 'mentions',
  label: 'Legal notice',
  href: 'legal-notice.html'
}, {
  key: 'cgv',
  label: 'Terms of sale',
  href: 'terms.html'
}, {
  key: 'confidentialite',
  label: 'Privacy',
  href: 'privacy.html'
}];
window.LEGAL_DOCS = LEGAL_DOCS;
window.LEGAL_NAV = LEGAL_NAV;
window.LEGAL = {
  fr: {
    docs: LEGAL_DOCS,
    nav: LEGAL_NAV,
    back: '← Retour au site'
  },
  en: {
    docs: LEGAL_DOCS_EN,
    nav: LEGAL_NAV_EN,
    back: '← Back to the site'
  }
};

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

// `base` prefixes the legal pages, which sit next to the homepage; `home` prefixes the
// homepage anchors. They differ on product pages, which live one directory down: the legal
// docs need '../' while the anchors need '../index.html'. On the homepage `home` stays ''
// so the links are bare fragments — a full navigation back to index.html would reload the
// page and land on the hero, since the anchor target is only rendered after React runs.
function Footer({
  t,
  base = '',
  home = ''
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
    href: home + '#' + anchors[i]
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

// ── LegalPage.jsx ──
function LegalPage({
  docKey
}) {
  const {
    Nav
  } = window.ComptoirTropicalSOSAFCIDesignSystem_8722e7;
  const lang = window.SITE_LANG || 'fr';
  const base = window.SITE_BASE || '';
  const assets = base + 'assets/';
  const L = window.LEGAL[lang];
  const doc = L.docs[docKey];
  const t = window.COPY[lang];
  const home = 'index.html';
  const otherLang = lang === 'fr' ? 'EN' : 'FR';
  const links = t.nav.slice(0, -1).map((label, i) => ({
    label,
    href: home + '#' + ['accueil', 'presentation', 'produits', 'certifications', 'process', 'faq'][i]
  }));
  const body = {
    fontSize: 16,
    lineHeight: 'var(--leading-body)',
    color: 'var(--text-on-light-muted)',
    margin: '0 0 14px'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      background: 'var(--surface-light)',
      color: 'var(--text-on-light)',
      minHeight: '100vh'
    }
  }, /*#__PURE__*/React.createElement(Nav, {
    logo: assets + 'logo.svg',
    links: links,
    cta: t.navCta,
    lang: otherLang,
    homeHref: home,
    onLangToggle: () => {
      window.location.href = lang === 'fr' ? 'en/' + window.LEGAL.en.docs[docKey].slug + '.html' : '../' + window.LEGAL.fr.docs[docKey].slug + '.html';
    }
  }), /*#__PURE__*/React.createElement("header", {
    style: {
      background: 'var(--surface-dark)',
      color: 'var(--text-on-dark)',
      padding: '72px clamp(16px,5vw,48px) 56px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1100,
      margin: '0 auto'
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
  }, doc.eyebrow), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'clamp(32px,6vw,52px)',
      lineHeight: 'var(--leading-tight)',
      fontWeight: 500,
      letterSpacing: 'var(--tracking-tight)',
      margin: '12px 0 10px'
    }
  }, doc.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-wide)',
      color: 'var(--text-on-dark-muted)',
      margin: 0
    }
  }, doc.updated))), /*#__PURE__*/React.createElement("div", {
    className: "legal-grid",
    style: {
      display: 'grid',
      gridTemplateColumns: '220px 1fr',
      gap: 56,
      maxWidth: 1100,
      margin: '0 auto',
      padding: 'clamp(40px,6vw,72px) clamp(16px,5vw,48px) 96px',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("nav", {
    className: "legal-side",
    style: {
      position: 'sticky',
      top: 90,
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, L.nav.map(item => {
    const active = item.key === docKey;
    return /*#__PURE__*/React.createElement("a", {
      key: item.key,
      href: item.href,
      style: {
        fontSize: 14,
        fontWeight: active ? 600 : 500,
        textDecoration: 'none',
        color: active ? 'var(--text-on-light)' : 'var(--text-on-light-muted)',
        padding: '10px 14px',
        borderRadius: 'var(--radius-md)',
        minHeight: 44,
        display: 'flex',
        alignItems: 'center',
        background: active ? 'var(--surface-card)' : 'transparent',
        border: active ? '1px solid var(--border-on-light)' : '1px solid transparent'
      }
    }, item.label);
  }), /*#__PURE__*/React.createElement("a", {
    href: home,
    style: {
      fontSize: 13,
      color: 'var(--papaya)',
      textDecoration: 'none',
      padding: '10px 14px',
      marginTop: 8,
      minHeight: 44,
      display: 'flex',
      alignItems: 'center'
    }
  }, L.back)), /*#__PURE__*/React.createElement("article", {
    style: {
      maxWidth: 720
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      ...body,
      fontSize: 'var(--text-lg)',
      color: 'var(--text-on-light)',
      marginBottom: 40
    }
  }, doc.intro), doc.sections.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.h,
    style: {
      marginBottom: 40
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'clamp(20px,3.5vw,26px)',
      fontWeight: 500,
      margin: '0 0 14px'
    }
  }, s.h), (s.p || []).map((p, i) => /*#__PURE__*/React.createElement("p", {
    key: i,
    style: body
  }, p)), s.dl && /*#__PURE__*/React.createElement("dl", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(150px,220px) 1fr',
      gap: '0',
      margin: '18px 0 0',
      border: '1px solid var(--border-on-light)',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      background: 'var(--surface-card)'
    },
    className: "legal-dl"
  }, s.dl.map(([k, v], i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: k
  }, /*#__PURE__*/React.createElement("dt", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-wide)',
      color: 'var(--palm)',
      fontWeight: 600,
      padding: '14px 16px',
      borderTop: i ? '1px solid var(--border-on-light)' : 'none'
    }
  }, k), /*#__PURE__*/React.createElement("dd", {
    style: {
      fontSize: 15,
      color: 'var(--text-on-light)',
      margin: 0,
      padding: '14px 16px',
      borderTop: i ? '1px solid var(--border-on-light)' : 'none'
    }
  }, v)))), s.ul && /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: '12px 0 0',
      paddingLeft: 20,
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, s.ul.map(li => /*#__PURE__*/React.createElement("li", {
    key: li,
    style: {
      fontSize: 16,
      lineHeight: 'var(--leading-body)',
      color: 'var(--text-on-light-muted)'
    }
  }, li))))))), /*#__PURE__*/React.createElement(window.Footer, {
    t: t,
    home: home
  }), /*#__PURE__*/React.createElement(window.WhatsAppFloat, null));
}
window.LegalPage = LegalPage;