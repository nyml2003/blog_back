<script setup>
import {ref} from "vue";
import {useRouter} from "vue-router";
const username = ref("");
const password = ref("");
const password2 = ref("");
const router = useRouter();
const email = ref("");
</script>
<template>
  <q-page class="flex-center flex">
    <q-card class="q-ma-md" style="max-width: 400px">
      <q-card-section>
        <q-form @submit="register">
          <q-input
            v-model="username"
            label="Username"
            lazy-rules
            :rules="[(val) => !!val || 'Please enter your username']"
          >
            <template #before>
              <q-icon name="account_circle" />
            </template>
          </q-input>
          <q-input
            v-model="password"
            label="Password"
            lazy-rules
            type="password"
            :rules="[(val) => !!val || 'Please enter your password']"
          >
            <template #before>
              <q-icon name="lock" />
            </template>
          </q-input>
          <q-input
            v-model="password2"
            label="Password Again"
            lazy-rules
            type="password"
            :rules="[(val) => !!val || 'Please enter your password again']"
          >
            <template #before>
              <q-icon name="check_circle" />
            </template>
          </q-input>
          <q-input
            v-model="email"
            label="Email"
            lazy-rules
            type="email"
            :rules="[(val) => !!val || 'Please enter your email']"
          >
            <template #before>
              <q-icon name="email" />
            </template>
          </q-input>
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
