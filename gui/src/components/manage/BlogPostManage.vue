<script setup>
import {useQuasar} from "quasar";
import {onMounted, ref} from "vue";
import {guestApi, userApi} from "boot/axios";
import {useRouter} from "vue-router";
const router = useRouter();
const goEdit = (id)=>{
    router.push({
      path: '/blog/edit/',
      query: {
        id: id
      }
  })
}
const $q = useQuasar();
const data = ref([])
const loading = ref(false)
const tags = ref([])
const loadData = () => {
  loading.value = true
  guestApi.get("/tag/rest/").then((res) => {
    tags.value = res.data.map((item) => {
      return {
        label: item.name,
        value: item.id,
      }
    })
  })
  userApi.get("/blog/rest/", {
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
      name: 'title',
      label: '标题',
      field: 'title',
      align: 'center',
    },
    {
      name: 'description',
      label: '摘要',
      field: 'description',
      align: 'center',
      format: (val) => {
        return val.length > 15 ? val.substring(0, 15) + "..." : val
      },
    },
    {
      name: 'tags',
      label: '标签',
      field: 'tags',
      align: 'center',
    },
    {
      name: 'views',
      label: '浏览量',
      field: 'views',
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
    title: "",
    description: "",
    content: null,
    tags: [],
  },
  form: ref({
    title: "",
    description: "",
    content: null,
    tags: [],
  }),
  isVisible: ref(false),
  reset: function () {
    CreateFormParams.form.value = {
      title: "",
      description: "",
      content: null,
      tags: [],
    }
  },
  submit: function () {
    userApi.post("/blog/rest/", CreateFormParams.form.value, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then((res) => {
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
      console.log(err)
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
    return JSON.stringify(UpdateFormParams.form.value) === JSON.stringify(UpdateFormParams.formCopy.value) && UpdateFormParams.content.value === null
  },
  content: ref(null),
  formCopy: ref({
    id: "",
    title: "",
    description: "",
    tags: [],
  }),
  form: ref({
    id: "",
    title: "",
    description: "",
    tags: [],
  }),
  isVisible: ref(false),
  reset: function () {
    UpdateFormParams.form.value = JSON.parse(JSON.stringify(UpdateFormParams.formCopy.value))
  },
  submit: function () {
    userApi.patch(`/blog/rest/${UpdateFormParams.form.value.id}/`, {
      title: UpdateFormParams.form.value.title,
      description: UpdateFormParams.form.value.description,
      tags: UpdateFormParams.form.value.tags,
      content: UpdateFormParams.content.value
    }, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then((res) => {
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
      console.log(err)
      UpdateFormParams.reset()
      UpdateFormParams.close()
    });
  },
  open: function (row) {
    this.isVisible.value = true;
    const {id, title, description, tags} = row;
    UpdateFormParams.form.value = {
      id: id,
      title: title,
      description: description,
      tags: tags.map((item) => {
        return item.id
      }),
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
  userApi.delete(`/blog/rest/${id}/`).then((res) => {
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
            v-model="UpdateFormParams.form.value.title"
            label="标题"
            lazy-rules
            :rules="[val => !!val || '请输入标题']"
          />
          <q-input
            v-model="UpdateFormParams.form.value.description"
            label="摘要"
            lazy-rules
            type="textarea"
            autogrow
          />
          <q-select
            v-model="UpdateFormParams.form.value.tags"
            label="标签"
            dense
            lazy-rules
            :options="tags"
            multiple
            use-chips
            map-options
            emit-value
            input-debounce="0"
            :rules="[val => !!val || '请选择标签',
            val => val.length > 0 || '至少选择一项']"
          />
          <q-file
            v-model="UpdateFormParams.content.value"
            label="内容"
            lazy-rules
            :multiple="false"
            accept=".md"
          >
          </q-file>

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
            <q-btn
              flat
              dense
              icon="edit"
              color="primary"
              @click="goEdit(UpdateFormParams.form.value.id)">
              编辑
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
            v-model="CreateFormParams.form.value.title"
            label="标题"
            lazy-rules
            :rules="[val => !!val || '请输入标题']"
          />

          <q-select
            v-model="CreateFormParams.form.value.tags"
            label="标签"
            dense
            lazy-rules
            :options="tags"
            multiple
            use-chips
            map-options
            emit-value
            input-debounce="0"
            :rules="[val => !!val || '请选择标签',
            val => val.length > 0 || '至少选择一项']"
          />
          <q-input
            v-model="CreateFormParams.form.value.description"
            label="摘要"
            lazy-rules
          />
          <q-file
            v-model="CreateFormParams.form.value.content"
            label="内容"
            lazy-rules
            :multiple="false"
            accept=".md"
          >
          </q-file>
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
              :disable="CreateFormParams.canCreate()"
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
            <q-btn
           flat
          dense
          icon="edit"
          color="primary"
          @click="goEdit(null)">
          编辑
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
      :visible-columns="['id', 'title', 'description', 'created_at', 'updated_at', 'tags', 'views', 'operation']"
    >
      <template #body-cell-tags="props">
        <q-td :props="props">
          <q-chip
            v-for="(tag,index) in props.row.tags"
            :key="index"
            :label="tag.name"
            color="primary"
            dense
            outline
          />
        </q-td>
      </template>
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
          <q-td colspan="100" class="text-center">
            <q-icon name="add"/>
            添加
          </q-td>
        </q-tr>
      </template>
      <template #top-right>
        <q-btn
          flat
          round
          dense
          icon="refresh"
          color="primary"
          @click="loadData"
        >刷新</q-btn>
      </template>
    </q-table>
  </q-card-section>
</template>

<style scoped>

</style>
