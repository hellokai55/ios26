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

// 生成动态元数据以优化SEO
export async function generateMetadata(): Promise<Metadata> {
  const title = "Slice Master - Play Free Online Knife Throwing Game | Precision Slicing Game"
  const description = "Play Slice Master, the addictive one-button knife throwing game! Slice fruits, shapes, and objects with precision timing. Unlock new blades, earn coins, and master the art of slicing. Play free online now!"
  const keywords = [
    "slice master",
    "slice master game", 
    "knife throwing game",
    "online slicing game",
    "free browser game",
    "precision timing game",
    "casual arcade game",
    "slice master online",
    "knife game free",
    "slicing simulator",
    "blade throwing game",
    "slice master unblocked",
    "one button game",
    "ASMR slicing game"
  ]

  return {
    title,
    description,
    keywords: keywords.join(', '),
    authors: [{ name: 'Slice Master Game' }],
    creator: 'Slice Master',
    publisher: 'Slice Master Game Studio',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL('https://slice-master.cc'),
    alternates: {
      canonical: '/',
    },
    openGraph: {
      title,
      description,
      url: '/',
      siteName: 'Slice Master Game',
      locale: 'en_US',
      type: 'website',
      images: [
        {
          url: '/slice-master-og.jpg',
          width: 1200,
          height: 630,
          alt: 'Slice Master - Free Online Knife Throwing Game',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/slice-master-twitter.jpg'],
      creator: '@SliceMasterGame',
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
      google: 'your-google-verification-code',
    },
  }
}

export default function SliceMasterPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-pink-50">
      <Header />
      
      <HeroSection />

      <main className="container mx-auto px-4 space-y-16 lg:space-y-24">
        <GameEmbedSection />
        <GameFeaturesSection />
        <HowToPlaySection />
        <ProTipsSection />
        <FAQSection />
        <CTASection />
      </main>

      <Footer />
    </div>
  )
} 