<template>
  <div class="left_menu">
    <el-menu
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
    >
      <el-menu-item index="1">
        <el-icon><icon-menu /></el-icon>
        <span @click="handleLink('/admin/list')">书籍管理</span>
      </el-menu-item>
      <el-menu-item index="2">
        <el-icon><document /></el-icon>
        <span @click="handleLink('/admin/add')">新增书籍</span>
      </el-menu-item>
      <el-menu-item index="3">
        <el-icon><setting /></el-icon>
        <span @click="signOut">退出登录</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script lang="ts" setup>
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting
} from '@element-plus/icons-vue';

const router = useRouter();

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};

const { signOut } = useAuth() as any;

const handleLink = (path: string) => {
  router.push({
    path
  });
};
</script>

<style scope>
.left_menu {
  width: 180px;
  min-height: calc(100vh - 74px);
  .el-menu {
    min-height: calc(100vh - 74px);
  }
}
</style>
