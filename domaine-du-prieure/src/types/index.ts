export interface Gite {
  id: string
  slug: string
  nom: string
  sousTitre: string
  annee: string
  capacite: number
  surface: string
  chambres: number
  description: string
  highlights: string[]
  photo: string
  /** clé d'un point d'intérêt dans la visite 3D */
  hotspot: string
}

export interface Amenity {
  id: string
  /** nom d'icône lucide-react */
  icon: string
  titre: string
  description: string
}

export interface Avis {
  id: string
  auteur: string
  provenance: string
  note: number
  texte: string
  date: string
}

/** Point d'intérêt de la visite 3D du domaine */
export interface Hotspot {
  id: string
  titre: string
  description: string
  /** position caméra [x, y, z] */
  camera: [number, number, number]
  /** cible regardée [x, y, z] */
  target: [number, number, number]
}
