<template>
  <button
    class="theme-toggle"
    :aria-label="t('theme.' + colorMode.preference)"
    @click="toggleTheme"
  >
    <Icon v-if="colorMode.value === 'dark'" name="ri:moon-fill" size="20" />
    <Icon v-else name="ri:sun-fill" size="20" />
  </button>
</template>

<script setup lang="ts">
const colorMode = useColorMode()
const { t } = useI18n()

const toggleTheme = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}
</script>

<style scoped>
.theme-toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: var(--radius-md);
  background-color: transparent;
  color: var(--color-text);
  transition: background-color 0.2s ease;
}

.theme-toggle:hover {
  background-color: var(--color-bg-secondary);
}
</style>
