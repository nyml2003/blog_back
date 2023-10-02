<script setup>
import {useQuasar} from "quasar";
import {onMounted, ref} from "vue";
import {baseMediaURL, userApi} from "boot/axios";

const $q = useQuasar();
const data = ref([])
const loading = ref(false)
const loadData = () => {
  loading.value = true
  console.log(TableParams.pagination.value)
  userApi.get("/friend/rest/", {
      params: {
        page: TableParams.pagination.value.page,
        page_size: TableParams.pagination.value.rowsPerPage,
      }
    }
  ).then((res) => {
    data.value = res.data.results
    TableParams.pagination.value.rowsNumber = res.data.count
    console.log(res.data)
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
      name:'nickname',
      label:'昵称',
      field:'nickname',
      align:'center',
    },
    {
      name:'avatar',
      label:'头像',
      field:'avatar',
      align:'center',
    },
    {
      name:'description',
      label:'个人简介',
      field:'description',
      align:'center',
    },
    {
      name:'url',
      label:'个人主页',
      field:'url',
      align:'center',
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
    console.log(props)
    const {page, rowsPerPage} = props.pagination;
    TableParams.pagination.value.page = page;
    TableParams.pagination.value.rowsPerPage = rowsPerPage;
    loadData();
  }
}
const CreateFormParams = {
  form: ref({
    nickname:"",
    avatar:null,
    description:"",
    url:"",
  }),
  isVisible: ref(false),
  reset: function () {
    CreateFormParams.form.value = {
      nickname:"",
      avatar:null,
      description:"",
      url:"",
    }
  },
  submit: function () {
    userApi.post("/friend/rest/", CreateFormParams.form.value,{
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then((res) => {
      console.log(res)
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
      console.log(err.response.data)
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
const UpdateFormParams={
  isImgChange:ref(false),
  canUpdate:function (){
    return JSON.stringify(UpdateFormParams.form.value)===JSON.stringify(UpdateFormParams.formCopy.value)
  },
  avatar:ref(null),
  formCopy:ref({
    id:"",
    nickname:"",
    avatar:null,
    description:"",
    url:"",
  }),
  form:ref({
    id:"",
    nickname:"",
    avatar:null,
    description:"",
    url:"",
  }),
  isVisible:ref(false),
  reset:function(){
    UpdateFormParams.form.value={
      id:"",
    nickname:"",
    description:"",
    url:"",
    }
  },
  submit:function(){
    userApi.patch(`/friend/rest/${UpdateFormParams.form.value.id}/`,UpdateFormParams.form.value,{
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
    ).then((res)=>{
      console.log(res)
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
    }).catch((err)=>{
      console.log(err.response.data)
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
  open:function(row){
    this.isVisible.value=true;
    const {id,nickname,avatar,description,url}=row;
    UpdateFormParams.avatar.value=avatar;
    UpdateFormParams.form.value={
      id:id,
      nickname:nickname,
      avatar:null,
      description:description,
      url:url,
    };
    UpdateFormParams.formCopy.value={
      id:id,
      nickname:nickname,
      avatar:null,
      description:description,
      url:url,
    };
  },
  close:function(){
    this.isVisible.value=false;
  }
}
//delete
function deleteById(id){
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
function deleteByIdConfirm(id){
  userApi.delete(`/friend/rest/${id}/`).then((res) => {
    console.log(res)
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
  <q-dialog v-model="UpdateFormParams.isVisible.value">
    <q-card>
      <q-card-section>
        <q-form @submit="UpdateFormParams.submit" @reset="UpdateFormParams.reset">
          <q-input
            v-model="UpdateFormParams.form.value.nickname"
            label="昵称"
            lazy-rules
            :rules="[val => !!val || '请输入昵称']"
          />
<!--          图片预览-->
          <q-file
            v-model="UpdateFormParams.form.value.avatar"
            label="头像"
            lazy-rules
            :multiple="false"
            accept="image/*"
          >
            <template #prepend>
              <img v-if="UpdateFormParams.form.value.avatar === null" :src="`${UpdateFormParams.avatar.value}`" style="width: 50px;height: 50px;border-radius: 50%" alt="图片加载失败"/>
            </template>
          </q-file>
          <q-input
            v-model="UpdateFormParams.form.value.description"
            label="个人简介"
            lazy-rules
          />
          <q-input
            v-model="UpdateFormParams.form.value.url"
            label="个人主页"
            lazy-rules
            :rules="[val => !!val || '请输入个人主页']"
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
  <q-dialog v-model="CreateFormParams.isVisible.value">
    <q-card>
      <q-card-section>
        <q-form @submit="CreateFormParams.submit" @reset="CreateFormParams.reset">
          <q-input
            v-model="CreateFormParams.form.value.nickname"
            label="昵称"
            lazy-rules
            :rules="[val => !!val || '请输入昵称']"
          />
          <q-file
            v-model="CreateFormParams.form.value.avatar"
            label="头像"
            lazy-rules
            :rules="[val => !!val || '请选择头像']"
            :multiple="false"
            accept="image/*"
          >
          </q-file>
          <q-input
            v-model="CreateFormParams.form.value.description"
            label="个人简介"
            lazy-rules
          />
          <q-input
            v-model="CreateFormParams.form.value.url"
            label="个人主页"
            lazy-rules
            :rules="[val => !!val || '请输入个人主页']"
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
      :visible-columns="['nickname','avatar','description','url','created_at','updated_at','operation']"
    >
      <template #body-cell-avatar="props">
        <q-td :props="props">
          <img :src="`${props.row.avatar}`" style="width: 50px;height: 50px;border-radius: 50%" alt="图片加载失败"/>
        </q-td>
      </template>
      <template #body-cell-url="props">
        <q-td :props="props">
          <a :href="props.row.url" target="_blank">{{props.row.url}}</a>
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
            <q-icon name="add"/>添加
          </q-td>
        </q-tr>
      </template>
    </q-table>
  </q-card-section>
</template>

<style scoped>

</style>
