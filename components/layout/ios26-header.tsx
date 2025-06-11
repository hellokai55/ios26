import React from "react"
import { Button } from "@/components/ui/button"
import { Apple } from "lucide-react"
import Link from "next/link"

export function iOS26Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Apple className="w-8 h-8 text-gray-900" />
          <span className="text-xl font-bold text-gray-900">iOS 26</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">
            Features
          </Link>
          <Link href="#compatibility" className="text-gray-600 hover:text-gray-900 transition-colors">
            Compatibility
          </Link>
          <Link href="#release" className="text-gray-600 hover:text-gray-900 transition-colors">
            Release
          </Link>
          <Link href="/blog" className="text-gray-600 hover:text-gray-900 transition-colors">
            Blog
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <a
            href="https://beta.apple.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
              Get Beta
            </Button>
          </a>
        </div>
      </div>
    </header>
  )
} 