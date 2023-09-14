<template>
  <div class="admin_layout">
    <div class="admin_layout_left"><LeftMenu /></div>
    <div class="admin_layout_right">
      <el-page-header title="返回" @back="goBack">
        <template #content>
          <p class="text-large font-600 mr-3 header">
            章节管理 &nbsp;&nbsp;<el-button size="small" type="primary"
              >新增章节</el-button
            >
          </p>
        </template>
      </el-page-header>
      <el-alert
        :title="`书名：${bookName}`"
        type="success"
        :closable="false"
        style="margin: 10px 0"
      />
      <el-table :data="tableData" stripe style="width: 100%">
        <el-table-column prop="_id" label="章节编号" width="220" />
        <el-table-column prop="bookDesc" label="章节名称" width="200" />
        <el-table-column prop="bookName" label="详情" />
        <el-table-column label="操作">
          <template #default="scope">
            <el-button size="small">章节详情</el-button>
            <el-button
              size="small"
              type="danger"
              @click="handleDelete(scope.row)"
              >删除</el-button
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

const route = useRoute();
const { _id = 0, bookName = '' } = route.query;

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

const goBack = () => {
  router.push({
    path: '/admin/list'
  });
};
</script>

<style scope>
.header {
  display: flex;
  justify-content: space-between;
}
</style>
