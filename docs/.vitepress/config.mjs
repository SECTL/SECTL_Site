import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "SECTL",
  description: "SECTL 组织官方网站",
  themeConfig: {
    logo: '/SECTL_logo.svg',
    nav: [
      { text: '首页', link: '/' },
      { text: 'GitHub', link: 'https://github.com/SECTL' }
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
