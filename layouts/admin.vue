<template>
  <div class="dashboard">
    <admin-aside></admin-aside>
    <div class="dashboard-pages">
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.dashboard {
  display: flex;

  &-pages {
    padding-left: 200px;
    overflow-x: hidden;
    width: 100%;
  }
}
</style>