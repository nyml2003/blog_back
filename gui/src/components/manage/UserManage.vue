<script setup>
import {onMounted, ref} from "vue";
import {userApi} from "boot/axios";

const columns = ref([
  {
    name: 'id',
    label: 'ID',
    field: 'id',
    align: 'left',
    sortable: true
  },
  {
    name: 'nickname',
    label: '昵称',
    field: 'nickname',
    align: 'left',
    sortable: true
  },
  {
    name: 'avatar',
    label: '头像',
    field: 'avatar',
    align: 'left',
    sortable: true
  },
  {
    name: 'created_at',
    label: '创建时间',
    field: 'created_at',
    align: 'left',
    format: (val) => new Date(val).toLocaleString(),
    sortable: true
  },
  {
    name: 'updated_at',
    label: '更新时间',
    field: 'updated_at',
    align: 'left',
    format: (val) => new Date(val).toLocaleString(),
    sortable: true
  },
  {
    name: 'logic_delete',
    label: '逻辑删除',
    field: 'logic_delete',
    align: 'left',
    sortable: true
  },
  {
    name: 'description',
    label: '描述',
    field: 'description',
    align: 'left',
    sortable: true
  },
  {
    name: 'email',
    label: '邮箱',
    field: 'email',
    align: 'left',
    sortable: true
  },
  {
    name: 'telephone',
    label: '电话',
    field: 'telephone',
    align: 'left',
    sortable: true
  },
  {
    name: 'operation',
    label: '操作',
    field: 'operation',
    align: 'left',
    sortable: true
  },
])
const rows = ref([])
onMounted(() => {
  userApi.get("/user/rest/").then((res) => {
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
  </q-table>
</template>

<style scoped>

</style>
