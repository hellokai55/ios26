import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Slice Master - Ultimate Knife Throwing Game',
    short_name: 'Slice Master',
    description: 'Master the art of knife throwing in this addictive slicing game. Unlock blades, achieve high scores, and become the ultimate Slice Master.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#dc2626',
    icons: [
      {
        src: '/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    categories: ['games', 'entertainment', 'action'],
    lang: 'en',
    orientation: 'portrait',
  }
} 