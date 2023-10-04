<script setup>
import {useQuasar} from "quasar";
import {useRouter} from "vue-router";
import {useLoginStore} from "stores/LoginStore";
import {computed, nextTick, onMounted, onUnmounted, provide, ref, watch} from "vue";
import {userApi} from "boot/axios";

const rightDrawerOpen = ref(false);
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
  toggleLog();
});
const isLogged = ref(computed(() => loginStore.isLogged));
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
const toolbarRef = ref(null);
const enableSearch = ref(false);
watch(rightDrawerOpen, () => {
  if (isLogged.value === false) {
    rightDrawerOpen.value = false;
    setTimeout(
      () => {
        router.push({
          path: '/login'
        })
      }, 200
    )
  } else {
    userApi.get('/user/rest/').then((res) => {
      username.value = res.data.username;
      email.value = res.data.email;
    })
  }
})
const username = ref("");
const email = ref("");
</script>
<template>
  <q-layout view="hHr LpR ffr" class="non-selectable bg-grey-3">
    <q-header elevated>
    </q-header>
    <q-drawer
      v-model="rightDrawerOpen"
      show-if-above
      :width="300"
      side="right"
      elevated
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
          <q-item clickable v-ripple @click="()=>{
            rightDrawerOpen = false
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
          }" exact>
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
            <img
              src="https://avatars.githubusercontent.com/u/106670529?s=400&u=1285065547ee37395586d36887a3d7a7b340d112&v=4">
          </q-avatar>
          <div class="text-right q-ma-md">
            <div class="text-h6 text-weight-bold">{{ username }}</div>
            <div class="text-subtitle2 q-mt-md">{{ email }}</div>
          </div>
        </div>
      </q-img>
      <q-btn
        style="position: absolute; bottom: 50vh; left:-16.8px"
        dense
        round
        unelevated
        color="accent"
        icon='chevron_right'
        @click="rightDrawerOpen =false"
      />
    </q-drawer>
    <q-page-container>
      <q-page-sticky class="z-top" position="right" :offset="[-16.8,0]">
        <q-btn
          dense
          round
          unelevated
          color="accent"
          icon='chevron_left'
          @click="rightDrawerOpen =true"
          v-if="!rightDrawerOpen"
        />
      </q-page-sticky>

      <router-view v-if="isRouteActive"/>
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

