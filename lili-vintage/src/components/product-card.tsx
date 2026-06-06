import Image from 'next/image'
import type { Product } from '@/types'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const imageSrc = product.photos?.[0] ?? '/placeholder.jpg'

  return (
    <div className="group">
      <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-neutral-100">
        <Image
          src={imageSrc}
          alt={product.nom}
          fill
          sizes="(min-width: 768px) 25vw, 50vw"
          className={cn(
            'object-cover transition-transform duration-300 group-hover:scale-105',
            !product.disponible && 'opacity-60 grayscale'
          )}
        />

        {product.badge && (
          <Badge
            variant={product.badge}
            className="absolute left-2 top-2 z-10"
          >
            {product.badge === 'nouveau' ? 'Nouveau' : 'Dernière pièce'}
          </Badge>
        )}

        {!product.disponible && (
          <div className="absolute inset-0 z-10 flex items-center justify-center">
            <span className="rounded-full bg-neutral-900/80 px-4 py-1.5 text-sm font-medium uppercase tracking-wide text-white">
              Vendu
            </span>
          </div>
        )}
      </div>

      <div className="mt-3">
        <h3 className="font-medium text-neutral-900">{product.nom}</h3>
        <p className="mt-0.5 text-sm text-neutral-600">
          {product.taille} · {product.couleur}
        </p>
        <p className="mt-1 font-display text-lg text-primary-600">
          {product.prix} €
        </p>
      </div>
    </div>
  )
}
