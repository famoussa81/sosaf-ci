// Documents légaux SOSAF-CI. À faire relire par un conseil juridique avant mise en ligne.
const LEGAL_DOCS = {
  mentions: {
    slug: 'mentions-legales',
    eyebrow: 'Informations légales',
    title: 'Mentions légales',
    updated: 'Dernière mise à jour : août 2026',
    intro: "Conformément aux dispositions légales en vigueur en République de Côte d'Ivoire, les informations suivantes sont portées à la connaissance des utilisateurs du site sosaf-ci.com.",
    sections: [
      { h: "Éditeur du site", p: [
        "Le présent site est édité par SOSAF-CI, société d'import-export de produits agricoles tropicaux.",
      ], dl: [
        ['Dénomination sociale', 'SOSAF-CI'],
        ['Forme juridique', 'SARL'],
        ['Capital social', '1 000 000 FCFA'],
        ['Siège social', "Abidjan, Cocody, Angré, 9ème Tranche — Lot N446B, Îlot N20 — 23 BP 1099 Abidjan 23, Côte d'Ivoire"],
        ['RCCM', 'CI-ABJ-03-2024-B21-00015'],
        ['Centre des impôts de rattachement', 'SAID II Plateaux — Djibi'],
        ['Agence CNPS de rattachement', 'Cocody'],
        ['Directeur de la publication', 'Bouramala Yaya Sanogo, Directeur général'],
        ['Email', 'sosaf.ci.export@gmail.com'],
        ['Téléphone', '+223 89 13 45 55'],
      ] },
      { h: "Hébergement", p: [
        "Le site est hébergé par Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis — vercel.com.",
      ] },
      { h: "Propriété intellectuelle", p: [
        "L'ensemble des éléments composant le site — textes, photographies, logotype, charte graphique, illustrations et structure — est la propriété exclusive de SOSAF-CI ou de ses partenaires, et est protégé par la législation ivoirienne et internationale relative à la propriété intellectuelle.",
        "Toute reproduction, représentation, adaptation ou exploitation, totale ou partielle, sur quelque support que ce soit, est interdite sans autorisation écrite préalable de SOSAF-CI.",
      ] },
      { h: "Responsabilité", p: [
        "SOSAF-CI s'efforce d'assurer l'exactitude et la mise à jour des informations publiées sur le site. Les caractéristiques produits, calibres, saisons et conditionnements sont donnés à titre indicatif et peuvent varier selon les récoltes et les campagnes.",
        "Seules les informations figurant sur un devis ou une confirmation de commande signés par SOSAF-CI ont valeur contractuelle.",
        "SOSAF-CI ne saurait être tenue responsable des dommages directs ou indirects résultant de l'accès au site ou de l'utilisation des informations qui y figurent.",
      ] },
      { h: "Liens externes", p: [
        "Le site peut contenir des liens vers des sites tiers. SOSAF-CI n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu.",
      ] },
      { h: "Droit applicable", p: [
        "Le présent site et les présentes mentions légales sont soumis au droit ivoirien. Tout litige relatif à leur interprétation ou à leur exécution relève de la compétence des tribunaux d'Abidjan.",
      ] },
    ],
  },

  cgv: {
    slug: 'cgv',
    eyebrow: 'Conditions',
    title: 'Conditions générales de vente',
    updated: 'Dernière mise à jour : août 2026',
    intro: "Les présentes conditions générales de vente régissent les relations entre SOSAF-CI, société d'import-export établie à Abidjan, et ses clients professionnels dans le cadre de la vente à l'export de fruits tropicaux.",
    sections: [
      { h: '1. Champ d\u2019application', p: [
        "Les présentes conditions s'appliquent à toute commande passée auprès de SOSAF-CI par un acheteur professionnel. Toute commande implique l'acceptation sans réserve des présentes conditions, qui prévalent sur les conditions d'achat de l'acheteur, sauf accord écrit contraire.",
      ] },
      { h: '2. Produits', p: [
        "SOSAF-CI commercialise des fruits tropicaux frais d'origine Côte d'Ivoire : mangue (Kent, Amélie), noix de coco, avocat (Hass, Fuerte), banane (Cavendish) et ananas (MD2, Cayenne Lisse, Pain de Sucre).",
        "Les calibres, variétés, saisons et conditionnements indiqués sur le site le sont à titre indicatif. La disponibilité effective dépend des campagnes de récolte et des conditions agroclimatiques.",
      ] },
      { h: '3. Commandes et devis', p: [
        "Toute demande donne lieu à l'établissement d'un devis détaillé, transmis sous 24 heures ouvrées. Le devis précise les produits, volumes, calibres, conditionnements, prix unitaires, incoterm applicable, délais et modalités de paiement.",
        "La vente est réputée conclue à réception par SOSAF-CI du devis signé par l'acheteur et de l'acompte prévu. SOSAF-CI se réserve le droit de refuser toute commande pour motif légitime.",
      ] },
      { h: '4. Prix et incoterms', p: [
        "Les prix sont exprimés hors taxes, dans la devise indiquée au devis, et s'entendent selon l'incoterm convenu (Incoterms® 2020), le plus souvent FOB Abidjan ou CFR port de destination.",
        "Les prix sont fermes pour la durée de validité du devis. Au-delà, ils sont susceptibles de révision en fonction des cours, des coûts de fret et des charges portuaires.",
      ] },
      { h: '5. Paiement', p: [
        "Sauf accord particulier, les commandes sont réglées selon les modalités précisées au devis : acompte à la commande et solde avant embarquement, virement bancaire, ou crédit documentaire irrévocable.",
        "Tout retard de paiement entraîne de plein droit l'application de pénalités de retard au taux légal en vigueur, sans qu'un rappel soit nécessaire, ainsi que la suspension des expéditions en cours.",
      ] },
      { h: '6. Qualité, contrôle et certifications', p: [
        "Chaque lot fait l'objet d'un contrôle qualité avant expédition. SOSAF-CI travaille avec des coopératives et stations de conditionnement certifiées GlobalG.A.P. pour la mangue et la noix de coco.",
        "Les documents accompagnant l'expédition (certificat phytosanitaire, certificat d'origine, liste de colisage, facture commerciale, connaissement) sont fournis selon la nature de la commande et la destination.",
      ] },
      { h: '7. Expédition et transfert des risques', p: [
        "Les expéditions sont réalisées par voie maritime en conteneurs réfrigérés (10 à 20 jours) ou par voie aérienne (2 à 5 jours), selon la destination et l'urgence.",
        "Le transfert des risques s'opère conformément à l'incoterm convenu. Les délais d'acheminement sont donnés à titre indicatif ; SOSAF-CI ne saurait être tenue responsable des retards imputables au transporteur, aux autorités portuaires ou douanières, ou à un cas de force majeure.",
      ] },
      { h: '8. Réclamations', p: [
        "Toute réclamation relative à la qualité ou à la conformité de la marchandise doit être notifiée par écrit dans un délai de 48 heures suivant le déchargement, accompagnée d'un rapport d'expertise et de photographies datées.",
        "S'agissant de produits frais et périssables, aucune réclamation ne sera recevable au-delà de ce délai ou en cas de rupture de la chaîne du froid après transfert des risques.",
      ] },
      { h: '9. Force majeure', p: [
        "SOSAF-CI ne saurait être tenue responsable de l'inexécution de ses obligations en cas de force majeure : intempéries exceptionnelles, épidémie végétale, grève portuaire, fermeture de frontière, décision administrative ou tout événement échappant à son contrôle raisonnable.",
      ] },
      { h: '10. Droit applicable et litiges', p: [
        "Les présentes conditions sont soumises au droit ivoirien. En cas de litige, les parties rechercheront une solution amiable. À défaut d'accord, compétence exclusive est attribuée aux tribunaux d'Abidjan.",
      ] },
    ],
  },

  confidentialite: {
    slug: 'confidentialite',
    eyebrow: 'Données personnelles',
    title: 'Politique de confidentialité',
    updated: 'Dernière mise à jour : août 2026',
    intro: "SOSAF-CI attache une importance particulière à la protection des données personnelles de ses clients, prospects et visiteurs. La présente politique décrit les données collectées, leur usage et les droits dont vous disposez.",
    sections: [
      { h: 'Responsable du traitement', p: [
        "Le responsable du traitement est SOSAF-CI, dont le siège social est situé à Abidjan, Cocody, Angré, 9ème Tranche — Lot N446B, Îlot N20, 23 BP 1099 Abidjan 23, Côte d'Ivoire.",
        "Pour toute question relative à vos données : sosaf.ci.export@gmail.com.",
      ] },
      { h: 'Données collectées', p: [
        "Nous ne collectons que les données strictement nécessaires au traitement de votre demande :",
      ], ul: [
        "Identité et coordonnées professionnelles : nom, adresse email, numéro de téléphone, société et pays.",
        "Contenu de votre message : nature de la demande, produits, volumes et destination.",
        "Données techniques de connexion : adresse IP, type de navigateur, pages consultées, à des fins de sécurité et de mesure d'audience.",
      ] },
      { h: 'Finalités et bases légales', p: [
        "Les données sont traitées pour répondre à vos demandes de devis et de renseignement, établir et exécuter les contrats commerciaux, assurer le suivi de la relation client et satisfaire à nos obligations légales, comptables et douanières.",
        "Les traitements reposent selon les cas sur votre consentement, sur l'exécution de mesures précontractuelles ou contractuelles, ou sur notre intérêt légitime à développer notre activité.",
      ] },
      { h: 'Destinataires', p: [
        "Les données sont destinées aux équipes commerciales et administratives de SOSAF-CI. Elles peuvent être communiquées à nos partenaires logistiques, transitaires, transporteurs et établissements bancaires lorsque l'exécution de la commande l'exige, ainsi qu'aux autorités administratives et douanières sur réquisition.",
        "SOSAF-CI ne vend ni ne loue vos données à des tiers.",
      ] },
      { h: 'Durée de conservation', p: [
        "Les demandes de contact non suivies d'une relation commerciale sont conservées trois ans à compter du dernier échange. Les données liées à une commande sont conservées pendant la durée de la relation commerciale, puis archivées conformément aux délais légaux de conservation comptable et douanière.",
      ] },
      { h: 'Sécurité', p: [
        "SOSAF-CI met en œuvre des mesures techniques et organisationnelles appropriées pour protéger les données contre la perte, l'altération et l'accès non autorisé : accès restreint aux personnes habilitées, connexions chiffrées, sauvegardes régulières.",
      ] },
      { h: 'Cookies', p: [
        "Le site utilise des cookies strictement nécessaires à son fonctionnement, ainsi que, le cas échéant, des cookies de mesure d'audience. Vous pouvez configurer votre navigateur pour les refuser ; certaines fonctionnalités peuvent alors être dégradées.",
      ] },
      { h: 'Vos droits', p: [
        "Conformément à la loi n° 2013-450 du 19 juin 2013 relative à la protection des données à caractère personnel en Côte d'Ivoire, vous disposez d'un droit d'accès, de rectification, d'effacement, d'opposition et de limitation du traitement de vos données, ainsi que d'un droit à la portabilité.",
        "Ces droits s'exercent par simple demande à sosaf.ci.export@gmail.com, accompagnée d'un justificatif d'identité. Une réponse vous sera apportée dans un délai d'un mois.",
        "Vous pouvez également introduire une réclamation auprès de l'Autorité de Régulation des Télécommunications/TIC de Côte d'Ivoire (ARTCI).",
      ] },
      { h: 'Modifications', p: [
        "SOSAF-CI se réserve le droit de modifier la présente politique afin de l'adapter aux évolutions légales ou à ses pratiques. La date de dernière mise à jour figure en tête de document.",
      ] },
    ],
  },
};

