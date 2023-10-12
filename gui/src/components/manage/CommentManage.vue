<script setup>
import {useQuasar} from "quasar";
import {onMounted, ref} from "vue";
import {userApi} from "boot/axios";

const $q = useQuasar();
const data = ref([])
const loading = ref(false)
const loadData = () => {
  loading.value = true
  userApi.get("/comment/rest/", {
      params: {
        page: TableParams.pagination.value.page,
        page_size: TableParams.pagination.value.rowsPerPage,
      }
    }
  ).then((res) => {
    data.value = res.data.results
    TableParams.pagination.value.rowsNumber = res.data.count
  })
  loading.value = false
}
const TableParams = {
  loading: ref(false),
  columns: [
    {
      name: 'id',
      label: 'ID',
      field: 'id',
      align: 'center',
    },
    {
      name: 'user',
      label: '用户',
      field: 'user',
      align: 'center',
    },
    {
      name: 'content',
      label: '内容',
      field: 'content',
      align: 'center',
    },
    {
      name: 'parent_id',
      label: '父评论ID',
      field: 'parent_id',
      align: 'center',
    },
    {
      name: 'parent_name',
      label: '父评论用户名',
      field: 'parent_name',
      align: 'center',
    },
    {
      name: 'parent_type',
      label: '父评论类型',
      field: 'parent_type',
      align: 'center',
    },
    {
      name: 'created_at',
      label: '创建时间',
      field: 'created_at',
      format: (val) => {
        return new Date().toLocaleString()
      },
      align: 'center',
    },
    {
      name: 'updated_at',
      label: '更新时间',
      field: 'updated_at',
      align: 'center',
      format: (val) => {
        return new Date().toLocaleString()
      },
    },
    {
      name: 'operation',
      label: '操作',
      field: 'operation',
      align: 'center',
    }
  ],
  pagination: ref({
    sortBy: 'id',
    descending: false,
    page: 1,
    rowsNumber: 0,
    rowsPerPage: 7,
  }),
  onRequest: function (props) {
    const {page, rowsPerPage} = props.pagination;
    TableParams.pagination.value.page = page;
    TableParams.pagination.value.rowsPerPage = rowsPerPage;
    loadData();
  }
}

//delete
function deleteById(id) {
  $q.notify({
    message: '删除中',
    color: 'warning',
    textColor: 'black',
    icon: 'warning',
    position: 'center',
    actions: [
      {
        label: '取消',
        color: 'black',
        handler: () => {
          $q.notify({
            message: '取消删除',
            color: 'negative',
            icon: 'close',
            position: 'top',
            timeout: 1000,
          })
        }
      },
      {
        label: '确定',
        color: 'red',
        handler: () => {
          deleteByIdConfirm(id)
        }
      }
    ]
  })
}

function deleteByIdConfirm(id) {
  userApi.delete(`/comment/rest/${id}/`).then((res) => {
    $q.notify({
      message: '删除成功',
      color: 'positive',
      icon: 'check',
      position: 'top',
      timeout: 1000,
    })
    loadData()
  }).catch((err) => {
    console.log(err)
  })
}

onMounted(() => {
  loadData();
})
</script>

<template>
  <q-card-section>
    <q-table
      :columns="TableParams.columns"
      :rows="data"
      v-model:pagination="TableParams.pagination.value"
      @request="TableParams.onRequest"
      row-key="id"
      :loading="TableParams.loading.value"
      binary-state-sort
      :separator="'cell'"
      :rows-per-page-options="[7, 10, 15]"
      :visible-columns="['id', 'user', 'content', 'parent_id', 'parent_name', 'parent_type', 'created_at', 'updated_at', 'operation']"
    >
      <template #body-cell-avatar="props">
        <q-td :props="props">
          <img v-if="props.row.avatar" :src="`${props.row.avatar}`" style="width: 50px;height: 50px;border-radius: 50%"
               alt="图片加载失败"/>
          <div v-else>无</div>
        </q-td>
      </template>
      <template #body-cell-url="props">
        <q-td :props="props">
          <a :href="props.row.url" target="_blank">{{ props.row.url }}</a>
        </q-td>
      </template>
      <template #body-cell-operation="props">
        <q-td :props="props">
          <q-btn
            dense
            round
            icon="delete"
            class="q-mx-sm"
            color="negative"
            @click="deleteById(props.row.id)"
          />
        </q-td>
      </template>
    </q-table>
  </q-card-section>
</template>

<style scoped>

</style>
