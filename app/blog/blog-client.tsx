'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Apple, 
  ArrowLeft,
  Calendar,
  Clock,
  ExternalLink,
  Sparkles,
  Zap,
  MessageSquare
} from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { type BlogPostMeta } from '@/lib/blog'

interface BlogClientPageProps {
  posts: BlogPostMeta[]
  categories: string[]
}

export default function BlogClientPage({ posts, categories }: BlogClientPageProps) {
  const [selectedCategory, setSelectedCategory] = useState("All")
  
  const featuredPost = posts.find(post => post.featured)
  
  // 根据选中的分类过滤文章
  const filteredPosts = selectedCategory === "All" 
    ? posts.filter(post => !post.featured)
    : posts.filter(post => !post.featured && post.category === selectedCategory)

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Design": return <Sparkles className="w-6 h-6 text-blue-600" />
      case "AI Features": return <Zap className="w-6 h-6 text-purple-600" />
      case "Beta": return <Apple className="w-6 h-6 text-green-600" />
      case "Guides": return <MessageSquare className="w-6 h-6 text-green-600" />
      default: return <MessageSquare className="w-6 h-6 text-gray-600" />
    }
  }

  return (
    <>
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center space-x-2">
              <Apple className="w-8 h-8 text-gray-900" />
              <span className="text-xl font-bold text-gray-900">iOS 26</span>
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-600">Blog</span>
          </div>
          
          <Link href="/">
            <Button variant="outline" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>
      </header>

      <main className="py-12">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-800 border-blue-200">
              iOS 26 Blog
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
              Latest iOS 26 News
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay updated with the latest features, announcements, and insights about Apple&apos;s most advanced mobile operating system.
            </p>
          </div>

          {/* Featured Post */}
          {featuredPost && (
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Article</h2>
              <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-8 lg:p-12">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-8">
                    <div className="flex-1">
                      <div className="flex items-center space-x-4 mb-4">
                        <Badge className="bg-blue-100 text-blue-800 border-blue-200">
                          {featuredPost.category}
                        </Badge>
                        <div className="flex items-center text-gray-500 text-sm space-x-4">
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span>{new Date(featuredPost.publishDate).toLocaleDateString()}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="w-4 h-4" />
                            <span>{featuredPost.readTime}</span>
                          </div>
                        </div>
                      </div>
                      
                      <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                        {featuredPost.title}
                      </h3>
                      
                      <p className="text-gray-600 text-lg leading-relaxed mb-6">
                        {featuredPost.description}
                      </p>
                      
                      <Link href={`/blog/${featuredPost.slug}`}>
                        <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold">
                          Read Full Article
                          <ExternalLink className="w-4 h-4 ml-2" />
                        </Button>
                      </Link>
                    </div>
                    
                    <div className="lg:w-64 mt-8 lg:mt-0">
                      <div className="w-full h-48 lg:h-64 rounded-2xl bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center">
                        {getCategoryIcon(featuredPost.category)}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Category Filter */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">All Articles</h2>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Badge
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  className={`cursor-pointer transition-all duration-200 ${
                    selectedCategory === category 
                      ? "bg-blue-600 text-white hover:bg-blue-700" 
                      : "hover:bg-gray-100"
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Badge>
              ))}
            </div>
            
            {/* 显示过滤结果数量 */}
            <p className="text-sm text-gray-500 mt-4">
              {selectedCategory === "All" 
                ? `Showing all ${filteredPosts.length} articles`
                : `Showing ${filteredPosts.length} articles in "${selectedCategory}"`
              }
            </p>
          </div>

          {/* Regular Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post) => (
                <Card key={post.slug} className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      {/* Category and Meta */}
                      <div className="flex items-center justify-between">
                        <Badge variant="outline" className="text-xs">
                          {post.category}
                        </Badge>
                        <div className="flex items-center text-gray-500 text-xs space-x-2">
                          <Calendar className="w-3 h-3" />
                          <span>{new Date(post.publishDate).toLocaleDateString()}</span>
                        </div>
                      </div>

                      {/* Icon based on category */}
                      <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        {getCategoryIcon(post.category)}
                      </div>

                      {/* Title */}
                      <h3 className="text-lg font-bold text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors">
                        {post.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                        {post.description}
                      </p>

                      {/* Read Time and Link */}
                      <div className="flex items-center justify-between pt-2">
                        <div className="flex items-center text-gray-500 text-xs space-x-1">
                          <Clock className="w-3 h-3" />
                          <span>{post.readTime}</span>
                        </div>
                        
                        <Link
                          href={`/blog/${post.slug}`}
                          className="text-blue-600 hover:text-blue-700 font-medium text-sm inline-flex items-center"
                        >
                          Read More
                          <ExternalLink className="w-3 h-3 ml-1" />
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-gray-500 text-lg">No articles found in this category.</p>
                <Button 
                  variant="outline" 
                  className="mt-4"
                  onClick={() => setSelectedCategory("All")}
                >
                  View All Articles
                </Button>
              </div>
            )}
          </div>

          {/* Newsletter Signup */}
          <div className="mt-20">
            <Card className="bg-gradient-to-r from-blue-600 to-indigo-600 border-0 text-white">
              <CardContent className="p-8 lg:p-12 text-center">
                <div className="max-w-2xl mx-auto">
                  <div className="w-16 h-16 rounded-2xl bg-white/20 mx-auto flex items-center justify-center mb-6">
                    <Apple className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                    Stay Updated with iOS 26
                  </h3>
                  
                  <p className="text-blue-100 text-lg mb-8 leading-relaxed">
                    Get the latest iOS 26 news, beta updates, and feature announcements delivered to your inbox.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                      href="https://www.apple.com/ios/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold">
                        Follow Apple iOS
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </Button>
                    </a>
                    <a
                      href="https://beta.apple.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button size="lg" className="bg-white/10 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold transition-all duration-200">
                        Join Beta Program
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </Button>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Apple className="w-6 h-6" />
              <span className="text-lg font-bold">iOS 26 Blog</span>
            </div>
            <p className="text-gray-400 text-sm mb-6">
              Your source for the latest iOS 26 news and updates
            </p>
            <div className="flex justify-center space-x-6 text-sm text-gray-400">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <a href="https://www.apple.com/ios/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                Apple iOS
              </a>
              <a href="https://support.apple.com/ios" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                Support
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
} 