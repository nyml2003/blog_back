<script setup>
import {useQuasar} from "quasar";
import {useRouter} from "vue-router";
import {computed, nextTick, onMounted, onUnmounted, provide, ref, watch} from "vue";
import {userApi} from "boot/axios";
import RecordShow from "components/RecordShow.vue";
import {useAuthStore} from "stores/AuthStore";
import {storeToRefs} from "pinia";
import {useMainLayoutStore} from "stores/MainLayoutStore";
const mainLayoutStore = useMainLayoutStore();
const authStore=useAuthStore();
const {isAuthenticated}=storeToRefs(authStore);
const {logout,checkAndSetAuth}=authStore;
const login = () => {
  router.push("/login");
}
const router = useRouter();
const $q = useQuasar();
onMounted(async() => {
  const handleClickOutside = (event) => {
    if (enableSearch.value === false) {
      isInputKeyword.value = false;
    } else if (toolbarRef.value && !toolbarRef.value.$el.contains(event.target)) {
      enableSearch.value = false;
      isInputKeyword.value = false;
    } else {
      isInputKeyword.value = true;
    }
  }
  document.addEventListener("click", handleClickOutside);
  onUnmounted(() => {
    document.removeEventListener("click", handleClickOutside);
  });
  await checkAndSetAuth();
});
const keyword = ref("");
provide('keyword', keyword);
const keywordCopy = ref("");
const search = () => {
  keyword.value = keywordCopy.value;
  keywordCopy.value = "";
  isInputKeyword.value = false;
  reload();
  router.push({
    path: '/blog'
  })
}
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
const isRouteActive = ref(true);
const reload = () => {
  isRouteActive.value = false;
  nextTick(() => {
    isRouteActive.value = true;
  })
}
const isInputKeyword = ref(false);
const toolbarRef = ref(null);
const enableSearch = ref(false);
watch(isAuthenticated, (newVal) => {
  switch (newVal){
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
  userApi.get('/user/route/mobile/').then((res) => {
    console.log(res)
    drawerItems.value = res.data;
  })
}
const userDetail = ref({
  username: "",
  avatar: null,
  description: "",
});
const drawerItems = ref([])
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
</script>
<template>
  <q-layout view="hHr LpR ffr" class="non-selectable bg-grey-3">
    <q-header elevated class="bg-transparent">

    </q-header>
    <q-drawer
      v-model="mainLayoutStore.isRightDrawerOpen"
      show-if-above
      :width="300"
      side="right"
      elevated
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
          <q-item clickable v-ripple @click="exit" exact>
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
      <q-btn
        style="position: absolute; bottom: 50vh; left:-16.8px"
        dense
        round
        unelevated
        color="primary"
        icon='chevron_right'
        @click="toggleRightDrawer"
      />
    </q-drawer>
    <q-page-container>
      <q-page-sticky class="z-top" position="right" :offset="[-16.8,0]">
        <q-btn
          dense
          round
          unelevated
          color="primary"
          icon='chevron_left'
          @click="toggleRightDrawer"
          v-if="!mainLayoutStore.isRightDrawerOpen"
        />
      </q-page-sticky>
      <router-view v-if="isRouteActive"/>
      <q-footer class="flex flex-center bg-grey-3">
        <q-btn
          dense
          flat
          unelevated
          size="xs"
          label="GitHub"
          color="primary"
          class="q-mb-xl"
          @click="toGithub"
        />
        <RecordShow class="text-caption1 text-grey-8 q-mb-xl"></RecordShow>
      </q-footer>
    </q-page-container>

    <q-footer reveal ref="toolbarRef" elevated style="backdrop-filter: blur(10px)" class="bg-transparent">
      <q-toolbar class="text-black justify-between" v-if="!isInputKeyword">
        <q-tabs inline-label>
          <q-route-tab icon="home" to="/" exact/>
          <q-route-tab icon="group" to="/friend"/>
        </q-tabs>
        <q-btn round icon="search" color="primary" @click="enableSearch = true"></q-btn>
        <q-tabs inline-label>
          <q-route-tab icon="menu_book" to="/blog"/>
          <q-route-tab icon="videogame_asset" to="/game" exact/>
        </q-tabs>
      </q-toolbar>
      <q-toolbar v-else class=" text-black justify-center">
        <q-input
          ref="input"
          v-model="keywordCopy"
          color="primary"
          dense
          borderless
          style="width: 100%"
          placeholder="Search"
        >

          <template #prepend>
            <q-btn flat dense icon="search" color="primary" @click="search"/>
          </template>
        </q-input>
      </q-toolbar>
    </q-footer>

  </q-layout>
</template>
<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>

