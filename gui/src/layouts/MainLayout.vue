<script setup>
import {useQuasar} from "quasar";
import {useRouter} from "vue-router";
import {useLoginStore} from "stores/LoginStore";
import {computed, nextTick, onMounted, provide, ref} from "vue";

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
      loginStore.getPermission();
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
const keyword = ref("");
provide('keyword', keyword);
const keywordCopy = ref("");
const test = () => {
  console.log(loginStore.isLogged);
}
const search = () => {
  keyword.value = keywordCopy.value;
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
</script>
<template>
  <q-layout view="hHh LpR fFf" class="non-selectable des bg-grey-3">
    <q-header elevated class="gt-sm">
      <q-toolbar class="bg-white text-black justify-center ">
        <q-tabs inline-label>
          <q-route-tab icon="home" to="/" exact label="Home"/>
          <q-route-tab icon="account_circle" to="/about" label="About"/>
          <q-route-tab icon="menu_book" to="/blog" label="Blog"/>
          <q-route-tab icon="videogame_asset" to="/game" label="Game" exact/>
        </q-tabs>
        <q-input outlined dense v-model="keywordCopy" placeholder="搜索" class="q-mx-md">
          <template #prepend>
            <q-btn flat dense icon="search" color="primary" @click="search"/>
          </template>
        </q-input>
        <q-separator vertical/>
        <div class="q-mx-md">
          <q-btn
            v-if="$q.dark.isActive"
            flat
            round
            dense
            icon="dark_mode"
            @click="toggleDarkMode"
          />
          <q-btn
            v-else
            flat
            round
            dense
            icon="light_mode"
            @click="toggleDarkMode"
          />
          <q-btn flat dense @click="logout" icon="logout" label='logout' v-if="isLogged"/>
          <q-btn flat dense @click="login" icon="login" label="Login" v-else/>
        </div>


      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view v-if="isRouteActive"/>
      <!--      <q-btn fab fixed bottom right icon="keyboard_arrow_up" @click="test"-->
      <!--             class="absolute-bottom-left"/>-->
    </q-page-container>
    <q-footer elevated class="lt-md">
      <q-toolbar class="bg-grey-3 text-black flex flex-center">
        <q-tabs inline-label>
          <q-route-tab icon="home" to="/" exact/>
          <q-route-tab icon="account_circle" to="/about"/>
          <q-route-tab icon="menu_book" to="/blog"/>
          <q-route-tab icon="videogame_asset" to="/game" exact/>
        </q-tabs>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

