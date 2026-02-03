<template>
  <div class="error-page">
    <div class="container">
      <div class="error-content">
        <h1>{{ error.statusCode }}</h1>
        <p class="error-message">{{ error.message }}</p>
        <NuxtLink :to="localePath('/')" class="btn">
          <Icon name="ph:house" />
          {{ t('nav.home') }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  error: {
    type: Object,
    required: true
  }
})

const { t } = useI18n()
const localePath = useLocalePath()
</script>

<style scoped>
.error-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.error-content h1 {
  font-size: 6rem;
  font-weight: 800;
  background: linear-gradient(135deg, var(--color-primary), var(--color-primary-light));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: var(--spacing-md);
}

.error-message {
  font-size: 1.25rem;
  color: var(--color-text-secondary);
  margin-bottom: var(--spacing-xl);
}
</style>
