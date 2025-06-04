import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'

export function HowToPlaySection() {
  return (
    <section aria-labelledby="how-to-play">
      <Card className="rounded-3xl shadow-xl max-w-5xl mx-auto border-0 bg-white/90 backdrop-blur-sm">
        <CardHeader className="text-center pb-8">
          <CardTitle id="how-to-play" className="text-3xl md:text-4xl text-gray-800 mb-4">
            🎮 How to Play Slice Master
          </CardTitle>
          <CardDescription className="text-lg text-gray-600">
            Simple controls, endless fun - master the one-button gameplay
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-800 flex items-center gap-2">
                🎯 <span>Controls</span>
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl">
                  <Badge variant="outline" className="text-lg px-4 py-2">SPACE</Badge>
                  <span className="text-gray-700">Keyboard control</span>
                </div>
                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl">
                  <Badge variant="outline" className="text-lg px-4 py-2">CLICK</Badge>
                  <span className="text-gray-700">Mouse control</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-800 flex items-center gap-2">
                🎯 <span>Objectives</span>
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center gap-3 p-3 bg-green-50 rounded-xl">
                  <span className="text-green-600">✓</span>
                  <span>Slice fruits, shapes, walls, and furniture</span>
                </li>
                <li className="flex items-center gap-3 p-3 bg-red-50 rounded-xl">
                  <span className="text-red-600">✗</span>
                  <span>Avoid pink spiked metal shapes</span>
                </li>
                <li className="flex items-center gap-3 p-3 bg-blue-50 rounded-xl">
                  <span className="text-blue-600">!</span>
                  <span>Don&apos;t slice the white walls</span>
                </li>
                <li className="flex items-center gap-3 p-3 bg-yellow-50 rounded-xl">
                  <span className="text-yellow-600">🎯</span>
                  <span>Hit numbered targets for bonus points</span>
                </li>
              </ul>
            </div>
          </div>
          
          <Separator className="my-8" />
          
          <div className="text-center bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded-2xl">
            <p className="text-xl text-gray-800 font-medium">
              <strong className="text-red-600">Goal:</strong> Slice everything in sight while avoiding obstacles to achieve the highest score possible!
            </p>
          </div>
        </CardContent>
      </Card>
    </section>
  )
} 