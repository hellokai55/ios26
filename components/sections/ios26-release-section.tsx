import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Calendar, Download, Users, Smartphone, Clock, CheckCircle } from 'lucide-react'

export function ReleaseSection() {
  const timeline = [
    {
      date: "June 9, 2025",
      title: "WWDC 2025 Announcement",
      description: "iOS 26 officially announced with Liquid Glass design and Apple Intelligence enhancements",
      status: "completed",
      icon: CheckCircle
    },
    {
      date: "June 9, 2025",
      title: "Developer Beta 1",
      description: "First beta available to registered Apple developers through the Developer Program",
      status: "completed",
      icon: CheckCircle
    },
    {
      date: "July 2025",
      title: "Public Beta",
      description: "Public beta available through Apple Beta Software Program for early adopters",
      status: "upcoming",
      icon: Users
    },
    {
      date: "September 2025",
      title: "Official Release",
      description: "Final version released to the public alongside iPhone 17 series launch",
      status: "upcoming",
      icon: Smartphone
    }
  ]

  const betaInfo = [
    {
      title: "Developer Beta",
      description: "Available now for registered Apple developers",
      requirements: ["Apple Developer Account", "Compatible iPhone", "Backup recommended"],
      link: "developer.apple.com",
      available: true
    },
    {
      title: "Public Beta",
      description: "Coming in July 2025 for public testing",
      requirements: ["Apple ID", "iPhone 11 or later", "Beta Software Program enrollment"],
      link: "beta.apple.com",
      available: false
    }
  ]

  const releaseFeatures = [
    {
      icon: Download,
      title: "Free Update",
      description: "iOS 26 will be available as a free software update for all supported iPhone models."
    },
    {
      icon: Clock,
      title: "Over-the-Air",
      description: "Download and install directly on your iPhone through Settings > General > Software Update."
    },
    {
      icon: Smartphone,
      title: "Day One Support",
      description: "All features available immediately on supported devices with no additional setup required."
    }
  ]

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            <Calendar className="w-4 h-4 mr-2" />
            Release Information
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Available
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
              Fall 2025
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            iOS 26 is currently in beta testing and will be released to the public in fall 2025. 
            Join the beta program to experience the future of iOS today.
          </p>
        </div>

        {/* 发布时间线 */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Release Timeline
          </h3>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* 时间线连接线 */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>
              
              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <div key={index} className="relative flex items-start space-x-6">
                    {/* 时间线节点 */}
                    <div className={`relative z-10 w-16 h-16 rounded-2xl flex items-center justify-center ${
                      item.status === 'completed' 
                        ? 'bg-gradient-to-br from-green-500 to-emerald-600' 
                        : 'bg-gradient-to-br from-blue-500 to-purple-600'
                    }`}>
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    {/* 内容 */}
                    <div className="flex-1 min-w-0">
                      <Card className={`border-0 shadow-lg ${
                        item.status === 'completed' ? 'bg-green-50' : 'bg-blue-50'
                      }`}>
                        <CardHeader className="pb-3">
                          <div className="flex items-center justify-between mb-2">
                            <Badge variant="secondary" className="text-xs">
                              {item.date}
                            </Badge>
                            <Badge variant={item.status === 'completed' ? 'default' : 'secondary'} className="text-xs">
                              {item.status === 'completed' ? 'Completed' : 'Upcoming'}
                            </Badge>
                          </div>
                          <CardTitle className="text-xl font-bold text-gray-900">
                            {item.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-600 leading-relaxed">
                            {item.description}
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Beta 程序信息 */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Beta Programs
          </h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {betaInfo.map((beta, index) => (
              <Card key={index} className={`border-0 shadow-xl ${
                beta.available ? 'bg-gradient-to-br from-green-50 to-emerald-50' : 'bg-gradient-to-br from-gray-50 to-blue-50'
              }`}>
                <CardHeader className="text-center pb-6">
                  <div className={`w-16 h-16 rounded-2xl mx-auto flex items-center justify-center mb-4 ${
                    beta.available 
                      ? 'bg-gradient-to-br from-green-500 to-emerald-600' 
                      : 'bg-gradient-to-br from-gray-500 to-blue-600'
                  }`}>
                    {beta.available ? (
                      <Download className="w-8 h-8 text-white" />
                    ) : (
                      <Clock className="w-8 h-8 text-white" />
                    )}
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
                    {beta.title}
                  </CardTitle>
                  <p className="text-gray-600">
                    {beta.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 mb-6">
                    <h4 className="font-semibold text-gray-900">Requirements:</h4>
                    <ul className="space-y-2">
                      {beta.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-center space-x-3">
                          <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                          <span className="text-gray-700 text-sm">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="text-center">
                    <Button 
                      size="lg" 
                      className={beta.available 
                        ? "bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700" 
                        : "bg-gray-400 cursor-not-allowed"
                      }
                      disabled={!beta.available}
                    >
                      {beta.available ? 'Join Beta Program' : 'Coming Soon'}
                    </Button>
                    <p className="text-xs text-gray-500 mt-2">{beta.link}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* 发布特性 */}
        <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-3xl p-8 lg:p-12">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">
            What to Expect
          </h3>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {releaseFeatures.map((feature, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-red-600 mx-auto flex items-center justify-center">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900">{feature.title}</h4>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h4 className="text-2xl font-bold text-gray-900 mb-4">
                Mark Your Calendar
              </h4>
              <p className="text-lg text-gray-600 mb-6">
                iOS 26 will be available as a free software update in September 2025, 
                coinciding with the launch of the iPhone 17 series.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-semibold">
                  Set Reminder
                </Button>
                <Button size="lg" variant="outline" className="border-orange-300 text-orange-700 hover:bg-orange-50">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 