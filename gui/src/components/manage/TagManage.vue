<script setup>
import {useQuasar} from "quasar";
import {onMounted, ref} from "vue";
import {userApi} from "boot/axios";

const $q = useQuasar();
const data = ref([])
const loading = ref(false)

const loadData = () => {
  loading.value = true
  console.log(TableParams.pagination.value)
  userApi.get("/tag/rest/", {
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
//table
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
      name: 'name',
      label: '标签名称',
      field: 'name',
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
const CreateFormParams = {
  canCreate: function () {
    return JSON.stringify(CreateFormParams.form.value) === JSON.stringify(CreateFormParams.nullForm)
  },
  nullForm: {
    name: ""
  },
  form: ref({
    name: ""
  }),
  isVisible: ref(false),
  reset: function () {
    CreateFormParams.form.value = JSON.parse(JSON.stringify(CreateFormParams.nullForm))
  },
  submit: function () {
    userApi.post("/tag/rest/", CreateFormParams.form.value).then((res) => {
      $q.notify({
        message: '添加成功',
        color: 'positive',
        icon: 'check',
        position: 'top',
        timeout: 1000,
      })
      CreateFormParams.reset()
      CreateFormParams.close()
      loadData()
    }).catch((err) => {
      $q.notify({
        message: `添加失败,原因:${err.response.data.name}`,
        color: 'negative',
        icon: 'close',
        position: 'top',
        timeout: 1000,
      })
      CreateFormParams.reset()
      CreateFormParams.close()
    })
  },
  open: function () {
    this.isVisible.value = true;
  },
  close: function () {
    this.isVisible.value = false;
  },
}
//update
const UpdateFormParams = {
  canUpdate: function () {
    return JSON.stringify(UpdateFormParams.form.value) === JSON.stringify(UpdateFormParams.formCopy.value)
  },
  formCopy: ref({
    id: "",
    name: ""
  }),
  form: ref({
    id: "",
    name: ""
  }),
  isVisible: ref(false),
  reset: function () {
    UpdateFormParams.form.value = JSON.parse(JSON.stringify(UpdateFormParams.formCopy.value))
  },
  submit: function () {
    userApi.patch(`/tag/rest/${UpdateFormParams.form.value.id}/`, UpdateFormParams.form.value).then((res) => {
      $q.notify({
        message: '修改成功',
        color: 'positive',
        icon: 'check',
        position: 'top',
        timeout: 1000,
      })
      UpdateFormParams.reset()
      UpdateFormParams.close()
      loadData()
    }).catch((err) => {
      $q.notify({
        message: `修改失败,原因:${err.response.data.name}`,
        color: 'negative',
        icon: 'close',
        position: 'top',
        timeout: 1000,
      })
      UpdateFormParams.reset()
      UpdateFormParams.close()
    })
  },
  open: function (row) {
    this.isVisible.value = true;
    const {id, name} = row
    UpdateFormParams.form.value = {
      id: id,
      name: name,
    };
    UpdateFormParams.formCopy.value = JSON.parse(JSON.stringify(UpdateFormParams.form.value))
  },
  close: function () {
    this.isVisible.value = false;
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
  userApi.delete(`/tag/rest/${id}/`).then((res) => {
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
  <!--  update-->
  <q-dialog v-model="UpdateFormParams.isVisible.value" persistent>
    <q-card>
      <q-card-section>
        <q-form @submit="UpdateFormParams.submit" @reset="UpdateFormParams.reset">
          <q-input
            v-model="UpdateFormParams.form.value.name"
            label="名称"
            lazy-rules
            :rules="[val => !!val || '请输入名称']"
          />
          <q-card-actions align="right">
            <q-btn
              flat
              dense
              icon="close"
              color="negative"
              @click="UpdateFormParams.close()"
            >
              取消
            </q-btn>
            <q-btn
              flat
              dense
              icon="save"
              color="primary"
              type="submit"
              :disable="UpdateFormParams.canUpdate()"
            >
              保存
            </q-btn>
            <q-btn
              flat
              dense
              icon="refresh"
              color="primary"
              type="reset"
            >
              重置
            </q-btn>
          </q-card-actions>
        </q-form>
      </q-card-section>
    </q-card>
  </q-dialog>
  <!--  create-->
  <q-dialog v-model="CreateFormParams.isVisible.value" persistent>
    <q-card>
      <q-card-section>
        <q-form @submit="CreateFormParams.submit" @reset="CreateFormParams.reset">
          <q-input
            v-model="CreateFormParams.form.value.name"
            label="名称"
            lazy-rules
            :rules="[val => !!val || '请输入名称']"
          />
          <q-card-actions align="right">
            <q-btn
              flat
              dense
              icon="close"
              color="negative"
              @click="CreateFormParams.close()"
            >
              取消
            </q-btn>
            <q-btn
              flat
              dense
              icon="save"
              color="primary"
              type="submit"
            >
              保存
            </q-btn>
            <q-btn
              flat
              dense
              icon="refresh"
              color="primary"
              type="reset"
            >
              重置
            </q-btn>
          </q-card-actions>
        </q-form>
      </q-card-section>
    </q-card>
  </q-dialog>
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
      :visible-columns="['name', 'created_at', 'updated_at', 'operation']"
    >
      <template #body-cell-operation="props">
        <q-td :props="props">
          <q-btn
            dense
            round
            icon="edit"
            color="primary"
            class="q-mx-sm"
            @click="UpdateFormParams.open(props.row)"
          />
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
      <template #bottom-row>
        <q-tr @click="CreateFormParams.open()" class="cursor-pointer">
          <q-td colspan="5" class="text-center">
            <q-icon name="add"/>
            添加
          </q-td>
        </q-tr>

      </template>
    </q-table>
  </q-card-section>
</template>

<style scoped>

</style>
