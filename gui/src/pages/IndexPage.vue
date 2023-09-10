<template>
  <q-btn icon="edit" flat dense color="warning" @click="click" />
</template>

<script setup>
const click = () => {
  const arr = new Array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const l = {
    articles: arr,
  };
  console.log(l);
};
</script>
