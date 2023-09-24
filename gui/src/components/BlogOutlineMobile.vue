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
            <q-item-label class="text-h6">
              <div class="text-subtitle2 text-grey">
                Last visited:{{ blog.created_at }}
              </div>
              {{ blog.title }}
              <q-chip
                size="sm"
                label="置顶"
                color="primary"
                outline
              />
            </q-item-label>
            <q-item-label caption>{{ blog.description }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-card-section>

</template>
