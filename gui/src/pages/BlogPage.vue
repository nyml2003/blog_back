<script setup>
import BlogOutline from "components/BlogOutline.vue";
import {guestApi} from "src/boot/axios";
import {inject, onMounted, ref} from "vue";
import {useRouter} from "vue-router";

const router = useRouter();
const blogs = ref([]);
const pageJumpOptions = ref([]);
const keyword = ref(inject("keyword"));
onMounted(() => {
  loadData();
});
const loadData = () => {
  guestApi
    .get("/blog/rest/", {
      params: {
        page: currentPage.value,
        page_size: recordsPerPage.value,
        keyword: keyword.value,
        tags: tags.value.join(",")
      },
    })
    .then((res) => {
      console.log(res);
      keyword.value = "";
      maxPage.value = recordsPerPage.value
        ? Math.ceil(res.data.count / recordsPerPage.value)
        : 1;
      blogs.value = res.data.results;
      blogs.value.forEach((blog) => {
        blog.created_at = new Date(blog.created_at).toLocaleString();
        blog.updated_at = new Date(blog.updated_at).toLocaleString();
      });
      pageJumpOptions.value = (() => {
        let options = [];
        for (let i = 1; i <= maxPage.value; i++) {
          if (i % 5 === 1 || i === 1 || i === maxPage.value) {
            options.push(i);
          }
        }
        return options;
      })();
    })
};
const recordsPerPageOptions = [3, 5, 7, 10, 25, 50];
const recordsPerPage = ref(5);
const currentPage = ref(1);
const maxPage = ref(0);
const tags = ref([]);
const tab = ref("Archives");
const isSidebarOpen = ref(false);
</script>
<template>
  <q-page class="flex justify-center items-start">
    <q-page-sticky :offset="[18, 0]" position="left">
      <div class="flex no-wrap">
        <q-card v-show="isSidebarOpen">
          <q-card-section>
            <q-item-label class="text-h6">Page</q-item-label>
            <q-separator/>
            <div class="row">
              <q-btn
                v-if="maxPage>1"
                :disable="currentPage===1"
                class="q-mx-sm"
                dense
                flat
                icon="arrow_left"
                round
                @click="currentPage--;loadData();"
              />
              <q-select
                v-if="maxPage>1"
                v-model="currentPage"
                :options="pageJumpOptions"
                borderless
                dense
                @update:model-value="loadData"
              >
                <template #before>
                  <div class="text-caption q-mx-md">跳转到:</div>
                </template>
              </q-select>
              <q-btn
                v-if="maxPage>1"
                :disable="currentPage===maxPage"
                class="q-mx-sm"
                dense
                flat
                icon="arrow_right"
                round
                @click="currentPage++;loadData();"
              />
            </div>
          </q-card-section>
        </q-card>
        <div class="flex flex-center ">
          <q-btn :icon="isSidebarOpen ? 'menu_open' : 'menu'" color="accent" round
                 @click="isSidebarOpen = !isSidebarOpen"></q-btn>
        </div>
      </div>
    </q-page-sticky>
    <q-card class="gt-sm q-ma-md" style="width: 700px ">
      <q-toolbar class="bg-white ">
        <q-tabs v-model="tab" inline-label>
          <q-tab label="Archives" name="Archives"/>
          <q-tab label="Categories" name="Categories"/>
        </q-tabs>
        <q-space/>
      </q-toolbar>
      <q-separator/>
      <q-card-section>
        <q-tab-panels v-model="tab" animated>
          <q-tab-panel class="q-pa-none" name="Archives">
            <BlogOutline :blogs="blogs"/>
          </q-tab-panel>
        </q-tab-panels>
      </q-card-section>
    </q-card>
    <q-card class="lt-md q-ma-md">
      <q-toolbar class="bg-white ">
        <q-tabs inline-label>
          <q-tab label="Archives" name="Archives"/>
          <q-tab label="Categories" name="Categories"/>
        </q-tabs>
      </q-toolbar>
      <q-separator/>
      <BlogOutline :blogs="blogs"/>
    </q-card>
  </q-page>
</template>
