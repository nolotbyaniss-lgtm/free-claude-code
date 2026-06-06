export interface Product {
  id: string
  nom: string
  categorie: string
  taille: string
  couleur: string
  prix: number
  photos: string[]
  disponible: boolean
  dateAjout: string
  badge?: 'nouveau' | 'derniere-piece'
}

export interface Avis {
  id: string
  auteur: string
  note: number
  texte: string
  date: string
}
