<template>
  <NuxtPage />
</template>

<script>
definePageMeta({
  layout: 'admin',
  colorMode: 'light'
});
</script>

<style scope>
.admin_layout {
  display: flex;
  .admin_layout_left {
    width: 180px;
  }
  .admin_layout_right {
    flex: 1;
    padding: 20px 10px;
  }
}
</style>
