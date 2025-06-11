import React from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Download } from "lucide-react"

export function iOS26MainHero() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 text-center">
        <Badge className="mb-6 bg-blue-100 text-blue-800 border-blue-200 text-sm">
          Announced at WWDC 2025
        </Badge>
        
        <h1 className="text-5xl lg:text-7xl font-bold mb-8 text-gray-900">
          iOS <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">26</span>
        </h1>
        
        <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">
          Experience the revolutionary <strong>Liquid Glass</strong> design and enhanced <strong>Apple Intelligence</strong>. 
          The most advanced iPhone operating system ever created.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a
            href="https://www.apple.com/ios/ios-18-preview/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8">
              Learn More at Apple
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
          </a>
          <a
            href="https://beta.apple.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" variant="outline" className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 font-semibold px-8">
              Join Beta Program
              <Download className="w-4 h-4 ml-2" />
            </Button>
          </a>
        </div>

        {/* 关键统计 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900">26</div>
            <div className="text-gray-600">iOS Version</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600">Free</div>
            <div className="text-gray-600">Update</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600">11+</div>
            <div className="text-gray-600">iPhone Models</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600">Fall</div>
            <div className="text-gray-600">2025 Release</div>
          </div>
        </div>
      </div>
    </section>
  )
} 