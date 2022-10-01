<template>
  <div class="empty">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.empty {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
}
</style>