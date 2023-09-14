<template>
  <div class="admin_layout">
    <div class="admin_layout_left"><LeftMenu /></div>
    <div class="admin_layout_right">
      <div class="upload">
        <el-upload
          v-model:file-list="fileList"
          class="upload-demo"
          action="/api/book/create"
          multiple
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :before-remove="beforeRemove"
          :limit="1"
          :on-exceed="handleExceed"
        >
          <el-button type="primary">文件上传</el-button>
          <template #tip>
            <div class="el-upload__tip">** 仅限txt文件上传</div>
          </template>
        </el-upload>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: 'auth',
  auth: { guestRedirectTo: '/admin/login' }
});

import { ref } from 'vue';
import { ElMessage, ElMessageBox } from 'element-plus';

import type { UploadProps, UploadUserFile } from 'element-plus';

const fileList = ref<UploadUserFile[]>([]);

const handleRemove: UploadProps['onRemove'] = (file, uploadFiles) => {
  console.log(file, uploadFiles);
};

const handlePreview: UploadProps['onPreview'] = (uploadFile) => {
  console.log(uploadFile);
};

const handleExceed: UploadProps['onExceed'] = (files, uploadFiles) => {
  ElMessage.warning(
    `The limit is 3, you selected ${files.length} files this time, add up to ${
      files.length + uploadFiles.length
    } totally`
  );
};

const beforeRemove: UploadProps['beforeRemove'] = (uploadFile, uploadFiles) => {
  return ElMessageBox.confirm(
    `Cancel the transfer of ${uploadFile.name} ?`
  ).then(
    () => true,
    () => false
  );
};
</script>
