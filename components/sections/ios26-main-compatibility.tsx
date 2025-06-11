import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Smartphone, Zap, ExternalLink } from "lucide-react"

export function iOS26MainCompatibility() {
  return (
    <section id="compatibility" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Device Compatibility
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            iOS 26 supports iPhone 11 and later, with Apple Intelligence requiring A17 Pro chip
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* iOS 26 Compatible */}
          <Card className="bg-white border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center mr-4">
                  <Smartphone className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">iOS 26 Compatible</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li>• iPhone 16 series</li>
                <li>• iPhone 15 series</li>
                <li>• iPhone 14 series</li>
                <li>• iPhone 13 series</li>
                <li>• iPhone 12 series</li>
                <li>• iPhone 11 series</li>
              </ul>
            </CardContent>
          </Card>

          {/* Apple Intelligence */}
          <Card className="bg-white border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center mr-4">
                  <Zap className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Apple Intelligence</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li>• iPhone 16 series</li>
                <li>• iPhone 15 Pro</li>
                <li>• iPhone 15 Pro Max</li>
              </ul>
              <p className="text-sm text-gray-500 mt-4">
                Requires A17 Pro chip or later
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <a
            href="https://support.apple.com/en-us/102662"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold">
              Check Your Device Compatibility
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
} 