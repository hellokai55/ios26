import { Badge } from '@/components/ui/badge'

export function HeroSection() {
  return (
    <header className="container mx-auto px-4 py-12 lg:py-20">
      <div className="text-center space-y-8">
        <div className="space-y-6">
          <Badge variant="secondary" className="text-sm font-medium px-4 py-2">
            🎮 Free Online Game
          </Badge>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-red-600 via-orange-600 to-pink-600 bg-clip-text text-transparent leading-tight">
            Slice Master
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Master the art of precision slicing in this addictive one-button knife throwing game
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-3 mt-8">
          <Badge variant="outline" className="px-3 py-1">Free to Play</Badge>
          <Badge variant="outline" className="px-3 py-1">No Download</Badge>
          <Badge variant="outline" className="px-3 py-1">Browser Game</Badge>
          <Badge variant="outline" className="px-3 py-1">ASMR Sounds</Badge>
        </div>
      </div>
    </header>
  )
} 