// scripts/generateBlogIndex.js
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const blogRoot = path.resolve('src/resources/blogs')
const outputFile = path.resolve('src/assets/blogIndex.json')

const blogIndex = []

function walk(dir, tag) {
  const files = fs.readdirSync(dir)
  for (const file of files) {
    const fullPath = path.join(dir, file)
    const stat = fs.statSync(fullPath)

    if (stat.isDirectory()) {
      walk(fullPath, file) // subfolder = tag
    } else if (file.endsWith('.md')) {
      const content = fs.readFileSync(fullPath, 'utf-8')
      const { data } = matter(content)

      const slug = path.basename(file, '.md')
      blogIndex.push({
        tag: tag,
        slug: slug,
        title: data.title || slug.replace(/-/g, ' '),
        date: data.date || 'Unknown',
        description: data.description || '',
        imageUrl: data.imageUrl || '',
      })      
    }
  }
}

walk(blogRoot, 'General')

fs.writeFileSync(outputFile, JSON.stringify(blogIndex, null, 2))
console.log(`✅ Blog index written to: ${outputFile}`)
