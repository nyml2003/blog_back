<script setup>
import { ref, onMounted } from "vue";
import { MdPreview, MdCatalog } from "md-editor-v3";
import { useRoute, useRouter } from "vue-router";
import { api } from "boot/axios";
import { useBlogStore } from "stores/blog-store";
const blogStore = useBlogStore();
const route = useRoute();
const router = useRouter();
import "md-editor-v3/lib/preview.css";
const title = ref("");
const description = ref("");
const views = ref(0);
const id = "preview-only";
const scrollElement = document.documentElement;
const blog_id = ref(0);
const isMenuVisible = ref(false);
const loadData = () => {
  blog_id.value = parseInt(route.params.id);
  api.get("/blog/" + blog_id.value).then((res) => {
    createdAtTime.value = res.data.created_at;
    title.value = res.data.title;
    description.value = res.data.description;
    content.value = res.data.content;
    views.value = res.data.views;
    blogList.value = blogStore.getBlogList();
    if (blogList.value.length === 0) {
      router.push({
        path: "/blog",
      });
    }
    nextId.value = blogStore.getNextId(blog_id.value);
    prevId.value = blogStore.getPrevId(blog_id.value);
    blogStore.setBlog({
      title: res.data.title,
      content: res.data.content,
      description: res.data.description,
    });
  });
};
const blogList = ref([]);
const nextId = ref(0);
const prevId = ref(0);
const nextBlog = () => {
  router
    .push({
      name: "BlogDetail",
      params: {
        id: nextId.value,
      },
    })
    .then(() => {
      loadData();
    });
};
const prevBlog = () => {
  router
    .push({
      name: "BlogDetail",
      params: {
        id: prevId.value,
      },
    })
    .then(() => {
      loadData();
    });
};
const createdAtTime = ref("");
onMounted(() => {
  loadData();
});
const editBlog = () => {
  router.push({
    name: "BlogEdit",
    params: {
      id: blog_id.value,
    },
  });
};
const content = ref("");
const onGetCatalog = (list) => {
  if (list.length > 0) {
    isCatalogVisible.value = true;
  } else {
    isCatalogVisible.value = false;
  }
};
const isCatalogVisible = ref(false);
const isDrawerOpen = ref(false);
</script>
<template>
  <q-page class="flex justify-center items-start">
    <q-page-sticky position="left" :offset="[18, 0]">
      <q-btn
        round
        color="accent"
        :icon="isDrawerOpen ? 'menu_open' : 'menu'"
        @click="isDrawerOpen = !isDrawerOpen"
      />
    </q-page-sticky>
    <q-page-sticky position="right" :offset="[18, 0]">
      <q-btn
        round
        color="accent"
        :icon="isMenuVisible ? 'menu_open' : 'menu'"
        @click="isMenuVisible = !isMenuVisible"
        v-if="!isMenuVisible"
      />
    </q-page-sticky>
    <q-drawer v-model="isDrawerOpen" side="left" bordered>
      <q-list>
        <q-item v-for="(blog, id) in blogList" :key="id">
          <q-item-section>
            <q-item-label
              :class="{
                'text-primary': blog.id === blog_id,
                'text-grey': blog.id !== blog_id,
              }"
              >{{ blog.title }}</q-item-label
            >
          </q-item-section>
          <q-item-section side top>
            <q-btn
              icon="arrow_forward"
              flat
              @click="
                () => {
                  router
                    .push({
                      name: 'BlogDetail',
                      params: { id: blog.id },
                    })
                    .then(() => {
                      loadData();
                    });
                }
              "
            />
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>
    <div class="q-ma-xl" style="width: 70vw">
      <q-toolbar class="q-mb-sm">
        <q-btn
          label="上一篇"
          icon="arrow_back"
          flat
          @click="prevBlog"
          :disable="prevId === 0"
        />
        <q-space />
        <q-btn
          label="下一篇"
          icon-right="arrow_forward"
          flat
          @click="nextBlog"
          :disable="nextId === 0"
        />
      </q-toolbar>
      <q-card>
        <q-card-section>
          <div class="row items-center no-wrap">
            <div clas="col-4 q-ma-md">
              <div class="text-h5 row">
                {{ title }}
                <q-btn
                  icon="edit"
                  flat
                  dense
                  color="warning"
                  @click="editBlog"
                />
                <q-btn icon="delete" flat dense color="red" />
              </div>

              <div class="text-subtitle2 text-grey row no-wrap q-mt-md">
                <div class="q-ma-xs">
                  <q-icon name="history_edu" size="sm" />
                  Word Count:{{ content.length }}
                </div>
                <div class="q-ma-xs">
                  <q-icon name="timer" size="sm" />
                  {{ new Date(createdAtTime).toLocaleString() }}
                </div>
              </div>
            </div>
            <q-space />
            <div class="col-auto">
              <!-- <div class="row q-ma-xs">
                <q-icon name="thumb_up" size="sm" />114
              </div> -->
              <!-- <q-separator />
              <div class="row q-ma-xs">
                <q-icon name="comment" size="sm" />114
              </div> -->
              <!-- <q-separator /> -->
              <div class="row q-ma-xs">
                <q-icon name="visibility" size="sm" />{{ views }}
              </div>
            </div>
          </div>
        </q-card-section>
        <q-separator />
        <q-card-section
          ><MdPreview
            :editorId="id"
            :modelValue="content"
            @onGetCatalog="onGetCatalog"
          />
        </q-card-section>
      </q-card>
      <q-toolbar class="q-mt-xl">
        <q-btn
          label="上一篇"
          icon="arrow_back"
          flat
          @click="prevBlog"
          :disable="prevId === 0"
        />
        <q-space />
        <q-btn
          label="下一篇"
          icon-right="arrow_forward"
          flat
          @click="nextBlog"
          :disable="nextId === 0"
        />
      </q-toolbar>
    </div>
    <div class="q-ma-xl">
      <q-card class="fixed-right" v-if="isMenuVisible" style="height: 80vh;top: 10vh">
        <q-card-actions align="right">
          <div class="text-h6 q-ma-md">快速导航</div>
          <q-btn
            icon="arrow_upward"
            flat
            @click="scrollElement.scrollTop = 0"
          />
          <q-btn
            icon="arrow_downward"
            flat
            dense
            @click="scrollElement.scrollTop = scrollElement.scrollHeight"
          />
          <q-btn
            icon="close"
            flat
            @click="isMenuVisible = false"
          />
        </q-card-actions>
        <q-card-section>
          <q-scroll-area style="height: 70vh">
            <div v-if="isCatalogVisible">
              <div class="text-h6">目录</div>
              <MdCatalog :editorId="id" :scrollElement="scrollElement" />
            </div>
            <div v-else class="text-h6">本篇文章无目录</div>
          </q-scroll-area>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>
