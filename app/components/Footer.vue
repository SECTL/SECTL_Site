<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-brand">
          <div class="logo-text">SECTL</div>
          <p class="footer-description">{{ t('home.description') }}</p>
        </div>

        <div class="footer-links">
          <div class="footer-section">
            <h4>{{ t('nav.projects') }}</h4>
            <a href="https://github.com/SECTL/SecRandom" target="_blank" rel="noopener">
              SecRandom
            </a>
            <a href="https://github.com/SECTL/SecScore" target="_blank" rel="noopener">
              SecScore
            </a>
            <h4 style="margin-top: 1em;">{{ t('footer.links.title') }}</h4>
            <a href="https://forum.smart-teach.cn/" target="_blank" rel="noopener">{{ t('footer.links.stcnForum') }}</a>
            <a href="https://github.com/awesome-iwb/awesome-iwb" target="_blank" rel="noopener">Awesome-Iwb</a>
            <a href="https://acs.jursin.top/" target="_blank" rel="noopener">Awesome-Class-Softwares</a>
          </div>

          <div class="footer-section">
            <h4>{{ t('contact.title') }}</h4>
            <a href="https://github.com/SECTL" target="_blank" rel="noopener">
              <Icon name="mdi:github" /> GitHub
            </a>
            <a href="mailto:lzy.12@foxmail.com"  target="_blank" rel="noopener">
              <Icon name="mdi:email" /> {{ t('contact.email.title') }}
            </a>
            <a href="https://qm.qq.com/q/Y8tx1BxnmG" target="_blank" rel="noopener">
              <Icon name="ri:qq-fill" /> {{ t('contact.qqGroup.title') }}
            </a>
            <a href="https://pd.qq.com/s/ddy1ie3e9" target="_blank" rel="noopener">
              <Icon name="ri:qq-fill" /> {{ t('contact.qqChannel.title') }}
            </a>
            <a href="https://discord.gg/aRYzV5ZUZ2" target="_blank" rel="noopener">
              <Icon name="ri:discord-fill" /> {{ t('contact.discord.title') }}
            </a>
            <a href="https://space.bilibili.com/520571577" target="_blank" rel="noopener">
              <Icon name="ri:bilibili-fill" /> {{ t('contact.bilibili.title') }}
            </a>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <!-- 版权信息 -->
        <div class="footer-bottom-left">
          <p v-if="locale === 'zh-CN'">
            © 2025-{{ currentYear }} SECTL. 保留所有权利。
          </p>
          <p v-else>
            © 2025-{{ currentYear }} SECTL. All rights reserved.
          </p>
          <p>
            <a href="https://icp.gov.moe/?keyword=20260108" target="_blank" rel="noopener noreferrer">
              {{ t('footer.icp') }}
            </a>
          </p>
        </div>

        <!-- 设计者信息 -->
        <p v-if="locale === 'zh-CN'">
          由 <a href="https://blog.jursin.top/" target="_blank" rel="noopener noreferrer">Jursin</a> 设计
        </p>
        <p v-else>
          Designed by <a href="https://blog.jursin.top/" target="_blank" rel="noopener noreferrer">Jursin</a>
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const { t, locale } = useI18n()
const currentYear = new Date().getFullYear()
</script>

<style scoped>
.footer {
  margin-top: var(--spacing-2xl);
  padding: var(--spacing-2xl) 0 var(--spacing-lg);
  border-top: 1px solid var(--color-border);
  background-color: var(--color-bg-footer);
}

.footer-content {
  display: grid;
  gap: var(--spacing-xl);
  margin-bottom: var(--spacing-xl);
}

@media (min-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr 2fr;
  }
}

.footer-brand {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.logo-text {
  font-size: 1.5rem;
  font-weight: 700;
  background: linear-gradient(135deg, var(--color-primary), var(--color-primary-light));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.footer-description {
  color: var(--color-text-secondary);
  max-width: 300px;
}

.footer-links {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: var(--spacing-lg);
}

.footer-section {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
}

.footer-section h4 {
  font-size: 0.875rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  color: var(--color-text);
  margin-bottom: var(--spacing-xs);
}

.footer-section a {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--color-text-secondary);
  font-size: 0.875rem;
  transition: color 0.2s ease;
}

.footer-section a:hover {
  color: var(--color-primary);
}

.footer-bottom a {
  color: var(--color-text-secondary);
  transition: color 0.2s ease;
  text-decoration: underline;
}

.footer-bottom a:hover {
  color: var(--color-primary);
}

.footer-bottom {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
  padding-top: var(--spacing-lg);
  border-top: 1px solid var(--color-border);
  text-align: center;
  font-size: 0.875rem;
  color: var(--color-text-secondary);
}

.footer-bottom-left {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
}

@media (min-width: 768px) {
  .footer-bottom {
    flex-direction: row;
    justify-content: space-between;
  }
}
</style>
