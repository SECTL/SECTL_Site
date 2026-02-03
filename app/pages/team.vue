<template>
  <div class="team">
    <div class="container">
      <div class="page-header">
        <h1>{{ t('team.title') }}</h1>
      </div>

      <div class="grid grid-3">
        <div v-for="member in currentMembers" :key="member.name" class="card member-card">
          <img :src="`https://github.com/${member.githubName}.png`" :alt="member.name" class="member-avatar" />
          <div class="member-info">
            <h3>{{ member.name }}</h3>
            <p class="member-role">{{ member.roleDisplay }}</p>
            <div class="member-links">
              <a v-if="member.githubName" :href="`https://github.com/${member.githubName}`" target="_blank" rel="noopener">
                <Icon name="mdi:github" size="25" />
              </a>
              <a v-if="member.email" :href="`mailto:${member.email}`">
                <Icon name="mdi:email-outline" size="25" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t, locale } = useI18n()

interface Member {
  name: string
  role: string
  githubName?: string
  email?: string
}

const chineseMembers: Member[] = [
  {
    name: '黎泽懿',
    role: '创始人',
    githubName: 'lzy98276',
    email: 'lzy.12@foxmail.com'
  },
  {
    name: '陈晋瑭',
    role: '开发者',
    githubName: 'chenjintang-shrimp',
    email: 'jimmy163mail@163.com'
  },
  {
    name: '藏狐',
    role: '开发者',
    githubName: 'Fox-block-offcial',
    email: 'system_linux_cmb@163.com'
  },
  {
    name: '叶背影',
    role: '开发者',
    githubName: 'LeafS825',
    email: '871850079@qq.com'
  },
  {
    name: '本新同学',
    role: '开发者',
    githubName: 'yuanbenxin',
    email: 'yuanbenxin@outlook.com'
  },
  {
    name: 'Jursin',
    role: '贡献者',
    githubName: 'Jursin',
    email: 'jursin@126.com'
  }
]

const englishMembers: Member[] = [
  {
    name: 'Li Zeyi',
    role: 'Founder'
  },
  {
    name: 'Chen Jintang',
    role: 'Developer'
  },
  {
    name: 'Fox_block',
    role: 'Developer'
  },
  {
    name: 'LeafS',
    role: 'Developer'
  },
  {
    name: 'yuanbenxin',
    role: 'Developer'
  },
  {
    name: 'Jursin',
    role: 'Contributor'
  }
]

const currentMembers = computed(() => {
  const baseMembers = locale.value === 'en' ? englishMembers : chineseMembers
  return baseMembers.map((member, index) => ({
    ...member,
    githubName: member.githubName ?? chineseMembers[index]?.githubName,
    email: member.email ?? chineseMembers[index]?.email,
    roleDisplay: member.role
  }))
})

useSeoMeta({
  title: t('team.title') + ' | SECTL',
  description: t('team.description')
})
</script>

<style scoped>
.team {
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

.member-card {
  display: flex;
  flex-direction: row;
  align-items: stretch;
  gap: var(--spacing-md);
}

.member-avatar {
  width: 80px;
  height: auto;
  aspect-ratio: 1;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
  align-self: center;
}

.member-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
}

.member-card h3 {
  font-size: 1.25rem;
  margin-bottom: 0;
}

.member-role {
  color: var(--color-primary);
  font-weight: 500;
  font-size: 1rem;
  letter-spacing: 0.05em;
}

.member-links {
  display: flex;
  gap: var(--spacing-sm);
  margin-top: var(--spacing-xs);
}

.member-links a {
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-text);
  transition: all 0.2s ease;
}

.member-links a:hover {
  transform: translateY(-2px);
}
</style>
