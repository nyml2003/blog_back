<script setup>
import { defineProps } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const {blogs} = defineProps({
  blogs: {
    type: Object,
    required: true,
  },
});
</script>
<template>
<!--  <q-card-section>-->
<!--    <q-list separator>-->
<!--      <q-item-->
<!--        v-for="(blog, id) in blogs"-->
<!--        :key="id"-->
<!--        clickable-->
<!--        @click="-->
<!--              () => {-->
<!--                router.push({-->
<!--                  name: 'BlogDetail',-->
<!--                  params: { id: blog.id },-->
<!--                });-->
<!--              }-->
<!--            "-->
<!--      >-->
<!--        <q-item-section>-->
<!--          <q-item-label class="text-h6">{{ blog.title }}</q-item-label>-->
<!--          <q-item-label caption>{{ blog.description }}</q-item-label>-->
<!--        </q-item-section>-->
<!--        <q-item-section side top>-->
<!--          <q-item-label caption>Last visited:{{ blog.created_at }}</q-item-label>-->
<!--        </q-item-section>-->
<!--      </q-item>-->
<!--    </q-list>-->
<!--  </q-card-section>-->
  <q-timeline v-if="blogs.length > 0">
    <q-timeline-entry
      v-for="(blog, id) in blogs"
      :key="id"
      :subtitle="blog.updated_at"
    >
    <q-card class="q-mx-md cursor-pointer card_blog" @click="() => {
                  router.push({
                    name: 'BlogDetail',
                    params: { id: blog.id },
                  });
                }"
    >
      <q-card-section>
        <q-item-label class="text-h6 q-my-md">{{ blog.title }}</q-item-label>
        <q-separator  />
        <q-item-label caption class="q-my-md">{{ blog.description }}</q-item-label>
      </q-card-section>

    </q-card>
    </q-timeline-entry>
  </q-timeline>
</template>
<style scoped>
  .card_blog {

  }
  .card_blog:hover {
    transform: scale(1.05);
    transition: all 0.3s ease-in-out;
  }
</style>
