import type { Product, Avis } from '@/types'

export const mockProducts: Product[] = [
  {
    id: '1',
    nom: 'Veste en jean vintage 90s',
    categorie: 'vestes',
    taille: 'M',
    couleur: 'Bleu',
    prix: 28,
    photos: ['/placeholder.jpg'],
    disponible: true,
    dateAjout: '2024-01-15',
    badge: 'nouveau',
  },
  {
    id: '2',
    nom: 'Robe fleurie années 70',
    categorie: 'robes',
    taille: 'S',
    couleur: 'Multicolore',
    prix: 22,
    photos: ['/placeholder.jpg'],
    disponible: true,
    dateAjout: '2024-01-14',
  },
  {
    id: '3',
    nom: 'Pull mohair rose',
    categorie: 'tops',
    taille: 'L',
    couleur: 'Rose',
    prix: 18,
    photos: ['/placeholder.jpg'],
    disponible: true,
    dateAjout: '2024-01-13',
    badge: 'derniere-piece',
  },
  {
    id: '4',
    nom: 'Jupe plissée vintage',
    categorie: 'pantalons',
    taille: 'M',
    couleur: 'Beige',
    prix: 15,
    photos: ['/placeholder.jpg'],
    disponible: true,
    dateAjout: '2024-01-12',
  },
  {
    id: '5',
    nom: 'Chemise à carreaux',
    categorie: 'tops',
    taille: 'XL',
    couleur: 'Rouge/Blanc',
    prix: 12,
    photos: ['/placeholder.jpg'],
    disponible: false,
    dateAjout: '2024-01-10',
  },
  {
    id: '6',
    nom: 'Manteau camel vintage',
    categorie: 'vestes',
    taille: 'M',
    couleur: 'Camel',
    prix: 45,
    photos: ['/placeholder.jpg'],
    disponible: true,
    dateAjout: '2024-01-09',
  },
]

export const mockAvis: Avis[] = [
  {
    id: '1',
    auteur: 'Marie L.',
    note: 5,
    texte: 'La meilleure friperie du coin ! Sélection au top et accueil super chaleureux.',
    date: '2024-01-10',
  },
  {
    id: '2',
    auteur: 'Sophie R.',
    note: 5,
    texte: 'Des pièces uniques introuvables ailleurs. Je reviens chaque semaine !',
    date: '2024-01-05',
  },
  {
    id: '3',
    auteur: 'Emma D.',
    note: 5,
    texte: 'Prix très raisonnables et vraiment de belles pièces vintage. Merci Lili !',
    date: '2023-12-28',
  },
]

export const categories = ['robes', 'tops', 'vestes', 'pantalons', 'accessoires']
export const tailles = ['XS', 'S', 'M', 'L', 'XL', 'XXL']
