<template>
  <div class="projects">
    <div class="container">
      <div class="page-header">
        <h1>{{ t('projects.title') }}</h1>
      </div>

      <div class="grid grid-2">
        <div v-for="(project, index) in projects" :key="index" class="card-static">
          <div class="project-header">
            <img :src="project.icon" :alt="project.name" class="project-icon" />
            <div class="project-info">
              <h3>{{ project.name }}</h3>
              <div class="project-meta-row">
                <span class="project-language">
                  <Icon name="ph:circle-fill" :style="{ color: project.languageColor }" size="14" />
                  {{ project.language }}
                </span>
                <span class="project-meta-stat">
                  <Icon name="octicon:star-fill-16" style="color: #eac54f" />
                  {{ formatNumber(project.stars || 0) }}
                </span>
                <span class="project-meta-stat">
                  <Icon name="octicon:download-16" style="color: #2495f7" />
                  {{ formatNumber(project.downloads || 0) }}
                </span>
              </div>
            </div>
          </div>

          <p class="project-description">{{ t(project.descriptionKey) }}</p>

          <div class="project-actions">
            <a :href="project.github" target="_blank" rel="noopener" class="btn btn-ghost auto-width">
              <Icon name="mdi:github" size="20" />
              {{ t('projects.github') }}
            </a>
            <a :href="project.docs" target="_blank" rel="noopener" class="btn btn-ghost auto-width">
              <Icon name="ph:book-open" size="20" />
              {{ t('projects.docs') }}
            </a>
            <div v-if="project.downloadPlatforms" class="download-dropdown" :ref="(el) => setDownloadDropdownRef(el, index)">
              <button class="btn btn-download auto-width" @click="toggleDownloadDropdown(index, $event)">
                <Icon name="ep:download" size="20" />
                {{ t('projects.download.title') }}
              </button>
              <transition name="scale-center">
                <div v-if="showDownloadDropdown === index" class="download-menu">
                  <template v-for="(platform, pIndex) in project.downloadPlatforms" :key="pIndex">
                    <div class="download-option-group">
                      <button class="download-menu-item platform-item" disabled>
                        <Icon :name="platform.icon" size="16" />
                        <span>{{ platform.platform }}</span>
                      </button>
                    </div>
                    <div v-for="option in platform.options" :key="option.key" class="download-option-group">
                      <a 
                        class="download-menu-item option-item" 
                        :href="option.url" 
                        target="_blank" 
                        rel="noopener" 
                        @click="showDownloadDropdown = null"
                      >
                        <Icon :name="getOptionIcon(option.key)" size="16" />
                        <span>{{ option.label?.startsWith('projects.') ? t(option.label) : option.label }}</span>
                      </a>
                    </div>
                  </template>
                </div>
              </transition>
            </div>
          </div>
        </div>
      </div>
      <div class="star-history">
        <img 
          :key="colorMode.value"
          alt="Star History Chart" 
          :src="`https://api.star-history.com/svg?repos=SECTL/SecRandom,SECTL/SecScore&type=date${colorMode.value === 'dark' ? '&theme=dark' : ''}&legend=top-left`" 
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
const colorMode = useColorMode()
import { ref, onMounted, onBeforeUnmount, type ComponentPublicInstance } from 'vue'

const LANGUAGE_COLOR_URL = 'https://gh.llkk.cc/https://raw.githubusercontent.com/ozh/github-colors/master/colors.json'

const downloadDropdownRefs = ref<(Element | ComponentPublicInstance | null)[]>([])
const showDownloadDropdown = ref<number | null>(null)

const setDownloadDropdownRef = (el: any, index: number) => {
  if (downloadDropdownRefs.value.length <= index) {
    downloadDropdownRefs.value[index] = null
  }
  downloadDropdownRefs.value[index] = el
}

const getOptionIcon = (key: string) => {
  const iconMap: Record<string, string> = {
    'windows-setup': 'tabler:device-ipad-horizontal-up',
    'windows-portable': 'tabler:box',
    'linux-appimage': 'tabler:disc',
    'linux-deb': 'tabler:brand-debian',
    'macos-dmg': 'ph:disc'
  }
  return iconMap[key] || 'ph:download-simple'
}

const toggleDownloadDropdown = (index: number, e: Event) => {
  e.stopPropagation()
  showDownloadDropdown.value = showDownloadDropdown.value === index ? null : index
}

function handleClickOutside(event: MouseEvent) {
  const index = showDownloadDropdown.value
  if (index !== null) {
    const ref = downloadDropdownRefs.value[index]
    if (ref && ref instanceof Element && !ref.contains(event.target as Node)) {
      showDownloadDropdown.value = null
    }
  }
}

onMounted(() => {
  document.addEventListener('mousedown', handleClickOutside)
})
onBeforeUnmount(() => {
  document.removeEventListener('mousedown', handleClickOutside)
})

interface DownloadOption {
  key: string
  label?: string
  url?: string
}

interface DownloadPlatform {
  platform: string
  icon: string
  options: DownloadOption[]
}

