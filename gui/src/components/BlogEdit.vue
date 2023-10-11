<script setup>
import {ref, onMounted, reactive} from "vue";
import {baseMediaURL, userApi} from "boot/axios";
import {MdEditor} from "md-editor-v3";
import {useRoute} from "vue-router";
import {useQuasar} from "quasar";

const $q = useQuasar();
const route = useRoute();
import "md-editor-v3/lib/style.css";
import axios from "axios";

const blog_id = ref(0);
const content = ref("");
const form = ref({
  title: "",
  description: "",
  tags: [],
});
const tagOptions = ref([]);
const loadData = () => {

  if (route.query.id) {
    blog_id.value = parseInt(route.query.id);
    userApi.get("/blog/rest/" + blog_id.value + "/").then((res) => {
      form.value.title = res.data.title;
      form.value.description = res.data.description;
      const content_url = res.data.content;
      axios.get(content_url).then((res) => {
        content.value = res.data.toString();
      });
      form.value.tags = res.data.tags.map((item) => {
        return item.id;
      });
    });
  }
  userApi.get("/tag/rest/").then((res) => {
    tagOptions.value = res.data.map((item) => {
      return {
        label: item.name,
        value: item.id,
      }
    });
  });
};
onMounted(() => {
  loadData();
});
const upload = () => {
  userApi
    .post("/blog/rest/", form.value, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }).then((res) => {
    $q.notify({
      message: '添加成功',
      color: 'positive',
      icon: 'check',
      position: 'top',
      timeout: 1000,
    })
    loadData()
  }).catch((err) => {
    $q.notify({
      message: `添加失败,原因:${err.response.data.name}`,
      color: 'negative',
      icon: 'close',
      position: 'top',
      timeout: 1000,
    })
    loadData()
  })
};
const update = () => {
  userApi
    .patch("/blog/rest/" + blog_id.value + "/", form.value, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }).then((res) => {
    $q.notify({
      message: '添加成功',
      color: 'positive',
      icon: 'check',
      position: 'top',
      timeout: 1000,
    })
    loadData()
  }).catch((err) => {
    $q.notify({
      message: `添加失败,原因:${err.response.data.name}`,
      color: 'negative',
      icon: 'close',
      position: 'top',
      timeout: 1000,
    })
    loadData()
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
const onSave = () => {
  form.value.content = new File([content.value], "content.md", {type: "text/plain;charset=utf-8"});
  if (blog_id.value === 0) {
    upload();
  } else {
    update();
  }
}
</script>
<template>
  <q-page class="flex flex-center">
    <q-card class="q-pa-md q-ma-lg" style="width: 80vw">
      <q-card-section>
        <q-input v-model="form.title" dense outlined type="text" class="headline">
          <template #prepend>
            <q-icon name="title"/>
          </template>
        </q-input>
      </q-card-section>
      <q-separator/>
      <q-card-section>
        <q-input
          v-model="form.description"
          dense
          outlined
          type="textarea"
          class="subtitle-2"
          label="摘要"
        >
        </q-input>
        <q-select
          v-model="form.tags"
          label="标签"
          dense
          lazy-rules
          :options="tagOptions"
          multiple
          use-chips
          map-options
          emit-value
          input-debounce="0"
          :rules="[val => !!val || '请选择标签',
            val => val.length > 0 || '至少选择一项']"
        />
      </q-card-section>
      <q-separator/>
      <q-card-section>
        <div class="text-h6">正文</div>
        <MdEditor v-model="content" @uploadImg="onUploadImg" @save="onSave"/>
      </q-card-section>
      <q-separator/>
    </q-card>
  </q-page>
</template>
