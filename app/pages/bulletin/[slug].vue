<template>
  <BulletinArticle v-if="currentBulletin" :title="currentBulletin.title" :date="currentBulletin.date" :description="currentBulletin.description">
    <div v-html="htmlContent" />
  </BulletinArticle>
</template>

<script setup lang="ts">
import bulletinsData from '~/data/bulletins.json'
const { locale } = useI18n()
const route = useRoute()

const currentBulletin = computed(() => {
  const bulletinData = bulletinsData.find(b => b.slug === route.params.slug)
  if (!bulletinData) return null

  const isEn = locale.value === 'en'
  const langData = isEn ? bulletinData.en : bulletinData.zh
  
  return {
    slug: bulletinData.slug,
    title: langData.title,
    description: langData.description,
    date: bulletinData.date,
    contentPath: bulletinData.contentPath
  }
})

const htmlContent = ref('')

const normalizeContentPath = (path: string) => (path.endsWith('.html') ? path : `${path}.html`)

const extractLocalizedContent = (html: string, localeValue: string) => {
  const tempDiv = document.createElement('div')
  tempDiv.innerHTML = html

  const targetElements = tempDiv.querySelectorAll(`[lang="${localeValue}"]`)

  if (targetElements.length === 0) {
    return html
  }

  const contentDiv = document.createElement('div')
  targetElements.forEach(el => {
    const clone = el.cloneNode(true) as Element
    clone.removeAttribute('lang')
    contentDiv.appendChild(clone)
  })

  return contentDiv.innerHTML
}

const loadBulletinContent = async () => {
  if (!currentBulletin.value) return

  try {
    const contentPath = normalizeContentPath(currentBulletin.value.contentPath)
    const response = await fetch(contentPath)

    if (!response.ok) {
      throw new Error(`Failed to load bulletin content: ${response.status}`)
    }

    const html = await response.text()
    htmlContent.value = extractLocalizedContent(html, locale.value)
  } catch (error) {
    console.error('Failed to load bulletin content:', error)
    htmlContent.value = ''
  }
}

onMounted(loadBulletinContent)

// 监听语言变化重新加载内容
watch(() => locale.value, loadBulletinContent)

if (!currentBulletin.value) {
  throw createError({ statusCode: 404, statusMessage: '公告不存在' })
}
</script>
