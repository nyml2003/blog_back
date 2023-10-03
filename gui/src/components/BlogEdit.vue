<script setup>
import { ref,onMounted } from "vue";
import  {baseMediaURL,userApi} from "boot/axios";
import { MdEditor } from "md-editor-v3";
import { useRoute } from "vue-router";
const route = useRoute();
import "md-editor-v3/lib/style.css";
import axios from "axios";
const blog_id = ref(0);
const title = ref("");
const description = ref("");
const content = ref("");
const loadData = () => {
  blog_id.value = parseInt(route.query.id);
  userApi.get("/blog/rest/" + blog_id.value + "/").then((res) => {
    title.value = res.data.title;
    description.value = res.data.description;
    const content_url = res.data.content;
    axios.get(content_url).then((res) => {
      content.value = res.data;
    });
  });
};
onMounted(() => {
  if (route.query.id) loadData();
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
const onUploadImg = async (files, callback) => {
  const res = await Promise.all(
    files.map((file) => {
      return new Promise((rev, rej) => {
        const form = new FormData();
        form.append('file', file);

        userApi
          .post('/img/upload/', form, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          })
          .then((res) => rev(res))
          .catch((error) => rej(error));
      });
    })
  );
  callback(res.map((item) => `${baseMediaURL}${item.data.url}`));
};
</script>
<template>
  <q-page class="flex flex-center">
    <q-card class="q-pa-md q-ma-lg" style="width: 80vw">
      <q-card-section>
          <q-input v-model="title" dense outlined class="text-h6">
            <template #before ><div class="text-weight-bold">标题</div>   </template>
          </q-input>
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
        <MdEditor v-model="content" @uploadImg="onUploadImg" @save=""
      </q-card-section>
      <q-separator />
    </q-card>
  </q-page>
</template>
