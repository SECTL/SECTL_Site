<template>
  <div class="layout">
    <Header />
    <main class="main">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<style scoped>
.layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main {
  flex: 1;
  margin-top: var(--header-height);
  padding-top: var(--spacing-xl);
  padding-bottom: var(--spacing-xl);
}
</style>
