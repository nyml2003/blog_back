<!--<script setup>-->
<!--import {useQuasar} from "quasar";-->
<!--import {useRouter} from "vue-router";-->
<!--import {useLoginStore} from "stores/LoginStore";-->
<!--import {computed, nextTick, onMounted, provide, ref} from "vue";-->

<!--const rightDrawerOpen = ref(false);-->
<!--const loginStore = useLoginStore();-->
<!--const login = () => {-->
<!--  router.push("/login");-->
<!--}-->
<!--const logout = () => {-->
<!--  router.push("/");-->
<!--  loginStore.logout();-->
<!--  loginStore.isLogged = false;-->
<!--}-->
<!--const router = useRouter();-->
<!--const $q = useQuasar();-->

<!--const toggleDarkMode = () => {-->
<!--  const dark = $q.dark.isActive;-->
<!--  $q.dark.set(!dark);-->
<!--  localStorage.setItem("dark", !dark);-->
<!--};-->
<!--const toggleLog = () => {-->
<!--  loginStore.checkLogged().then((res) => {-->
<!--    if (res === 'token valid') {-->
<!--      loginStore.isLogged = true;-->
<!--      loginStore.getPermission();-->
<!--    } else {-->
<!--      loginStore.logout();-->
<!--      loginStore.isLogged = false;-->
<!--    }-->
<!--  })-->
<!--};-->
<!--onMounted(() => {-->
<!--  toggleLog();-->
<!--});-->
<!--const isLogged = ref(computed(() => loginStore.isLogged));-->
<!--const keyword = ref("");-->
<!--provide('keyword', keyword);-->
<!--const keywordCopy = ref("");-->
<!--const test = () => {-->
<!--  console.log(loginStore.isLogged);-->
<!--}-->
<!--const search = () => {-->
<!--  keyword.value = keywordCopy.value;-->
<!--  reload();-->
<!--  router.push({-->
<!--    path: '/blog'-->
<!--  })-->
<!--}-->
<!--const isRouteActive = ref(true);-->
<!--const reload = () => {-->
<!--  isRouteActive.value = false;-->
<!--  nextTick(() => {-->
<!--    isRouteActive.value = true;-->
<!--  })-->
<!--}-->
<!--const toolbarRef = ref(null);-->
<!--</script>-->
<!--<template>-->
<!--  <q-layout view="hHr LpR ffr" class="non-selectable des bg-grey-3" v-if="$q.platform.is.Mobile === true">-->
<!--    <q-header elevated>-->
<!--    </q-header>-->
<!--    <q-drawer-->
<!--      v-model="rightDrawerOpen"-->
<!--      show-if-above-->
<!--      :width="300"-->
<!--      side="right"-->
<!--      elevated-->
<!--      v-if="isLogged"-->
<!--    >-->
<!--      <q-scroll-area style="height: calc(100% - 150px); margin-top: 150px; border-left: 1px solid #ddd">-->
<!--        <q-list padding>-->
<!--          <q-item clickable v-ripple to="/user/profile" exact>-->
<!--            <q-item-section avatar>-->
<!--              <q-icon name="account_circle"/>-->
<!--            </q-item-section>-->
<!--            <q-item-section>-->
<!--              My Profile-->
<!--            </q-item-section>-->
<!--          </q-item>-->
<!--          <q-item clickable v-ripple to="/user/comment" exact>-->
<!--            <q-item-section avatar>-->
<!--              <q-icon name="comment"/>-->
<!--            </q-item-section>-->
<!--            <q-item-section>-->
<!--              My Comments-->
<!--            </q-item-section>-->
<!--          </q-item>-->
<!--          <q-item clickable v-ripple to="/user/statistics" exact>-->
<!--            <q-item-section avatar>-->
<!--              <q-icon name="bar_chart"/>-->
<!--            </q-item-section>-->
<!--            <q-item-section>-->
<!--              Comment statistics-->
<!--            </q-item-section>-->
<!--          </q-item>-->
<!--          <q-item clickable v-ripple to="/settings">-->
<!--            <q-item-section avatar>-->
<!--              <q-icon name="exit_to_app"/>-->
<!--            </q-item-section>-->
<!--            <q-item-section>-->
<!--              <div class="text-red text-weight-bold">Exit</div>-->
<!--            </q-item-section>-->
<!--          </q-item>-->
<!--        </q-list>-->
<!--      </q-scroll-area>-->
<!--      <q-img class="absolute-top" src="https://cdn.quasar.dev/img/material.png" style="height: 150px">-->
<!--        <div class="bg-transparent row justify-between" style="height: 150px; width: 300px">-->
<!--          <q-avatar size="100px">-->
<!--            <img-->
<!--              src="https://avatars.githubusercontent.com/u/106670529?s=400&u=1285065547ee37395586d36887a3d7a7b340d112&v=4">-->
<!--          </q-avatar>-->
<!--          <div class="text-right q-ma-md">-->
<!--            <div class="text-h6 text-weight-bold">风唤长河</div>-->
<!--            <div class="text-subtitle2 q-mt-md">nyml2003@qq.com</div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </q-img>-->
<!--    </q-drawer>-->
<!--    <q-page-container>-->
<!--      <q-page-sticky class="z-top" position="right" :offset="[-16.8,0]">-->
<!--        <q-btn-->
<!--          dense-->
<!--          round-->
<!--          unelevated-->
<!--          color="accent"-->
<!--          :icon="rightDrawerOpen ? 'chevron_left' : 'chevron_right'"-->
<!--          @click="rightDrawerOpen =!rightDrawerOpen"-->
<!--          v-if="isLogged"-->
<!--        />-->
<!--      </q-page-sticky>-->

