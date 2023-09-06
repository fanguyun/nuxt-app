export default defineAppConfig({
  title: 'Book Stack',
  app: {
    pageTransition: {
      name: 'fade',
      mode: 'out-in' // default
    },
    layoutTransition: {
      name: 'slide',
      mode: 'out-in' // default
    }
  },
  experimental: {
    viewTransition: true
  }
});
