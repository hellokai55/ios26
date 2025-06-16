import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'iOS 26 - Apple\'s Revolutionary Mobile Operating System',
    short_name: 'iOS 26',
    description: 'Complete guide to iOS 26 featuring Liquid Glass design, Apple Intelligence, and comprehensive device compatibility information.',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#007AFF',
    icons: [
      {
        src: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    categories: ['technology', 'mobile', 'apple', 'ios'],
    lang: 'en',
    orientation: 'portrait',
  }
} 