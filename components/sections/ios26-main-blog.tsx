import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Sparkles, Zap, Apple, ExternalLink } from "lucide-react"
import Link from "next/link"

export function iOS26MainBlog() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-blue-100 text-blue-800 border-blue-200">
            Latest News
          </Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            iOS 26 Insights
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay informed with the latest updates, features, and expert analysis about iOS 26
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Blog Post 1 */}
          <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="w-full h-48 rounded-xl bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center mb-4">
                  <Sparkles className="w-12 h-12 text-blue-600" />
                </div>
                
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="text-xs">
                    Announcement
                  </Badge>
                  <span className="text-xs text-gray-500">Jun 9, 2025</span>
                </div>

                <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                  iOS 26 Announced at WWDC 2025: Everything You Need to Know
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  Apple unveiled iOS 26 with revolutionary Liquid Glass design and enhanced Apple Intelligence. Here&apos;s a complete breakdown of all the new features.
                </p>

                <div className="flex items-center justify-between pt-2">
                  <span className="text-xs text-gray-500">8 min read</span>
                  <a
                    href="https://www.apple.com/newsroom/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 font-medium text-sm inline-flex items-center"
                  >
                    Read More
                    <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Blog Post 2 */}
          <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="w-full h-48 rounded-xl bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center mb-4">
                  <Zap className="w-12 h-12 text-purple-600" />
                </div>
                
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="text-xs">
                    AI Features
                  </Badge>
                  <span className="text-xs text-gray-500">Jun 11, 2025</span>
                </div>

                <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                  Apple Intelligence Gets Smarter: New AI Features in iOS 26
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  Live Translation, Visual Intelligence, and enhanced Genmoji creation are just the beginning of Apple Intelligence improvements.
                </p>

                <div className="flex items-center justify-between pt-2">
                  <span className="text-xs text-gray-500">7 min read</span>
                  <a
                    href="https://www.apple.com/apple-intelligence/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 font-medium text-sm inline-flex items-center"
                  >
                    Read More
                    <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Blog Post 3 */}
          <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="w-full h-48 rounded-xl bg-gradient-to-br from-green-100 to-emerald-100 flex items-center justify-center mb-4">
                  <Apple className="w-12 h-12 text-green-600" />
                </div>
                
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="text-xs">
                    Beta
                  </Badge>
                  <span className="text-xs text-gray-500">Jun 12, 2025</span>
                </div>

                <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                  iOS 26 Beta Program: How to Join and What to Expect
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  Developer beta is available now, with public beta coming in July. Here&apos;s everything you need to know about testing iOS 26.
                </p>

                <div className="flex items-center justify-between pt-2">
                  <span className="text-xs text-gray-500">5 min read</span>
                  <a
                    href="https://beta.apple.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 font-medium text-sm inline-flex items-center"
                  >
                    Read More
                    <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Blog CTA */}
        <div className="text-center">
          <Link href="/blog">
            <Button size="lg" variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold px-8 transition-all duration-200">
              View All Articles
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
} 