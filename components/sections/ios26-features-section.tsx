import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Phone, MessageSquare, Car, Music, MapPin, Wallet, Gamepad2, Shield, Users, Camera } from 'lucide-react'

export function FeaturesSection() {
  const communicationFeatures = [
    {
      icon: Phone,
      title: "Call Screening",
      description: "Automatically answers unknown callers, gathers information, and lets you decide whether to pick up or ignore the call.",
      highlight: "Smart Protection"
    },
    {
      icon: MessageSquare,
      title: "Message Screening",
      description: "Screen messages from unknown senders with dedicated folder management and spam detection capabilities.",
      highlight: "Privacy Control"
    },
    {
      icon: Users,
      title: "Enhanced Group Chats",
      description: "Create polls, see typing indicators, and send Apple Cash in group conversations with custom backgrounds.",
      highlight: "Social Features"
    }
  ]

  const appUpdates = [
    {
      icon: Car,
      title: "CarPlay Redesigned",
      description: "Beautiful new design with compact call views, Tapbacks in Messages, widgets, and Live Activities for safer driving.",
      features: ["Liquid Glass design", "Compact call interface", "Enhanced safety features", "CarPlay Ultra support"]
    },
    {
      icon: Music,
      title: "Apple Music Enhanced",
      description: "Lyrics Translation, Lyrics Pronunciation, and AutoMix with intelligent DJ-like transitions between songs.",
      features: ["Multi-language lyrics", "Pronunciation guide", "Smart transitions", "Beat matching"]
    },
    {
      icon: MapPin,
      title: "Maps Intelligence",
      description: "Visited Places tracking, preferred route learning, and intelligent delay notifications for your daily commute.",
      features: ["Location memory", "Route optimization", "Traffic intelligence", "Privacy protection"]
    },
    {
      icon: Wallet,
      title: "Wallet Improvements",
      description: "Enhanced boarding passes with Live Activities, installment payments, and integrated travel information access.",
      features: ["Live flight updates", "Payment options", "Travel integration", "Real-time notifications"]
    }
  ]

  const newApps = [
    {
      icon: Gamepad2,
      title: "Apple Games",
      description: "All-in-one destination for your games with Apple Arcade integration, friend activities, and game recommendations.",
      highlight: "New App"
    },
    {
      icon: Camera,
      title: "AirPods Features",
      description: "Studio-quality recording, camera remote control, and enhanced voice isolation for clearer calls.",
      highlight: "Hardware Integration"
    },
    {
      icon: Shield,
      title: "Parental Controls",
      description: "Enhanced child account management with improved communication safety and app content restrictions.",
      highlight: "Family Safety"
    }
  ]

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            <Phone className="w-4 h-4 mr-2" />
            Core Features
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Stay Connected &
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
              Eliminate Distractions
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            iOS 26 introduces powerful new ways to manage communications, enhance your daily apps, 
            and enjoy seamless experiences across all your Apple devices.
          </p>
        </div>

        {/* 通信功能 */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Smarter Communication
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {communicationFeatures.map((feature, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-green-50 to-blue-50">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-blue-600 mx-auto flex items-center justify-center group-hover:scale-110 transition-transform duration-300 mb-4">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <Badge variant="secondary" className="mb-2 text-xs">
                    {feature.highlight}
                  </Badge>
                  <CardTitle className="text-xl font-bold text-gray-900">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* 应用更新 */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">
            App Enhancements
          </h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {appUpdates.map((app, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-gray-50 to-white">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <app.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-bold text-gray-900">
                        {app.title}
                      </CardTitle>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {app.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    {app.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-orange-500 to-red-500"></div>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* 新功能和应用 */}
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-3xl p-8 lg:p-12">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">
            New Features & Apps
          </h3>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {newApps.map((app, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 mx-auto flex items-center justify-center group-hover:scale-110 transition-transform duration-300 mb-4">
                    <app.icon className="w-8 h-8 text-white" />
                  </div>
                  <Badge variant="secondary" className="mb-2 text-xs">
                    {app.highlight}
                  </Badge>
                  <CardTitle className="text-xl font-bold text-gray-900">
                    {app.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 leading-relaxed">
                    {app.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* 其他功能亮点 */}
          <div className="bg-white rounded-2xl p-8">
            <h4 className="text-2xl font-bold text-center mb-8 text-gray-900">
              Additional Highlights
            </h4>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center space-y-2">
                <div className="text-2xl font-bold text-indigo-600">200+</div>
                <div className="text-gray-600">Apple Arcade Games</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-2xl font-bold text-purple-600">9</div>
                <div className="text-gray-600">Supported Languages</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-2xl font-bold text-green-600">Enhanced</div>
                <div className="text-gray-600">Accessibility Features</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-2xl font-bold text-blue-600">Advanced</div>
                <div className="text-gray-600">Safari Privacy</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 