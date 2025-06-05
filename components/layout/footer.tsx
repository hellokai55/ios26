import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16 mt-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="text-3xl">🔪</div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                Slice Master
              </h3>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Experience the most addictive knife throwing and slicing game online. Perfect your timing, unlock new blades, and become the ultimate Slice Master.
            </p>
            <div className="flex flex-wrap gap-3">
              <Badge variant="outline" className="border-gray-600 text-gray-300">Free to Play</Badge>
              <Badge variant="outline" className="border-gray-600 text-gray-300">No Download</Badge>
              <Badge variant="outline" className="border-gray-600 text-gray-300">Browser Game</Badge>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-3 text-gray-300">
              <li><a href="/#play-game" className="hover:text-red-400 transition-colors">Play Game</a></li>
              <li><a href="/#how-to-play" className="hover:text-red-400 transition-colors">How to Play</a></li>
              <li><a href="/#pro-tips" className="hover:text-red-400 transition-colors">Pro Tips</a></li>
              <li><a href="/#faq" className="hover:text-red-400 transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          {/* Contact & Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Contact & Support</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center gap-2">
                <span className="text-red-400">📧</span>
                <a href="mailto:hellokevinus@gmail.com" className="hover:text-red-400 transition-colors">
                  hellokevinus@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-red-400">🌐</span>
                <span>Available 24/7</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-red-400">🎮</span>
                <span>Free Online Game</span>
              </div>
            </div>
          </div>
        </div>
        
        <Separator className="bg-gray-700 mb-8" />
        
        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
          <div className="flex flex-wrap items-center gap-4">
            <span>© 2025 Slice Master Game</span>
            <span>•</span>
            <span>Free Browser Game</span>
            <span>•</span>
            <span>No Download Required</span>
          </div>
          <div className="flex items-center gap-4">
            <span>Made with ❤️ for gamers</span>
          </div>
        </div>
      </div>
    </footer>
  )
} 