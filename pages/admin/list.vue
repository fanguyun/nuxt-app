<template>
  <div class="admin_layout">
    <div class="admin_layout_left"><LeftMenu /></div>
    <div class="admin_layout_right">
      <el-table :data="tableData" stripe style="width: 100%">
        <el-table-column prop="_id" label="编号" width="220" />
        <el-table-column prop="bookPic" label="封面" width="100">
          <template #default="scope">
            <div style="display: flex; align-items: center">
              <img :src="scope.row.bookPic" style="width: 60px; height: 60px" />
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="bookName" label="书名" width="260" />
        <el-table-column prop="tag" label="标签" width="180" />
        <el-table-column prop="desc" label="简介" />
        <el-table-column label="操作">
          <template #default="scope">
            <el-button size="small" @click="handleToChapter(scope.row)"
              >章节管理</el-button
            >
            <el-button
              size="small"
              type="danger"
              @click="handleDelete(scope.row)"
              >书籍删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: 'auth',
  auth: { guestRedirectTo: '/admin/login' }
});

const router = useRouter();

const {
  pending,
  data: tableData,
  refresh
} = useFetch('/api/book', {
  lazy: true
});

const handleDelete = (val: any) => {
  ElMessageBox.confirm(`确定删除书籍《${val.bookName}》吗?`, 'Warning', {
    confirmButtonText: '确认',
    cancelButtonText: '取消',
    type: 'warning'
  })
    .then(async () => {
      await useFetch(`/api/book/${val._id}`, {
        method: 'DELETE'
      });
      ElMessage({
        message: '删除成功.',
        type: 'success'
      });
      refresh();
    })
    .catch(() => {
      console.log('cancel');
    });
};

const handleToChapter = (val: any) => {
  router.push({
    path: '/admin/chapterList',
    query: {
      ...val
    }
  });
};
</script>
