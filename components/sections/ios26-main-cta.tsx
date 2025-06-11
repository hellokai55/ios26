import React from "react"
import { Button } from "@/components/ui/button"
import { ExternalLink, Download } from "lucide-react"

export function iOS26MainCTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready for iOS 26?
          </h2>
          <p className="text-xl text-blue-100 mb-12 leading-relaxed">
            Join millions of iPhone users experiencing the most advanced mobile operating system ever created.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.apple.com/ios/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8">
                Learn More at Apple
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </a>
            <a
              href="https://beta.apple.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="bg-white/10 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold px-8 transition-all duration-200">
                Join Beta Program
                <Download className="w-4 h-4 ml-2" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
} 