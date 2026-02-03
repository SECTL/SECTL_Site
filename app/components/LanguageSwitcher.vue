
<template>
  <div class="language-switcher" ref="switcherRef">
    <button class="lang-icon-btn" @click="toggleDropdown">
      <Icon name="mdi:language" size="20" />
    </button>
    <transition name="scale-center">
      <div v-if="showDropdown" class="lang-dropdown">
        <div
          v-for="locale in availableLocales"
          :key="locale.code"
          class="lang-option-wrap"
        >
          <button
            :class="['lang-option', { active: currentLocale === locale.code }]"
            @click="selectLocale(locale.code)"
          >
            <span class="dropdown-radio-indicator" :data-state="currentLocale === locale.code ? 'checked' : ''"></span>
            <span>{{ locale.code === 'zh-CN' ? '简体中文' : 'English' }}</span>
          </button>
          <div v-if="currentLocale === locale.code" class="lang-active-shadow"></div>
        </div>
      </div>
    </transition>
  </div>
</template>


<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
const switcherRef = ref<HTMLElement | null>(null)

function handleClickOutside(event: MouseEvent) {
  if (showDropdown.value && switcherRef.value && !switcherRef.value.contains(event.target as Node)) {
    showDropdown.value = false
  }
}

onMounted(() => {
  document.addEventListener('mousedown', handleClickOutside)
})
onBeforeUnmount(() => {
  document.removeEventListener('mousedown', handleClickOutside)
})
const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const currentLocale = computed(() => locale.value)
const availableLocales = computed(() => locales.value)

const showDropdown = ref(false)
const toggleDropdown = (e: Event) => {
  e.stopPropagation()
  showDropdown.value = !showDropdown.value
}
const selectLocale = (code: string) => {
  if (currentLocale.value !== code) {
    navigateTo(switchLocalePath(code as 'zh-CN' | 'en'))
  }
}
</script>

<style scoped>
.language-switcher {
  position: relative;
  display: inline-block;
}

.lang-icon-btn {
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

.lang-icon-btn:hover {
  background-color: var(--color-bg-secondary);
}

.lang-dropdown {
  position: absolute;
  left: 0;
  top: 110%;
  min-width: 130px;
  background: var(--color-bg);
  border: 0.25px solid var(--color-border);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  z-index: 10;
  display: flex;
  flex-direction: column;
  padding: 0.35rem;
  gap: 0.35rem;
}

.lang-option-wrap {
  position: relative;
  display: flex;
  flex-direction: column;
}

.lang-option {
  background: none;
  border: none;
  outline: none;
  width: 100%;
  text-align: left;
  padding: 0.5rem 1rem 0.5rem 2.1rem;
  font-size: 0.95rem;
  color: var(--color-text-secondary);
  cursor: pointer;
  border-radius: var(--radius-lg);
  transition: background 0.2s, color 0.2s;
  display: flex;
  align-items: center;
  gap: 0.5em;
  position: relative;
  z-index: 2;
}

.lang-option:hover {
  background: var(--color-bg-secondary);
  color: var(--color-text);
  border-radius: var(--radius-md);
}

.lang-option.active {
  color: var(--color-primary);
  font-weight: 500;
}

.lang-active-shadow {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  border-radius: var(--radius-md);
  background: var(--color-bg-secondary);
  box-shadow: var(--shadow-sm);
  z-index: 1;
  pointer-events: none;
}

.dropdown-radio-indicator {
  position: absolute;
  left: 0.5rem;
  top: 50%;
  transform: translateY(-50%);
  width: 0.875rem;
  height: 0.875rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.dropdown-radio-indicator[data-state="checked"]::before {
  content: "";
  width: 0.375rem;
  height: 0.375rem;
  border-radius: 50%;
  background-color: currentColor;
}

.dropdown-radio-indicator:not([data-state="checked"])::before {
  display: none;
}

.scale-center-enter-active {
  transition: all 0.2s ease-out;
  transform-origin: center center;
}

.scale-center-leave-active {
  transition: opacity 0.1s ease-out;
}

.scale-center-enter-from {
  transform: scale(0.9);
  opacity: 0;
  box-shadow: var(--shadow-sm);
}

.scale-center-leave-to {
  opacity: 0;
}

.scale-center-enter-to {
  transform: scale(1);
  opacity: 1;
  box-shadow: var(--shadow-lg);
}
</style>
