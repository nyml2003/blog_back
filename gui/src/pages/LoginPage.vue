<script setup>
import {ref} from "vue";
import {useRouter} from "vue-router";
import {useAuthStore} from "stores/AuthStore";
import {useQuasar} from "quasar";

const $q = useQuasar();
const authStore = useAuthStore();
const {login} = authStore;
const router = useRouter();
const username = ref("");
const password = ref("");
</script>
<template>
  <q-page class="flex flex-center">
    <q-card class="q-ma-md" style="min-width: 300px">
      <q-card-section>
        <q-form @submit="login(username,password,router)">
          <q-input
            v-model="username"
            label="用户唯一标识"
            lazy-rules
            :rules="[(val) => !!val || '请输入用户唯一标识']"
            hint="邮箱、手机号码、用户名(注册时由系统生成）均可"
            hide-hint
          />
          <q-input
            v-model="password"
            label="密码"
            lazy-rules
            type="password"
            :rules="[(val) => !!val || '请输入密码']"
          />
          <div class="justify-center flex-center flex">
            <q-btn type="submit" label="登录" color="primary" class="q-mt-md"/>
          </div>

        </q-form>
      </q-card-section>
      <q-separator/>
      <q-card-section class="row justify-center">
        <div class="text-h6">没有账号？</div>
        <q-btn
          label="注册"
          color="primary"
          @click="()=>{router.push('/register')}"
          flat
        />
      </q-card-section>
    </q-card>
  </q-page>
</template>
