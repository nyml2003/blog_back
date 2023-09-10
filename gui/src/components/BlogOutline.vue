<script setup>
import { api } from "src/boot/axios";
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useBlogStore } from "src/stores/blog-store";
const blogStore = useBlogStore();
const router = useRouter();
const blogs = ref([]);
const pageJumpOptions = ref([]);
const keyword = ref("");
onMounted(() => {
  loadData();
  loadList();
});
const loadData = () => {
  api
    .get("/api/blog/", {
      params: {
        page: currentPage.value,
        page_size: recordsPerPage.value,
        keyword: keyword.value,
      },
    })
    .then((res) => {
      keyword.value = "";
      maxPage.value = recordsPerPage.value
        ? Math.ceil(res.data.count / recordsPerPage.value)
        : 1;
      blogs.value = res.data.results;
      blogs.value.forEach((blog) => {
        blog.created_at = new Date(blog.created_at).toLocaleString();
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
};
const loadList = () => {
  api.get("/api/blog/getBlogList").then((res) => {
    blogStore.setBlogList(res.data.data);
  });
};
const recordsPerPageOptions = [3, 5, 7, 10, 25, 50];
const recordsPerPage = ref(7);
const currentPage = ref(1);
const maxPage = ref(0);
</script>
<template>
  <q-page class="flex justify-center items-start">
    <div style="width: 50vw" class="q-ma-xl">
      <q-toolbar>
        <q-toolbar-title class="text-h3">目录</q-toolbar-title>
        <q-space />

        <q-input outlined dense v-model="keyword" placeholder="搜索">
          <template #prepend>
            <q-btn flat dense icon="search" color="primary" @click="loadData" />
          </template>
        </q-input>
      </q-toolbar>
      <q-toolbar inset v-if="blogs.length">
        <q-space />
        <q-select
          v-model="recordsPerPage"
          :options="recordsPerPageOptions"
          dense
          borderless
          @update:model-value="loadData"
        >
          <template #before>
            <div class="text-caption">每页显示:</div>
          </template>
          <template #after>
            <div class="text-caption">条</div>
          </template>
        </q-select>
        <div class="q-ml-md">
          <q-pagination
            v-model="currentPage"
            :min="1"
            :max="maxPage"
            :max-pages="5"
            :total-pages="maxPage"
            :per-page="recordsPerPage"
            @update:model-value="loadData"
            input
            input-class="text-caption"
            outline
          />
        </div>
      </q-toolbar>
      <q-timeline v-if="blogs.length">
        <q-timeline-entry heading> </q-timeline-entry>
        <q-timeline-entry
          v-for="(blog, id) in blogs"
          :subtitle="blog.created_at"
          :key="id"
          scroll
        >
          <q-card>
            <q-card-section>
              <div class="row items-center no-wrap">
                <div class="text-h6 col">{{ blog.title }}</div>
                <div class="col-auto">
                  <q-btn
                    flat
                    dense
                    icon="arrow_forward"
                    @click="
                      () => {
                        router.push({
                          name: 'BlogDetail',
                          params: { id: blog.id },
                        });
                      }
                    "
                  />
                </div>
              </div>
            </q-card-section>
            <q-separator />
            <q-card-section>
              <div class="text-subtitle2 text-grey">{{ blog.description }}</div>
            </q-card-section>
          </q-card>
        </q-timeline-entry>
      </q-timeline>
      <div v-else class="text-h6 q-ma-lg">暂无数据</div>
      <q-toolbar inset v-if="blogs.length">
        <q-space />
        <q-select
          v-model="recordsPerPage"
          :options="recordsPerPageOptions"
          dense
          borderless
          @update:model-value="loadData"
        >
          <template #before>
            <div class="text-caption">每页显示:</div>
          </template>
          <template #after>
            <div class="text-caption">条</div>
          </template>
        </q-select>
        <div class="q-ml-md">
          <q-pagination
            v-model="currentPage"
            :min="1"
            :max="maxPage"
            :max-pages="5"
            :total-pages="maxPage"
            :per-page="recordsPerPage"
            @update:model-value="loadData"
            input
            input-class="text-caption"
            outline
          />
        </div>
      </q-toolbar>
    </div>
  </q-page>
</template>
<script scope></script>
