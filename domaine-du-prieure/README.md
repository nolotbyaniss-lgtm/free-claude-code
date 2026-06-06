# Domaine du Prieuré — site vitrine

Site vitrine pour le **Domaine du Prieuré** (Grèzes, près de Carcassonne) : deux
gîtes de charme dans un ancien couvent (1877) et un presbytère médiéval (1460).

## Stack

- **Next.js 16** (App Router) + **TypeScript**
- **Tailwind CSS v4** (thème dans `globals.css`, palette terre cuite / sauge / pierre)
- **React Three Fiber** + **drei** — visite 3D interactive du domaine
- **lucide-react** — icônes
- Polices : Cormorant Garamond (titres) + Inter (texte)

## Pages

| Route | Contenu |
| --- | --- |
| `/` | Accueil : hero, présentation, gîtes, visite 3D, équipements, avis |
| `/les-gites` | Fiches détaillées du Couvent et du Presbytère |
| `/le-domaine` | Équipements, démarche éco-responsable, accès |
| `/histoire` | Frise chronologique 1460 → aujourd'hui |
| `/visite` | Visite 3D plein écran avec transitions caméra |
| `/contact` | Coordonnées + formulaire de demande |

## Visite 3D

Maquette procédurale (React Three Fiber) : bâtiments, piscine, jardin et cyprès.
La caméra effectue des transitions fluides entre les points d'intérêt via
`CameraControls` (drei). Le composant est chargé côté client uniquement
(`next/dynamic`, `ssr: false`).

## Démarrage

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de production
npm run start    # serveur de production
```

## À personnaliser

- **Photos** : remplacer `/public/placeholder.jpg` par les vraies photos du
  domaine, et renseigner `photo` dans `src/data/mock.ts`.
- **Formulaire de contact** : brancher un service d'envoi dans
  `src/components/contact-form.tsx` (actuellement démo sans requête réseau).
- **Réseaux sociaux** : liens dans `src/components/layout/footer.tsx`.
