<template>
  <q-page class="flex flex-center bg-image">
    <div :class="`overlay-${$q.platform.is.desktop ? 'desktop' : 'mobile'}`">
      <div class="text-center q-ma-sm text">
        <div class="text-h1 text-weight-bolder bg-text-0">
            风唤长河
        </div>
      <div class="text-h6 text-weight-bolder q-ma-md bg-text-1">
        <div v-if="$q.platform.is.mobile">
          <div class="row">
            间歇性踌躇满志
          </div>
         <div class="row">
            持续性混吃等死
          </div>
        </div>
        <div v-if="$q.platform.is.desktop">
          <div class="row">
            间歇性踌躇满志，持续性混吃等死
          </div>
        </div>
      </div>
    </div>
    </div>

  </q-page>
</template>

<script setup>
import {useQuasar} from "quasar";
const $q = useQuasar();

</script>

<style scoped>
.overlay-desktop{
    position: fixed;
    top: 50px;
    left: 0;
    width: 100%;
    height: calc(100% - 50px);
    background-color: rgba(0, 0, 0, 0.5);
}
.overlay-mobile{
    position: fixed;
    bottom: 50px;
    left: 0;
    width: 100%;
    height: calc(100% - 50px);
    background-color: rgba(0, 0, 0, 0.5);
}

.text{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
}
.bg-text-0{
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-image: linear-gradient(to bottom right, #2aabd2, #a7d4f7);
}
.bg-text-1{
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-image: linear-gradient(to right, #a7d4f7, #d8a7f7);
}

.bg-image {
  background-image: url("src/assets/about/BG2.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
}
</style>
