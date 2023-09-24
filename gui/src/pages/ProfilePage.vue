<script setup>
import {onMounted, ref} from "vue";
import {userApi} from "boot/axios";
const loadData = () => {
  userApi.get('/user/rest/').then((res) => {
    username.value = res.data.username;
    email.value = res.data.email;
    date_joined.value = new Date(res.data.date_joined).toLocaleDateString();
  })
}
const username=ref("");
const email=ref("");
const date_joined=ref(null);
onMounted(() => {
  loadData();
})
</script>

<template>
<q-page class="flex flex-center">
 <q-card class="q-ma-md" style="max-width: 400px">
   <q-card-section class="q-pa-md">
     <q-card-title class="text-h6">个人信息</q-card-title>
    </q-card-section>
  <q-form  class="q-ma-md">
    <q-input v-model="username" label="Username" readonly>
      <template #before>
        <q-icon name="person" />
      </template>
    </q-input>
    <q-input v-model="email" label="Email" readonly>
      <template #before>
        <q-icon name="email" />
      </template>
    </q-input>
    <q-input v-model="date_joined" label="Date Joined" readonly>
      <template #before>
        <q-icon name="date_range" />
      </template>
      <template #append>
        <q-icon name="access_time" class="cursor-pointer">
            <q-popup-proxy cover transition-show="scale" transition-hide="scale">
              <q-date v-model="date_joined" mask="YYYY/MM/DD" />
            </q-popup-proxy>
          </q-icon>
      </template>
    </q-input>
  </q-form>
 </q-card>
</q-page>
</template>

<style scoped>

</style>
