import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export function FAQSection() {
  return (
    <section aria-labelledby="faq">
      <Card className="rounded-3xl shadow-xl max-w-5xl mx-auto border-0 bg-white/90 backdrop-blur-sm">
        <CardHeader className="text-center pb-8">
          <CardTitle id="faq" className="text-3xl md:text-4xl text-gray-800 mb-4">
            ❓ Frequently Asked Questions
          </CardTitle>
          <CardDescription className="text-lg">
            Everything you need to know about Slice Master
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <details className="group bg-gray-50 rounded-2xl overflow-hidden">
              <summary className="flex justify-between items-center cursor-pointer p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-semibold text-gray-800 text-lg">How can I earn more points in Slice Master?</h3>
                <span className="group-open:rotate-180 transition-transform text-gray-500">▼</span>
              </summary>
              <div className="p-6 pt-0 text-gray-600 leading-relaxed">
                When you reach the end of each level, make sure to hit the numbered targets to multiply your points. The higher the number, the more points you'll receive, so always aim for the highest multiplier available.
              </div>
            </details>

            <details className="group bg-gray-50 rounded-2xl overflow-hidden">
              <summary className="flex justify-between items-center cursor-pointer p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-semibold text-gray-800 text-lg">Can I cut the white pillar in Slice Master?</h3>
                <span className="group-open:rotate-180 transition-transform text-gray-500">▼</span>
              </summary>
              <div className="p-6 pt-0 text-gray-600 leading-relaxed">
                No, the white pillar cannot be cut, but you can attach to it and use it as a safety net to prevent your knife from hitting the ground and ending your run.
              </div>
            </details>

            <details className="group bg-gray-50 rounded-2xl overflow-hidden">
              <summary className="flex justify-between items-center cursor-pointer p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-semibold text-gray-800 text-lg">Can I go backwards in Slice Master?</h3>
                <span className="group-open:rotate-180 transition-transform text-gray-500">▼</span>
              </summary>
              <div className="p-6 pt-0 text-gray-600 leading-relaxed">
                No, you can only move forward in Slice Master. The game is designed as a continuous forward progression challenge.
              </div>
            </details>

            <details className="group bg-gray-50 rounded-2xl overflow-hidden">
              <summary className="flex justify-between items-center cursor-pointer p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-semibold text-gray-800 text-lg">How many knives can I unlock in Slice Master?</h3>
                <span className="group-open:rotate-180 transition-transform text-gray-500">▼</span>
              </summary>
              <div className="p-6 pt-0 text-gray-600 leading-relaxed">
                You can unlock 9 different knives in Slice Master, so keep collecting those coins and points to access all the available blades, swords, and maces.
              </div>
            </details>
          </div>
        </CardContent>
      </Card>
    </section>
  )
} 