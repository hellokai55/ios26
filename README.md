# 博客文章管理说明

## 如何添加新的博客文章

1. 在 `content/blog/` 目录下创建一个新的 `.md` 文件
2. 文件名将作为文章的 URL slug（例如：`my-article.md` → `/blog/my-article`）
3. 文件开头必须包含 frontmatter（YAML 格式的元数据）

## Frontmatter 格式

每个 Markdown 文件的开头必须包含以下格式的 frontmatter：

```yaml
---
title: 文章标题
description: 文章描述（用于SEO和摘要）
category: 分类名称
readTime: 阅读时间（如：5 min read）
publishDate: 发布日期（YYYY-MM-DD格式）
author: 作者名称
tags: [标签1, 标签2, 标签3]
featured: true/false（是否为特色文章）
---
```

## 文章内容格式

frontmatter 后面直接写 Markdown 格式的文章内容：

- 支持标题（# ## ###）
- 支持粗体文本（**文本**）
- 支持列表（- 项目）
- 支持数字列表（1. 项目）
- 支持链接（[文本](URL)）

## 示例文件

参考 `slice-master-complete-guide.md` 和 `unlock-all-blades-guide.md` 文件的格式。

## 自动功能

- 文章会自动出现在博客列表页面
- 特色文章（featured: true）会显示在特色区域
- 自动生成 sitemap
- 自动生成 SEO 元数据
- 自动按发布日期排序 