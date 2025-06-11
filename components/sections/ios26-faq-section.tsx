import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { HelpCircle } from 'lucide-react'

// FAQ 数据 - 服务端静态数据
const faqs = [
  {
    question: "When will iOS 26 be released?",
    answer: "iOS 26 is expected to be released in fall 2025, likely in September alongside the iPhone 17 series. Developer beta is available now, with public beta coming in July 2025.",
    category: "Release"
  },
  {
    question: "Which iPhones support iOS 26?",
    answer: "iOS 26 supports iPhone 11 and later models, including iPhone SE (2nd generation and later). However, Apple Intelligence features require iPhone 15 Pro models or iPhone 16 series with A17 Pro chip or later.",
    category: "Compatibility"
  },
  {
    question: "What is Liquid Glass design in iOS 26?",
    answer: "Liquid Glass is a new translucent material that reflects and refracts surroundings, bringing greater focus to content and delivering vitality across controls, navigation, app icons, and widgets. It's the most significant design update since iOS 7.",
    category: "Design"
  },
  {
    question: "Do I need to pay for iOS 26?",
    answer: "No, iOS 26 will be available as a free software update for all supported iPhone models. You can download and install it through Settings > General > Software Update.",
    category: "Pricing"
  },
  {
    question: "What Apple Intelligence features are new in iOS 26?",
    answer: "iOS 26 introduces Live Translation in Messages/FaceTime/Phone, enhanced Visual Intelligence across apps, improved Genmoji and Image Playground, intelligent shortcuts, and a new Foundation Models framework for developers.",
    category: "Features"
  },
  {
    question: "Will my iPhone XS/XR get iOS 26?",
    answer: "No, iPhone XS, XS Max, and XR will not receive iOS 26. These devices will continue to receive security updates on iOS 18 for a limited time. iOS 26 requires iPhone 11 or later.",
    category: "Compatibility"
  },
  {
    question: "How do I join the iOS 26 beta program?",
    answer: "Developer beta is available now through the Apple Developer Program. Public beta will be available in July 2025 through the Apple Beta Software Program at beta.apple.com. Always backup your device before installing beta software.",
    category: "Beta"
  },
  {
    question: "What's new in Call Screening and Message Screening?",
    answer: "Call Screening automatically answers unknown callers and gathers information before you decide to pick up. Message Screening puts unknown sender messages in a dedicated folder with spam detection and management tools.",
    category: "Features"
  },
  {
    question: "Will iOS 26 slow down my older iPhone?",
    answer: "Apple optimizes each iOS version for supported devices. While newer features may require more processing power, basic iOS 26 functionality is designed to run smoothly on iPhone 11 and later models.",
    category: "Performance"
  },
  {
    question: "Can I downgrade from iOS 26 back to iOS 25?",
    answer: "Apple typically allows downgrading for a limited time after release. However, this window is usually short (1-2 weeks). Always backup your device before updating, and check Apple's current signing status.",
    category: "Installation"
  }
]

// 按类别分组 FAQ - 服务端处理
const faqsByCategory = faqs.reduce((acc, faq) => {
  if (!acc[faq.category]) {
    acc[faq.category] = []
  }
  acc[faq.category].push(faq)
  return acc
}, {} as Record<string, typeof faqs>)

export function FAQSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <header className="text-center mb-16">
          <Badge variant="outline" className="mb-4 bg-white">
            <HelpCircle className="w-4 h-4 mr-2" />
            Frequently Asked Questions
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Got Questions?
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              We Have Answers
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Find answers to the most common questions about iOS 26, from compatibility 
            and features to release dates and installation.
          </p>
        </header>

        {/* FAQ 按类别展示 - 服务端渲染 */}
        <div className="max-w-6xl mx-auto">
          {Object.entries(faqsByCategory).map(([category, categoryFaqs]) => (
            <div key={category} className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Badge variant="secondary" className="mr-3">
                  {category}
                </Badge>
                <span>{category} Questions</span>
              </h3>
              
              <div className="grid gap-6 md:grid-cols-2">
                {categoryFaqs.map((faq, index) => (
                  <Card key={index} className="border-0 shadow-lg bg-white/80 backdrop-blur-sm h-full">
                    <CardHeader className="pb-4">
                      <CardTitle className="text-lg font-semibold text-gray-900 leading-tight">
                        {faq.question}
                      </CardTitle>
                    </CardHeader>
                    
                    <CardContent className="pt-0">
                      <div className="border-t border-gray-100 pt-4">
                        <p className="text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* 额外帮助区域 */}
        <footer className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto border-0 shadow-xl bg-white">
            <CardContent className="p-8">
              <div className="space-y-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 mx-auto flex items-center justify-center">
                  <HelpCircle className="w-8 h-8 text-white" />
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Still Have Questions?
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Can&apos;t find what you&apos;re looking for? Check out Apple&apos;s official support 
                    documentation or contact Apple Support for personalized assistance.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="https://support.apple.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-xl transition-all duration-200 inline-block text-center"
                  >
                    Apple Support
                  </a>
                  <a 
                    href="https://discussions.apple.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-6 py-3 border border-blue-300 text-blue-700 hover:bg-blue-50 font-semibold rounded-xl transition-all duration-200 inline-block text-center"
                  >
                    Community Forums
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </footer>
      </div>
    </section>
  )
} 