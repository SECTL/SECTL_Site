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

.about-section {
  display: grid;
  gap: var(--spacing-xl);
  margin-bottom: var(--spacing-2xl);
  padding: var(--spacing-xl);
  background-color: var(--color-card-bg);
  border: 1.5px solid var(--color-border);
  border-radius: var(--radius-lg);
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