interface Project {
  name: string
  icon: string
  github: string
  docs: string
  descriptionKey: string
  language?: string
  stars?: number
  downloads?: number
  languageColor?: string
  downloadPlatforms?: DownloadPlatform[]
}

const languageColors = ref<Record<string, string>>({})

const projects = ref<Project[]>([
  {
    name: 'SecRandom',
    icon: '/icons/SecRandom.png',
    github: 'https://github.com/SECTL/SecRandom',
    docs: 'https://secrandom.sectl.top',
    descriptionKey: 'projects.SecRandom.description',
    downloadPlatforms: [
      {
        platform: 'Windows',
        icon: 'devicon:windows11',
        options: [
          { key: 'windows-setup', label: 'projects.download.Setup' },
          { key: 'windows-portable', label: 'projects.download.Portable' }
        ]
      },
      {
        platform: 'Linux',
        icon: 'devicon:linux',
        options: [
          { key: 'linux-appimage', label: 'AppImage' },
          { key: 'linux-deb', label: 'deb' }
        ]
      }
    ]
  },
  {
    name: 'SecScore',
    icon: '/icons/SecScore.svg',
    github: 'https://github.com/SECTL/SecScore',
    docs: 'https://secscore.sectl.top',
    descriptionKey: 'projects.SecScore.description',
    downloadPlatforms: [
      {
        platform: 'Windows',
        icon: 'devicon:windows11',
        options: [
          { key: 'windows-portable', label: 'projects.download.Portable' }
        ]
      },
      {
        platform: 'Linux',
        icon: 'devicon:linux',
        options: [
          { key: 'linux-appimage', label: 'AppImage' },
          { key: 'linux-deb', label: 'deb' }
        ]
      },
      {
        platform: 'macOS',
        icon: 'ri:apple-fill',
        options: [
          { key: 'macos-dmg', label: 'dmg' }
        ]
      }
    ]
  }
])

const formatNumber = (num: number) => {
  if (!num) return '0'
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'k'
  }
  return num.toString()
}

const getLanguageColor = (language: string | undefined) => {
  if (!language) return '#cccccc'
  return languageColors.value[language] || '#cccccc'
}

const loadLanguageColors = async () => {
  try {
    const res = await fetch(LANGUAGE_COLOR_URL)
    if (!res.ok) throw new Error(`语言颜色请求失败 ${res.status}`)
    const data = await res.json()
    const map: Record<string, string> = {}
    for (const [lang, info] of Object.entries(data)) {
      if (info && typeof info === 'object' && (info as any).color) {
        map[lang] = (info as any).color
      }
    }
    languageColors.value = map
  } catch (e) {
    console.warn('加载语言颜色失败，使用默认颜色:', e)
    languageColors.value = {}
  }
}

// 支持代理优先、失败回退的 fetch
const fetchWithFallback = async (url: string, options?: any) => {
  const proxyUrl = 'https://ghfile.geekertao.top/' + url
  try {
    return await $fetch(proxyUrl, options)
  } catch (e) {
    // 代理失败，回退官方
    return await $fetch(url, options)
  }
}

// 获取 GitHub 统计数据和仓库信息
const fetchGitHubStats = async () => {
  for (const project of projects.value) {
    try {
      const repoName = project.github.split('github.com/')[1]
      const repoApi = `https://api.github.com/repos/${repoName}`
      const response = await fetchWithFallback(repoApi) as {
        stargazers_count?: number;
        language?: string;
      }

      project.stars = response.stargazers_count || 0
      project.language = response.language || ''
      project.languageColor = getLanguageColor(project.language)

      // 获取发布版本数据以统计下载量
      const releasesApi = `https://api.github.com/repos/${repoName}/releases`
      const releasesResponse = await fetchWithFallback(releasesApi) as Array<{ 
        assets?: Array<{ 
          download_count?: number,
          name?: string,
          browser_download_url?: string
        }>,
        prerelease?: boolean
      }>
      if (Array.isArray(releasesResponse) && releasesResponse.length > 0) {
        // 计算总下载量
        project.downloads = releasesResponse.reduce((total: number, release) => {
          return total + (release.assets?.reduce((sum: number, asset: { download_count?: number }) => sum + (asset.download_count || 0), 0) || 0)
        }, 0)

        // 查找最新发布版本（优先选择非预发布版本，然后是最新预发布版本）
        let latestRelease = releasesResponse.find(release => !release.prerelease)
        if (!latestRelease) {
          latestRelease = releasesResponse[0]
        }

        // 处理资源文件并映射到下载选项
        if (latestRelease && latestRelease.assets && Array.isArray(latestRelease.assets)) {
          // 创建下载选项键到其 URL 的映射
          const downloadUrls: Record<string, string> = {}

          for (const asset of latestRelease.assets) {
            if (!asset.name || !asset.browser_download_url) continue

            const filename = asset.name.toLowerCase()
            const assetUrl = `https://gh.llkk.cc/${asset.browser_download_url}`

            // 根据文件名规则将资源文件匹配到下载选项
            if (filename.includes('windows') && filename.includes('setup')) {
              downloadUrls['windows-setup'] = assetUrl
            } else if (filename.includes('windows') && filename.includes('portable')) {
              downloadUrls['windows-portable'] = assetUrl
            } else if (filename.endsWith('.appimage')) {
              downloadUrls['linux-appimage'] = assetUrl
            } else if (filename.endsWith('.deb')) {
              downloadUrls['linux-deb'] = assetUrl
            } else if (filename.endsWith('.dmg')) {
              downloadUrls['macos-dmg'] = assetUrl
            } else if (filename.includes('win') && filename.endsWith('.zip')) {
              downloadUrls['windows-portable'] = assetUrl
            } else if (filename.includes('win') && filename.endsWith('.exe')) {
              downloadUrls['windows-setup'] = assetUrl
            }
          }

          // 使用匹配的 URL 更新 downloadPlatforms
          if (project.downloadPlatforms) {
            for (const platform of project.downloadPlatforms) {
              for (const option of platform.options) {
                if (downloadUrls[option.key]) {
                  option.url = downloadUrls[option.key]
                }
              }
            }
          }
        }
      }
    } catch (error) {
      console.error(`Failed to fetch stats for ${project.github}:`, error)
    }
  }
}

