export default defineNuxtRouteMiddleware((to, from) => {
  const router = useRouter();
  // isAuthenticated() is an example method verifying if a user is authenticated
  const isAuthenticated = () => {
    return true;
  };
  if (isAuthenticated() === false) {
    return router.push({
      path: '/admin/login'
    });
  }
});
