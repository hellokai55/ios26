import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Smartphone, Check, X, Zap, Shield, Info } from 'lucide-react'

export function CompatibilitySection() {
  const supportedDevices = [
    { model: "iPhone 16 series", aiSupport: true, fullFeatures: true },
    { model: "iPhone 15 Pro/Pro Max", aiSupport: true, fullFeatures: true },
    { model: "iPhone 15/15 Plus", aiSupport: false, fullFeatures: true },
    { model: "iPhone 14 series", aiSupport: false, fullFeatures: true },
    { model: "iPhone 13 series", aiSupport: false, fullFeatures: true },
    { model: "iPhone 12 series", aiSupport: false, fullFeatures: true },
    { model: "iPhone 11 series", aiSupport: false, fullFeatures: true },
    { model: "iPhone SE (2nd/3rd gen)", aiSupport: false, fullFeatures: true }
  ]

  const unsupportedDevices = [
    "iPhone XS/XS Max/XR",
    "iPhone X",
    "iPhone 8/8 Plus",
    "iPhone 7/7 Plus",
    "iPhone SE (1st gen)"
  ]

  const aiRequirements = [
    {
      icon: Zap,
      title: "A17 Pro Chip or Later",
      description: "Apple Intelligence requires the powerful A17 Pro chip found in iPhone 15 Pro models and all iPhone 16 models."
    },
    {
      icon: Shield,
      title: "On-Device Processing",
      description: "Advanced AI features run entirely on your device, ensuring privacy while delivering powerful capabilities."
    },
    {
      icon: Smartphone,
      title: "Supported Models",
      description: "iPhone 15 Pro, iPhone 15 Pro Max, and all iPhone 16 models support the full Apple Intelligence experience."
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 bg-white">
            <Smartphone className="w-4 h-4 mr-2" />
            Device Compatibility
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Works with
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">
              iPhone 11 & Later
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            iOS 26 brings new features to a wide range of iPhone models, with enhanced Apple Intelligence 
            capabilities available on the most recent devices.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* 支持的设备 */}
          <Card className="border-0 shadow-xl bg-white">
            <CardHeader className="text-center pb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 mx-auto flex items-center justify-center mb-4">
                <Check className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl font-bold text-gray-900">
                Supported Devices
              </CardTitle>
              <p className="text-gray-600">
                These iPhone models will receive iOS 26
              </p>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {supportedDevices.map((device, index) => (
                  <div key={index} className="flex items-center justify-between p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                        <Check className="w-4 h-4 text-green-600" />
                      </div>
                      <span className="font-medium text-gray-900">{device.model}</span>
                    </div>
                    <div className="flex space-x-2">
                      {device.aiSupport && (
                        <Badge variant="secondary" className="bg-purple-100 text-purple-700 text-xs">
                          Apple Intelligence
                        </Badge>
                      )}
                      <Badge variant="secondary" className="bg-blue-100 text-blue-700 text-xs">
                        iOS 26
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* 不支持的设备 */}
          <Card className="border-0 shadow-xl bg-white">
            <CardHeader className="text-center pb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-500 to-pink-600 mx-auto flex items-center justify-center mb-4">
                <X className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl font-bold text-gray-900">
                Unsupported Devices
              </CardTitle>
              <p className="text-gray-600">
                These models will not receive iOS 26
              </p>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {unsupportedDevices.map((device, index) => (
                  <div key={index} className="flex items-center justify-between p-4 rounded-xl bg-red-50">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
                        <X className="w-4 h-4 text-red-600" />
                      </div>
                      <span className="font-medium text-gray-900">{device}</span>
                    </div>
                    <Badge variant="secondary" className="bg-red-100 text-red-700 text-xs">
                      Not Supported
                    </Badge>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-yellow-50 rounded-xl border border-yellow-200">
                <div className="flex items-start space-x-3">
                  <Info className="w-5 h-5 text-yellow-600 mt-0.5" />
                  <div>
                    <div className="font-medium text-yellow-800 mb-1">Security Updates</div>
                    <div className="text-sm text-yellow-700">
                      Unsupported devices will continue to receive security updates on iOS 18 for a limited time.
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Apple Intelligence 要求 */}
        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Apple Intelligence Requirements
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Advanced AI features require specific hardware capabilities to ensure optimal performance 
              and privacy protection through on-device processing.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {aiRequirements.map((requirement, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-600 mx-auto flex items-center justify-center">
                  <requirement.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900">{requirement.title}</h4>
                <p className="text-gray-600 leading-relaxed">{requirement.description}</p>
              </div>
            ))}
          </div>

          {/* 功能对比表 */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h4 className="text-2xl font-bold text-center mb-8 text-gray-900">
              Feature Availability
            </h4>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-4 px-4 font-semibold text-gray-900">Feature</th>
                    <th className="text-center py-4 px-4 font-semibold text-gray-900">All Supported Devices</th>
                    <th className="text-center py-4 px-4 font-semibold text-gray-900">Apple Intelligence Devices</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="py-4 px-4 text-gray-900">Liquid Glass Design</td>
                    <td className="py-4 px-4 text-center">
                      <Check className="w-5 h-5 text-green-600 mx-auto" />
                    </td>
                    <td className="py-4 px-4 text-center">
                      <Check className="w-5 h-5 text-green-600 mx-auto" />
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 text-gray-900">Call & Message Screening</td>
                    <td className="py-4 px-4 text-center">
                      <Check className="w-5 h-5 text-green-600 mx-auto" />
                    </td>
                    <td className="py-4 px-4 text-center">
                      <Check className="w-5 h-5 text-green-600 mx-auto" />
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 text-gray-900">Live Translation</td>
                    <td className="py-4 px-4 text-center">
                      <X className="w-5 h-5 text-red-600 mx-auto" />
                    </td>
                    <td className="py-4 px-4 text-center">
                      <Check className="w-5 h-5 text-green-600 mx-auto" />
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 text-gray-900">Visual Intelligence</td>
                    <td className="py-4 px-4 text-center">
                      <X className="w-5 h-5 text-red-600 mx-auto" />
                    </td>
                    <td className="py-4 px-4 text-center">
                      <Check className="w-5 h-5 text-green-600 mx-auto" />
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 text-gray-900">Genmoji & Image Playground</td>
                    <td className="py-4 px-4 text-center">
                      <X className="w-5 h-5 text-red-600 mx-auto" />
                    </td>
                    <td className="py-4 px-4 text-center">
                      <Check className="w-5 h-5 text-green-600 mx-auto" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="text-center mt-8">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold">
              Check Your Device Compatibility
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
} 