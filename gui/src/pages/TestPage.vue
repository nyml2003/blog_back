<script setup>
import { useAuthStore } from "stores/AuthStore";
import { storeToRefs } from "pinia";
const AuthStore = useAuthStore();
const { isAuthenticated } = storeToRefs(AuthStore);
const { notifyError } = AuthStore;
</script>

<template>
  <q-btn label="测试" @click="notifyError('测试')" />

</template>

<style scoped></style>
