<script setup>
import { ref, onMounted } from "vue";
import { useQuasar } from "quasar";
import { api } from "boot/axios";
const $q = useQuasar();
const files = ref([]);
const title = ref("");
const description = ref("");
onMounted(() => {
  console.log(files.value);
});
//只允许markdown
const whiteList = [".md"];
const onFileChange = () => {
  files.value.forEach((file) => {
    if (!whiteList.includes(file.name.slice(file.name.lastIndexOf(".")))) {
      $q.notify({
        message: "只允许上传markdown文件",
        type: "negative",
      });
      files.value.splice(files.value.indexOf(file), 1);
      return;
    }
  });
};
const canUpload = files.value.length > 0;
const upload = () => {
  const formData = new FormData();
  files.value.forEach((file) => {
    formData.append("file", file);
    formData.append("title", title);
    formData.append("description", description);
    api
      .post("/api/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res);
      });
  });
};
</script>
<template>
  <q-page class="flex flex-center">
    <q-card>
      <q-section> </q-section>
    </q-card>
    <div class="q-ma-md">
      <q-file
        v-model="files.value"
        label="点击或拖拽文件到这里进行上传"
        filled
        multiple
        use-chips
        counter
        @update:model-value="onFileChange"
      >
        <template #prepend>
          <q-icon name="attachment" />
        </template>
        <template #append>
          <q-icon name="close" />
        </template>
        <template #after>
          <q-btn
            color="primary"
            label="上传"
            icon="cloud_upload"
            @click="upload"
            :disable="!canUpload"
          />
        </template>
      </q-file>
    </div>
  </q-page>
</template>
