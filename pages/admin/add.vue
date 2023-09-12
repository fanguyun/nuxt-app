<template>
  <div class="admin_layout">
    <div class="admin_layout_left"><LeftMenu /></div>
    <div class="admin_layout_right">
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

const router = useRouter();

const ruleFormRef = ref<any>();
const rules = reactive<any>({
  bookName: [{ required: true, message: '请输入书名', trigger: 'blur' }],
  tag: [{ required: true, message: '请输入标签', trigger: 'blur' }],
  desc: [{ required: true, message: '请输入简介', trigger: 'blur' }]
});
// do not use same name with ref
const form = reactive({
  bookName: '',
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

const mutationAdd = (data: any) => {
  try {
    const { pending, data: posts } = useFetch('/api/book/create', {
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
</script>

<style>
.add {
  width: 90%;
}
</style>
