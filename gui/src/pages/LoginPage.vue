<script setup>
import {ref} from "vue";
import {useRouter} from "vue-router";
import {useLoginStore} from "stores/LoginStore";
import {useQuasar} from "quasar";

const $q = useQuasar();
const loginStore = useLoginStore();
const router = useRouter();
const username = ref("");
const password = ref("");
const login = () => {
  loginStore.login(username.value, password.value).then((res) => {
    if (res === 'success') {
      router.push("/");
      loginStore.isLogged = true;
    } else {
      $q.notify({
        message: res,
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
</script>
<template>
  <q-page class="flex flex-center">
    <q-card class="q-ma-md" style="min-width: 400px">
      <q-card-section>
        <q-form @submit="login">
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
