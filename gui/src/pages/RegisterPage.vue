<script setup>
import {ref, watch} from "vue";
import {useRouter} from "vue-router";
import {guestApi, userApi} from "boot/axios";
import {useLoginStore} from "stores/LoginStore";

const loginstore = useLoginStore();
const router = useRouter();
const form = ref({
  nickname: '',
  password: '',
  password2: '',
  email: null,
  telephone: null,
  avatar: null,
})
const register = () => {
  loginstore.logout();
  loginstore.register(form.value).then((res) => {
    if (res === 'success') {
      router.push('/login');
    }
  }).catch((err) => {
    console.log(err);
  })
}
const password2Error = ref(false);
watch(form.value.password2, (val) => {
  if (val !== form.value.password) {
    password2Error.value = true;
  } else {
    password2Error.value = false;
  }
})
watch(form.value.password, (val) => {
  if (val !== form.value.password2) {
    password2Error.value = true;
  } else {
    password2Error.value = false;
  }
})
</script>
<template>
  <q-page class="flex-center flex non-selectable">
    <q-card class="q-ma-md" style="min-width: 400px">
      <q-card-section>
        <q-form @submit="register">
          <q-input
            v-model="form.nickname"
            label="昵称"
            lazy-rules
            :rules="[(val) => !!val || '请输入昵称']"
          >
            <template #before>
              <q-icon name="account_circle"/>
            </template>
          </q-input>
          <q-input
            v-model="form.password"
            label="密码"
            type="password"
            lazy-rules
            :rules="[(val) => !!val || '请输入密码']"
          >
            <template #before>
              <q-icon name="lock"/>
            </template>
          </q-input>
          <q-input
            v-model="form.password2"
            label="确认密码"
            type="password"
            lazy-rules
            :rules="[(val) => !!val || '请确认密码']"
            :error="password2Error"
            
          >
            <template #before>
              <q-icon name="lock"/>
            </template>
          </q-input>
          <q-input
            v-model="form.email"
            label="Email"
            lazy-rules
          >
            <template #before>
              <q-icon name="email"/>
            </template>
          </q-input>
          <q-input
            v-model="form.telephone"
            label="电话(11位数字)"
            lazy-rules
          >
            <template #before>
              <q-icon name="phone"/>
            </template>
          </q-input>
          <q-file
            v-model="form.avatar"
            label="头像(可选)"
            lazy-rules
            accept="image/*"
          >
            <template #prepend>
              <q-icon name="image"/>
            </template>
          </q-file>
          <q-separator/>
          <div class="justify-center flex-center flex">
            <q-btn type="submit" label="注册" color="primary" class="q-mt-md" @click="register"/>
          </div>
          <div class="justify-center  flex text-subtitle2 text-grey-8 q-mt-md">
            手机号和邮箱至少填写一项
          </div>
        </q-form>
      </q-card-section>
      <q-separator/>
      <q-card-section class="row justify-center">
        <div class="text-h6">已有账号？</div>
        <q-btn
          label="登录"
          color="primary"
          @click="()=>{router.push('/login')}"
          flat
        />
      </q-card-section>
    </q-card>
  </q-page>
</template>
