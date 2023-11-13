<script setup>
import {onMounted, ref} from "vue";
import {userApi} from "boot/axios";

const tableTab = ref("user");
</script>

<template>
  <q-page class="bg-grey-2">
    <q-toolbar
      class="shadow-2 bg-white calc"
      elevated
    >
      <q-tabs
        v-model="tableTab"
        class="text-primary bg-white"
        align="justify"
        active-color="primary"
        indicator-color="primary"
        narrow-indicator
        shrink
      >
        <q-route-tab label="待审核评论" to="/admin/review/todo"/>
        <q-route-tab label="已通过的评论" to="/admin/review/pass"/>
        <q-route-tab label="已驳回的评论" to="/admin/review/reject"/>
      </q-tabs>
    </q-toolbar>
    <router-view/>
  </q-page>
</template>

<style scoped>

</style>
