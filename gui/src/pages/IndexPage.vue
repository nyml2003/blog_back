<template>
  <q-page class="flex flex-center">
    <div class="text-h6">
      {{ $q.platform.is.desktop ? 'Desktop' : 'Mobile' }}
      <q-btn @click="router.push('/login')" label="Login"/>
    </div>
  </q-page>
</template>

<script setup>
import {useQuasar} from "quasar";

const $q = useQuasar();
import {useRouter} from "vue-router";

const router = useRouter();
</script>
