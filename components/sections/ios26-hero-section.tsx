import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Apple, Download, Calendar, Smartphone, ArrowRight, Play } from 'lucide-react'

export function HeroSection() {
  const keyFeatures = [
    {
      icon: Apple,
      title: "Liquid Glass Design",
      description: "Revolutionary translucent interface"
    },
    {
      icon: Smartphone,
      title: "Enhanced Apple Intelligence",
      description: "Smarter AI across all apps"
    },
    {
      icon: Download,
      title: "Free Update",
      description: "Available for iPhone 11 and later"
    }
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" />
      <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000" />
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          {/* Badge */}
          <div className="flex justify-center">
            <Badge className="bg-blue-100 text-blue-800 border-blue-200 px-4 py-2 text-sm font-medium">
              <Calendar className="w-4 h-4 mr-2" />
              Announced at WWDC 2025 • Coming Fall 2025
            </Badge>
          </div>

          {/* Main Heading */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              <span className="text-gray-900">iOS</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600"> 26</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 max-w-3xl mx-auto leading-tight">
              Revolutionary Liquid Glass Design Meets 
              <span className="text-blue-600"> Enhanced Apple Intelligence</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Experience the most significant iOS redesign since iOS 7, featuring breakthrough AI capabilities, 
              live translation, and intelligent communication tools.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <a
              href="https://beta.apple.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-200">
                <Download className="w-5 h-5 mr-2" />
                Join Beta Program
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </a>
            <a
              href="https://www.apple.com/ios/ios-18-preview/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="lg" className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 font-semibold px-8 py-4 text-lg">
                <Play className="w-5 h-5 mr-2" />
                Watch Preview
              </Button>
            </a>
          </div>

          {/* Key Features Cards */}
          <div className="grid md:grid-cols-3 gap-6 pt-12">
            {keyFeatures.map((feature, index) => (
              <Card key={index} className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Release Info */}
          <div className="pt-8">
            <Card className="bg-gradient-to-r from-blue-600 to-indigo-600 border-0 text-white">
              <CardContent className="p-6">
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-2xl font-bold mb-1">Developer Beta</div>
                    <div className="text-blue-100">Available Now</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold mb-1">Public Beta</div>
                    <div className="text-blue-100">July 2025</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold mb-1">Official Release</div>
                    <div className="text-blue-100">Fall 2025</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Compatibility Note */}
          <div className="pt-4">
            <p className="text-gray-500 text-sm">
              Compatible with iPhone 11 and later • Apple Intelligence requires iPhone 15 Pro or iPhone 16 series
            </p>
          </div>
        </div>
      </div>
    </section>
  )
} 