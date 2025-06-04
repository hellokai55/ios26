import { Badge } from '@/components/ui/badge'

export function GameEmbedSection() {
  return (
    <section className="max-w-6xl mx-auto" aria-labelledby="play-game">
      <div className="text-center mb-8">
        <h2 id="play-game" className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          🎯 Start Playing Now
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Experience the most addictive slicing game right in your browser. No downloads, no registration required.
        </p>
      </div>
      
      <div className="relative">
        {/* Game Container with Modern Design */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
          {/* Game Header */}
          <div className="bg-gradient-to-r from-red-500 via-orange-500 to-pink-500 px-6 py-4">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-center sm:text-left">
                <h3 className="text-white font-semibold text-lg">Slice Master Game</h3>
                <p className="text-red-100 text-sm">Use SPACE or LEFT CLICK to slice everything!</p>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                  🎮 Live Game
                </Badge>
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                  HD Quality
                </Badge>
              </div>
            </div>
          </div>
          
          {/* Game Frame */}
          <div className="relative bg-gray-900">
            <div className="aspect-video w-full">
              <iframe 
                src="https://www.crazygames.com/embed/slice-master" 
                className="w-full h-full border-0"
                title="Slice Master Game - Play Free Online"
                allow="gamepad *;"
                loading="lazy"
              />
            </div>
            
            {/* Loading Overlay (optional) */}
            <div className="absolute inset-0 bg-gray-900 flex items-center justify-center opacity-0 pointer-events-none transition-opacity">
              <div className="text-white text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
                <p>Loading Slice Master...</p>
              </div>
            </div>
          </div>
          
          {/* Game Footer */}
          <div className="bg-gray-50 px-6 py-4 border-t border-gray-100">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  Online
                </span>
                <span>Full Screen Available</span>
              </div>
              <div className="flex items-center gap-4">
                <span>🎯 Precision Required</span>
                <span>🏆 High Score Challenge</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute -top-4 -left-4 w-8 h-8 bg-red-500 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-orange-500 rounded-full opacity-30 animate-pulse delay-1000"></div>
      </div>
      
      {/* Quick Start Guide */}
      <div className="mt-8 grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
        <div className="text-center p-4 bg-white/50 rounded-2xl backdrop-blur-sm">
          <div className="text-2xl mb-2">⌨️</div>
          <h4 className="font-semibold text-gray-800">Keyboard</h4>
          <p className="text-sm text-gray-600">Press SPACE to slice</p>
        </div>
        <div className="text-center p-4 bg-white/50 rounded-2xl backdrop-blur-sm">
          <div className="text-2xl mb-2">🖱️</div>
          <h4 className="font-semibold text-gray-800">Mouse</h4>
          <p className="text-sm text-gray-600">Left click to slice</p>
        </div>
        <div className="text-center p-4 bg-white/50 rounded-2xl backdrop-blur-sm">
          <div className="text-2xl mb-2">📱</div>
          <h4 className="font-semibold text-gray-800">Mobile</h4>
          <p className="text-sm text-gray-600">Tap screen to slice</p>
        </div>
      </div>
    </section>
  )
} 