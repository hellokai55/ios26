import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Brain, Languages, Eye, Wand2, Image, Zap, Shield } from 'lucide-react'

export function IntelligenceSection() {
  const intelligenceFeatures = [
    {
      icon: Languages,
      title: "Live Translation",
      description: "Automatically translate text and audio in Messages, FaceTime, and Phone calls across multiple languages in real-time.",
      features: ["Real-time text translation", "Live audio translation", "On-device processing", "Privacy-first approach"],
      highlight: "Real-time"
    },
    {
      icon: Eye,
      title: "Visual Intelligence",
      description: "Search and take action on anything you're viewing across apps. Ask questions, find similar products, and add events to calendar.",
      features: ["Screen content analysis", "ChatGPT integration", "Google & Etsy search", "Calendar event detection"],
      highlight: "Screen-wide"
    },
    {
      icon: Image,
      title: "Enhanced Creativity",
      description: "Genmoji and Image Playground provide new ways to express yourself with AI-generated content and custom emoji.",
      features: ["Custom emoji creation", "Image generation", "Style mixing", "Personal expression tools"],
      highlight: "Creative AI"
    },
    {
      icon: Wand2,
      title: "Intelligent Shortcuts",
      description: "More powerful shortcuts with intelligent actions enabled by Apple Intelligence for Writing Tools and Image Playground.",
      features: ["Smart action suggestions", "Writing assistance", "Image creation shortcuts", "Workflow automation"],
      highlight: "Automation"
    }
  ]

  const privacyFeatures = [
    {
      icon: Shield,
      title: "On-Device Processing",
      description: "Apple Intelligence runs entirely on your device, ensuring your personal data stays private and secure."
    },
    {
      icon: Zap,
      title: "Foundation Models Framework",
      description: "Developers get direct access to powerful on-device AI models without cloud dependency or costs."
    },
    {
      icon: Brain,
      title: "Private Cloud Computing",
      description: "When cloud processing is needed, your data remains encrypted and inaccessible to Apple."
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 bg-white">
            <Brain className="w-4 h-4 mr-2" />
            Apple Intelligence
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Smarter in
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              Even More Places
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            With deeper integration across more apps, Apple Intelligence helps you communicate 
            across languages, explore your surroundings, and stay organized more effortlessly than ever.
          </p>
        </div>

        {/* 主要功能 */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {intelligenceFeatures.map((feature, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {feature.highlight}
                  </Badge>
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
                  {feature.title}
                </CardTitle>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {feature.features.map((item, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"></div>
                      <span className="text-gray-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* 隐私和安全 */}
        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Privacy by Design
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Apple Intelligence is built with privacy from the ground up, ensuring your personal 
              information remains secure while delivering powerful AI capabilities.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {privacyFeatures.map((feature, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 mx-auto flex items-center justify-center">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900">{feature.title}</h4>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold">
              Learn More About Privacy
            </Button>
          </div>
        </div>

        {/* 开发者工具 */}
        <div className="mt-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 lg:p-12 text-white">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold">
                For Developers
              </h3>
              <p className="text-lg text-purple-100 leading-relaxed">
                The new Foundation Models framework gives developers direct access to powerful 
                on-device AI models, enabling innovative applications without cloud dependency or costs.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                  <span className="text-purple-100">Free AI inference with no API costs</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                  <span className="text-purple-100">Fast, on-device processing</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                  <span className="text-purple-100">Privacy-first architecture</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                  <span className="text-purple-100">Offline capability</span>
                </div>
              </div>

              <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
                Developer Documentation
              </Button>
            </div>

            <div className="relative">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-6 rounded-2xl">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                      <Brain className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold">Foundation Models</div>
                      <div className="text-sm text-purple-200">Direct API Access</div>
                    </div>
                  </div>
                  
                  <div className="bg-white/10 rounded-xl p-4 font-mono text-sm">
                    <div className="text-purple-200">{`// Access Apple Intelligence`}</div>
                    <div className="text-white">import AppleIntelligence</div>
                    <div className="text-white">let model = AIFoundationModel()</div>
                    <div className="text-purple-200">{`// Free, fast, private`}</div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 