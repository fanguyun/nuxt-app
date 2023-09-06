<template>
  <div>
    <AppHeader />
    <slot />
    <AppFooter />
  </div>
  <div class="color_mode">
    <select v-model="$colorMode.preference">
      <option value="system">System</option>
      <option value="light">Light</option>
      <option value="dark">Dark</option>
      <option value="sepia">Sepia</option>
    </select>
  </div>
</template>

<script setup>
const colorMode = useColorMode();
</script>

<style>
.color_mode {
  position: fixed;
  bottom: 15px;
  right: 15px;
  > select {
    padding: 2px 7px;
    /* box-shadow: rgb(76, 77, 79) 0px 0px 0px 1px inset; */
    border: none;
    border-radius: 4px;
  }
}
</style>
