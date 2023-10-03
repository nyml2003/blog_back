<script setup>
import {guestApi} from "boot/axios";
import {onMounted, ref} from "vue";

const itemPerRow = ref(3);
const rowNumber = ref(0);
const columns = [
  {
    name: 'id',
    label: 'ID',
    field: 'id',
    align: 'center',
  },
  {
    name: 'nickname',
    label: '昵称',
    field: 'nickname',
    align: 'center',
  },
  {
    name: 'avatar',
    label: '头像',
    field: 'avatar',
    align: 'center',
  },
  {
    name: 'description',
    label: '个人简介',
    field: 'description',
    align: 'center',
  },
  {
    name: 'url',
    label: '个人主页',
    field: 'url',
    align: 'center',
  },
  {
    name: 'created_at',
    label: '创建时间',
    field: 'created_at',
    format: (val) => {
      return new Date(val).toLocaleString()
    },
    align: 'center',
  },
  {
    name: 'updated_at',
    label: '更新时间',
    field: 'updated_at',
    format: (val) => {
      return new Date(val).toLocaleString()
    },
    align: 'center',
  },
  {
    name: 'operation',
    label: '操作',
    field: 'operation',
    align: 'center',
  }
];
const rows = ref([]);
const loadData = () => {
  guestApi.get("/friend/rest/").then((res) => {
    rows.value = res.data;
    rowNumber.value = Math.ceil(rows.value.length / itemPerRow.value);
    console.log(rows.value)
    console.log(rowNumber.value)
  });
}
const toFriendDetail = (id) => {
  console.log(id)
  window.location.href = rows.value[id].url;
}
onMounted(() => {
  loadData();
});
</script>

<template>
  <q-page class="flex items-start justify-center">
    <div class="q-pa-md" style="width: 1000px">
      <div class="row q-ma-md no-wrap" v-for="row in rowNumber" :key="row">
        <div class="col-md-4 q-ma-sm" style="height: 150px" v-for="col in itemPerRow" :key="col">
          <q-card v-if="(row - 1) * itemPerRow + col - 1 < rows.length" class="card_friend cursor-pointer" @click="toFriendDetail((row - 1) * itemPerRow + col - 1)">
            <q-card-section>
              <div class="absolute-top bg_friend" style="height: 150px">
                <div class="bg-transparent row justify-between" style="height: 150px; width: 300px">
                  <q-avatar size="60px" class="q-ma-md" style="left: 20px; top: 20px">
                    <img alt="avatar"
                         :src="rows[(row - 1) * itemPerRow + col - 1].avatar">
                  </q-avatar>
                  <div class="text-right q-ma-md">
                    <div class="text-h6 text-weight-bold q-mt-md text-white"> {{ rows[(row - 1) * itemPerRow + col - 1].nickname }}</div>
                    <div class="text-subtitle2 text-black"> {{ rows[(row - 1) * itemPerRow + col - 1].description }}</div>
                  </div>
                </div>
              </div>
            </q-card-section>
          </q-card>
          <q-card v-else class="invisible"/>
        </div>
      </div>
    </div>
  </q-page>
</template>

<style scoped>
.card_friend {

}

.card_friend:hover {
  transform: scale(1.05);
  transition: all 0.3s ease-in-out;
}
.bg_friend {
   background-image: linear-gradient(to bottom right, #d834c2, #2088dd);
}
</style>
