# SOSAF-CI — Site Web Export Fruits Tropicaux

> Site vitrine B2B pour SOSAF-CI, entreprise d'export de fruits tropicaux basée à Abidjan, Côte d'Ivoire.  
> Cible : importateurs européens et Moyen-Orient.

**URL Production :** `https://sosafsarl.com` (Vercel)  
**Repo :** `https://github.com/famoussa81/sosaf-ci`  
**Compte GitHub :** `famoussa81`

---

## Architecture

```
sosaf-ci/
├── public/                    ← Site statique (servi par Vercel CDN)
│   ├── index.html             ← Version française (page unique)
│   ├── en/
│   │   ├── index.html         ← Version anglaise
│   │   └── legal-notice.html  ← Mentions légales EN
│   ├── mentions-legales.html  ← Mentions légales FR
│   ├── robots.txt             ← SEO
│   ├── sitemap.xml            ← SEO (FR + EN + légal)
│   ├── logo.svg / logo.png    ← Logo SOSAF-CI
│   └── *.jpeg                 ← Photos produits (WhatsApp)
├── api/
│   └── contact.js             ← Serverless function (Vercel) — formulaire contact
├── vercel.json                ← Config Vercel (headers sécurité, cache, rewrites)
├── package.json               ← Dépendance : resend@4.1.2
├── server.js                  ← Serveur Express pour dev local
├── produits.csv               ← Données initiales (importé dans Google Sheet)
├── GUIDE-PRODUITS.md          ← Guide client pour gérer les produits
├── .env.example               ← Variables d'environnement nécessaires
├── .gitignore                 ← node_modules, .env, *.log
└── README.md                  ← Ce fichier
```

---

## Stack technique

| Composant | Technologie |
|---|---|
| Frontend | HTML/CSS/JS vanilla (single page, pas de framework) |
| Hébergement | Vercel (free tier) |
| Backend | Vercel Serverless Function (Node.js) |
| Email | Resend API (free tier) |
| CMS Produits | Google Sheets (fetch CSV côté client) |
| DNS/Domaine | Vercel Domains (sosafsarl.com) |
| Repo | GitHub |

---

## Fonctionnalités

