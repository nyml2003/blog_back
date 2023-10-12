<script setup>
import {userApi} from "boot/axios";
import {onMounted, ref} from "vue";
import {useRouter} from "vue-router";
import ProfileDetail from "components/ProfileDetail.vue";
import {useQuasar} from "quasar";

const $q = useQuasar();
const router = useRouter();
const tips = ref([
  "温馨提示，邮箱、电话、用户唯一标识均可用于登录",
  ""
])
//统计信息数组
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
const loadData = () => {
  userApi.get('/user/self/').then((res) => {
    userDetail.value.nickname = res.data.nickname;
    userDetail.value.email = res.data.email;
    userDetail.value.avatar = res.data.avatar;
    userDetail.value.id = res.data.id;
    userDetail.value.created_at = new Date(res.data.created_at).toLocaleString(
      "zh-CN",
      {
        hour12: false,
      }
    );
    userDetail.value.description = res.data.description;
    userDetail.value.telephone = res.data.telephone;
    userDetail.value.username = res.data.username;
  }).catch((err) => {
    console.log(err);
  })
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
  userApi.get('/user/statistics/comment/').then((res) => {
    statistics.value[0].value = res.data.count;
  })
  userApi.get('/user/statistics/database_request/').then((res) => {
    statistics.value[1].value = res.data.count;
  })
}
const comments = ref([]);
onMounted(() => {
  loadData();
})
const userDetail = ref({
  id: 0,
  nickname: "",
  email: "",
  avatar: null,
  description: "",
  telephone: null,
  username: "",
  created_at: "",
});
const toDetail = (blog_id) => {
  router.push({
    name: 'BlogDetail',
    params: {
      id: blog_id
    }
  })
}
const onSave = (id, content) => {
  userApi.patch(`/comment/rest/${id}/`, {
    content: content
  }).then((res) => {
    comments.value[comments.value.findIndex((item) => {
      return item.id === id;
    })].isUpdate = false;
    loadData();
  })
}
const onDelete = (item) => {
  $q.notify({
    message: '确定删除该评论吗？',
    color: 'negative',
    position: 'center',
    icon: 'delete',
    timeout: 2000,
    actions: [
      {
        label: '确定',
        color: 'white',
        handler: () => {
          userApi.delete(`/comment/rest/${item.id}/`).then((res) => {
            $q.notify({
              message: '删除成功',
              color: 'positive',
              position: 'top',
              icon: 'delete',
              timeout: 2000,
            })
            loadData();
          })
        }
      },
      {
        label: '取消',
        color: 'white',
        handler: () => {
        }
      }
    ]
  })
};
const isDetail = ref(false);
</script>

<template>
  <q-dialog v-model="isDetail" persistent>
    <ProfileDetail :isOpen="isDetail" :close="()=>{isDetail=false;loadData();}"/>
  </q-dialog>
  <q-page class="flex items-start content-start justify-center">
    <q-card class="q-mx-md q-mt-md q-mb-sm" style="min-width: 1000px">

      <q-card-section tag="div" style="height: 132px" class="bg-grey">
      </q-card-section>
      <q-separator/>
      <q-card-section tag="div" style="height: 132px">
        <div style="position:absolute; left: 20%; top:10%;">
          <div class="text-h5 text-weight-bolder">{{ userDetail.nickname }}</div>
          <div class="text-subtitle2 q-my-md">{{ userDetail.description }}</div>
          <div class="row" style="width: 800px;">
            <div class="col">
              <q-icon name="email"/>
              邮箱: {{ userDetail.email }}
            </div>
            <div class="col">
              <q-icon name="phone"/>
              电话: {{ userDetail.telephone }}
            </div>
            <div class="col">
              <q-icon name="description"/>
              用户唯一标识: {{ userDetail.username }}
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col text-right text-caption text-grey">
            <q-icon name="calendar_today"/>
            温馨提示，邮箱、电话、用户唯一标识均可用于登录
          </div>
        </div>
      </q-card-section>
      <q-avatar class="absolute-center" size="160px" style="left: 10%; border-radius: 50%">
        <img :src="userDetail.avatar"/>
      </q-avatar>
      <q-card-actions align="right">
        <q-btn flat label="编辑个人资料" color="primary" @click="isDetail=true"/>
      </q-card-actions>
    </q-card>
    <div class="q-mx-md q-mb-md row" style="min-width: 1000px;min-height: 500px">
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
    </div>
  </q-page>
</template>

<style scoped>
</style>
