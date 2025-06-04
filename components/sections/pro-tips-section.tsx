import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function ProTipsSection() {
  return (
    <section aria-labelledby="pro-tips">
      <h2 id="pro-tips" className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
        💡 Pro Tips for Slice Master
      </h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <Card className="rounded-3xl shadow-lg border-0 bg-white/90 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-red-600 text-xl flex items-center gap-2">
              ⚠️ <span>Avoid Danger</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 leading-relaxed">
              Stay away from pink spiked metal shapes - they&apos;re too strong for your knife and will reset your progress to the beginning of the round.
            </p>
          </CardContent>
        </Card>

        <Card className="rounded-3xl shadow-lg border-0 bg-white/90 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-green-600 text-xl flex items-center gap-2">
              🎯 <span>Maximize Points</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 leading-relaxed">
              Hit the numbered targets at the end of each level to multiply your points. Aim for higher numbers to boost your score significantly.
            </p>
          </CardContent>
        </Card>

        <Card className="rounded-3xl shadow-lg border-0 bg-white/90 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-blue-600 text-xl flex items-center gap-2">
              🏛️ <span>Use White Pillars</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 leading-relaxed">
              White pillars can&apos;t be cut, but you can use them as a safety net to prevent your knife from hitting the ground.
            </p>
          </CardContent>
        </Card>

        <Card className="rounded-3xl shadow-lg border-0 bg-white/90 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-purple-600 text-xl flex items-center gap-2">
              💰 <span>Collect Coins</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 leading-relaxed">
              Gather coins throughout your gameplay to unlock new blades, swords, and maces in the shop for enhanced slicing power.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
} 