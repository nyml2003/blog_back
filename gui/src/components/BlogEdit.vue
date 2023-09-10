<script setup>
import { ref, toRefs } from "vue";
import { api } from "boot/axios";
import { MdEditor } from "md-editor-v3";
import { useRoute } from "vue-router";
import { useBlogStore } from "stores/blog-store";
const blogStore = useBlogStore();
const route = useRoute();
import "md-editor-v3/lib/style.css";
const { title, description, content } = toRefs(blogStore.getBlog());
const blog_id = route.params.id;
const upload = () => {
  console.log({
    title: title.value,
    description: description.value,
    content: content.value,
  });
  api
    .post("/api/upload/", {
      title: title.value,
      description: description.value,
      content: content.value,
    })
    .then((res) => {
      console.log(res);
    });
};
const update = () => {
  api
    .put("/api/blog/" + blog_id + "/", {
      title: title.value,
      description: description.value,
      content: content.value,
    })
    .then((res) => {
      console.log(res);
    });
};
</script>
<template>
  <q-page class="flex justify-end items-start">
    <q-card class="q-pa-md q-ma-lg" style="width: 80vw">
      <q-card-section>
        <div class="text-h6">
          <q-input v-model="title" dense outlined class="text-h6">
            <template #before> 标题 </template>
          </q-input>
        </div>
      </q-card-section>
      <q-separator />
      <q-card-section>
        <div class="text-h6">摘要</div>
        <q-input
          v-model="description"
          dense
          outlined
          type="textarea"
          class="subtitle-2"
        >
        </q-input>
      </q-card-section>
      <q-separator />
      <q-card-section>
        <div class="text-h6">正文</div>
        <MdEditor v-model="content" />
      </q-card-section>
      <q-separator />

      <q-card-actions align="right">
        <q-btn label="取消" flat /><q-btn
          label="更新"
          color="warning"
          flat
          @click="update"
          v-if="blog_id"
        />
        <q-btn label="上传" color="primary" flat @click="upload" v-else />
      </q-card-actions>
    </q-card>
  </q-page>
</template>