onMounted(async () => {
  await loadLanguageColors()
  await fetchGitHubStats()
})

useSeoMeta({
  title: t('projects.title') + ' | SECTL',
  description: t('projects.description')
})
</script>

<style scoped>
.projects {
  min-height: 60vh;
}

.page-header {
  text-align: center;
  max-width: 600px;
  margin: 0 auto var(--spacing-2xl);
}

.page-header h1 {
  margin-bottom: var(--spacing-sm);
}

.page-header p {
  color: var(--color-text-secondary);
  font-size: 1.125rem;
}

.project-header {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  min-height: 64px;
}

.project-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.project-meta-row {
  display: flex;
  align-items: center;
  gap: 1.25rem;
  margin-top: 0.25rem;
  min-height: 24px;
}

.project-language {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.95rem;
  color: var(--color-text-secondary);
}

.project-meta-stat {
  display: flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.95rem;
  color: var(--color-text-secondary);
}

.project-icon {
  width: 64px;
  height: 64px;
  border-radius: var(--radius-md);
  object-fit: cover;
}

.project-info h3 {
  margin-bottom: 0.25rem;
  font-size: 1.25rem;
}

.project-description {
  color: var(--color-text-secondary);
  line-height: 1.6;
}

.project-actions {
  display: flex;
  gap: var(--spacing-sm);
  margin-top: auto;
  justify-content: flex-start;
  flex-wrap: wrap;
}

@media (max-width: 640px) {
  .project-actions {
    flex-direction: row;
  }
  
  .project-actions .btn {
    width: auto;
    flex: 1;
  }

  .project-meta-row {
    flex-wrap: wrap;
    gap: 0.75rem;
  }

  .project-language,
  .project-meta-stat {
    font-size: 0.85rem;
  }
}

.project-actions .btn.auto-width {
  flex: 0 0 auto;
  min-width: 0;
  width: auto;
  justify-content: flex-start;
  padding-left: 1.1em;
  padding-right: 1.1em;
  height: 40px;
}

.download-dropdown {
  position: relative;
  display: inline-block;
}

.download-menu {
  position: absolute;
  top: 110%;
  background: var(--color-bg);
  border: 0.25px solid var(--color-border);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  display: flex;
  flex-direction: column;
  padding: 0.35rem;
  width: auto;
}

.download-option-group {
  position: relative;
  display: flex;
  flex-direction: column;
}

.download-menu-item {
  background: none;
  border: none;
  outline: none;
  text-align: left;
  padding: 0.5rem 0.9rem;
  font-size: 0.95rem;
  color: var(--color-text-secondary);
  cursor: pointer;
  border-radius: var(--radius-lg);
  transition: background 0.2s, color 0.2s;
  display: flex;
  align-items: center;
  gap: 0.65rem;
  position: relative;
  z-index: 2;
}

.download-menu-item:hover {
  background: var(--color-bg-secondary);
  color: var(--color-text);
  border-radius: var(--radius-md);
}

.platform-item {
  font-weight: 500;
  color: var(--color-text);
  cursor: default;
}

.platform-item:disabled {
  background: transparent;
}

.option-item {
  padding: 8px 16px;
  margin-left: 30px;
  color: var(--color-text-secondary);
}

.download-menu-item Icon {
  flex-shrink: 0;
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.scale-center-enter-active {
  transition: all 0.2s ease-out;
  transform-origin: center center;
}

.scale-center-leave-active {
  transition: opacity 0.1s ease-out;
}

.scale-center-enter-from {
  transform: scale(0.9);
  opacity: 0;
  box-shadow: var(--shadow-sm);
}

.scale-center-leave-to {
  opacity: 0;
}

.scale-center-enter-to {
  transform: scale(1);
  opacity: 1;
  box-shadow: var(--shadow-lg);
}

.star-history {
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  padding: 1em;
  border: 1.5px solid var(--color-border);
  border-radius: var(--radius-lg);
}

.star-history img {
  width: 100%;
  height: auto;
  display: block;
}
</style>
