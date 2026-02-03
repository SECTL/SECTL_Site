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

onMounted(async () => {
  if (currentBulletin.value) {
    try {
      const response = await fetch(currentBulletin.value.contentPath)
      const html = await response.text()
      const locale_value = locale.value
      
      // 创建临时 div 解析 HTML
      const tempDiv = document.createElement('div')
      tempDiv.innerHTML = html
      
      // 根据 lang 属性筛选对应语言的内容
      const targetElements = tempDiv.querySelectorAll(`[lang="${locale_value}"]`)
      
      if (targetElements.length > 0) {
        // 合并所有目标语言的内容
        const contentDiv = document.createElement('div')
        targetElements.forEach(el => {
          const clone = el.cloneNode(true) as Element
          clone.removeAttribute('lang')
          contentDiv.appendChild(clone)
        })
        htmlContent.value = contentDiv.innerHTML
      } else {
        htmlContent.value = html
      }
    } catch (error) {
      console.error('Failed to load bulletin content:', error)
      htmlContent.value = ''
    }
  }
})

// 监听语言变化重新加载内容
watch(() => locale.value, async () => {
  if (currentBulletin.value) {
    try {
      const response = await fetch(currentBulletin.value.contentPath)
      const html = await response.text()
      const locale_value = locale.value
      
      const tempDiv = document.createElement('div')
      tempDiv.innerHTML = html
      
      const targetElements = tempDiv.querySelectorAll(`[lang="${locale_value}"]`)
      
      if (targetElements.length > 0) {
        const contentDiv = document.createElement('div')
        targetElements.forEach(el => {
          const clone = el.cloneNode(true) as Element
          clone.removeAttribute('lang')
          contentDiv.appendChild(clone)
        })
        htmlContent.value = contentDiv.innerHTML
      } else {
        htmlContent.value = html
      }
    } catch (error) {
      console.error('Failed to load bulletin content:', error)
    }
  }
})

if (!currentBulletin.value) {
  throw createError({ statusCode: 404, statusMessage: '公告不存在' })
}
</script>
