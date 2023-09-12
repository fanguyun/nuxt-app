<template>
  <div class="admin_layout">
    <div class="admin_layout_left"><LeftMenu /></div>
    <div class="admin_layout_right">
      <el-table :data="tableData" stripe style="width: 100%">
        <el-table-column prop="_id" label="编号" width="300" />
        <el-table-column prop="bookName" label="书名" width="180" />
        <el-table-column prop="tag" label="标签" width="180" />
        <el-table-column prop="desc" label="简介" />
      </el-table>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: 'auth',
  auth: { guestRedirectTo: '/admin/login' }
});

const { pending, data: tableData } = useFetch('/api/book', {
  lazy: true
});
</script>
