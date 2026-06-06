export default function Template({ children }: { children: React.ReactNode }) {
  // Remonté à chaque navigation → l'animation de fondu se rejoue (transition de page).
  return <div className="animate-fade-up">{children}</div>
}
