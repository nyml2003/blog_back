<script setup>
import {ref} from 'vue'
const rows = ref([
  {
    name:'114年第一学期期中考试',
    subject:'语文',
    reason:'第1题答案应该是A，但是我选了B，我认为我的答案是正确的',
    status:'已驳回'
  },
  {
    name:'114年第一学期期中考试',
    subject:'数学',
    reason:'第2题答案我的答案和参考答案一样，但是系统判定我错了',
    status:'已通过'
  },
  {
    name:'114年第一学期期中考试',
    subject:'英语',
    reason:'总分计算错误',
    status:'待审核'
  }
])
const columns=ref([
  {
    'name': 'name',
    'label': '考试名称',
    'field': 'name',
    'align': 'center',
  },
  {
    'name': 'subject',
    'label': '科目',
    'field': 'subject',
    'align': 'center',
  },
  {
    'name':'reason',
    'label':'申请原因',
    'field':'reason',
    'align': 'center',
  },
  {
    'name':'status',
    'label':'状态',
    'field':'status',
    'align': 'center',
  },
  {
    'name':'button',
    'label':'操作',
    'field':'button',
    'align': 'center',
  }
])
const addNewRow=()=>{
  rows.value.unshift({
    name:'',
    subject:'',
    reason:'',
    status:''
  })
}
</script>

<template>
<q-page class="flex flex-center bg-grey-2">
  <q-table
    style="width: calc(90% - 20px); margin: 10px auto;"
    class="q-ma-md"
    :rows="rows"
    :columns="columns"
    title="查分申请记录"
    separator="cell"
  >
    <template #bottom-row>
      <q-tr>
        <q-td colspan="100%" style="height: calc(100vh - 400px); background-color: #fff"/>
      </q-tr>
    </template>
    <template #top-right>
      <q-btn color="primary" label="新建申请查分" @click="addNewRow"/>
    </template>
    <template #body-cell-status="props">
      <q-td style="text-align: center">
        <q-chip
          v-if="props.row.status==='待审核'"
          color="amber"
          text-color="black"
          label="待审核"
        />
        <q-chip
          v-else-if="props.row.status==='已通过'"
          color="green"
          text-color="white"
          label="已通过"
        />
        <q-chip
          v-else-if="props.row.status==='已驳回'"
          color="red"
          text-color="white"
          label="已驳回"
        />
      </q-td>
    </template>
    <template #body-cell-button="props">
      <q-td style="text-align: center">
        <q-btn-group v-if="props.row.status==='待审核'">
            <q-btn color="amber" label="修改申请" />
            <q-btn color="red" label="撤销申请" />
        </q-btn-group>
        <q-btn v-else-if="props.row.status==='已驳回'" color="blue" label="再次申请" />
      </q-td>
    </template>
  </q-table>
</q-page>
</template>

<style scoped>

</style>
