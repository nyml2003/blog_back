<script setup>
import { ref,onMounted } from "vue";
import { userApi} from "boot/axios";
import { MdEditor } from "md-editor-v3";
import { useRoute } from "vue-router";
const route = useRoute();
import "md-editor-v3/lib/style.css";
const blog_id = ref(0);
const title = ref("");
const description = ref("");
const content = ref("");
const loadData = () => {
  blog_id.value = parseInt(route.params.id);
  userApi.get("/blog/rest/" + route.params.id + "/").then((res) => {
    title.value = res.data.title;
    description.value = res.data.description;
    content.value = res.data.content;
  });
};
onMounted(() => {
  loadData();
});
const upload = () => {
  userApi
    .post("/blog/upload/", {
      title: title.value,
      description: description.value,
      content: content.value,
    })
};
const update = () => {
  userApi
    .put("/blog/rest/" + blog_id.value + "/", {
      title: title.value,
      description: description.value,
      content: content.value,
    })

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
