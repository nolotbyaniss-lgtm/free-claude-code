import { Waves, Target, Bike, Flame, Trophy, Leaf, type LucideIcon } from 'lucide-react'

const map: Record<string, LucideIcon> = {
  Waves,
  Target,
  Bike,
  Flame,
  Trophy,
  Leaf,
}

export function AmenityIcon({
  name,
  className,
}: {
  name: string
  className?: string
}) {
  const Icon = map[name] ?? Leaf
  return <Icon className={className} />
}
