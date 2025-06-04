import { Card, CardContent } from '@/components/ui/card'
import { ScrollToGameButton } from '@/components/ui/scroll-to-game-button'

export function CTASection() {
  return (
    <section className="text-center py-16">
      <Card className="rounded-3xl shadow-2xl max-w-3xl mx-auto bg-gradient-to-r from-red-500 via-orange-500 to-pink-500 text-white border-0 overflow-hidden relative">
        <div className="absolute inset-0 bg-black/10 rounded-3xl"></div>
        
        <CardContent className="p-12 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Become a Slice Master?</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed">
            Join thousands of players mastering the art of precision slicing. Start your journey now and see how high you can score!
          </p>
          <ScrollToGameButton className="text-red-600 hover:text-red-700 font-semibold text-lg px-8 py-4 bg-white hover:bg-gray-50 shadow-lg">
            🎮 Play Slice Master Now
          </ScrollToGameButton>
        </CardContent>
      </Card>
    </section>
  )
} 