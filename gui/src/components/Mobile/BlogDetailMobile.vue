<script setup>
import {inject, onMounted, ref} from "vue";
import {MdPreview} from "md-editor-v3";
import {useRoute, useRouter} from "vue-router";
import {guestApi, userApi} from "boot/axios";
import "md-editor-v3/lib/preview.css";
import axios from "axios";

const route = useRoute();
const router = useRouter();
const title = ref("");
const description = ref("");
const views = ref(0);
const id = "preview-only";
const blog_id = ref(0);
const comments = ref([]);
const loadData = () => {
  blog_id.value = parseInt(route.params.id);
  guestApi.get(`/blog/rest/`).then((res) => {
    blogList.value = res.data.data;
  });
  guestApi.get(`/blog/rest/${blog_id.value}/`).then((res) => {
    if (res) {
      title.value = res.data.title;
      description.value = res.data.description;
      axios.get(res.data.content).then((res) => {
        content.value = res.data;
      });
      views.value = res.data.views;
      createdAtTime.value = res.data.created_at;
      nextId.value = res.data.next_id;
      prevId.value = res.data.prev_id;
    }
  });
  guestApi.get(`/comment/blog/${blog_id.value}/`).then((res) => {
    console.log(res)
    comments.value = res.data;
    comments.value.forEach((item) => {
      item.updated_at = new Date(item.updated_at).toLocaleString("zh-CN", {
        hour12: false,
      });
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
const content = ref("");
const comment = ref("");
const submitComment = () => {
  userApi
    .post(`/comment/rest/`, {
      blog_id: blog_id.value,
      content: comment.value
    }).then((res) => {
    comment.value = "";
    loadData();
  });
};
const isLogged = ref(inject("isLogged"));
const showComment = ref(false);
</script>
<template>
  <q-page class="flex flex-center ">
    <q-card class="q-ma-sm" style="width: 95%">
      <q-card-actions>
        <q-btn
          label="上一篇"
          icon="arrow_back"
          flat
          @click="prevBlog"
          :disable="prevId === 0"
          :color="prevId === 0 ? 'grey' : 'primary'"
        />
        <q-space/>
        <q-btn
          label="下一篇"
          icon-right="arrow_forward"
          flat
          @click="nextBlog"
          :disable="nextId === 0"
          :color="nextId === 0 ? 'grey' : 'primary'"
        />
      </q-card-actions>
      <q-card-section>
        <div class="row items-center no-wrap">
          <div class="col-9 q-ma-xs">
            <div class="text-h5">
              {{ title }}
            </div>
          </div>
          <q-space/>
          <div class="col-auto">
            <div class="row q-ma-xs">
              <q-icon name="visibility" size="sm"/>
              {{ views }}
            </div>
          </div>
        </div>
      </q-card-section>
      <q-separator/>
      <q-card-section>
        <MdPreview
          :editorId="id"
          :modelValue="content"
        />
      </q-card-section>
      <q-card-actions>
        <q-btn
          label="上一篇"
          icon="arrow_back"
          flat
          @click="prevBlog"
          :disable="prevId === 0"
          :color="prevId === 0 ? 'grey' : 'primary'"
        />
        <q-space/>
        <q-btn
          label="下一篇"
          icon-right="arrow_forward"
          flat
          @click="nextBlog"
          :disable="nextId === 0"
          :color="nextId === 0 ? 'grey' : 'primary'"
        />
      </q-card-actions>
    </q-card>
    <q-card class="q-ma-sm" style="width: 95%">
      <q-list separator>
        <q-item>
          <q-item-section>
            <q-item-label>
              评论
            </q-item-label>
          </q-item-section>
          <q-item-section side>
            <q-toggle v-model="showComment" label="显示评论"/>
          </q-item-section>
        </q-item>
        <div v-if="showComment">
          <q-item v-for="item in comments" :key="item.id">
            <q-item-section>
              <div class="row justify-between flex-center">
                <div class=" text-h6">
                  {{ item.name }}
                </div>
                <div class="text-subtitle2 text-grey">
                  发布时间:{{ item.updated_at }}
                </div>
              </div>
              <q-separator/>
              <q-input type="textarea" readonly v-model="item.content" autogrow/>
            </q-item-section>
          </q-item>
        </div>
        <q-item>
          <q-item-section>
            <q-input v-model="comment" label="请输入评论" type="textarea" rows="3">
              <template #append>
                <q-btn
                  flat
                  round
                  :color="isLogged===false ? 'grey' : 'primary'"
                  icon="send"
                  :disable="!comment || isLogged===false"
                  @click="()=>{
                    $q.notify({
                      message: '是否确认提交评论？',
                      color: 'white',
                      textColor: 'black',
                      position: 'center',
                      actions: [
                        { label: '取消', color: 'black'},
                        { label: '确定', color: 'blue', handler: () => {submitComment()} }]
                    })
                  }"
                />
              </template>
            </q-input>
          </q-item-section>
        </q-item>
      </q-list>

    </q-card>
  </q-page>
</template>
