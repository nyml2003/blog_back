<script setup>
import {onMounted, ref} from "vue";
import {userApi} from "boot/axios";

const tableTab = ref("user");
</script>

<template>
  <q-page class="bg-grey-2 ">
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
          <q-route-tab name="user" label="用户管理" to="/admin/manage/user"/>
          <q-route-tab name="blog" label="博客管理" to="/admin/manage/blog"/>
          <q-route-tab name="comment" label="评论管理" to="/admin/manage/comment"/>
          <q-route-tab name="tag" label="标签管理" to="/admin/manage/tag"/>
          <q-route-tab name="friend" label="友链管理" to="/admin/manage/friend"/>
        </q-tabs>
    </q-toolbar>
      <router-view/>
  </q-page>
</template>

<style scoped>

</style>
