import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Slice Master - Ultimate Knife Throwing Game',
    short_name: 'Slice Master',
    description: 'Play the most addictive knife throwing and slicing game online. Perfect your timing, unlock new blades, and become the ultimate Slice Master.',
    start_url: '/',
    display: 'standalone',
    background_color: '#1f2937',
    theme_color: '#1f2937',
    icons: [
      {
        src: '/favicon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
    categories: ['games', 'entertainment'],
    lang: 'en',
    orientation: 'portrait-primary',
  }
} 