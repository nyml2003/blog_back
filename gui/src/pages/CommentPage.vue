<script setup>
import {onMounted, ref} from "vue";
import {useRouter} from "vue-router";
const router = useRouter();
import {userApi} from "boot/axios";
onMounted(()=>{
  loadData()
})
const loadData = () => {
  userApi.get('/comment/user/').then((res) => {
    console.log(res.data)
    comments.value = res.data;
    comments.value.forEach((item)=>{
      item.created_at=new Date(item.created_at).toLocaleDateString()
    })
  })
}
const comments=ref([]);
</script>

<template>
<q-page class="flex-center flex">
  <q-card class="q-ma-md" >
    <q-card-section class="q-pa-md">
      <div class="text-h6">我的评论</div>
    </q-card-section>
    <q-separator/>
    <q-card-section class="q-pa-md">
      <q-list >
        <q-item clickable v-ripple v-for="item in comments" :key="item.id">
          <q-item-section avatar>
            <q-btn flat round dense icon="comment" @click="router.push({
              'name':'BlogDetail',
              params:{
                'id':item.blog_id
              }
            })"></q-btn>
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ item.content }}</q-item-label>
            <q-item-label caption>{{item.created_at}}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-card-section>
  </q-card>
</q-page>
</template>

<style scoped>

</style>
