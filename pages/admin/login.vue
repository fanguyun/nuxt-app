<template>
  <div class="login_form">
    <!-- <a href="/api/auth/signin" class="buttonPrimary">Native Link Sign in</a> -->
    <el-button
      type="primary"
      @click="signIn(`github`)"
      size="large"
      :loading="status === 'loading'"
    >
      登 录
    </el-button>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  // middleware: 'guest-only',
  // auth: { authenticatedRedirectTo: '/admin/login' }
});
const router = useRouter();
const { signIn, signOut, session, status, cookies, getProviders } =
  useAuth() as any;
console.log(session);
if (session.value?.user?.email) {
  if (session.value?.user?.email === '289696260@qq.com') {
    router.push({
      path: '/admin/list'
    });
  } else {
    process.client && ElMessage.error('暂无权限');
  }
}
</script>

<style scope>
.login_form {
  width: 90px;
  margin: 160px auto 0;
}
</style>
