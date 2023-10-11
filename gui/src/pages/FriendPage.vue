<script setup>
import {guestApi} from "boot/axios";
import {onMounted, ref} from "vue";

const columns = [
  {
    name: 'id',
    label: 'ID',
    field: 'id',
    align: 'center',
  },
  {
    name: 'nickname',
    label: '昵称',
    field: 'nickname',
    align: 'center',
  },
  {
    name: 'avatar',
    label: '头像',
    field: 'avatar',
    align: 'center',
  },
  {
    name: 'description',
    label: '个人简介',
    field: 'description',
    align: 'center',
  },
  {
    name: 'url',
    label: '个人主页',
    field: 'url',
    align: 'center',
  },
  {
    name: 'created_at',
    label: '创建时间',
    field: 'created_at',
    format: (val) => {
      return new Date(val).toLocaleString()
    },
    align: 'center',
  },
  {
    name: 'updated_at',
    label: '更新时间',
    field: 'updated_at',
    format: (val) => {
      return new Date(val).toLocaleString()
    },
    align: 'center',
  },
  {
    name: 'operation',
    label: '操作',
    field: 'operation',
    align: 'center',
  }
];
const friends = ref([]);
const loadData = () => {
  guestApi.get("/friend/rest/").then((res) => {
    friends.value = res.data;
  });
}
const toFriendDetail = (id) => {
  console.log(id)
  window.open(friends.value[id].url)
}
onMounted(() => {
  loadData();
});
</script>

<template>
  <q-page class="flex items-start justify-center">
    <q-card class="bg-white q-ma-md FriendCard">
      <div class="text-h5 q-ma-md text-weight-bolder text-center">
        友链列表
      </div>
      <div class="FriendCard">

        <div class="FriendContainer q-ma-md">
          <div class="FriendItem flex flex-center" v-for="index in friends.length" :key="index">
            <q-card class="q-ma-md card_friend cursor-pointer" :class="`bg-friend-${index%7}`"
                    style="width: 300px; height: 150px;"
                    @click="toFriendDetail(index-1)">
              <q-avatar class="q-ma-md" style="width: 100px; height: 100px; border-radius: 50%;">
                <img :src="friends[index-1].avatar">
              </q-avatar>
              <div class="q-ma-md bg-friend-text-0 text-white absolute-bottom-right text-weight-bolder text-h5">
                {{ friends[index - 1].nickname }}
              </div>
            </q-card>
          </div>
        </div>
      </div>
    </q-card>

  </q-page>
</template>

<style scoped>
.card_friend {

}

.card_friend:hover {
  transform: scale(1.05);
  transition: all 0.3s ease-in-out;
}

.bg-friend-0 {
  background-image: linear-gradient(to bottom right, #a7d4f7, #d8a7f7);
}

.bg-friend-1 {
  background-image: linear-gradient(to bottom right, #d834c2, #f7a8b8);
}

.bg-friend-2 {
  background-image: linear-gradient(to bottom right, #f7a8b8, #fbc2a7);
}

.bg-friend-3 {
  background-image: linear-gradient(to bottom right, #fbc2a7, #f7e3a7);
}

.bg-friend-4 {
  background-image: linear-gradient(to bottom right, #f7e3a7, #a7f7c4);
}

.bg-friend-5 {
  background-image: linear-gradient(to bottom right, #a7f7c4, #a7f7f2);
}

.bg-friend-6 {
  background-image: linear-gradient(to bottom right, #a7f7f2, #a7d4f7);
}

.bg-friend-text-0 {
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-image: linear-gradient(to bottom right, #444444, #666666);
}

.FriendContainer {
  display: flex;
  flex-wrap: wrap;
}

.FriendItem {
  flex-basis: 33.33%;
}

.FriendCard {
  max-width: 1200px;
  flex-direction: column;
}

@media (max-width: 1200px) {
  .FriendItem {
    flex-basis: 100%;
  }

  .FriendCard {
    width: 90%;
  }
}
</style>
