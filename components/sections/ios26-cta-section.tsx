import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Download, Bell, Smartphone, ArrowRight, ExternalLink, Apple } from 'lucide-react'

export function CTASection() {
  const actions = [
    {
      icon: Download,
      title: "Join Beta Program",
      description: "Experience iOS 26 today with developer or public beta access",
      buttonText: "Get Beta Access",
      buttonStyle: "bg-blue-600 hover:bg-blue-700 text-white",
      highlight: "Available Now",
      link: "https://beta.apple.com"
    },
    {
      icon: Bell,
      title: "Get Notified",
      description: "Be the first to know when iOS 26 is officially released",
      buttonText: "Set Reminder",
      buttonStyle: "bg-green-600 hover:bg-green-700 text-white",
      highlight: "Free",
      link: "https://www.apple.com/ios/"
    },
    {
      icon: Smartphone,
      title: "Check Compatibility",
      description: "See if your iPhone supports iOS 26 and Apple Intelligence",
      buttonText: "Check Device",
      buttonStyle: "bg-purple-600 hover:bg-purple-700 text-white",
      highlight: "Instant",
      link: "https://support.apple.com/en-us/102662"
    }
  ]

  const quickLinks = [
    { 
      icon: Apple, 
      text: "Apple iOS Preview", 
      href: "https://www.apple.com/ios/ios-18-preview/" 
    },
    { 
      icon: Download, 
      text: "Developer Resources", 
      href: "https://developer.apple.com/ios/" 
    },
    { 
      icon: Bell, 
      text: "Apple Support", 
      href: "https://support.apple.com/ios" 
    }
  ]

  return (
    <section id="cta" className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-blue-100 text-blue-800 border-blue-200">
            Ready to Experience iOS 26?
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
            The Future of
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              iPhone is Here
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Don&apos;t wait to experience the revolutionary Liquid Glass design and enhanced Apple Intelligence. 
            Get started with iOS 26 today.
          </p>
        </div>

        {/* 主要行动按钮 */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {actions.map((action, index) => (
            <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="space-y-6">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-2xl bg-gray-100 mx-auto flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <action.icon className="w-8 h-8 text-gray-700" />
                    </div>
                    <Badge className="absolute -top-2 -right-2 bg-yellow-100 text-yellow-800 border-yellow-200 text-xs">
                      {action.highlight}
                    </Badge>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {action.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {action.description}
                    </p>
                  </div>

                  <a
                    href={action.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button 
                      size="lg" 
                      className={`w-full ${action.buttonStyle} font-semibold shadow-md hover:shadow-lg transition-all duration-300`}
                    >
                      {action.buttonText}
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* 统计数据 */}
        <div className="bg-white rounded-3xl p-8 lg:p-12 mb-16 shadow-lg">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl lg:text-4xl font-bold text-gray-900">26</div>
              <div className="text-gray-600">iOS Version</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl lg:text-4xl font-bold text-gray-900">11+</div>
              <div className="text-gray-600">Supported iPhones</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl lg:text-4xl font-bold text-green-600">Free</div>
              <div className="text-gray-600">Software Update</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl lg:text-4xl font-bold text-blue-600">Fall 2025</div>
              <div className="text-gray-600">Release Date</div>
            </div>
          </div>
        </div>

        {/* 快速链接 */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Explore More
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            {quickLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-3 px-6 py-3 bg-white hover:bg-gray-50 border border-gray-200 rounded-xl transition-all duration-300 text-gray-700 hover:text-blue-600 shadow-sm hover:shadow-md"
              >
                <link.icon className="w-5 h-5" />
                <span className="font-medium">{link.text}</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            ))}
          </div>

          {/* 最终CTA */}
          <div className="max-w-2xl mx-auto">
            <Card className="bg-gradient-to-r from-blue-600 to-indigo-600 border-0 text-white shadow-xl">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="w-16 h-16 rounded-2xl bg-white/20 mx-auto flex items-center justify-center">
                    <Apple className="w-8 h-8 text-white" />
                  </div>
                  
                  <div>
                    <h4 className="text-2xl font-bold text-white mb-2">
                      Ready to Upgrade?
                    </h4>
                    <p className="text-blue-100 leading-relaxed">
                      Join millions of iPhone users who will experience the most advanced 
                      mobile operating system ever created. iOS 26 is coming this fall.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                      href="https://www.apple.com/ios/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold shadow-md">
                        Learn More About iOS 26
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </Button>
                    </a>
                    <a
                      href="https://support.apple.com/ios"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button size="lg" variant="outline" className="border-white border-2 text-white hover:bg-white hover:text-blue-600 font-semibold transition-all duration-200">
                        Contact Apple Support
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </Button>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
} 