### Pages
- **`/`** — Version française (page d'accueil par défaut)
- **`/en/`** — Version anglaise
- **`/mentions-legales.html`** — Mentions légales FR
- **`/en/legal-notice.html`** — Legal notice EN

### Sections (dans l'ordre)
1. **Hero** — Accroche + CTA + image parallax (parallax désactivé sur mobile < 768px)
2. **Présentation** — Description société + stats animées (100%, 200+, 15+)
3. **Produits** — Cartes dynamiques (chargées depuis Google Sheet)
4. **Certifications** — GlobalG.A.P.
5. **Process** — 4 étapes de commande
6. **FAQ** — 8 questions accordéon
7. **Contact** — Formulaire + infos + WhatsApp
8. **Footer** — Navigation + mentions légales

### Lightbox Gallery
- Chaque produit a une galerie photo (lightbox en overlay)
- Navigation : flèches, clavier (←/→/Esc), swipe tactile
- Changement d'image instantané (opacity fade 120ms)
- Données galerie populées dynamiquement depuis le Google Sheet

### Formulaire de contact
- Endpoint : `POST /api/contact`
- Validation côté client ET serveur
- Envoi via Resend API
- Protection : honeypot, rate limiting (5/15min/IP), sanitization, XSS escape

### Détection de langue
- Script dans `<head>` de la version FR
- Si le navigateur n'est PAS en français → redirect vers `/en/`
- Une seule fois par session (sessionStorage)
- Clic manuel sur switch FR/EN enregistre le choix

---

## CMS — Google Sheet

### Sheet ID
```
1T9VDfbyFXO5j1CC-gTD4iuHfHhZbvF88dIYcYDR4Y3c
```

### URL de fetch
```
https://docs.google.com/spreadsheets/d/1T9VDfbyFXO5j1CC-gTD4iuHfHhZbvF88dIYcYDR4Y3c/gviz/tq?tqx=out:csv
```

### Colonnes du Sheet
| Colonne | Obligatoire | Description |
|---|---|---|
| `id` | ✅ | Identifiant unique (a-z, 0-9, -, _) |
| `nom` | ✅ | Nom du produit (max 30 chars) |
| `sous_titre` | | Description courte (max 80 chars) |
| `photo_couverture` | ✅ | Nom fichier image principale |
| `photo_2` à `photo_8` | | Photos supplémentaires galerie |
| `champ1_label` / `champ1_valeur` | | 1er champ info |
| `champ2_label` / `champ2_valeur` | | 2ème champ info |
| `champ3_label` / `champ3_valeur` | | 3ème champ info |
| `champ4_label` / `champ4_valeur` | | 4ème champ info |
| `certification` | | Texte du badge (ex: "GlobalG.A.P.") |

### Limites de sécurité (dans le code)
```javascript
const CMS_LIMITS = {
  maxProducts: 10,       // Maximum 10 produits
  maxPhotos: 8,          // Maximum 8 photos par produit
  maxNameLength: 30,     // Nom du produit
  maxSubtitleLength: 80, // Sous-titre
  maxFieldValue: 50,     // Valeur d'un champ info
  maxFields: 4,          // 4 champs max affichés (grille 2x2)
  requiredColumns: ['id', 'nom', 'photo_couverture']
};
```

### Protections
- Lignes sans id/nom/photo → ignorées
- Texte trop long → tronqué avec "…"
- HTML/scripts injectés → échappés (XSS sanitization)
- Colonnes inconnues → ignorées
- Sheet inaccessible → section vide (fallback silencieux)

---

## Variables d'environnement

Configurées dans **Vercel Dashboard → Settings → Environment Variables** :

| Variable | Valeur | Description |
|---|---|---|
| `RESEND_API_KEY` | `re_BW2Wg8nS_...` | Clé API Resend |
| `CONTACT_EMAIL_TO` | `m.sanogo@sosafsarl.com` | Destinataire des messages |
| `CONTACT_EMAIL_FROM` | `SOSAF-CI <onboarding@resend.dev>` | Expéditeur (changer après vérification domaine) |

---

## Sécurité

### Headers HTTP (vercel.json)
- `Strict-Transport-Security` — HSTS 2 ans + preload
- `Content-Security-Policy` — Scripts/styles self + inline, images Unsplash autorisées, connect Google Sheets
- `X-Frame-Options: DENY` — Anti-clickjacking
- `X-Content-Type-Options: nosniff` — Anti-MIME sniffing
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy` — Caméra, micro, géoloc bloqués

### API Contact
- CORS restreint aux domaines autorisés (sosafsarl.com + *.vercel.app)
- Rate limiting : 5 requêtes / 15 min / IP
- Honeypot anti-bot
- Validation + sanitization des inputs
- Escape HTML dans le template email
- Messages limités à 2000 caractères

---

## Développement local

```bash
# Cloner
git clone https://github.com/famoussa81/sosaf-ci.git
cd sosaf-ci

# Installer dépendances
npm install

# Créer .env
cp .env.example .env
# Remplir RESEND_API_KEY, CONTACT_EMAIL_TO, CONTACT_EMAIL_FROM

# Lancer le serveur local
node server.js
# → http://localhost:3000
```

Le serveur local sert les fichiers statiques de `public/` et expose `POST /api/contact`.

---

## Déploiement

Le déploiement est **automatique** : chaque push sur `master` déclenche un redéploiement Vercel.

```bash
git add -A
git commit -m "description du changement"
git push origin master
# → Vercel redéploie en ~30 secondes
```

---

## Git — Commandes utiles

```bash
# Depuis PowerShell (Windows)
powershell -Command "cd 'C:\Users\PC\Projects\sosaf-ci'; git status"
powershell -Command "cd 'C:\Users\PC\Projects\sosaf-ci'; git log --oneline -5"
powershell -Command "cd 'C:\Users\PC\Projects\sosaf-ci'; git add -A; git commit -m 'message'; git push origin master"

# GitHub CLI
& 'C:\Program Files\GitHub CLI\gh.exe' auth status
```

---

## Ajouter des photos

1. Recevoir les photos du client (WhatsApp, email, etc.)
2. Les renommer proprement : `produit-XX.jpeg` (ex: `papaye-01.jpeg`)
3. Les copier dans `public/`
4. Commit + push
5. Donner le nom du fichier au client pour qu'il le mette dans le Sheet

---

## Ajouter une nouvelle langue

1. Copier `public/en/index.html` → `public/XX/index.html`
2. Traduire tout le texte visible
3. Changer `lang="en"` → `lang="XX"`
4. Mettre à jour les liens (`href="/"` → page FR, `href="/XX/"` → cette langue)
5. Ajouter un switch de langue dans la nav
6. Ajouter les hreflang dans toutes les versions
7. Mettre à jour `sitemap.xml`

---

## Contacts projet

| Rôle | Nom | Contact |
|---|---|---|
| Directeur | Mohamed Sanogo | m.sanogo@sosafsarl.com / +225 07 10 00 65 00 |
| Export Manager | Bouramala Yaya Sanogo | bouramalayayasanogo@gmail.com / +223 89 13 45 55 |

---

## Informations légales

- **Société :** SOSAF-CI SARL
- **RCCM :** CI-ABJ-03-2024-B21-00015
- **Siège :** Cocody, Angré, 9ème Tranche, Lot N446B, Îlot N20
- **Adresse postale :** 23 BP 1099 Abidjan 23, Côte d'Ivoire

---

## TODO / Améliorations futures

- [ ] Acheter et connecter le domaine `sosafsarl.com` sur Vercel
- [ ] Vérifier le domaine sur Resend → emails depuis `contact@sosafsarl.com`
- [ ] Remplacer les 2 images Unsplash restantes (hero + présentation) par de vraies photos
- [ ] Google Analytics (optionnel)
- [ ] Version arabe (si demandée par clients Moyen-Orient)
- [ ] Mettre à jour la version EN pour utiliser le Google Sheet CMS (actuellement hardcodée)

---

*Dernière mise à jour : 14 juillet 2026*