<!--      <router-view v-if="isRouteActive"/>-->
<!--    </q-page-container>-->
<!--    <q-footer >-->

<!--      <q-toolbar class="bg-white text-black justify-between">-->
<!--        <q-tabs inline-label dense >-->
<!--          <q-route-tab icon="home" to="/" exact/>-->
<!--          <q-route-tab icon="group" to="/friend"/>-->
<!--        </q-tabs>-->
<!--        <q-btn round  icon="search" color="primary" @click="search"></q-btn>-->
<!--        <q-tabs inline-label dense >-->
<!--          <q-route-tab icon="menu_book" to="/blog"/>-->
<!--          <q-route-tab icon="videogame_asset" to="/game" exact/>-->
<!--        </q-tabs>-->
<!--        &lt;!&ndash;        <q-input outlined dense v-model="keywordCopy" placeholder="搜索" >&ndash;&gt;-->
<!--        &lt;!&ndash;          <template #prepend>&ndash;&gt;-->
<!--        &lt;!&ndash;            <q-btn flat dense icon="search" color="primary" @click="search"/>&ndash;&gt;-->
<!--        &lt;!&ndash;          </template>&ndash;&gt;-->
<!--        &lt;!&ndash;        </q-input>&ndash;&gt;-->
<!--        &lt;!&ndash;        <q-separator vertical/>&ndash;&gt;-->
<!--        &lt;!&ndash;        <div class="q-mx-md">&ndash;&gt;-->
<!--        &lt;!&ndash;          <q-btn&ndash;&gt;-->
<!--        &lt;!&ndash;            v-if="$q.dark.isActive"&ndash;&gt;-->
<!--        &lt;!&ndash;            flat&ndash;&gt;-->
<!--        &lt;!&ndash;            round&ndash;&gt;-->
<!--        &lt;!&ndash;            dense&ndash;&gt;-->
<!--        &lt;!&ndash;            icon="dark_mode"&ndash;&gt;-->
<!--        &lt;!&ndash;            @click="toggleDarkMode"&ndash;&gt;-->
<!--        &lt;!&ndash;          />&ndash;&gt;-->
<!--        &lt;!&ndash;          <q-btn&ndash;&gt;-->
<!--        &lt;!&ndash;            v-else&ndash;&gt;-->
<!--        &lt;!&ndash;            flat&ndash;&gt;-->
<!--        &lt;!&ndash;            round&ndash;&gt;-->
<!--        &lt;!&ndash;            dense&ndash;&gt;-->
<!--        &lt;!&ndash;            icon="light_mode"&ndash;&gt;-->
<!--        &lt;!&ndash;            @click="toggleDarkMode"&ndash;&gt;-->
<!--        &lt;!&ndash;          />&ndash;&gt;-->
<!--        &lt;!&ndash;          <q-btn flat dense @click="logout" icon="logout" label='logout' v-if="isLogged"/>&ndash;&gt;-->
<!--        &lt;!&ndash;          <q-btn flat dense @click="login" icon="login" label="Login" v-else/>&ndash;&gt;-->
<!--        &lt;!&ndash;        </div>&ndash;&gt;-->
<!--      </q-toolbar>-->
<!--    </q-footer>-->
<!--  </q-layout>-->
<!--</template>-->

<template>1</template>
