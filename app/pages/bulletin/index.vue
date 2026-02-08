<template>
  <div class="bulletin">
    <div class="container">
      <div class="page-header">
        <h1>{{ t('bulletin.title') }}</h1>
        <p>{{ t('bulletin.description') }}</p>
      </div>

      <div class="bulletin-list">
        <div
          v-for="item in bulletins"
          :key="item.slug"
          class="card-static"
        >
          <div class="bulletin-card-header">
            <h3>{{ item.title }}</h3>
            <span class="bulletin-date">
              <Icon name="ph:calendar" size="16" />
              {{ item.date }}
            </span>
          </div>
          <p class="bulletin-description">
            {{ item.description }}
          </p>
          <NuxtLink
            :to="localePath(`/bulletin/${item.slug}`)"
            class="bulletin-readmore"
          >
            {{ t('bulletin.readMore') }}
            <Icon name="ph:arrow-right" size="16" />
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t, locale } = useI18n()
const localePath = useLocalePath()
import bulletinsData from '~/data/bulletins.json'

const bulletins = computed(() => {
  return bulletinsData.map((item) => {
    const isEn = locale.value === 'en'
    const langData = isEn ? item.en : item.zh
    return {
      slug: item.slug,
      title: langData.title,
      description: langData.description,
      date: item.date
    }
  })
})

const seoTitle = computed(() => `${t('bulletin.title')} | SECTL`)
const seoDescription = computed(() => t('bulletin.description'))

useSeoMeta({
  title: seoTitle,
  description: seoDescription
})
</script>

<style scoped>
.bulletin {
  min-height: 60vh;
}

.page-header {
  text-align: center;
  max-width: 640px;
  margin: 0 auto var(--spacing-2xl);
}

.page-header h1 {
  letter-spacing: -0.03em;
}

.page-header p {
  color: var(--color-text-secondary);
  font-size: 1.125rem;
}

.bulletin-list {
  display: grid;
  gap: var(--spacing-lg);
}

@media (min-width: 768px) {
  .bulletin-list {
    grid-template-columns: repeat(2, 1fr);
  }
}

.bulletin-card-header {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
}

.bulletin-card-header h3 {
  transition: color 0.3s ease;
}

.card-static:hover .bulletin-card-header h3 {
  color: var(--color-primary);
}

.bulletin-date {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  color: var(--color-text-secondary);
  font-size: 0.85rem;
}

.bulletin-description {
  color: var(--color-text-secondary);
  line-height: 1.7;
}

.bulletin-readmore {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  color: var(--color-primary);
  font-weight: 600;
  font-size: 0.9rem;
  margin-top: auto;
  align-self: flex-end;
  position: relative;
  padding-bottom: 0.15rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.bulletin-readmore::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 2px;
  background: var(--color-primary);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.bulletin-readmore:hover {
  transform: translateX(4px);
}

.bulletin-readmore:hover::after {
  transform: scaleX(1);
}
</style>
