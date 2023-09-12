<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
const appConfig = useAppConfig();
// document && (document.title = appConfig.title);
</script>

<style>
body,
html {
  touch-action: pan-y;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
}
*::-webkit-scrollbar {
  display: none; /* Chrome Safari */
}
body {
  background-color: #fff;
  color: rgba(0, 0, 0, 0.8);
  font-family: 'SF Pro Text', 'SF Pro Icons', 'Helvetica Neue', Helvetica, Arial,
    sans-serif;
  overflow-x: hidden;
  margin: 0px !important;
}
.dark-mode body {
  background-color: #000;
  color: #ebf4f1;
}
.sepia-mode body {
  background-color: #f1e7d0;
  color: #433422;
}

.layout-enter-active,
.layout-leave-active {
  transition: all 0.4s;
}
.layout-enter-from,
.layout-leave-to {
  filter: grayscale(1);
}
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
