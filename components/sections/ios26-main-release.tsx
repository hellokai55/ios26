import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, Users, Calendar, Bell, ExternalLink } from "lucide-react"

export function iOS26MainRelease() {
  return (
    <section id="release" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Release Timeline
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get iOS 26 through beta programs or wait for the official release
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Developer Beta */}
          <Card className="bg-blue-50 border-blue-200 shadow-lg">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 rounded-2xl bg-blue-100 mx-auto flex items-center justify-center mb-6">
                <Download className="w-8 h-8 text-blue-600" />
              </div>
              <Badge className="mb-4 bg-blue-100 text-blue-800 border-blue-200">
                Available Now
              </Badge>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Developer Beta
              </h3>
              <p className="text-gray-600 mb-6">
                Access the latest iOS 26 features for development and testing
              </p>
              <a
                href="https://developer.apple.com/ios/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold">
                  Join Developer Program
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </a>
            </CardContent>
          </Card>

          {/* Public Beta */}
          <Card className="bg-green-50 border-green-200 shadow-lg">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 rounded-2xl bg-green-100 mx-auto flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <Badge className="mb-4 bg-green-100 text-green-800 border-green-200">
                July 2025
              </Badge>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Public Beta
              </h3>
              <p className="text-gray-600 mb-6">
                Free beta program for iPhone users to test iOS 26
              </p>
              <a
                href="https://beta.apple.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold">
                  Sign Up for Beta
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </a>
            </CardContent>
          </Card>

          {/* Official Release */}
          <Card className="bg-purple-50 border-purple-200 shadow-lg">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 rounded-2xl bg-purple-100 mx-auto flex items-center justify-center mb-6">
                <Calendar className="w-8 h-8 text-purple-600" />
              </div>
              <Badge className="mb-4 bg-purple-100 text-purple-800 border-purple-200">
                Fall 2025
              </Badge>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Official Release
              </h3>
              <p className="text-gray-600 mb-6">
                Stable iOS 26 release for all compatible iPhone models
              </p>
              <a
                href="https://www.apple.com/ios/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold">
                  Get Notified
                  <Bell className="w-4 h-4 ml-2" />
                </Button>
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
} 