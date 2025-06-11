import { Separator } from "@/components/ui/separator"
import { Apple } from "lucide-react"
import Link from "next/link"

export function iOS26Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Apple className="w-6 h-6" />
              <span className="text-lg font-bold">iOS 26</span>
            </div>
            <p className="text-gray-400 text-sm">
              The most advanced iPhone operating system with revolutionary Liquid Glass design.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Apple Resources</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="https://www.apple.com/ios/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  iOS at Apple
                </a>
              </li>
              <li>
                <a href="https://developer.apple.com/ios/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Developer Resources
                </a>
              </li>
              <li>
                <a href="https://support.apple.com/ios" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Apple Support
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Beta Programs</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="https://beta.apple.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Public Beta
                </a>
              </li>
              <li>
                <a href="https://developer.apple.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Developer Beta
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">More</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <a href="https://www.apple.com/privacy/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <Separator className="my-8 bg-gray-800" />
        
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>© 2025 Apple Inc. All rights reserved.</p>
          <p>iOS 26 information based on WWDC 2025 announcements.</p>
        </div>
      </div>
    </footer>
  )
} 