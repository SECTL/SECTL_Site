<template>
  <div class="about">
    <div class="container">
      <div class="page-header">
        <h1>{{ t('about.title') }}</h1>
      </div>

      <div class="about-content">
        <section class="about-section card">
          <div class="section-icon">
            <Icon name="ph:target" size="48" />
          </div>
          <div class="section-content">
            <h2>{{ t('about.mission.title') }}</h2>
            <p>{{ t('about.mission.content') }}</p>
          </div>
        </section>

        <section class="about-section reverse card">
          <div class="section-icon">
            <Icon name="ph:eye" size="48" />
          </div>
          <div class="section-content">
            <h2>{{ t('about.vision.title') }}</h2>
            <p>{{ t('about.vision.content') }}</p>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()

useSeoMeta({
  title: t('about.title') + ' | SECTL',
  description: t('about.mission.content')
})
</script>

<style scoped>
.about {
  min-height: 60vh;
}

.page-header {
  text-align: center;
  margin-bottom: var(--spacing-2xl);
}

.page-header h1 {
  letter-spacing: -0.03em;
}

.about-section {
  display: grid;
  gap: var(--spacing-xl);
  margin-bottom: var(--spacing-2xl);
  padding: var(--spacing-xl);
  background-color: var(--color-card-bg);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.about-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(var(--color-primary-rgb), 0.04) 0%, transparent 100%);
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
}

.about-section:hover {
  border-color: rgba(var(--color-primary-rgb), 0.3);
  box-shadow: var(--shadow-xl);
  transform: translateY(-4px);
}

.about-section:hover::before {
  opacity: 1;
}

@media (min-width: 768px) {
  .about-section {
    grid-template-columns: auto 1fr;
    align-items: center;
  }
  
  .about-section.reverse {
    direction: rtl;
  }
  
  .about-section.reverse .section-content {
    direction: ltr;
  }
}

.section-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  border-radius: var(--radius-lg);
  background: linear-gradient(135deg, var(--color-primary), var(--color-primary-light));
  color: white;
  flex-shrink: 0;
  box-shadow: 0 8px 20px rgba(var(--color-primary-rgb), 0.25);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.about-section:hover .section-icon {
  transform: scale(1.08);
  box-shadow: 0 12px 30px rgba(var(--color-primary-rgb), 0.35);
}

.section-content h2 {
  margin-bottom: var(--spacing-md);
  color: var(--color-text);
}

.section-content p {
  color: var(--color-text-secondary);
  line-height: 1.8;
  font-size: 1.0625rem;
}
</style>
