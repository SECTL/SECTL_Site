<template>
  <div class="contact">
    <div class="container">
      <div class="page-header">
        <h1>{{ t('contact.title') }}</h1>
        <p>{{ t('contact.description') }}</p>
      </div>

      <div class="contact-grid">
        <a href="https://github.com/SECTL" target="_blank" rel="noopener" class="card contact-card">
          <div class="contact-icon">
            <Icon name="mdi:github" size="32" />
          </div>
          <div class="contact-info">
            <h3>{{ t('contact.github.title') }}</h3>
            <p class="contact-value">SECTL</p>
          </div>
        </a>

        <a href="mailto:lzy.12@foxmail.com" class="card contact-card">
          <div class="contact-icon">
            <Icon name="ph:envelope" size="32" />
          </div>
          <div class="contact-info">
            <h3>{{ t('contact.email.title') }}</h3>
            <p class="contact-value">lzy.12@foxmail.com</p>
          </div>
        </a>

        <a href="https://qm.qq.com/q/Y8tx1BxnmG" target="_blank" rel="noopener" class="card contact-card">
          <div class="contact-icon">
            <Icon name="ri:qq-fill" size="32" />
          </div>
          <div class="contact-info">
            <h3>{{ t('contact.qqGroup.title') }}</h3>
            <p class="contact-value">833875216</p>
          </div>
        </a>

        <a href="https://pd.qq.com/s/ddy1ie3e9" target="_blank" rel="noopener" class="card contact-card">
          <div class="contact-icon">
            <Icon name="ri:qq-fill" size="32" />
          </div>
          <div class="contact-info">
            <h3>{{ t('contact.qqChannel.title') }}</h3>
            <p class="contact-value">SECTL20250321</p>
          </div>
        </a>

        <a href="https://discord.gg/aRYzV5ZUZ2" target="_blank" rel="noopener" class="card contact-card">
          <div class="contact-icon">
            <Icon name="ri:discord-fill" size="32" />
          </div>
          <div class="contact-info">
            <h3>{{ t('contact.discord.title') }}</h3>
            <p class="contact-value">SECTL Studio</p>
          </div>
        </a>

        <a href="https://space.bilibili.com/520571577" target="_blank" rel="noopener" class="card contact-card">
          <div class="contact-icon">
            <Icon name="ri:bilibili-fill" size="32" />
          </div>
          <div class="contact-info">
            <h3>{{ t('contact.bilibili.title') }}</h3>
            <p class="contact-value">520571577</p>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()

useSeoMeta({
  title: t('contact.title') + ' | SECTL',
  description: t('contact.description')
})
</script>

<style scoped>
.contact {
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

.contact-grid {
  display: grid;
  gap: var(--spacing-lg);
  grid-template-columns: 1fr;
}

@media (min-width: 768px) {
  .contact-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .contact-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.contact-card {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--spacing-md);
  padding: var(--spacing-lg);
  text-decoration: none;
  cursor: pointer;
}

.contact-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  border-radius: var(--radius-lg);
  background: linear-gradient(135deg, var(--color-primary), var(--color-primary-light));
  color: white;
  transition: transform 0.3s ease;
  flex-shrink: 0;
}

.contact-card:hover .contact-icon {
  transform: scale(1.1);
}

.contact-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
}

.contact-card h3 {
  font-size: 1.25rem;
  margin-bottom: 0;
  color: var(--color-text);
}

.contact-value {
  font-size: 1rem;
  color: var(--color-text-secondary);
}
</style>
