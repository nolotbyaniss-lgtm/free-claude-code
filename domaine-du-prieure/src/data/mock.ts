import type { Gite, Amenity, Avis, Hotspot } from '@/types'

export const contact = {
  nom: 'Domaine du Prieuré',
  hotes: 'Sabrina & Benoît',
  lieu: 'Grèzes, 11000 Carcassonne',
  region: 'Aude · Occitanie',
  telephone: '06 67 94 01 73',
  telephoneRaw: '0667940173',
  email: 'couvent_carcassonne@yahoo.fr',
  distanceCentre: '10 min du centre de Carcassonne',
}

export const gites: Gite[] = [
  {
    id: '1',
    slug: 'le-couvent',
    nom: 'Le Couvent',
    sousTitre: 'Ancien couvent de la Sainte-Famille',
    annee: '1877',
    capacite: 8,
    surface: '200 m²',
    chambres: 4,
    description:
      "Niché dans le hameau pittoresque de Grèzes, l'ancien Couvent de la Sainte-Famille, bâti en 1877, a été entièrement rénové pour accueillir jusqu'à 8 personnes. Pierres apparentes, volumes généreux et confort moderne : l'âme du lieu intacte, le bien-être en plus.",
    highlights: [
      "Jusqu'à 8 voyageurs",
      '4 chambres',
      'Pierres apparentes d’époque',
      'Cuisine équipée',
    ],
    photo: '/placeholder.jpg',
    hotspot: 'couvent',
  },
  {
    id: '2',
    slug: 'le-presbytere',
    nom: 'Le Presbytère',
    sousTitre: 'Ancienne demeure du curé du village',
    annee: '1460',
    capacite: 5,
    surface: '130 m²',
    chambres: 3,
    description:
      "Bâti en 1460, ce presbytère fut autrefois la résidence du prêtre du village. Restauré avec soin sur deux niveaux, il marie l'authenticité d'une pierre médiévale au confort contemporain, pour jusqu'à 5 personnes.",
    highlights: [
      "Jusqu'à 5 voyageurs",
      '130 m² sur 2 niveaux',
      'Pierre médiévale (1460)',
      'Classé **** Gîtes de France',
    ],
    photo: '/placeholder.jpg',
    hotspot: 'presbytere',
  },
]

export const amenities: Amenity[] = [
  {
    id: '1',
    icon: 'Waves',
    titre: 'Piscine',
    description: 'Un bassin pour se rafraîchir aux beaux jours, plein sud.',
  },
  {
    id: '2',
    icon: 'Target',
    titre: 'Pétanque',
    description: 'Le terrain ombragé pour des parties endiablées entre amis.',
  },
  {
    id: '3',
    icon: 'Bike',
    titre: 'Vélos offerts',
    description:
      'Vélos de toutes tailles et casques mis à disposition gratuitement.',
  },
  {
    id: '4',
    icon: 'Flame',
    titre: 'Barbecue',
    description: 'Soirées grillades au cœur du jardin de 800 m².',
  },
  {
    id: '5',
    icon: 'Trophy',
    titre: 'Ping-pong & Badminton',
    description: 'De quoi occuper petits et grands toute la journée.',
  },
  {
    id: '6',
    icon: 'Leaf',
    titre: 'Éco-responsable',
    description:
      'Une démarche durable engagée depuis plus de 20 ans sur le domaine.',
  },
]

export const hotspots: Hotspot[] = [
  {
    id: 'vue-ensemble',
    titre: "Vue d'ensemble",
    description:
      'Le domaine dans son écrin de verdure : 800 m² entre pierre, jardin et piscine, à 10 minutes de la Cité de Carcassonne.',
    camera: [16, 12, 16],
    target: [0, 1.5, 0],
  },
  {
    id: 'couvent',
    titre: 'Le Couvent — 1877',
    description:
      "L'ancien couvent de la Sainte-Famille, ses pierres dorées et son clocheton. 8 voyageurs, 4 chambres.",
    camera: [-6, 4, 9],
    target: [-6, 2.5, 0],
  },
  {
    id: 'presbytere',
    titre: 'Le Presbytère — 1460',
    description:
      "La plus ancienne bâtisse du domaine, demeure médiévale du curé. 130 m² sur deux niveaux.",
    camera: [7.5, 3.5, 8],
    target: [6, 2, 0],
  },
  {
    id: 'piscine',
    titre: 'La Piscine & le jardin',
    description:
      'Le cœur de vie estival : piscine plein sud, pelouse, terrain de pétanque et coin barbecue.',
    camera: [0, 5, 11],
    target: [0, 0.5, 6],
  },
]

export const avis: Avis[] = [
  {
    id: '1',
    auteur: 'Claire M.',
    provenance: 'Booking.com',
    note: 5,
    texte:
      "Un lieu chargé d'histoire et magnifiquement rénové. Sabrina et Benoît sont aux petits soins. Le calme absolu à deux pas de Carcassonne.",
    date: '2024-08-12',
  },
  {
    id: '2',
    auteur: 'Thomas & Léa',
    provenance: 'Gîtes de France',
    note: 5,
    texte:
      "Le Presbytère a un charme fou. Les pierres, la piscine, les vélos... tout y est. Nos enfants n'ont pas vu le temps passer.",
    date: '2024-07-03',
  },
  {
    id: '3',
    auteur: 'Famille Dubois',
    provenance: 'Booking.com',
    note: 5,
    texte:
      'Idéal pour un grand week-end en famille. Le Couvent est spacieux et authentique. Démarche écologique appréciable. On reviendra !',
    date: '2024-06-21',
  },
]
