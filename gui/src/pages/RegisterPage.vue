<script setup>
import {inject, ref, watch} from "vue";
import {useRouter} from "vue-router";
import {useLoginStore} from "stores/LoginStore";
import {useQuasar} from "quasar";

const $q = useQuasar();
const loginStore = useLoginStore();
const router = useRouter();
const form = ref({
  nickname: '',
  password: '',
  password2: '',
  email: '',
  telephone: '',
  avatar: null,
})
const register = () => {
  loginStore.logout();
  Object.entries(form.value).forEach(([key, value]) => {
    if (value === '' || value === null || value === undefined) {
      delete form.value[key];
    }
  })
  loginStore.register(form.value).then((res) => {
    if (res === 'success') {
      router.push("/");
      setTimeout(() => {
        router.go(0);
      }, 1000);
      loginStore.isLogged = true;
    } else {
      $q.notify({
        message: res.toString(),
        color: 'negative',
        icon: 'report_problem',
        position: 'top',
        timeout: 2000,
      })
    }
  }).catch((err) => {
    console.log(err);
  })
}
const reset = () => {
  form.value={
    nickname: '',
    password: '',
    password2: '',
    email: '',
    telephone: '',
    avatar: null,
  }
}
const password2Error = ref(false);
const emailOrTelephoneError = ref(false);
watch(form.value, () => {
  password2Error.value = form.value.password !== form.value.password2;
  emailOrTelephoneError.value = !(form.value.email || form.value.telephone);
})
</script>
<template>
  <q-page class="flex-center flex non-selectable">
    <q-card class="q-ma-md" style="min-width: 400px">
      <q-card-section>
        <q-form @submit="register" @reset="reset">
          <q-input
            v-model="form.nickname"
            label="昵称"
            lazy-rules
            clearable
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
            clearable
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
            clearable
            :rules="[(val) => !!val || '请确认密码']"
            :error="password2Error"
            :error-message="password2Error ? '两次密码不一致' : ''"
          >
            <template #before>
              <q-icon name="lock"/>
            </template>
          </q-input>
          <q-input
            v-model="form.email"
            label="Email"
            lazy-rules
            clearable
            :rules="[(val) => !val || /.+@.+/.test(val) || '请输入正确的邮箱']"
            :error="emailOrTelephoneError"
            :error-message="emailOrTelephoneError ? '手机号和邮箱至少填写一项' : ''"
          >
            <template #before>
              <q-icon name="email"/>
            </template>
          </q-input>
          <q-input
            v-model="form.telephone"
            label="电话(11位数字)"
            lazy-rules
            clearable
            :rules="[(val) => !val || (val.length === 11 && /^\d+$/.test(val)) || '请输入正确的电话号码']"
            :error="emailOrTelephoneError"
            :error-message="emailOrTelephoneError ? '手机号和邮箱至少填写一项' : ''"
          >
            <template #before>
              <q-icon name="phone"/>
            </template>
          </q-input>
          <q-file
            v-model="form.avatar"
            label="头像(可选)"
            lazy-rules
            clearable
            accept="image/*"
            :rules="[val => !val || val.size < 1024 * 1024 * 2 || '文件大小不能超过2MB']"
          >
            <template #prepend>
              <q-icon name="image"/>
            </template>
          </q-file>
          <q-separator/>
          <div class="justify-center flex-center flex">
            <q-btn type="submit" label="注册" color="primary" class="q-mt-md"/>
            <q-btn type="reset" label="重置" color="negative" class="q-mt-md"/>
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
