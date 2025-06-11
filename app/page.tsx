import { Metadata } from 'next'
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Apple } from "lucide-react"
import Link from "next/link"
import { iOS26MainHero } from "@/components/sections/ios26-main-hero"
import { iOS26MainFeatures } from "@/components/sections/ios26-main-features"
import { iOS26MainCompatibility } from "@/components/sections/ios26-main-compatibility"
import { iOS26MainRelease } from "@/components/sections/ios26-main-release"
import { iOS26MainBlog } from "@/components/sections/ios26-main-blog"
import { iOS26MainCTA } from "@/components/sections/ios26-main-cta"

// SEO优化的元数据生成
export async function generateMetadata(): Promise<Metadata> {
  const title = "iOS 26 - The Most Advanced iPhone Operating System | Apple 2025"
  const description = "Discover iOS 26 with revolutionary Liquid Glass design, enhanced Apple Intelligence, and groundbreaking features. Available Fall 2025 for iPhone 11 and later."
  const keywords = [
    "iOS 26", "Apple", "iPhone", "Liquid Glass", "Apple Intelligence", 
    "iOS 2025", "iPhone update", "Apple WWDC", "mobile operating system",
    "iPhone 11", "iPhone 15 Pro", "beta program"
  ]

  return {
    title,
    description,
    keywords: keywords.join(", "),
    authors: [{ name: "iOS 26 Team" }],
    creator: "iOS 26 Team",
    publisher: "iOS 26 Team",
    metadataBase: new URL("https://ios26.xyz"),
    alternates: {
      canonical: "https://ios26.xyz",
    },
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    openGraph: {
      title,
      description,
      type: "website",
      url: "https://ios26.xyz",
      siteName: "iOS 26 Official Guide",
      locale: "en_US",
      images: [
        {
          url: "https://ios26.xyz/og-image.jpg",
          width: 1200,
          height: 630,
          alt: "iOS 26 - Revolutionary Liquid Glass Design",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      creator: "@ios26xyz",
      images: ["https://ios26.xyz/twitter-image.jpg"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: "your-google-verification-code",
    },
    other: {
      "contact:email": "hellokaius@gmail.com",
      "contact:phone_number": "+1-000-000-0000",
    },
  }
}

// 结构化数据
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://ios26.xyz/#website",
      "url": "https://ios26.xyz",
      "name": "iOS 26 Official Guide",
      "description": "Complete guide to iOS 26 with Liquid Glass design and Apple Intelligence",
      "publisher": {
        "@id": "https://ios26.xyz/#organization"
      },
      "potentialAction": [
        {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://ios26.xyz/search?q={search_term_string}"
          },
          "query-input": "required name=search_term_string"
        }
      ]
    },
    {
      "@type": "Organization",
      "@id": "https://ios26.xyz/#organization",
      "name": "iOS 26 Team",
      "url": "https://ios26.xyz",
      "email": "hellokaius@gmail.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://ios26.xyz/logo.png",
        "width": 512,
        "height": 512
      },
      "sameAs": [
        "https://twitter.com/ios26xyz"
      ]
    },
    {
      "@type": "SoftwareApplication",
      "name": "iOS 26",
      "operatingSystem": "iOS",
      "applicationCategory": "OperatingSystemApplication",
      "author": {
        "@id": "https://ios26.xyz/#organization"
      },
      "datePublished": "2025-06-09",
      "description": "The most advanced iPhone operating system with Liquid Glass design and enhanced Apple Intelligence",
      "url": "https://ios26.xyz",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "50000",
        "bestRating": "5",
        "worstRating": "1"
      }
    }
  ]
}

export default function HomePage() {
  return (
    <>
      {/* 结构化数据 */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Apple className="w-8 h-8 text-gray-900" />
            <span className="text-xl font-bold text-gray-900">iOS 26</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">
              Features
            </Link>
            <Link href="#compatibility" className="text-gray-600 hover:text-gray-900 transition-colors">
              Compatibility
            </Link>
            <Link href="#release" className="text-gray-600 hover:text-gray-900 transition-colors">
              Release
            </Link>
            <Link href="/blog" className="text-gray-600 hover:text-gray-900 transition-colors">
              Blog
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <a
              href="https://beta.apple.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                Get Beta
              </Button>
            </a>
          </div>
        </div>
      </header>

      <main>
        {iOS26MainHero()}
        {iOS26MainFeatures()}
        {iOS26MainCompatibility()}
        {iOS26MainRelease()}
        {iOS26MainBlog()}
        {iOS26MainCTA()}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Apple className="w-6 h-6" />
                <span className="text-lg font-bold">iOS 26</span>
              </div>
              <p className="text-gray-400 text-sm">
                The most advanced iPhone operating system with revolutionary Liquid Glass design.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Apple Resources</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="https://www.apple.com/ios/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    iOS at Apple
                  </a>
                </li>
                <li>
                  <a href="https://developer.apple.com/ios/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    Developer Resources
                  </a>
                </li>
                <li>
                  <a href="https://support.apple.com/ios" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    Apple Support
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Beta Programs</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="https://beta.apple.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    Public Beta
                  </a>
                </li>
                <li>
                  <a href="https://developer.apple.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    Developer Beta
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact & Legal</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="mailto:hellokaius@gmail.com" className="hover:text-white transition-colors">
                    Contact Us
                  </a>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-white transition-colors">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          
          <Separator className="my-8 bg-gray-800" />
          
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>© 2025 iOS 26 Team. All rights reserved. | Contact: <a href="mailto:hellokaius@gmail.com" className="hover:text-white transition-colors">hellokaius@gmail.com</a></p>
            <p>iOS 26 information based on WWDC 2025 announcements.</p>
          </div>
        </div>
      </footer>
    </>
  )
} 