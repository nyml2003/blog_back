<script setup>
import {nextTick, onMounted, ref} from "vue";
import {userApi} from "boot/axios";
import {useMainLayoutStore} from "stores/MainLayoutStore";

const mainLayoutStore = useMainLayoutStore();
import {checkSame} from "src/utils/normalLogic";

const loadData = () => {
  userApi.get('/user/self/').then((res) => {
    userDetail.value.nickname = res.data.nickname;
    userDetail.value.email = res.data.email;
    userDetail.value.avatar = res.data.avatar;
    userReadonly.value.id = res.data.id;
    userReadonly.value.created_at = new Date(res.data.created_at).toLocaleString(
      "zh-CN",
      {
        hour12: false,
      }
    );
    userReadonly.value.updated_at = new Date(res.data.updated_at).toLocaleString(
      "zh-CN",
      {
        hour12: false,
      });
    userDetail.value.description = res.data.description;
    userDetail.value.telephone = res.data.telephone;
    userReadonly.value.username = res.data.username;
    userDetailCopy.value = JSON.parse(JSON.stringify(userDetail.value));
  }).catch((err) => {
    console.log(err);
  })
}
const userDetail = ref({
  nickname: "",
  email: "",
  avatar: null,
  description: "",
  telephone: null,
});
const userReadonly = ref({
  id: 0,
  created_at: Date(),
  updated_at: Date(),
  username: "",
});
const userDetailCopy = ref({});
onMounted(() => {
  loadData();
  mainLayoutStore.isRightDrawerOpen = false;
  nextTick(
    () => {
      mainLayoutStore.isRightDrawerOpen = true;
    }
  );
})
const submit = () => {
  userApi.patch(`/user/self/`, userDetail.value, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  }).then((res) => {
    loadData();
  }).catch((err) => {
    console.log(err);
  })
}

</script>

<template>
  <q-page class="flex flex-center">
    <q-card class="q-ma-md" style="max-width: 400px">
      <q-card-section class="q-pa-md">
        <div class="text-h6">个人信息</div>
      </q-card-section>
      <q-form class="q-ma-md">
        <q-input v-model="userDetail.nickname" label="昵称" lazy-rules :rules="[(val) => !!val || '请输入昵称']">
          <template #before>
            <q-icon name="account_circle"/>
          </template>
        </q-input>
        <q-input v-model="userDetail.email" label="邮箱" lazy-rules :rules="[(val) => !!val || '请输入邮箱']">
          <template #before>
            <q-icon name="email"/>
          </template>
        </q-input>
        <q-input v-model="userDetail.telephone" label="电话" lazy-rules :rules="[(val) => !!val || '请输入电话']">
          <template #before>
            <q-icon name="phone"/>
          </template>
        </q-input>
        <q-input v-model="userDetail.description" label="个人简介" lazy-rules
                 :rules="[(val) => !!val || '请输入个人简介']">
          <template #before>
            <q-icon name="description"/>
          </template>
        </q-input>
        <q-input v-model="userReadonly.username" label="用户名" readonly>
          <template #before>
            <q-icon name="account_circle"/>
          </template>
        </q-input>
        <q-file v-model="userDetail.avatar" label="头像" lazy-rules
                accept="image/*">
          <template #before>
            <q-avatar v-if="userDetail.avatar">
              <img :src="userDetail.avatar"/>
            </q-avatar>
            <q-icon v-else name="account_circle"/>
          </template>
        </q-file>
        <q-input v-model="userReadonly.created_at" label="创建时间" readonly>
          <template #before>
            <q-icon name="account_circle"/>
          </template>
        </q-input>
        <q-input v-model="userReadonly.updated_at" label="更新时间" readonly>
          <template #before>
            <q-icon name="account_circle"/>
          </template>
        </q-input>
        <q-card-actions align="right">
          <q-btn flat label="取消" to="/user/profile"/>
          <q-btn flat label="保存" color="primary" type="submit" :disable="checkSame(userDetail,userDetailCopy)"
                 @click="submit"/>
        </q-card-actions>
      </q-form>
    </q-card>
  </q-page>
</template>

<style scoped>

</style>
