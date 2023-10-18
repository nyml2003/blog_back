<script setup>
import { useRecordStore } from "stores/RecordStore";

const recordStore = useRecordStore();
</script>

<template>
  <div class="text-caption1 text-grey-8">
    © 2023 风唤长河
    <a href="http://beian.miit.gov.cn" target="_blank">{{
      recordStore.RecordNumber
    }}</a>
  </div>
</template>

<style scoped></style>
