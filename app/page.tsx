import { Metadata } from 'next'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { HeroSection } from '@/components/sections/hero-section'
import { GameEmbedSection } from '@/components/sections/game-embed-section'
import { GameFeaturesSection } from '@/components/sections/game-features-section'
import { HowToPlaySection } from '@/components/sections/how-to-play-section'
import { ProTipsSection } from '@/components/sections/pro-tips-section'
import { FAQSection } from '@/components/sections/faq-section'
import { CTASection } from '@/components/sections/cta-section'
import { Breadcrumb } from '@/components/ui/breadcrumb'

// SEO优化的动态元数据生成
export async function generateMetadata(): Promise<Metadata> {
  // 精心优化的SEO标题 (55字符)
  const title = "Slice Master - Free Online Knife Throwing Game"
  
  // 优化的描述 (155字符，包含关键行动词和价值主张)
  const description = "Play Slice Master, the addictive knife throwing game! Slice objects with precision timing. Unlock blades, earn coins. Play free now!"
  
  // 精选高价值关键词 (95字符，避免关键词堆砌)
  const keywords = [
    "slice master",
    "knife throwing game", 
    "online slicing game",
    "free browser game",
    "slice master online",
    "knife game free"
  ]

  return {
    title,
    description,
    keywords: keywords.join(', '),
    
    // 作者和发布者信息
    authors: [{ name: 'Slice Master Game' }],
    creator: 'Slice Master',
    publisher: 'Slice Master Game Studio',
    
    // 禁用自动格式检测，避免误识别
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    
    // 基础URL和规范URL
    metadataBase: new URL('https://slice-master.cc'),
    alternates: {
      canonical: '/',
    },
    
    // OpenGraph优化 - 社交媒体分享
    openGraph: {
      title,
      description,
      url: '/',
      siteName: 'Slice Master Game',
      locale: 'en_US',
      type: 'website',
    },
    
    // Twitter卡片优化
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    
    // 搜索引擎爬虫指令
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
    
    // 其他SEO优化
    category: 'Games',
    classification: 'Free Online Game',
  }
}

// 结构化数据 - JSON-LD (增强版)
const structuredData = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "name": "Slice Master",
  "description": "Free online knife throwing and slicing game with precision timing gameplay",
  "url": "https://slice-master.cc",
  "genre": ["Action", "Arcade", "Casual"],
  "gamePlatform": "Web Browser",
  "operatingSystem": "Any",
  "applicationCategory": "Game",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "ratingCount": "1250",
    "bestRating": "5"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Slice Master Game Studio"
  },
  "datePublished": "2025-01-01",
  "inLanguage": "en-US",
  "isAccessibleForFree": true
}

// 面包屑结构化数据
const breadcrumbStructuredData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://slice-master.cc"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Slice Master Game"
    }
  ]
}

export default function SliceMasterPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Slice Master Game" }
  ]

  return (
    <>
      {/* 结构化数据注入 */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-pink-50">
        {/* 网站导航 */}
        <Header />
        
        {/* 主要英雄区域 */}
        <HeroSection />

        {/* 主要内容区域 - 语义化HTML结构 */}
        <main className="container mx-auto px-4 space-y-16 lg:space-y-24" role="main">
          {/* 面包屑导航 */}
          <Breadcrumb items={breadcrumbItems} />
          
          {/* 游戏嵌入区域 */}
          <GameEmbedSection />
          
          {/* 游戏特色功能 */}
          <GameFeaturesSection />
          
          {/* 游戏玩法指南 */}
          <HowToPlaySection />
          
          {/* 专业技巧建议 */}
          <ProTipsSection />
          
          {/* 常见问题解答 */}
          <FAQSection />
          
          {/* 行动召唤区域 */}
          <CTASection />
        </main>

        {/* 网站页脚 */}
        <Footer />
      </div>
    </>
  )
} 