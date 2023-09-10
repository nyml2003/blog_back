<script setup>
import { useQuasar } from "quasar";
const $q = useQuasar();
const toggleDarkMode = () => {
  const dark = $q.dark.isActive;
  $q.dark.set(!dark);
  localStorage.setItem("dark", !dark);
};
</script>
<template>
  <q-layout view="hHh LpR fFf" class="non-selectable">
    <q-header elevated>
      <q-toolbar class="bg-grey-3 text-black">
        <q-toolbar-title> 风唤长河的博客 </q-toolbar-title>

        <q-space />
        <q-tabs inline-label>
          <q-route-tab icon="home" to="/" exact label="Home" />
          <q-route-tab icon="account_circle" to="/about" label="About" />
          <q-route-tab icon="menu_book" to="/blog" label="Blog" />
          <q-route-tab icon="videogame_asset" to="/game" label="Game" exact />
        </q-tabs>
        <q-separator vertical />
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
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
