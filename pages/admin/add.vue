<template>
  <div class="admin_layout">
    <div class="admin_layout_left"><LeftMenu /></div>
    <div class="admin_layout_right">
      <el-page-header title="返回" @back="goBack">
        <template #content>
          <p class="text-large font-600 mr-3 header">新增书籍</p>
        </template>
      </el-page-header>
      <div class="add">
        <el-form
          :model="form"
          label-width="120px"
          :rules="rules"
          ref="ruleFormRef"
          status-icon
        >
          <el-form-item label="书名" prop="bookName">
            <el-input v-model="form.bookName" placeholder="请输入书名" />
          </el-form-item>
          <el-form-item label="封面" prop="bookPic">
            <el-upload
              class="avatar-uploader"
              :show-file-list="false"
              action=""
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload"
            >
              <img v-if="imageUrl" :src="imageUrl" class="avatar" />
              <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
            </el-upload>
          </el-form-item>
          <el-form-item label="标签" prop="tag">
            <el-input v-model="form.tag" placeholder="请输入标签" />
          </el-form-item>
          <el-form-item label="简介" prop="desc">
            <el-input
              v-model="form.desc"
              type="textarea"
              placeholder="请输入简介"
              rows="6"
            />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit(ruleFormRef)"
              >提 交</el-button
            >
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: 'auth',
  auth: { guestRedirectTo: '/admin/login' }
});

import { reactive, ref } from 'vue';
import { Plus } from '@element-plus/icons-vue';

const router = useRouter();

const ruleFormRef = ref<any>();
const rules = reactive<any>({
  bookName: [{ required: true, message: '请输入书名', trigger: 'blur' }],
  bookPic: [{ required: true, message: '请上传封面', trigger: 'blur' }],
  tag: [{ required: true, message: '请输入标签', trigger: 'blur' }],
  desc: [{ required: true, message: '请输入简介', trigger: 'blur' }]
});

const form = reactive({
  bookName: '',
  bookPic: '',
  tag: '',
  desc: ''
});

const onSubmit = async (formEl: any) => {
  if (!formEl) return;
  await formEl.validate((valid: any, fields: any) => {
    if (valid) {
      console.log('submit!', form);
      mutationAdd(form);
    } else {
      console.log('error submit!', fields);
    }
  });
};

const mutationAdd = async (data: any) => {
  try {
    const { pending, data: posts } = await useFetch('/api/book/create', {
      lazy: true,
      method: 'POST',
      body: data
    });
    ElMessage({
      message: '新增成功.',
      type: 'success'
    });
    router.push({
      path: '/admin/list'
    });
  } catch (error) {
    console.error('/api/book/create error', error);
  }
};

const imageUrl = ref('');
const handleAvatarSuccess: any = (response: any, uploadFile: any) => {
  getBase64(uploadFile?.raw).then((res: any) => {
    form.bookPic = res;
  });
  imageUrl.value = URL.createObjectURL(uploadFile.raw!);
};

const beforeAvatarUpload: any = (rawFile: any) => {
  if (rawFile.type !== 'image/jpeg' && rawFile.type !== 'image/png') {
    ElMessage.error('请上传JPEG和png格式的图片!');
    return false;
  } else if (rawFile.size / 1024 / 1024 > 2) {
    ElMessage.error('图片最大支持2MB!');
    return false;
  }
  return true;
};

// 获取图片转base64
const getBase64 = (file: any) => {
  return new Promise(function (resolve, reject) {
    const reader = new FileReader();
    let imgResult: any = '';
    reader.readAsDataURL(file);
    reader.onload = function () {
      imgResult = reader.result;
    };
    reader.onerror = function (error) {
      reject(error);
    };
    reader.onloadend = function () {
      resolve(imgResult);
    };
  });
};

const goBack = () => {
  router.push({
    path: '/admin/list'
  });
};
</script>

<style>
.add {
  width: 90%;
}
.avatar-uploader .avatar {
  width: 178px;
  height: 178px;
  display: block;
}
.avatar-uploader .el-upload {
  border: 1px dashed var(--el-border-color);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  text-align: center;
}
</style>
