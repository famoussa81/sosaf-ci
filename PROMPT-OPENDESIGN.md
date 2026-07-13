# Prompt OpenDesign — Corrections SOSAF-CI

## Contexte
Site vitrine B2B export de fruits tropicaux (SOSAF-CI, Côte d'Ivoire). Clients cibles : importateurs européens et entreprises du Moyen-Orient. Le site actuel est trop long avec des sections redondantes et manque d'éléments de conversion.

## Corrections à faire

### 1. Supprimer les sections redondantes
- **Supprimer entièrement "Capacité d'approvisionnement"** — c'est un doublon de "Pourquoi nous"
- **Supprimer entièrement "Pourquoi nous"** — les infos pertinentes (certifié, réseau fiable, fourniture régulière) sont déjà dans la section Présentation
- **Supprimer "Logistique / Conditionnement"** — déplacer les infos clés (maritime/aérien, documents) dans la FAQ

### 2. Structure finale du site (dans cet ordre)
1. Hero (inchangé)
2. Présentation (inchangé)
3. Produits (inchangé)
4. Certifications (inchangé)
5. **NOUVEAU : Process de commande** — section visuelle en 3-4 étapes : Demande de devis → Validation & paiement → Préparation & documents → Expédition. Style clean, icônes, timeline horizontale.
6. FAQ — garder les questions actuelles + ajouter celles sur la logistique et les documents
7. Contact — formulaire + bouton WhatsApp
8. Footer

### 3. Ajouter un bouton WhatsApp flottant
- Bouton rond en bas à droite, toujours visible
- Couleur WhatsApp (#25D366) ou accent du site (#00ed64)
- Ouvre `https://wa.me/2250710006500` (numéro du directeur)
- Icône WhatsApp SVG
- Animation subtile au hover
- Sur mobile : plus gros (56px), bien accessible au pouce

### 4. Section "Process de commande" (nouvelle)
- Titre : "Comment commander"
- 4 étapes visuelles avec icônes et descriptions courtes :
  1. Contactez-nous (email ou WhatsApp) avec vos besoins
  2. Recevez votre devis sous 24h
  3. Validation, paiement et préparation
  4. Expédition maritime ou aérienne avec tous les documents
- Style : timeline horizontale sur desktop, verticale sur mobile
- Même design system que le reste (dark section, accent vert, font mono pour les numéros)

### 5. Améliorer la section Contact
- Ajouter un gros bouton WhatsApp à côté du formulaire (pas juste le numéro en texte)
- Texte sous le bouton : "Réponse immédiate sur WhatsApp"
- Garder le formulaire email pour les demandes formelles

### 6. Footer amélioré
- Ajouter les liens de navigation rapide
- Ajouter "Mentions légales" (lien vide pour l'instant)
- Mettre "© 2026" au lieu de "© 2025"

### 7. SEO & Meta
- Garder toutes les meta existantes, elles sont bonnes

## Contraintes
- **Même design system** : dark #001e2b, accent #00ed64, Playfair Display + Inter + Source Code Pro
- **Même responsive** : breakpoints de 360px à 1920px
- **Single page** : tout dans un seul index.html
- **Pas de framework** : HTML/CSS/JS pur
- **Garder toutes les animations** : reveal au scroll, parallax, counter, FAQ accordion, lightbox
- **Garder tous les produits avec leurs galeries photos intactes**
- **Ne pas ajouter de faux témoignages ou faux logos clients**

## Résultat attendu
Un site plus court, plus direct, avec un parcours clair : le visiteur voit les produits → comprend le process → contacte par WhatsApp ou email. Moins de scroll, plus de conversion.
