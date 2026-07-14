# Guide — Gérer les produits du site SOSAF-CI

## Comment ça marche
Le site affiche automatiquement les produits depuis votre Google Sheet.
Quand vous modifiez le Sheet, le site se met à jour tout seul.

---

## ⚠️ RÈGLES IMPORTANTES — À ne pas faire

| ❌ NE PAS FAIRE | ✅ À FAIRE |
|---|---|
| Ne pas renommer les en-têtes (ligne 1) | Modifier uniquement les lignes 2 et plus |
| Ne pas ajouter plus de 10 produits | 10 produits max, supprimer avant d'ajouter |
| Ne pas supprimer la ligne 1 (en-têtes) | La garder intacte |
| Ne pas mettre de texte très long | Max 30 caractères pour le nom, 50 pour les valeurs |
| Ne pas laisser "id" ou "nom" vide | Chaque produit DOIT avoir un id et un nom |

---

## Comment AJOUTER un produit

1. Allez à la dernière ligne remplie
2. Ajoutez une nouvelle ligne en dessous
3. Remplissez les colonnes :
   - **id** : un mot simple en anglais, sans espaces (ex: `papaya`, `cashew`)
   - **nom** : Le nom du fruit (ex: Papaye)
   - **sous_titre** : Description courte (ex: Origine Côte d'Ivoire · Variété Solo)
   - **photo_couverture** : Nom du fichier image (ex: papaye-01.jpeg)
   - **photo_2 à photo_5** : Photos supplémentaires (laisser vide si pas de photo)
   - **champ1_label / champ1_valeur** : Premier info (ex: Variété / Solo)
   - **champ2_label / champ2_valeur** : Deuxième info
   - **champ3_label / champ3_valeur** : Troisième info
   - **champ4_label / champ4_valeur** : Quatrième info
   - **certification** : Écrire "GlobalG.A.P." ou laisser vide

---

## Comment MODIFIER un produit

Modifiez directement la case concernée. Le site se met à jour automatiquement.

---

## Comment SUPPRIMER un produit

Supprimez la ligne entière (clic droit → Supprimer la ligne).

---

## Les PHOTOS

Les photos doivent être hébergées sur le site. Pour ajouter une nouvelle photo :
1. Envoyez la photo à votre développeur
2. Il l'ajoutera au site et vous donnera le nom du fichier
3. Vous mettez ce nom dans la colonne photo

**Noms de photos actuels :**
- mangue-01.jpeg à mangue-05.jpeg
- coco-01.jpeg, coco-02.jpeg
- ananas-01.jpeg
- mrim... (photos WhatsApp existantes)

---

## LIMITES

- **10 produits maximum**
- **8 photos maximum** par produit
- **4 champs d'information** maximum par produit
- **Nom** : 30 caractères max
- **Sous-titre** : 80 caractères max
- **Valeur d'un champ** : 50 caractères max

Si vous dépassez ces limites, le texte sera coupé automatiquement.

---

## En cas de problème

Si le site n'affiche plus les produits :
1. Vérifiez que la ligne 1 (en-têtes) n'a pas été modifiée
2. Vérifiez que chaque produit a un **id**, un **nom** et une **photo_couverture**
3. Contactez votre développeur

---

*Dernière mise à jour : Juillet 2026*
