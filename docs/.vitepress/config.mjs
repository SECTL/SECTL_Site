import { defineConfig } from 'vitepress'
import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'

const getIcon = (name) => {
  try {
    const iconPath = resolve(process.cwd(), 'node_modules/lucide-static/icons', `${name}.svg`)
    let content = readFileSync(iconPath, 'utf-8')
    
    const style = 'display:inline-block; vertical-align:middle; width:1.2em; height:1.2em; margin-bottom: 2px;'
    
    // If class attribute exists, append our class and add style
    if (content.includes('class=')) {
      content = content.replace(
        /class="([^"]*)"/,
        `class="$1 lucide-icon" style="${style}"`
      )
    } else {
      // If no class attribute, inject both class and style
      content = content.replace('<svg', `<svg class="lucide-icon" style="${style}"`)
    }
    
    return content
  } catch (e) {
    return null
  }
}

const lucidePlugin = (md) => {
  md.inline.ruler.push('lucide_icon', (state, silent) => {
    const max = state.posMax
    const start = state.pos
    
    if (state.src.charCodeAt(start) !== 58) return false
    if (state.src.charCodeAt(start + 1) !== 58) return false
    if (state.src.slice(start, start + 9) !== '::lucide:') return false

    let pos = start + 9
    while (pos < max) {
      if (state.src.charCodeAt(pos) === 58 && state.src.charCodeAt(pos + 1) === 58) {
        break
      }
      pos++
    }

    if (pos >= max) return false

    if (!silent) {
      const iconName = state.src.slice(start + 9, pos)
      const token = state.push('html_inline', '', 0)
      const svg = getIcon(iconName)
      token.content = svg || `<span style="color:red">[Icon: ${iconName} not found]</span>`
    }

    state.pos = pos + 2
    return true
  })
}

export default defineConfig({
  markdown: {
    config: (md) => {
      md.use(lucidePlugin)
    }
  },
  title: "SECTL",
  description: "SECTL 组织官方网站",
  head: [
    ['link', { rel: 'icon', href: '/SECTL_logo.svg' }]
  ],
  themeConfig: {
    logo: '/SECTL_logo.svg',
    nav: [
      { text: '首页', link: '/' },
      {
        text: '公告',
        items: [
          { text: '社区规范', link: '/bulletin/community-rules' },
          { text: '加入社区', link: '/bulletin/community' },
          { text: '常用资源公告', link: '/bulletin/resources' }
        ]
      },
      { text: 'GitHub', link: 'https://github.com/SECTL' }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/SECTL' }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2025-2026 SECTL <br /> <a href="https://icp.gov.moe/?keyword=20260108" target="_blank">萌ICP备20260108号</a>'
    }
  }
})