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
            <Icon name="ep:milk-tea" size="16" />
            <p>{{ t('home.sponsor') }}</p>
            <Icon name="ph:arrow-up-right" size="16" />
          </a>
          <h1 class="hero-title">{{ t('home.title') }}</h1>
          <p class="hero-subtitle">{{ t('home.subtitle') }}</p>
          <p class="hero-description">{{ t('home.description') }}</p>
          <div class="hero-actions">
            <NuxtLink :to="localePath('/about')" class="btn">
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
const { t } = useI18n()
const localePath = useLocalePath()

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
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
}

.sponsor-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.4em;
  font-size: 0.8rem;
  color: var(--color-primary);
  background: var(--color-card-bg);
  border: 1.5px solid var(--color-primary);
  border-radius: 16px;
  padding: 0.2em 0.8em;
  transition: box-shadow 0.2s, transform 0.25s cubic-bezier(.4,1.6,.6,1);
  box-shadow: 0 1px 6px 0 rgba(0,0,0,0.03);
}

.sponsor-badge {
  margin: 0 0.2em;
}

.sponsor-badge:hover {
  cursor: pointer;
  transform: translateY(-2px) scale(1.02);
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: var(--spacing-md);
  background: linear-gradient(135deg, var(--color-primary), var(--color-primary-light));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

@media (min-width: 768px) {
  .hero-title {
    font-size: 4rem;
  }
}

.hero-subtitle {
  font-size: 2rem;
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: var(--spacing-md);
}

.hero-description {
  font-size: 1.125rem;
  color: var(--color-text-secondary);
  margin-bottom: var(--spacing-xl);
  line-height: 1.8;
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
}

.feature-card h3 {
  font-size: 1.25rem;
  margin-bottom: var(--spacing-sm);
}

.feature-card p {
  color: var(--color-text-secondary);
  line-height: 1.6;
}
</style>
