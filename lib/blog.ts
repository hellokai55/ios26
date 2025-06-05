import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

// 博客文章类型定义
export interface BlogPost {
  slug: string
  title: string
  description: string
  category: string
  readTime: string
  publishDate: string
  author: string
  tags: string[]
  featured: boolean
  content: string
}

// 博客文章元数据类型
export interface BlogPostMeta {
  slug: string
  title: string
  description: string
  category: string
  readTime: string
  publishDate: string
  author: string
  tags: string[]
  featured: boolean
}

const postsDirectory = path.join(process.cwd(), 'content/blog')

// 获取所有博客文章的元数据
export function getAllPosts(): BlogPostMeta[] {
  try {
    // 确保目录存在
    if (!fs.existsSync(postsDirectory)) {
      return []
    }

    const fileNames = fs.readdirSync(postsDirectory)
    const allPostsData = fileNames
      .filter(fileName => fileName.endsWith('.md'))
      .map(fileName => {
        const slug = fileName.replace(/\.md$/, '')
        const fullPath = path.join(postsDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')
        const { data } = matter(fileContents)

        return {
          slug,
          title: data.title || '',
          description: data.description || '',
          category: data.category || 'Uncategorized',
          readTime: data.readTime || '5 min read',
          publishDate: data.publishDate || new Date().toISOString().split('T')[0],
          author: data.author || 'Anonymous',
          tags: Array.isArray(data.tags) ? data.tags : [],
          featured: Boolean(data.featured),
        }
      })
      .sort((a, b) => {
        // 按发布日期降序排列
        return new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
      })

    return allPostsData
  } catch (error) {
    console.error('Error reading blog posts:', error)
    return []
  }
}

// 根据slug获取单篇博客文章
export function getPostBySlug(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`)
    
    if (!fs.existsSync(fullPath)) {
      return null
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    return {
      slug,
      title: data.title || '',
      description: data.description || '',
      category: data.category || 'Uncategorized',
      readTime: data.readTime || '5 min read',
      publishDate: data.publishDate || new Date().toISOString().split('T')[0],
      author: data.author || 'Anonymous',
      tags: Array.isArray(data.tags) ? data.tags : [],
      featured: Boolean(data.featured),
      content,
    }
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error)
    return null
  }
}

// 获取所有文章的slug列表（用于generateStaticParams）
export function getAllPostSlugs(): string[] {
  try {
    if (!fs.existsSync(postsDirectory)) {
      return []
    }

    const fileNames = fs.readdirSync(postsDirectory)
    return fileNames
      .filter(fileName => fileName.endsWith('.md'))
      .map(fileName => fileName.replace(/\.md$/, ''))
  } catch (error) {
    console.error('Error getting post slugs:', error)
    return []
  }
}

// 获取特色文章
export function getFeaturedPosts(): BlogPostMeta[] {
  return getAllPosts().filter(post => post.featured)
}

// 获取最新文章
export function getRecentPosts(limit: number = 5): BlogPostMeta[] {
  return getAllPosts().slice(0, limit)
}

// 根据分类获取文章
export function getPostsByCategory(category: string): BlogPostMeta[] {
  return getAllPosts().filter(post => 
    post.category.toLowerCase() === category.toLowerCase()
  )
}

// 获取所有分类
export function getAllCategories(): string[] {
  const posts = getAllPosts()
  const categories = [...new Set(posts.map(post => post.category))]
  return categories.sort()
}

// 改进的Markdown渲染函数
export function renderMarkdown(content: string): string {
  const lines = content.split('\n')
  let html = ''
  let inList = false
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim()
    
    if (line === '') {
      if (inList) {
        html += '</ul>'
        inList = false
      }
      html += '<br>'
      continue
    }
    
    // 标题处理
    if (line.startsWith('# ')) {
      if (inList) {
        html += '</ul>'
        inList = false
      }
      html += `<h1 class="text-3xl font-bold text-gray-800 mt-8 mb-4">${line.slice(2)}</h1>`
    } else if (line.startsWith('## ')) {
      if (inList) {
        html += '</ul>'
        inList = false
      }
      html += `<h2 class="text-2xl font-semibold text-gray-800 mt-6 mb-3">${line.slice(3)}</h2>`
    } else if (line.startsWith('### ')) {
      if (inList) {
        html += '</ul>'
        inList = false
      }
      html += `<h3 class="text-xl font-medium text-gray-800 mt-4 mb-2">${line.slice(4)}</h3>`
    }
    // 列表处理
    else if (line.startsWith('- ')) {
      if (!inList) {
        html += '<ul class="list-disc list-inside mb-4 space-y-2">'
        inList = true
      }
      // 处理列表项中的粗体文本
      const listContent = line.slice(2).replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-gray-800">$1</strong>')
      html += `<li class="text-gray-700">${listContent}</li>`
    }
    // 数字列表处理
    else if (/^\d+\.\s/.test(line)) {
      if (inList) {
        html += '</ul>'
        inList = false
      }
      const listContent = line.replace(/^\d+\.\s/, '').replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-gray-800">$1</strong>')
      html += `<p class="mb-2 text-gray-700"><span class="font-medium">${line.match(/^\d+/)?.[0]}.</span> ${listContent}</p>`
    }
    // 普通段落处理
    else {
      if (inList) {
        html += '</ul>'
        inList = false
      }
      // 处理粗体文本和链接
      let processedLine = line
        .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-gray-800">$1</strong>')
        .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-red-600 hover:text-red-700 underline">$1</a>')
      
      html += `<p class="mb-4 text-gray-700 leading-relaxed">${processedLine}</p>`
    }
  }
  
  // 关闭未关闭的列表
  if (inList) {
    html += '</ul>'
  }
  
  return html
} 