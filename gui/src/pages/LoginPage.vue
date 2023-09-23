<script setup>
import {ref} from "vue";
import {useRouter} from "vue-router";
import {useLoginStore} from "stores/LoginStore";

const loginStore = useLoginStore();
const router = useRouter();
const username = ref("");
const password = ref("");
const login = () => {
  loginStore.login(username.value, password.value);
  loginStore.isLogged = true;
  router.push("/");
}
</script>
<template>
  <q-page class="flex flex-center">
    <q-card class="q-ma-md" style="max-width: 400px">
      <q-card-section>
        <q-form @submit="login">
          <q-input
            v-model="username"
            label="Username"
            lazy-rules
            :rules="[(val) => !!val || 'Please enter your username']"
          />
          <q-input
            v-model="password"
            label="Password"
            lazy-rules
            type="password"
            :rules="[(val) => !!val || 'Please enter your password']"
          />
          <div class="justify-center flex-center flex">
            <q-btn type="submit" label="Login"  />
          </div>

        </q-form>
      </q-card-section>
      <q-separator/>
      <q-card-section class="row">
        <div class="text-h6">Don't have an account?</div>
        <q-btn
          label="Register"
          color="primary"
          @click="()=>{router.push('/register')}"
          flat
        />
      </q-card-section>
    </q-card>
  </q-page>
</template>
