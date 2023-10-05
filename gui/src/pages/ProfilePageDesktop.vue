<script setup>
import {userApi} from "boot/axios";
import {onMounted, ref} from "vue";
const tips=ref([
  "温馨提示，邮箱、电话、用户唯一标识均可用于登录",
  ""
])
const loadData = () => {
  userApi.get('/user/self/').then((res) => {
    userDetail.value.nickname=res.data.nickname;
    userDetail.value.email=res.data.email;
    userDetail.value.avatar=res.data.avatar;
    userDetail.value.id=res.data.id;
    userDetail.value.created_at=new Date(res.data.created_at).toLocaleString(
      "zh-CN",
      {
        hour12: false,
      }
    );
    userDetail.value.description=res.data.description;
    userDetail.value.telephone=res.data.telephone;
    userDetail.value.username=res.data.username;
  }).catch((err) => {
    console.log(err);
  })
}
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
</script>

<template>
<q-page class="flex items-start justify-center">
  <q-card class="q-ma-md" style="min-width: 1000px">

    <q-card-section tag="div" style="height: 132px" class="bg-grey">
    </q-card-section>
    <q-separator />
    <q-card-section tag="div" style="height: 132px">
      <div style="position:absolute; left: 20%; top:10%;">
        <div class="text-h5 text-weight-bolder">{{ userDetail.nickname }}</div>
        <div class="text-subtitle2 q-my-md">{{ userDetail.description }}</div>
        <div class="row" style="width: 800px;">
          <div class="col">
            <q-icon name="email" />
              邮箱: {{ userDetail.email }}
          </div>
          <div class="col">
            <q-icon name="phone" />
              电话: {{ userDetail.telephone }}
          </div>
          <div class="col">
            <q-icon name="description" />
              用户唯一标识: {{ userDetail.username }}
          </div>
        </div>
      </div>
       <div class="row">
          <div class="col text-right text-caption text-grey">
            <q-icon name="calendar_today" />
              温馨提示，邮箱、电话、用户唯一标识均可用于登录
          </div>
        </div>
    </q-card-section>
    <q-avatar class="absolute-center" size="160px" style="left: 10%; border-radius: 50%">
      <img :src="userDetail.avatar" />
    </q-avatar>
    <q-card-actions align="right">
      <q-btn flat label="编辑个人资料" color="primary" />
    </q-card-actions>
  </q-card>
</q-page>
</template>

<style scoped>
</style>
