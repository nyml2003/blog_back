<script setup>
import {userApi} from "boot/axios";
import {onMounted, ref} from "vue";

const loadData = () => {
  userApi.get('/user/statistics/comment/').then((res) => {
    statistics.value[0].value = res.data.count;
  })
  userApi.get('/user/statistics/database_request/').then((res) => {
    statistics.value[1].value = res.data.count;
  })
}
onMounted(() => {
  loadData();
})
const statistics = ref([
  {
    name: "评论总数",
    value: 0,
    field: "comment_count"
  },
  {
    name: "发送敏感请求总数",
    value: 0,
    field: "request_count"
  }
]);
</script>

<template>
  <q-page class="flex flex-center">
    <q-card class="q-ma-md col" style="height: 90vh; overflow-y: auto">
      <q-card-section>
        <div class="row justify-center">
          <div class="text-h5 text-weight-bolder">我的统计信息</div>
        </div>
      </q-card-section>
      <q-card class="q-mr-xs col">
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
                  <q-btn flat dense round @click="onDelete(item)" icon="delete" color="negative"/>
                  发布时间:{{ item.updated_at }}
                </div>
              </div>
              <q-separator/>
              <q-input type="textarea" :readonly="!item.isUpdate" v-model="item.content" autogrow>
                <template #append>
                  <q-btn flat dense round @click="item.isUpdate = !item.isUpdate" class="q-mr-xs" color="primary"
                         icon="edit"
                         v-if="!item.isUpdate"/>
                  <q-btn flat dense round @click="onSave(item.id,item.content)" icon="save" color="positive" v-else/>
                </template>
              </q-input>
            </q-item-section>
          </q-item>
        </q-list>

      </q-card>
      <q-card class="col-3">
        <q-list>
          <q-item v-for="item in statistics" :key="item.name">
            <q-item-section>
              <div class="text-h6 text-weight-bold">{{ item.name }}</div>
              <div class="text-subtitle2 text-grey">{{ item.value }}</div>
            </q-item-section>
          </q-item>
        </q-list>
      </q-card>

    </q-card>
  </q-page>
</template>

<style scoped>

</style>
