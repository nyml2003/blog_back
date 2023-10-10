<script setup>
import {useRecordStore} from "stores/RecordStore";

const recordStore = useRecordStore();
</script>

<template>
  <a href="http://beian.miit.gov.cn" target="_blank">{{ recordStore.RecordNumber }}</a>
</template>

<style scoped>

</style>
