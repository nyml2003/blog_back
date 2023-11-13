<script setup>
import {useQuasar} from "quasar";
import {useRouter} from "vue-router";
import {ref} from "vue";
import RecordShow from "components/RecordShow.vue";

const $q = useQuasar();
const miniState = ref(false);
const router = useRouter();
const leftDrawerOpen = ref(true);
</script>

<template>
  <q-layout view="hHh lpR lFf" class="non-selectable">
    <q-drawer v-model="leftDrawerOpen" side="left"
              :width="miniState ? 50 : 150"
              :mini="miniState"
              @mouseover="miniState = false"
              @mouseout="miniState = true"
    >
      <q-scroll-area style="height: 100%">
        <q-list padding>
          <q-item clickable v-ripple to="/admin/index">
            <q-item-section avatar>
              <q-icon name="home" size="md"/>
            </q-item-section>
            <q-item-section>
              首页
            </q-item-section>
          </q-item>
          <q-item clickable v-ripple to="/admin/manage">
            <q-item-section avatar>
              <q-icon name="group" size="md"/>
            </q-item-section>
            <q-item-section>
              管理
            </q-item-section>
          </q-item>
          <q-item clickable v-ripple to="/admin/review">
            <q-item-section avatar>
              <q-icon name="check" size="md"/>
            </q-item-section>
            <q-item-section>
              <q-item-label>审核</q-item-label>
            </q-item-section>
          </q-item>
          <q-item class="absolute-bottom" clickable v-ripple to="/">
            <q-item-section avatar>
              <q-icon name="exit_to_app" />
            </q-item-section>
            <q-item-section>
              <div class="text-red text-weight-bold">退出</div>
            </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>
    <q-page-container>
      <router-view/>
      <q-footer class="flex flex-center bg-grey-2" style="height: 50px">
        <RecordShow class="text-caption1 text-grey-8 q-mx-md"/>
      </q-footer>
    </q-page-container>
  </q-layout>
</template>

<style scoped>

</style>
