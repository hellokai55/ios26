# iOS 26 Website

A comprehensive website about iOS 26, featuring the latest information about Apple's revolutionary mobile operating system with Liquid Glass design and Apple Intelligence.

## Website: ios26.xyz
## Contact: hellokaius@gmail.com

## Features

- **Latest iOS 26 Information**: Complete coverage of iOS 26 features and updates
- **Liquid Glass Design**: Information about Apple's new design language
- **Apple Intelligence**: Deep dive into AI-powered features
- **Device Compatibility**: Comprehensive compatibility guide
- **SEO Optimized**: Built with Next.js for optimal search engine performance
- **Responsive Design**: Works perfectly on all devices
- **Blog System**: Dynamic blog with Markdown support

## Tech Stack

- **Framework**: Next.js 15 with TypeScript
- **Styling**: Tailwind CSS 4
- **UI Components**: shadcn/ui with Radix UI
- **Content**: Markdown with gray-matter
- **Deployment**: Optimized for Vercel

## Blog Management

### Adding New Blog Posts

1. Create a new `.md` file in `content/blog/` directory
2. Filename becomes the URL slug (e.g., `my-article.md` → `/blog/my-article`)
3. Include frontmatter at the beginning of each file

### Frontmatter Format

```yaml
---
title: Article Title
description: Article description for SEO and preview
category: Category Name
readTime: Reading time (e.g., 5 min read)
publishDate: Publication date (YYYY-MM-DD format)
author: Author name
tags: [tag1, tag2, tag3]
featured: true/false (whether it's a featured article)
---
```

### Content Format

After frontmatter, write Markdown content:

- Headers (# ## ###)
- Bold text (**text**)
- Lists (- item)
- Numbered lists (1. item)
- Links ([text](URL))

## Automatic Features

- Articles automatically appear on blog listing page
- Featured articles (featured: true) display in featured section
- Automatic sitemap generation
- Automatic SEO metadata generation
- Automatic sorting by publication date

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Contact

For questions or suggestions about iOS 26 content, contact: hellokaius@gmail.com 