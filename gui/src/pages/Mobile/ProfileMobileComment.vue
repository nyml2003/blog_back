<script setup>
import {userApi} from "boot/axios";
import {onMounted, ref} from "vue";

const loadData = () => {
  userApi.get(`/comment/user/`).then((res) => {
    comments.value = res.data;
    comments.value.forEach((item) => {
      item.updated_at = new Date(item.updated_at).toLocaleString("zh-CN", {
        hour12: false,
      });
    });
    comments.value.forEach((item) => {
      item.isUpdate = false;
    });
  });
}
const comments = ref([]);
onMounted(() => {
  loadData();
})
</script>

<template>
  <q-page class="flex flex-center">
    <q-card class="q-ma-md col" style="height: 90vh; overflow-y: auto">
      <q-card-section>
        <div class="row justify-center">
          <div class="text-h5 text-weight-bolder">我的评论</div>
        </div>
      </q-card-section>
      <q-list>
        <q-item v-for="item in comments" :key="item.id"
                class="cursor-pointer">
          <q-item-section>
            <div class="row justify-between flex-center">
              <div class=" text-h6" @click="toDetail(item.parent_id)">
                对《
                {{ item.parent_name }}
                》的评论
              </div>
              <div class="text-subtitle2 text-grey">
                发布时间:{{ item.updated_at }}
              </div>
            </div>
            <q-separator/>
            <q-input type="textarea" :readonly="!item.isUpdate" v-model="item.content" autogrow>
            </q-input>
          </q-item-section>
        </q-item>
      </q-list>

    </q-card>
  </q-page>

</template>

<style scoped>

</style>
