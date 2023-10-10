<script setup>
import {inject, onMounted, ref} from "vue";
import BlogOutline from "components/Desktop/BlogOutlineDesktop.vue";
import {guestApi} from "boot/axios";

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
        tags: tags.value.join(","),
        order: order.value.value
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
    });
  guestApi.get("/tag/rest/").then((res) => {
    tagOptions.value = res.data.map((tag) => {
      return {
        label: tag.name,
        value: tag.id,
      };
    });
  });
};
const recordsPerPageOptions = [3, 5, 7, 10, 25, 50];
const recordsPerPage = ref(7);
const currentPage = ref(1);
const maxPage = ref(0);
const tags = ref([]);
const tagOptions = ref([]);
const isFilterDialogOpen = ref(false);
const order = ref({
  label: '按更新时间',
  value: '-updated_at'
});
const resetFilter = () => {
  tags.value = [];
  keyword.value = "";
  loadData();
};
</script>
<template>
  <q-dialog v-model="isFilterDialogOpen" persistent>
    <q-card>
      <q-card-section>
        <q-input v-model="keyword" label="关键字" dense autofocus/>
        <q-select
          v-model="tags"
          label="标签"
          lazy-rules
          :options="tagOptions"
          borderless dense
          multiple
          use-chips
          map-options
          emit-value
          map-option
        >
          <template #prepend>
            <q-icon name="label"/>
          </template>
        </q-select>
        <q-select
          v-model="order"
          label="排序"
          borderless
          dense
          :options="[
            {label:'按创建时间',value:'created_at'},
            {label:'按更新时间',value:'-updated_at'},
            {label:'按阅读量',value:'-views'},
          ]"
        />
      </q-card-section>
      <q-card-actions align="right">
        <q-btn flat label="取消" v-close-popup/>
        <q-btn flat label="搜索" color="primary" v-close-popup @click="loadData"/>
        <q-btn flat label="重置" color="primary" v-close-popup @click="resetFilter"/>
      </q-card-actions>
    </q-card>
  </q-dialog>
  <q-page class="flex justify-center items-start">
    <q-card class="q-ma-md" style="width: 700px">
      <div v-for="id in 2" :key="id">
        <q-card-actions class="justify-center">
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
          <q-select v-model="recordsPerPage" :options="recordsPerPageOptions" borderless dense
                    @update:model-value="
                    ()=>{
                      currentPage=1;
                      loadData();
                    }">
            <template #before>
              <div class="text-caption q-mx-md">每页显示:</div>
            </template>
          </q-select>
          <q-btn
            icon="filter_list"
            flat
            dense
            round
            @click="isFilterDialogOpen=true"
          />
        </q-card-actions>
        <BlogOutline :blogs="blogs" v-if="id ===1"></BlogOutline>
      </div>
    </q-card>
  </q-page>
</template>
