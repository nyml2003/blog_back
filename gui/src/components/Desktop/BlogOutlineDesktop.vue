<script setup>
import {defineProps} from "vue";
import {useRouter} from "vue-router";

const router = useRouter();
const {blogs} = defineProps({
  blogs: {
    type: Object,
    required: true,
  },
});
</script>
<template>
  <q-card-section>
    <q-list>
      <q-item
        v-for="(blog, id) in blogs"
        :key="id"
        clickable
        @click="
              () => {
                router.push({
                  name: 'BlogDetail',
                  params: { id: blog.id },
                });
              }
            "
      >
        <q-item-section>
          <q-card class="q-mx-md cursor-pointer card_blog">
            <q-card-section class="q-py-none">
              <div class="row">
                <div class="col text-h6 flex items-center">
                  {{ blog.title }}
                  <q-chip v-for="(tag,index) in blog.tags" :key="index" class="q-ma-xs" color="primary" size="sm"
                          text-color="white">
                    {{ tag.name }}
                  </q-chip>
                </div>
                <div class="text-caption col-auto">
                  <div class="row">{{ blog.updated_at }}</div>
                  <div class="row justify-end">
                    <q-avatar class="q-mr-sm" :size="'xs'">
                      <img src="https://avatars.githubusercontent.com/u/106670529?v=4">
                    </q-avatar>
                    <div class="text-caption flex-center flex">
                      风唤长河
                    </div>
                  </div>
                  <div class="row justify-end">
                    <q-icon name="remove_red_eye" :size="'xs'"/>
                    <div class="text-caption"> {{ blog.views }}</div>
                  </div>
                </div>
              </div>
            </q-card-section>
            <q-card-section class="q-py-none">
              <div class="text-caption text-grey">{{ blog.description }}</div>
            </q-card-section>
          </q-card>
        </q-item-section>
      </q-item>
      <q-item v-if="blogs.length === 0">
        <q-item-section>
          <div class="text-h6 text-center">暂无数据</div>
        </q-item-section>
      </q-item>
    </q-list>
  </q-card-section>

</template>
<style scoped>
.card_blog {

}

.card_blog:hover {
  transform: scale(1.05);
  transition: all 0.3s ease-in-out;
}
</style>
