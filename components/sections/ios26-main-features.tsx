import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { 
  Sparkles, 
  Shield, 
  MessageSquare, 
  Camera,
  ExternalLink,
  Smartphone,
  Zap
} from "lucide-react"

export function iOS26MainFeatures() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Revolutionary Features
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            iOS 26 introduces groundbreaking capabilities that redefine the iPhone experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Liquid Glass Design */}
          <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-8">
              <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-6">
                <Sparkles className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Liquid Glass Design
              </h3>
              <p className="text-gray-600 mb-4">
                The most significant design evolution since iOS 7, featuring fluid animations and translucent elements.
              </p>
              <a
                href="https://www.apple.com/ios/ios-18-preview/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center"
              >
                View at Apple
                <ExternalLink className="w-4 h-4 ml-1" />
              </a>
            </CardContent>
          </Card>

          {/* Apple Intelligence */}
          <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-8">
              <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Enhanced Apple Intelligence
              </h3>
              <p className="text-gray-600 mb-4">
                Advanced AI capabilities with Live Translation, Visual Intelligence, and Genmoji creation.
              </p>
              <a
                href="https://www.apple.com/apple-intelligence/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 hover:text-purple-700 font-medium inline-flex items-center"
              >
                Learn More
                <ExternalLink className="w-4 h-4 ml-1" />
              </a>
            </CardContent>
          </Card>

          {/* Communication */}
          <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-8">
              <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center mb-6">
                <MessageSquare className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Smart Communication
              </h3>
              <p className="text-gray-600 mb-4">
                Call Screening, Message Screening, and enhanced privacy controls for better communication.
              </p>
              <a
                href="https://support.apple.com/ios"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 hover:text-green-700 font-medium inline-flex items-center"
              >
                Get Support
                <ExternalLink className="w-4 h-4 ml-1" />
              </a>
            </CardContent>
          </Card>

          {/* Privacy & Security */}
          <Card className="bg-gradient-to-br from-gray-50 to-slate-50 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-8">
              <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-gray-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Advanced Privacy
              </h3>
              <p className="text-gray-600 mb-4">
                Industry-leading privacy features with on-device processing and enhanced security controls.
              </p>
              <a
                href="https://www.apple.com/privacy/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-700 font-medium inline-flex items-center"
              >
                Privacy at Apple
                <ExternalLink className="w-4 h-4 ml-1" />
              </a>
            </CardContent>
          </Card>

          {/* Camera & Photos */}
          <Card className="bg-gradient-to-br from-orange-50 to-red-50 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-8">
              <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center mb-6">
                <Camera className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Image Playground
              </h3>
              <p className="text-gray-600 mb-4">
                Create stunning images and animations with AI-powered tools built into Photos app.
              </p>
              <a
                href="https://www.apple.com/ios/ios-18-preview/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-600 hover:text-orange-700 font-medium inline-flex items-center"
              >
                Explore Features
                <ExternalLink className="w-4 h-4 ml-1" />
              </a>
            </CardContent>
          </Card>

          {/* App Updates */}
          <Card className="bg-gradient-to-br from-teal-50 to-cyan-50 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-8">
              <div className="w-12 h-12 rounded-xl bg-teal-100 flex items-center justify-center mb-6">
                <Smartphone className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Updated Apps
              </h3>
              <p className="text-gray-600 mb-4">
                Redesigned CarPlay, Apple Music, Maps, Wallet, and the new Apple Games app.
              </p>
              <a
                href="https://www.apple.com/ios/ios-18-preview/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 hover:text-teal-700 font-medium inline-flex items-center"
              >
                See What&apos;s New
                <ExternalLink className="w-4 h-4 ml-1" />
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
} 