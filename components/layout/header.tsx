import { Badge } from '@/components/ui/badge'
import Link from 'next/link'

export function Header() {
  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <div className="text-3xl">🔪</div>
            <div className="text-xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
              Slice Master
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <Link href="/#play-game" className="text-gray-600 hover:text-red-600 transition-colors font-medium flex items-center gap-1">
              <span className="text-sm">🎮</span>
              <span className="hidden lg:inline">Play Game</span>
              <span className="lg:hidden">Play</span>
            </Link>
            <Link href="/#game-features" className="text-gray-600 hover:text-red-600 transition-colors font-medium flex items-center gap-1">
              <span className="text-sm">🔥</span>
              <span className="hidden lg:inline">Features</span>
              <span className="lg:hidden">Features</span>
            </Link>
            <Link href="/#how-to-play" className="text-gray-600 hover:text-red-600 transition-colors font-medium flex items-center gap-1">
              <span className="text-sm">🎯</span>
              <span className="hidden lg:inline">How to Play</span>
              <span className="lg:hidden">Guide</span>
            </Link>
            <Link href="/blog" className="text-gray-600 hover:text-red-600 transition-colors font-medium flex items-center gap-1">
              <span className="text-sm">📚</span>
              <span className="hidden lg:inline">Blog</span>
              <span className="lg:hidden">Blog</span>
            </Link>
            <Link href="/#pro-tips" className="text-gray-600 hover:text-red-600 transition-colors font-medium flex items-center gap-1">
              <span className="text-sm">💡</span>
              <span className="hidden lg:inline">Tips</span>
              <span className="lg:hidden">Tips</span>
            </Link>
            <Link href="/#faq" className="text-gray-600 hover:text-red-600 transition-colors font-medium flex items-center gap-1">
              <span className="text-sm">❓</span>
              <span className="hidden lg:inline">FAQ</span>
              <span className="lg:hidden">FAQ</span>
            </Link>
          </div>
          
          {/* Mobile Navigation Menu Button - Only show on small screens */}
          <div className="md:hidden">
            <details className="relative">
              <summary className="list-none cursor-pointer p-2 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                  <span className="block w-6 h-0.5 bg-gray-600"></span>
                  <span className="block w-6 h-0.5 bg-gray-600"></span>
                  <span className="block w-6 h-0.5 bg-gray-600"></span>
                </div>
              </summary>
              <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 z-50">
                <Link href="/#play-game" className="block px-4 py-3 text-gray-600 hover:text-red-600 hover:bg-red-50 transition-colors flex items-center gap-2">
                  <span>🎮</span>
                  Play Game
                </Link>
                <Link href="/#game-features" className="block px-4 py-3 text-gray-600 hover:text-red-600 hover:bg-red-50 transition-colors flex items-center gap-2">
                  <span>🔥</span>
                  Features
                </Link>
                <Link href="/#how-to-play" className="block px-4 py-3 text-gray-600 hover:text-red-600 hover:bg-red-50 transition-colors flex items-center gap-2">
                  <span>🎯</span>
                  How to Play
                </Link>
                <Link href="/blog" className="block px-4 py-3 text-gray-600 hover:text-red-600 hover:bg-red-50 transition-colors flex items-center gap-2">
                  <span>📚</span>
                  Blog
                </Link>
                <Link href="/#pro-tips" className="block px-4 py-3 text-gray-600 hover:text-red-600 hover:bg-red-50 transition-colors flex items-center gap-2">
                  <span>💡</span>
                  Pro Tips
                </Link>
                <Link href="/#faq" className="block px-4 py-3 text-gray-600 hover:text-red-600 hover:bg-red-50 transition-colors flex items-center gap-2">
                  <span>❓</span>
                  FAQ
                </Link>
                <div className="border-t border-gray-100 mt-2 pt-2">
                  <a href="mailto:hellokaius@gmail.com" className="block px-4 py-3 text-gray-600 hover:text-red-600 hover:bg-red-50 transition-colors flex items-center gap-2">
                    <span>📧</span>
                    Contact
                  </a>
                </div>
              </div>
            </details>
          </div>
          
          {/* Free Game Badge - Show on larger screens */}
          <Badge variant="secondary" className="hidden md:inline-flex">
            Free Game
          </Badge>
        </div>
      </div>
    </nav>
  )
} 