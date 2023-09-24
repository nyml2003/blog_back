<template>
  <q-page class="flex flex-center">
    <div class="text-h6">

    {{$q.platform.is.desktop ? 'Desktop' : 'Mobile'}}
  </div>
  </q-page>
</template>

<script setup>
import { useQuasar } from "quasar";
const $q = useQuasar();
</script>
