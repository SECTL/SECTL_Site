import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "SECTL",
  description: "SECTL 组织官方网站",
  themeConfig: {
    logo: 'https://github.com/SECTL.png',
    nav: [
      { text: '首页', link: '/' },
      { text: 'SecRandom', link: '/secrandom' },
      { text: 'SecScore', link: '/secscore' }
    ],
    sidebar: [
      {
        text: '项目列表',
        items: [
          { text: 'SecRandom', link: '/secrandom' },
          { text: 'SecScore', link: '/secscore' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/SECTL' }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2025-2026 SECTL'
    }
  }
})
