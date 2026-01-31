---
layout: home

hero:
  name: "SECTL"
  text: "开源·诚信·赋能社群"
  tagline: "专注于教育场景的开源组织"
  image:
    src: /SECTL_logo.svg
    alt: SECTL Logo
  actions:
    - theme: brand
      text: "加入社区"
      link: /bulletin/community
    - theme: alt
      text: "GitHub"
      link: https://github.com/SECTL
---

<style>
/* 首页自定义样式 */
.sectl-container {
  max-width: 1152px;
  margin: 0 auto;
  padding: 0 24px;
}

.sectl-section {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 80px 0;
  gap: 60px;
}

.sectl-section.reverse {
  flex-direction: row-reverse;
}

.sectl-content {
  flex: 1;
  min-width: 300px;
  text-align: center;
}

.sectl-image {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 300px;
}

.sectl-image img {
  width: 300px;
  height: 300px;
  object-fit: contain;
  border-radius: 12px;
  transition: transform 0.3s ease;
}

.sectl-image img:hover {
  transform: scale(1.02);
}

.sectl-title {
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 20px;
  line-height: 1.2;
  letter-spacing: -0.02em;
}

.sectl-desc {
  font-size: 18px;
  color: var(--vp-c-text-2);
  margin-bottom: 28px;
  line-height: 1.6;
}

.sectl-btn {
  display: inline-block;
  border: 1px solid var(--vp-button-brand-bg);
  text-align: center;
  font-weight: 600;
  white-space: nowrap;
  transition: color 0.25s, border-color 0.25s, background-color 0.25s;
  background-color: var(--vp-button-brand-bg);
  color: #fff !important; /* 强制白色，确保在品牌色背景上可见 */
  padding: 0 20px;
  line-height: 38px;
  border-radius: 20px;
  font-size: 14px;
  text-decoration: none !important;
}

.sectl-btn:hover {
  background-color: var(--vp-button-brand-hover-bg);
  border-color: var(--vp-button-brand-hover-bg);
  color: #fff !important;
}

.sectl-btn.alt {
  background-color: transparent;
  color: var(--vp-c-brand);
  border-color: var(--vp-c-brand);
}

.sectl-btn.alt:hover {
  background-color: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-dark);
}