const LEGAL_DOCS_EN = {
  mentions: {
    slug: 'legal-notice',
    eyebrow: 'Legal information',
    title: 'Legal notice',
    updated: 'Last updated: August 2026',
    intro: 'In accordance with the legal provisions in force in the Republic of Côte d\u2019Ivoire, the following information is made available to users of sosafci-export.com.',
    sections: [
      { h: 'Site publisher', p: [
        'This site is published by SOSAF-CI, an import-export company dealing in tropical agricultural products.',
      ], dl: [
        ['Company name', 'SOSAF-CI'],
        ['Legal form', 'SARL (limited liability company)'],
        ['Share capital', 'XOF 1,000,000'],
        ['Registered office', 'Abidjan, Cocody, Angré, 9th Tranche — Lot N446B, Ïlot N20 — 23 BP 1099 Abidjan 23, Ivory Coast'],
        ['Trade register (RCCM)', 'CI-ABJ-03-2024-B21-00015'],
        ['Tax office', 'SAID II Plateaux — Djibi'],
        ['CNPS branch', 'Cocody'],
        ['Publication director', 'Bouramala Yaya Sanogo, Managing Director'],
        ['Email', 'sosaf.ci.export@gmail.com'],
        ['Phone', '+223 89 13 45 55'],
      ] },
      { h: 'Hosting', p: [
        'The site is hosted by Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, United States — vercel.com.',
      ] },
      { h: 'Intellectual property', p: [
        'All elements making up the site — texts, photographs, logotype, graphic identity, illustrations and structure — are the exclusive property of SOSAF-CI or its partners, and are protected by Ivorian and international intellectual property law.',
        'Any reproduction, representation, adaptation or exploitation, in whole or in part, on any medium whatsoever, is prohibited without the prior written consent of SOSAF-CI.',
      ] },
      { h: 'Liability', p: [
        'SOSAF-CI endeavours to keep the information published on the site accurate and up to date. Product characteristics, sizes, seasons and packing formats are indicative and may vary with each harvest and campaign.',
        'Only the information appearing on a quotation or order confirmation signed by SOSAF-CI is contractually binding.',
        'SOSAF-CI cannot be held liable for any direct or indirect damage resulting from access to the site or from the use of the information it contains.',
      ] },
      { h: 'External links', p: [
        'The site may contain links to third-party sites. SOSAF-CI exercises no control over those sites and accepts no responsibility for their content.',
      ] },
      { h: 'Governing law', p: [
        'This site and this legal notice are governed by Ivorian law. Any dispute relating to their interpretation or performance falls within the jurisdiction of the courts of Abidjan.',
      ] },
    ],
  },

  cgv: {
    slug: 'terms',
    eyebrow: 'Terms',
    title: 'Terms and conditions of sale',
    updated: 'Last updated: August 2026',
    intro: 'These terms and conditions govern the relationship between SOSAF-CI, an import-export company established in Abidjan, and its business customers in connection with the export sale of tropical fruit.',
    sections: [
      { h: '1. Scope', p: [
        'These terms apply to every order placed with SOSAF-CI by a business buyer. Placing an order implies unreserved acceptance of these terms, which prevail over the buyer\u2019s own purchasing terms unless otherwise agreed in writing.',
      ] },
      { h: '2. Products', p: [
        'SOSAF-CI sells fresh tropical fruit originating from Ivory Coast: mango (Kent, Amélie), coconut, avocado (Hass, Fuerte), banana (Cavendish) and pineapple (MD2, Smooth Cayenne, Sugarloaf).',
        'The sizes, varieties, seasons and packing formats shown on the site are indicative. Actual availability depends on harvest campaigns and agroclimatic conditions.',
      ] },
      { h: '3. Orders and quotations', p: [
        'Every enquiry gives rise to a detailed quotation, issued within 24 working hours. The quotation states the products, volumes, sizes, packing, unit prices, applicable incoterm, lead times and payment terms.',
        'The sale is concluded when SOSAF-CI receives the quotation signed by the buyer together with the agreed deposit. SOSAF-CI reserves the right to decline any order on legitimate grounds.',
      ] },
      { h: '4. Prices and incoterms', p: [
        'Prices are quoted excluding tax, in the currency stated on the quotation, under the agreed incoterm (Incoterms® 2020), most commonly FOB Abidjan or CFR port of destination.',
        'Prices are firm for the validity period of the quotation. Beyond that period they may be revised in line with market rates, freight costs and port charges.',
      ] },
      { h: '5. Payment', p: [
        'Unless otherwise agreed, orders are settled as stated on the quotation: deposit on order and balance before shipment, bank transfer, or irrevocable documentary credit.',
        'Late payment automatically triggers late-payment interest at the statutory rate, without the need for a reminder, and the suspension of any shipments in progress.',
      ] },
      { h: '6. Quality, inspection and certification', p: [
        'Every lot is quality-inspected before shipment. SOSAF-CI works with GlobalG.A.P.-certified cooperatives and packing stations for mango and coconut.',
        'The documents accompanying the shipment (phytosanitary certificate, certificate of origin, packing list, commercial invoice, bill of lading) are supplied according to the nature of the order and the destination.',
      ] },
      { h: '7. Shipment and transfer of risk', p: [
        'Shipments are made by sea in reefer containers (10 to 20 days) or by air (2 to 5 days), depending on destination and urgency.',
        'Risk transfers in accordance with the agreed incoterm. Transit times are indicative; SOSAF-CI cannot be held liable for delays attributable to the carrier, port or customs authorities, or to force majeure.',
      ] },
      { h: '8. Claims', p: [
        'Any claim relating to the quality or conformity of the goods must be notified in writing within 48 hours of discharge, together with a survey report and dated photographs.',
        'As these are fresh, perishable goods, no claim will be admissible after that period or where the cold chain has been broken after the transfer of risk.',
      ] },
      { h: '9. Force majeure', p: [
        'SOSAF-CI cannot be held liable for failure to perform its obligations in the event of force majeure: exceptional weather, plant disease outbreak, port strike, border closure, administrative decision or any event beyond its reasonable control.',
      ] },
      { h: '10. Governing law and disputes', p: [
        'These terms are governed by Ivorian law. In the event of a dispute, the parties will seek an amicable settlement. Failing agreement, exclusive jurisdiction is granted to the courts of Abidjan.',
      ] },
    ],
  },

  confidentialite: {
    slug: 'privacy',
    eyebrow: 'Personal data',
    title: 'Privacy policy',
    updated: 'Last updated: August 2026',
    intro: 'SOSAF-CI attaches particular importance to protecting the personal data of its customers, prospects and visitors. This policy describes the data we collect, how we use it and the rights available to you.',
    sections: [
      { h: 'Data controller', p: [
        'The data controller is SOSAF-CI, whose registered office is at Abidjan, Cocody, Angré, 9th Tranche — Lot N446B, Ïlot N20, 23 BP 1099 Abidjan 23, Ivory Coast.',
        'For any question about your data: sosaf.ci.export@gmail.com.',
      ] },
      { h: 'Data collected', p: [
        'We collect only the data strictly necessary to handle your request:',
      ], ul: [
        'Identity and business contact details: name, email address, telephone number, company and country.',
        'The content of your message: nature of the request, products, volumes and destination.',
        'Technical connection data: IP address, browser type, pages viewed, for security and audience measurement.',
      ] },
      { h: 'Purposes and legal bases', p: [
        'Data is processed to respond to your quotation and information requests, to establish and perform commercial contracts, to manage the customer relationship and to meet our legal, accounting and customs obligations.',
        'Processing rests, depending on the case, on your consent, on pre-contractual or contractual measures, or on our legitimate interest in developing our business.',
      ] },
      { h: 'Recipients', p: [
        'Data is intended for the commercial and administrative teams of SOSAF-CI. It may be shared with our logistics partners, freight forwarders, carriers and banks where the performance of the order requires it, and with administrative and customs authorities upon lawful request.',
        'SOSAF-CI neither sells nor rents your data to third parties.',
      ] },
      { h: 'Retention period', p: [
        'Contact enquiries not followed by a commercial relationship are kept for three years from the last exchange. Data linked to an order is kept for the duration of the commercial relationship, then archived in line with statutory accounting and customs retention periods.',
      ] },
      { h: 'Security', p: [
        'SOSAF-CI implements appropriate technical and organisational measures to protect data against loss, alteration and unauthorised access: access restricted to authorised staff, encrypted connections, regular backups.',
      ] },
      { h: 'Cookies', p: [
        'The site uses cookies strictly necessary for its operation and, where applicable, audience-measurement cookies. You may configure your browser to refuse them; some features may then be degraded.',
      ] },
      { h: 'Your rights', p: [
        'Under law no. 2013-450 of 19 June 2013 on the protection of personal data in Ivory Coast, you have the right to access, rectify, erase, object to and restrict the processing of your data, as well as a right to data portability.',
        'These rights may be exercised by simple request to sosaf.ci.export@gmail.com, accompanied by proof of identity. You will receive a reply within one month.',
        'You may also lodge a complaint with the Ivorian Telecommunications/ICT Regulatory Authority (ARTCI).',
      ] },
      { h: 'Changes', p: [
        'SOSAF-CI reserves the right to amend this policy to reflect legal developments or changes in its practices. The date of the latest update appears at the top of the document.',
      ] },
    ],
  },
};

const LEGAL_NAV = [
  { key: 'mentions', label: 'Mentions légales', href: 'mentions-legales.html' },
  { key: 'cgv', label: 'CGV', href: 'cgv.html' },
  { key: 'confidentialite', label: 'Confidentialité', href: 'confidentialite.html' },
];

const LEGAL_NAV_EN = [
  { key: 'mentions', label: 'Legal notice', href: 'legal-notice.html' },
  { key: 'cgv', label: 'Terms of sale', href: 'terms.html' },
  { key: 'confidentialite', label: 'Privacy', href: 'privacy.html' },
];

window.LEGAL_DOCS = LEGAL_DOCS;
window.LEGAL_NAV = LEGAL_NAV;
window.LEGAL = {
  fr: { docs: LEGAL_DOCS, nav: LEGAL_NAV, back: '← Retour au site' },
  en: { docs: LEGAL_DOCS_EN, nav: LEGAL_NAV_EN, back: '← Back to the site' },
};
