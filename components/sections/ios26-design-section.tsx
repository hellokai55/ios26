import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Palette, Layers, Sparkles, Eye, Smartphone, Monitor } from 'lucide-react'

export function DesignSection() {
  const designFeatures = [
    {
      icon: Layers,
      title: "Liquid Glass Material",
      description: "A revolutionary translucent material that reflects and refracts surroundings, bringing greater focus to content and delivering vitality across the entire system.",
      highlight: "New Design Language"
    },
    {
      icon: Smartphone,
      title: "Dynamic Lock Screen",
      description: "Time fluidly adapts to available space in images, and spatial scenes bring wallpapers to life with stunning 3D effects when you move your iPhone.",
      highlight: "3D Effects"
    },
    {
      icon: Palette,
      title: "Customizable Icons",
      description: "Updated app icons with light, dark, colored-tinted appearances, or a stunning clear look that adapts to your personal style and preferences.",
      highlight: "Personal Expression"
    },
    {
      icon: Eye,
      title: "Enhanced Visibility",
      description: "Improved readability and focus across all apps with streamlined layouts in Camera, Photos, Safari, and system applications.",
      highlight: "Better UX"
    },
    {
      icon: Monitor,
      title: "System-wide Integration",
      description: "Consistent design language across all Apple devices and platforms, creating a harmonious experience from iPhone to Mac.",
      highlight: "Universal Design"
    },
    {
      icon: Sparkles,
      title: "Developer APIs",
      description: "New APIs provide developers access to Liquid Glass materials and components to create equally dynamic and delightful app experiences.",
      highlight: "Developer Tools"
    }
  ]

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            <Palette className="w-4 h-4 mr-2" />
            Design Revolution
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Liquid Glass Design
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Beautiful & Familiar
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            The most significant design update since iOS 7. Liquid Glass creates more expressive 
            and delightful experiences while maintaining the instant familiarity you love about iOS.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {designFeatures.map((feature, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-gray-50 to-white">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {feature.highlight}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* 设计对比展示 */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900">
                Before & After
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                See how Liquid Glass transforms the iOS experience with enhanced depth, 
                improved readability, and more intuitive interactions across every app and system element.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span className="text-gray-700">Enhanced visual hierarchy and content focus</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span className="text-gray-700">Improved accessibility and readability</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span className="text-gray-700">More personalization options than ever</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span className="text-gray-700">Seamless integration across all Apple devices</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-2xl rounded-3xl overflow-hidden">
                <div className="aspect-[9/16] bg-gradient-to-br from-blue-100 via-purple-50 to-pink-50 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-blue-500 to-purple-600 mx-auto flex items-center justify-center">
                      <Sparkles className="w-10 h-10 text-white" />
                    </div>
                    <div className="space-y-2">
                      <div className="text-2xl font-bold text-gray-900">Liquid Glass</div>
                      <div className="text-gray-600">Interactive Preview</div>
                    </div>
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