/* 高亮颜色 */
.highlight-blue {
  color: #3b82f6;
  background: linear-gradient(120deg, #3b82f6 30%, #60a5fa);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.highlight-yellow {
  color: #eab308;
  background: linear-gradient(120deg, #eab308 30%, #facc15);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* 底部社区部分 */
.community-section {
  text-align: center;
  padding: 60px 0;
  border-top: 1px solid var(--vp-c-divider);
  margin-top: 0;
}

.sectl-divider {
  border-top: 1px solid var(--vp-c-divider);
  width: 100%;
}


.community-badges {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
  margin: 20px 0;
}

/* 响应式调整 */
@media (max-width: 768px) {
  .sectl-section, .sectl-section.reverse {
    flex-direction: column-reverse; /* 图片在上，文字在下? 或者保持column */
    flex-direction: column;
    text-align: center;
    padding: 40px 0;
    gap: 30px;
  }
  
  .sectl-section.reverse {
    flex-direction: column;
  }
  
  .sectl-image {
    width: 100%;
  }
}
</style>

<div class="sectl-container">

  <div class="sectl-divider"></div>

  <!-- SecRandom Section -->
  <div class="sectl-section">
    <div class="sectl-content">
      <div class="sectl-title">
        <span class="highlight-blue">SecRandom</span>
        <br>易用的点名/抽奖软件
      </div>
      <div class="sectl-desc">
        专为教育场景设计，让课堂点名更高效透明！支持多种抽取模式，界面简洁美观，操作简单便捷。
      </div>
      <div style="display: flex; gap: 12px; flex-wrap: wrap; justify-content: center;" class="actions-wrapper">
        <a href="https://github.com/SECTL/SecRandom/releases/latest" class="sectl-btn">下载最新版</a>
        <a href="https://github.com/SECTL/SecRandom" class="sectl-btn alt">GitHub 仓库</a>
        <a href="https://github.com/SECTL/SecRandom-docs" class="sectl-btn alt">查看文档</a>
      </div>
      <div style="display: flex; gap: 8px; flex-wrap: wrap; justify-content: center; margin-top: 20px;">
        <a href="https://github.com/SECTL/SecRandom/issues" target="_blank">
          <img src="https://img.shields.io/github/issues-search/SECTL/SecRandom?query=is%3Aopen&style=for-the-badge&color=00b4ab&logo=github&label=问题" alt="Issues">
        </a>
        <a href="https://github.com/SECTL/SecRandom/releases/latest" target="_blank">
          <img src="https://img.shields.io/github/v/release/SECTL/SecRandom?style=for-the-badge&color=00b4ab&label=最新正式版" alt="Latest Release">
        </a>
        <a href="https://github.com/SECTL/SecRandom/releases/" target="_blank">
          <img src="https://img.shields.io/github/v/release/SECTL/SecRandom?include_prereleases&style=for-the-badge&label=测试版" alt="Beta Release">
        </a>
        <a href="https://github.com/SECTL/SecRandom/commits/master" target="_blank">
          <img src="https://img.shields.io/github/last-commit/SECTL/SecRandom?style=for-the-badge&color=00b4ab&label=最后更新时间" alt="Last Commit">
        </a>
        <a href="https://github.com/SECTL/SecRandom/releases" target="_blank">
          <img src="https://img.shields.io/github/downloads/SECTL/SecRandom/total?style=for-the-badge&color=00b4ab&label=累计下载" alt="Downloads">
        </a>
      </div>
    </div>
    <div class="sectl-image">
      <img src="/secrandom-icon-paper@8x.png" alt="SecRandom Icon">
    </div>
  </div>
  
  <div style="text-align: center; margin-bottom: 80px; margin-top: -40px;">
    <img src="/secrandom-banner.png" alt="SecRandom Banner" style="max-width: 100%; border-radius: 12px; box-shadow: 0 4px 24px rgba(0,0,0,0.1);">
  </div>

  <div class="sectl-divider"></div>

  <!-- SecScore Section -->
  <div class="sectl-section reverse">
    <div class="sectl-content">
      <div class="sectl-title">
        <span class="highlight-yellow">SecScore</span>
        <br>教育场景个人积分管理
      </div>
      <div class="sectl-desc">
        帮助教师或学生记录、统计和分析课堂互动、作业完成情况以及行为表现等积分数据，让教学管理更高效、更有趣。
      </div>
      <div style="display: flex; gap: 12px; flex-wrap: wrap; justify-content: center;" class="actions-wrapper">
        <a href="https://github.com/SECTL/SecScore/releases/latest" class="sectl-btn">下载最新版</a>
        <a href="https://github.com/SECTL/SecScore" class="sectl-btn alt">GitHub 仓库</a>
      </div>
      <div style="display: flex; gap: 8px; flex-wrap: wrap; justify-content: center; margin-top: 20px;">
        <a href="https://github.com/SECTL/SecScore/issues" target="_blank">
          <img src="https://img.shields.io/github/issues-search/SECTL/SecScore?query=is%3Aopen&style=for-the-badge&color=00b4ab&logo=github&label=问题" alt="Issues">
        </a>
        <a href="https://github.com/SECTL/SecScore/releases/latest" target="_blank">
          <img src="https://img.shields.io/github/v/release/SECTL/SecScore?style=for-the-badge&color=00b4ab&label=最新正式版" alt="Latest Release">
        </a>
        <a href="https://github.com/SECTL/SecScore/releases/" target="_blank">
          <img src="https://img.shields.io/github/v/release/SECTL/SecScore?include_prereleases&style=for-the-badge&label=测试版" alt="Beta Release">
        </a>
        <a href="https://github.com/SECTL/SecScore/commits/main" target="_blank">
          <img src="https://img.shields.io/github/last-commit/SECTL/SecScore?style=for-the-badge&color=00b4ab&label=最后更新时间" alt="Last Commit">
        </a>
        <a href="https://github.com/SECTL/SecScore/releases" target="_blank">
          <img src="https://img.shields.io/github/downloads/SECTL/SecScore/total?style=for-the-badge&color=00b4ab&label=累计下载" alt="Downloads">
        </a>
      </div>
    </div>
    <div class="sectl-image">
      <img src="/SecScore.svg" alt="SecScore Icon">
    </div>
  </div>

  <!-- Community & History -->
  <div class="community-section">
<h2>🤝 加入社区</h2>
<p style="color: var(--vp-c-text-2); margin-top: 10px;">与开发者和用户交流，获取最新动态</p>

<div class="community-badges">
<a href="https://qm.qq.com/q/iWcfaPHn7W" target="_blank">
<img src="https://img.shields.io/badge/QQ%E7%BE%A4-833875216-blue?style=for-the-badge&logo=TencentQQ&logoColor=white" alt="QQ Group">
</a>
<a href="https://space.bilibili.com/520571577" target="_blank">
<img src="https://img.shields.io/badge/B%E7%AB%99-%E9%BB%8E%E6%B3%BD%E6%87%BF-FB7299?style=for-the-badge&logo=bilibili&logoColor=white" alt="Bilibili">
</a>
</div>

<div style="margin-top: 40px;">
<h3>⭐ 星标历史</h3>
<div style="margin-top: 20px; display: flex; justify-content: center;">
<a href="https://www.star-history.com/#SECTL/SecRandom&SECTL/SecScore&type=date&legend=top-left" target="_blank" style="width: 100%; max-width: 1000px;">
<img class="star-history-light" src="https://api.star-history.com/svg?repos=SECTL/SecRandom,SECTL/SecScore&type=date&legend=top-left" alt="Star History Chart" style="width: 100%;">
<img class="star-history-dark" src="https://api.star-history.com/svg?repos=SECTL/SecRandom,SECTL/SecScore&type=date&legend=top-left&theme=dark" alt="Star History Chart" style="width: 100%;">
</a>
</div>
</div>
  </div>

</div>

<style>
.star-history-dark { display: none; }
html.dark .star-history-light { display: none; }
html.dark .star-history-dark { display: inline-block; }
</style>


