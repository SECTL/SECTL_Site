<template>
  <div class="home">
    <section class="hero">
      <div class="container">
        <div class="hero-content">
          <a
            class="sponsor-badge"
            href="https://afdian.com/a/lzy0983"
            target="_blank"
            rel="noopener"
          >
            <Icon name="twemoji:bubble-tea" size="18" />
            <p>{{ t('home.sponsor') }}</p>
            <Icon name="ph:arrow-up-right" size="16" />
          </a>
          <h1 class="hero-title">{{ t('home.title') }}</h1>
          <p class="hero-subtitle">{{ t('home.subtitle') }}</p>
          <p class="hero-description">
            <span class="typewriter-text" ref="typewriterRef"></span>
            <span class="typewriter-cursor"></span>
          </p>
          <div class="hero-actions">
            <NuxtLink :to="localePath('/projects')" class="btn">
              <Icon name="ph:code" size="20" />
              {{ t('home.cta') }}
            </NuxtLink>
            <NuxtLink :to="localePath('/bulletin')" class="btn">
              <Icon name="ph:newspaper" size="20" />
              {{ t('home.viewBulletin') }}
            </NuxtLink>
            <a href="https://github.com/SECTL" target="_blank" rel="noopener" class="btn btn-ghost">
              <Icon name="mdi:github" size="20" />
              {{ t('home.githubPage') }}
            </a>
          </div>
        </div>
      </div>
    </section>

    <section class="features">
      <div class="container">
        <div class="grid grid-3">
          <div class="feature-card card">
            <div class="feature-icon">
              <Icon name="ph:code" size="32" />
            </div>
            <h3>{{ t('home.values.open.title') }}</h3>
            <p>{{ t('home.values.open.content') }}</p>
          </div>

          <div class="feature-card card">
            <div class="feature-icon">
              <Icon name="ph:lightbulb" size="32" />
            </div>
            <h3>{{ t('home.values.innovation.title') }}</h3>
            <p>{{ t('home.values.innovation.content') }}</p>
          </div>

          <div class="feature-card card">
            <div class="feature-icon">
              <Icon name="ph:graduation-cap" size="32" />
            </div>
            <h3>{{ t('home.values.education.title') }}</h3>
            <p>{{ t('home.values.education.content') }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const { t, locale } = useI18n()
const localePath = useLocalePath()

const typewriterRef = ref<HTMLElement | null>(null)

// 将描述文本按照标点符号拆分为半句
function splitDescription(text: string): string[] {
  // 按中文逗号、英文逗号、中文句号、英文句号等标点拆分
  const parts = text.split(/(?<=[，,、；;。.！!？?])/)
  return parts.filter(p => p.trim().length > 0)
}

let typewriterTimeout: ReturnType<typeof setTimeout> | null = null

function startTypewriter() {
  const el = typewriterRef.value
  if (!el) return

  const fullText = t('home.description')
  const segments = splitDescription(fullText)
  const safeSegments = segments.length > 0 ? segments : [fullText]
  let segIndex = 0
  let charIndex = 0
  let isDeleting = false

  function tick() {
    const segment = safeSegments[segIndex] ?? ''
    if (!segment) {
      typewriterTimeout = setTimeout(tick, 500)
      return
    }

    if (!isDeleting) {
      // 打字
      charIndex++
      el!.textContent = segment.substring(0, charIndex)

      if (charIndex >= segment.length) {
        // 当前半句打完，停顿后开始删除
        typewriterTimeout = setTimeout(() => {
          isDeleting = true
          tick()
        }, 2000)
        return
      }
      typewriterTimeout = setTimeout(tick, 80)
    } else {
      // 删除
      charIndex--
      el!.textContent = segment.substring(0, charIndex)

      if (charIndex <= 0) {
        // 删完，切换到下一段
        isDeleting = false
        segIndex = (segIndex + 1) % safeSegments.length
        typewriterTimeout = setTimeout(tick, 500)
        return
      }
      typewriterTimeout = setTimeout(tick, 30)
    }
  }

  tick()
}

onMounted(() => {
  startTypewriter()
})

onUnmounted(() => {
  if (typewriterTimeout) clearTimeout(typewriterTimeout)
})

// 语言切换时重新启动打字机
watch(() => locale.value, () => {
  if (typewriterTimeout) clearTimeout(typewriterTimeout)
  nextTick(() => startTypewriter())
})

useSeoMeta({
  title: 'SECTL - ' + t('home.subtitle'),
  description: t('home.description'),
  ogTitle: 'SECTL',
  ogDescription: t('home.description'),
  ogImage: '/images/og-image.png',
  twitterCard: 'summary_large_image'
})
</script>

<style scoped>
.hero {
  text-align: center;
  position: relative;
}

/* 背景装饰光晕 */
.hero::before {
  content: '';
  position: absolute;
  top: -80%;
  left: 50%;
  transform: translateX(-50%);
  width: 700px;
  height: 700px;
  background: radial-gradient(circle, rgba(var(--color-primary-rgb), 0.08) 0%, transparent 70%);
  pointer-events: none;
  z-index: 0;
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.sponsor-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.4em;
  font-size: 0.8rem;
  color: var(--color-primary);
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border);
  border-radius: 9999px;
  padding: 0.3em 0.9em;
  font-weight: 600;
  animation: pulse-badge 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.sponsor-badge:hover {
  cursor: pointer;
  animation: none;
  transform: translateY(-2px) scale(1.02);
}

@keyframes pulse-badge {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.7; }
}

.hero-title {
  font-size: 4rem;
  font-weight: 800;
  background: linear-gradient(135deg, var(--color-primary), var(--color-primary-light));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: -0.03em;
}

@media (min-width: 768px) {
  .hero-title {
    font-size: 4rem;
  }
}

.hero-subtitle {
  font-size: 2rem;
  font-weight: 700;
  color: var(--color-text);
  letter-spacing: -0.02em;
}

.hero-description {
  font-size: 1.75rem;
  color: var(--color-text-secondary);
  line-height: 1.8;
  min-height: 2.4em;
}

.typewriter-text {
  display: inline;
}

.typewriter-cursor {
  display: inline-block;
  width: 2px;
  height: 1.2em;
  background-color: var(--color-primary);
  margin-left: 2px;
  vertical-align: text-bottom;
  animation: blink-cursor 0.7s infinite;
}

@keyframes blink-cursor {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

.hero-actions {
  display: flex;
  gap: var(--spacing-md);
  justify-content: center;
  flex-wrap: wrap;
}

.features {
  padding: var(--spacing-2xl) 0;
}

.feature-card {
  text-align: center;
  padding: var(--spacing-xl);
  position: relative;
}

.feature-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  margin-bottom: var(--spacing-md);
  border-radius: var(--radius-lg);
  background: linear-gradient(135deg, var(--color-primary), var(--color-primary-light));
  color: white;
  box-shadow: 0 8px 20px rgba(var(--color-primary-rgb), 0.25);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.feature-card:hover .feature-icon {
  transform: translateY(-4px) scale(1.08);
  box-shadow: 0 12px 30px rgba(var(--color-primary-rgb), 0.35);
}

.feature-card h3 {
  font-size: 1.25rem;
  margin-bottom: var(--spacing-sm);
}

.feature-card p {
  color: var(--color-text-secondary);
  line-height: 1.7;
}
</style>
