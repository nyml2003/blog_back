<script setup>
import {onMounted, ref} from "vue";
import {userApi} from "boot/axios";

const columns = ref([
  {
    name: 'id',
    label: 'ID',
    field: 'id',
    align: 'left',
  },
  {
    name: 'nickname',
    label: '昵称',
    field: 'nickname',
    align: 'left',
  },
  {
    name: 'avatar',
    label: '头像',
    field: 'avatar',
    align: 'left',
  },
  {
    name: 
  }
  {
    name: 'operation',
    label: '操作',
    field: 'operation',
    align: 'left',
  },
])
const rows = ref([])
onMounted(() => {
  userApi.get("/friend/rest/").then((res) => {
    rows.value = res.data.results
  })
})
</script>

<template>
  <q-table
    :columns="columns"
    :rows="rows"
    row-key="id"
    binary-state-sort
    separator="cell"
  >
    <template #body-cell-operation="props">
      <q-td :props="props">
        <q-btn
          dense
          flat
          round
          icon="edit"
          color="primary"
        />
        <q-btn
          dense
          flat
          round
          icon="delete"
          color="negative"
        />
      </q-td>
    </template>
    <template #top-right>
      <q-btn
        flat
        round
        dense
        icon="add"
        color="primary"
        @click=""
      >
        添加
      </q-btn>
    </template>
  </q-table>
</template>

<style scoped>

</style>
