import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function GameFeaturesSection() {
  return (
    <section aria-labelledby="game-features">
      <h2 id="game-features" className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
        🔥 Why Slice Master is Addictive
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        <Card className="rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
          <CardHeader className="text-center pb-4">
            <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl flex items-center justify-center text-2xl text-white mx-auto mb-4">
              🎯
            </div>
            <CardTitle className="text-xl">Precision Gameplay</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 text-center">
              Master the perfect timing to slice fruits, shapes, walls, and furniture. Every slice requires precision and skill.
            </p>
          </CardContent>
        </Card>

        <Card className="rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
          <CardHeader className="text-center pb-4">
            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-pink-500 rounded-2xl flex items-center justify-center text-2xl text-white mx-auto mb-4">
              🔪
            </div>
            <CardTitle className="text-xl">Unlock New Blades</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 text-center">
              Collect coins to unlock 9 different knives, swords, and maces. Each blade offers a unique slicing experience.
            </p>
          </CardContent>
        </Card>

        <Card className="rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
          <CardHeader className="text-center pb-4">
            <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-500 rounded-2xl flex items-center justify-center text-2xl text-white mx-auto mb-4">
              🎵
            </div>
            <CardTitle className="text-xl">ASMR Experience</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 text-center">
              Enjoy the oddly satisfying and soothing sounds of consistent slicing that create an ASMR-like experience.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
} 