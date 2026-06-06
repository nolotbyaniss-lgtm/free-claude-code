import { Star } from 'lucide-react'
import { cn } from '@/lib/utils'

interface ReviewStarsProps {
  note: number
  className?: string
}

export function ReviewStars({ note, className }: ReviewStarsProps) {
  const rounded = Math.round(note)

  return (
    <div
      className={cn('flex items-center gap-0.5', className)}
      role="img"
      aria-label={`${note} sur 5 étoiles`}
    >
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          className={cn(
            'h-4 w-4',
            i < rounded
              ? 'fill-primary-500 text-primary-500'
              : 'text-neutral-300'
          )}
          aria-hidden="true"
        />
      ))}
    </div>
  )
}
