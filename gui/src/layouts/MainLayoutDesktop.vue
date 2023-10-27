<script setup>
import {useQuasar} from "quasar";
import {useRouter} from "vue-router";
import {computed, nextTick, onMounted, provide, ref, watch} from "vue";
import {userApi} from "boot/axios";
import {useMainLayoutStore} from "stores/MainLayoutStore";
import RecordShow from "components/RecordShow.vue";
import {useAuthStore} from "stores/AuthStore";
import {storeToRefs} from "pinia";

const mainLayoutStore = useMainLayoutStore();
const authStore = useAuthStore();
const login = () => {
  router.push("/login");
}
const router = useRouter();
const $q = useQuasar();

const {checkAndSetAuth, logout} = authStore;
onMounted(async () => {
  await checkAndSetAuth();
  if (isAuthenticated.value) {
    loadUserDetail();
  }
});
const isRightDrawerOpen = ref(computed(() => mainLayoutStore.isRightDrawerOpen));
const keyword = ref("");
provide('keyword', keyword);
const keywordCopy = ref("");
const search = () => {
  keyword.value = keywordCopy.value;
  keywordCopy.value = "";
  reload();
  router.push({
    path: '/blog'
  })
}
const isRouteActive = ref(true);
const reload = () => {
  isRouteActive.value = false;
  nextTick(() => {
    isRouteActive.value = true;
  })
}
const {isAuthenticated} = storeToRefs(authStore);
watch(isAuthenticated, (newVal) => {
  switch (newVal) {
    case true:
      loadUserDetail();
      break;
    case false:
      userDetail.value.username = "";
      userDetail.value.avatar = null;
      userDetail.value.description = "";
      userDetail.value.nickname = "";
      break;
    default:
      $q.notify({
        message: '未知错误',
        icon: 'warning',
        color: 'red',
        position: 'top',
      })
      break;
  }
})
const loadUserDetail = () => {
  userApi.get('/user/self/').then((res) => {
    userDetail.value.username = res.data.username;
    userDetail.value.avatar = res.data.avatar;
    userDetail.value.description = res.data.description;
    userDetail.value.nickname = res.data.nickname;
  })
  userApi.get('/user/route/desktop/').then((res) => {
    console.log(res)
    drawerItems.value = res.data;
  })
}
const drawerItems = ref([])
const userDetail = ref({
  username: "",
  avatar: null,
  description: "",
});
const toggleRightDrawer = () => {
  if (isAuthenticated.value) {
    mainLayoutStore.isRightDrawerOpen = !mainLayoutStore.isRightDrawerOpen
  } else {
    $q.notify({
      message: '请先登录',
      icon: 'warning',
      color: 'red',
      position: 'top',
    })
    login()
  }
}
const exit = () => {
  mainLayoutStore.isRightDrawerOpen = false;
  $q.notify({
    message: '确定要退出登录吗？',
    color: 'white',
    icon: 'warning',
    textColor: 'black',
    position: 'center',
    actions: [
      {label: '取消', color: 'black'},
      {
        label: '确定', color: 'primary', handler: () => {
          logout(router)
        }
      }
    ]
  })
}
function toGithub() {
  window.open("https://github.com/nyml2003")
}
const isDEV = ref(process.env.DEV);
</script>
<template>
  <q-layout class="bg-grey-3" view="hHr LpR ffr">
    <q-header elevated class="bg-transparent header-container" reveal>
      <q-toolbar class="text-black justify-center">
        <q-tabs inline-label>
          <q-route-tab exact icon="home" label="首页" to="/"/>
          <q-route-tab exact icon="group" label="友链" to="/friend"/>
          <q-route-tab exact icon="menu_book" label="博文列表" to="/blog"/>
          <q-route-tab exact icon="videogame_asset" label="游戏" to="/game"/>
          <q-route-tab exact label="关于我" to="/about" icon="person"/>
        </q-tabs>
        <q-input
          ref="input"
          v-model="keywordCopy"
          color="primary"
          class="q-ml-md"
          dense
          outlined
          placeholder="搜索"
          @keyup.enter="search"
        >
          <template #prepend>
            <q-btn color="primary" icon="search" round size="sm" @click="search"></q-btn>
          </template>
        </q-input>
        <q-btn flat label="github" @click="toGithub" class="q-ml-md">
        </q-btn>
        <transition mode="out-in" name="fade" v-if="isDEV">
          <q-btn v-if="isAuthenticated" class="q-ml-md" flat icon="account_circle" label="帐号"
                 @click="toggleRightDrawer"/>
          <q-btn v-else class="q-ml-md" flat icon="account_circle" label="登录"
                 @click="login"/>
        </transition>
      </q-toolbar>
    </q-header>
    <q-drawer
      v-model="isRightDrawerOpen"
      :width="300"
      bordered
      content-class="bg-grey-3"
      elevated
      side="right"
      @mouseout="()=>{mainLayoutStore.isRightDrawerOpen = false}"
      @mouseover="()=>{mainLayoutStore.isRightDrawerOpen = true}"
      @click.capture="()=>{mainLayoutStore.isRightDrawerOpen = false}"
    >
      <q-scroll-area style="height: calc(100% - 150px); margin-top: 150px; border-left: 1px solid #ddd">
        <q-list padding>
          <q-item v-ripple clickable exact :to="item.path" v-for="item in drawerItems" :key="item.path">
            <q-item-section avatar>
              <q-icon :name="item.icon"/>
            </q-item-section>
            <q-item-section>
              {{ item.name }}
            </q-item-section>
          </q-item>
          <q-item v-ripple clickable exact @click="exit">
            <q-item-section avatar>
              <q-icon name="exit_to_app"/>
            </q-item-section>
            <q-item-section>
              <div class="text-red text-weight-bold">注销</div>
            </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
      <q-img class="absolute-top" src="https://cdn.quasar.dev/img/material.png" style="height: 150px">
        <div class="bg-transparent row justify-between" style="height: 150px; width: 300px">
          <q-avatar size="80px">
            <img :src="userDetail.avatar "
                 alt="avatar">
          </q-avatar>
          <div class="text-right q-ma-md">
            <div class="text-h6 text-weight-bold">{{
                userDetail.nickname ? userDetail.nickname : userDetail.username
              }}
            </div>
            <div class="text-subtitle2 q-mt-md">{{ userDetail.description }}</div>
          </div>
        </div>
      </q-img>
    </q-drawer>
    <q-page-container>
      <router-view v-if="isRouteActive"/>
      <q-footer class="flex flex-center bg-grey-3">
        <RecordShow class="text-caption1 text-grey-8 q-mx-md"/>
      </q-footer>
    </q-page-container>

  </q-layout>
</template>

<style scoped>
.header-container {
  height: 50px;
  -webkit-backdrop-filter: blur(10px);
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

</style>

