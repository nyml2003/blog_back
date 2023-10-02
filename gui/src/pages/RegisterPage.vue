<script setup>
import {ref} from "vue";
import {useRouter} from "vue-router";
import {guestApi, userApi} from "boot/axios";
import {useLoginStore} from "stores/LoginStore";
const loginstore=useLoginStore();
const router = useRouter();
const form=ref({
  nickname:'',
  password:'',
  password2:'',
  email:null,
  telephone:null,
  avatar:null,
})
const register=()=>{
  loginstore.logout();
  loginstore.register(form.value).then((res)=>{
    if(res==='success'){
      router.push('/login');
    }
  }).catch((err)=>{
    console.log(err);
  })
}
</script>
<template>
  <q-page class="flex-center flex">
    <q-card class="q-ma-md" style="max-width: 400px">
      <q-card-section>
        <q-form @submit="register">
          <q-input
            v-model="form.nickname"
            label="昵称"
            lazy-rules
            :rules="[(val) => !!val || 'Please enter your username']"
          >
            <template #before>
              <q-icon name="account_circle" />
            </template>
          </q-input>
          <q-input
            v-model="form.password"
            label="密码"
            lazy-rules
            :rules="[(val) => !!val || 'Please enter your password']"
          >
            <template #before>
              <q-icon name="lock" />
            </template>
          </q-input>
          <q-input
            v-model="form.password2"
            label="确认密码"
            lazy-rules
            :rules="[
              (val) => !!val || 'Please confirm your password',
              (val) => val === form.password || 'The two passwords do not match',
            ]"
          >
            <template #before>
              <q-icon name="lock" />
            </template>
          </q-input>
          <q-input
            v-model="form.email"
            label="Email"
            lazy-rules
          >
            <template #before>
              <q-icon name="email" />
            </template>
          </q-input>
          <q-input
            v-model="form.telephone"
            label="Telephone"
            lazy-rules
          >
            <template #before>
              <q-icon name="phone" />
            </template>
          </q-input>
          <q-file
            v-model="form.avatar"
            label="Avatar"
            lazy-rules
            accept="image/*"
          >
            <template #prepend>
              <q-icon name="image" />
            </template>
          </q-file>
          <q-separator />
          <div class="justify-center flex-center flex">
            <q-btn type="submit" label="Register"  />
          </div>
        </q-form>
      </q-card-section>
      <q-separator/>
      <q-card-section class="row">
        <div class="text-h6">Already have an account?</div>
        <q-btn
          label="Login"
          color="primary"
          @click="()=>{router.push('/login')}"
          flat
        />
      </q-card-section>
    </q-card>
  </q-page>
</template>
