<script setup>
import {useQuasar} from "quasar";
import {useRouter} from "vue-router";
import {useLoginStore} from "stores/LoginStore";
import {computed, nextTick, onMounted, provide, ref, watch} from "vue";
import {userApi} from "boot/axios";
import {useMainLayoutStore} from "stores/MainLayoutStore";

const mainLayoutStore = useMainLayoutStore();
const loginStore = useLoginStore();
const login = () => {
  router.push("/login");
}
const logout = () => {
  router.push("/");
  loginStore.logout();
  loginStore.isLogged = false;
}
const router = useRouter();
const $q = useQuasar();

const toggleDarkMode = () => {
  const dark = $q.dark.isActive;
  $q.dark.set(!dark);
  localStorage.setItem("dark", !dark);
};
const toggleLog = () => {
  loginStore.checkLogged().then((res) => {
    if (res === 'token valid') {
      loginStore.isLogged = true;
    } else {
      loginStore.logout();
      loginStore.isLogged = false;
    }
  })
};
onMounted(() => {
  toggleLog();
});
const isLogged = ref(computed(() => loginStore.isLogged));
const isRightDrawerOpen = ref(computed(() => mainLayoutStore.isRightDrawerOpen));
provide('isLogged', isLogged);
const keyword = ref("");
provide('keyword', keyword);
const keywordCopy = ref("");
const test = () => {
  console.log(loginStore.isLogged);
}
const search = () => {
  keyword.value = keywordCopy.value;
  keywordCopy.value = "";
  isInputKeyword.value = false;
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
const isInputKeyword = ref(false);
watch(isRightDrawerOpen, () => {
  if (isLogged.value === false) {
    mainLayoutStore.isRightDrawerOpen.value = false;
    setTimeout(
      () => {
        $q.notify({
          message: '请先登录',
          icon: 'warning',
          color: 'red',
          position: 'top',
        })
        router.push({
          path: '/login'
        })
      }, 200
    )
  } else {
    userApi.get('/user/self/').then((res) => {
      console.log(res);
      userDetail.value.username = res.data.username;
      userDetail.value.avatar = res.data.avatar;
      userDetail.value.description = res.data.description;
      userDetail.value.nickname = res.data.nickname;
    })
  }
})
const userDetail = ref({
  username: "",
  avatar: null,
  description: "",
});
const toggleRightDrawer = () => {
  if (isLogged.value) {
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
      {label: '确定', color: 'primary', handler: () => {logout()}}
    ]
  })
}
</script>
<template>
  <q-layout view="hHr LpR ffr" class="non-selectable bg-grey-3">
    <q-header elevated style="backdrop-filter: blur(10px)" class="bg-transparent">
      <q-toolbar class=" text-black justify-center" v-if="!isInputKeyword">
        <q-tabs inline-label>
          <q-route-tab icon="home" to="/" exact label="简介"/>
          <q-route-tab icon="group" to="/friend" exact label="友链"/>
          <q-route-tab icon="menu_book" to="/blog" exact label="博文列表"/>
          <q-route-tab icon="videogame_asset" to="/game" exact label="游戏"/>
        </q-tabs>
        <div class="q-mx-md"/>
        <q-input
          ref="input"
          v-model="keywordCopy"
          color="primary"
          dense
          outlined
          placeholder="Search"
        >
          <template #prepend>
            <q-btn round icon="search" color="primary" @click="search" size="sm"></q-btn>
          </template>
        </q-input>
        <q-btn flat icon="account_circle" @click="toggleRightDrawer" class="q-ml-md"
               label="帐号"/>
      </q-toolbar>
    </q-header>
    <q-drawer
      v-model="isRightDrawerOpen"
      :width="300"
      side="right"
      elevated
      overlay
    >
      <q-scroll-area style="height: calc(100% - 150px); margin-top: 150px; border-left: 1px solid #ddd">
        <q-list padding>
          <q-item clickable v-ripple to="/user/profile" exact>
            <q-item-section avatar>
              <q-icon name="account_circle"/>
            </q-item-section>
            <q-item-section>
              My Profile
            </q-item-section>
          </q-item>
          <q-item clickable v-ripple to="/user/comment" exact>
            <q-item-section avatar>
              <q-icon name="comment"/>
            </q-item-section>
            <q-item-section>
              My Comments
            </q-item-section>
          </q-item>
          <q-item clickable v-ripple to="/user/statistics" exact>
            <q-item-section avatar>
              <q-icon name="bar_chart"/>
            </q-item-section>
            <q-item-section>
              Comment statistics
            </q-item-section>
          </q-item>
          <q-item clickable v-ripple @click="exit" exact>
            <q-item-section avatar>
              <q-icon name="exit_to_app"/>
            </q-item-section>
            <q-item-section>
              <div class="text-red text-weight-bold">Exit</div>
            </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
      <q-img class="absolute-top" src="https://cdn.quasar.dev/img/material.png" style="height: 150px">
        <div class="bg-transparent row justify-between" style="height: 150px; width: 300px">
          <q-avatar size="100px">
            <img alt="avatar"
                 :src="userDetail.avatar ? userDetail.avatar : 'https://cdn.quasar.dev/img/avatar.png'">
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
    </q-page-container>

  </q-layout>
</template>
<style scoped>
</style>

