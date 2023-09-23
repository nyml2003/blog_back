<script setup>
import { useQuasar } from "quasar";
import { ref, onMounted } from "vue";
import { initFullMapCanvas, drawVisibleMapArea } from "src/utils/drawGameMap";
import { guestApi} from "boot/axios";

const $q = useQuasar();
const keyCodeMap = new Map([
  [87, 0],
  [83, 3],
  [65, 6],
  [68, 9],
  [38, 0],
  [40, 3],
  [37, 6],
  [39, 9],
]);
const coordinateTransformation = new Map([
  [0, [-1, 0]],
  [3, [1, 0]],
  [6, [0, -1]],
  [9, [0, 1]],
]);
const nextFoot = ref(0);
const handleKeyboardInput = (keyCode) => {
  if (keyCodeMap.has(keyCode)) {
    let direction = keyCodeMap.get(keyCode);
    if (coordinateTransformation.has(direction)) {
      let coordinateDelta = coordinateTransformation.get(direction);
      hero.value.orientation = direction + 1 + nextFoot.value;
      switch (
        map.value[hero.value.posx + coordinateDelta[0]][
          hero.value.posy + coordinateDelta[1]
        ]
      ) {
        case 0:
          hero.value.posx += coordinateDelta[0];
          hero.value.posy += coordinateDelta[1];
          switch (
            map.value[hero.value.posx + coordinateDelta[0]][
              hero.value.posy + coordinateDelta[1]
            ]
          ) {
            case 3:
              $q.notify({
                message: "你捡到了一个精灵球",
                type: "positive",
                position: "top",
                timeout: 1000,
              });
              break;
            case 2:
              $q.notify({
                message: "你到达了出口",
                type: "positive",
                position: "top",
                timeout: 1000,
              });
              break;
          }
          drawVisibleMapArea(canvas.value, hero.value, displayRange.value, 3);
          break;
        case 1:
          $q.notify({
            message: "你撞到了墙",
            type: "negative",
            position: "top",
            timeout: 1000,
          });
          break;
        case 2:
          $q.notify({
            message: "你到达了出口",
            type: "positive",
            position: "top",
            timeout: 1000,
          });
          break;
        case 3:
          $q.notify({
            message: "你捡到了一个精灵球",
            type: "positive",
            position: "top",
            timeout: 1000,
          });
          break;
      }
    }
  }
};
let isKeyDown = false;
const gamekeydown = (event) => {
  console.log("keydown");
  if (!isKeyDown) {
    isKeyDown = true;
    nextFoot.value = 1 - nextFoot.value;
    handleKeyboardInput(event.keyCode);
  }
};
const gamekeyup = (event) => {
  console.log("keyup");
  isKeyDown = false;
  if (keyCodeMap.has(event.keyCode))
    hero.value.orientation = keyCodeMap.get(event.keyCode);
  drawVisibleMapArea(canvas.value, hero.value, displayRange.value, 3);
};
const mask = ref(null);

//可交互的参数
const displayRange = ref(15);
const rowInput = ref(11);
const colInput = ref(11);
//从后端获取地图
//初始化相应变量
const row = ref(0);
const col = ref(0);
const start_pos = ref([0, 0]);
const end_pos = ref([0, 0]);
const map = ref([]);
const hero = ref({
  orientation: 0,
  posx: start_pos.value[0],
  posy: start_pos.value[1],
});

const getMaze = async () => {
  await guestApi
    .get(`/maze/create?row=${rowInput.value}&col=${colInput.value}`)
    .then((res) => {
      console.log(res);
      map.value = res.data.maze;
      start_pos.value = res.data.start_pos;
      end_pos.value = res.data.end_pos;
      row.value = res.data.row;
      col.value = res.data.col;
      hero.value.posx = start_pos.value[0];
      hero.value.posy = start_pos.value[1];
      initFullMapCanvas(map.value, row.value, col.value)
        .then(() => {
          drawVisibleMapArea(canvas.value, hero.value, displayRange.value, 3);
        })
        .catch((error) => {
          console.error(error);
        });
    });
};
onMounted(() => {
  getMaze();
  responseCanvas();
});
const handleSwipe = ({ evt, ...newInfo }) => {
  console.log(newInfo);
  const direction2KeyCode = new Map([
    ["left", 65],
    ["right", 68],
    ["up", 87],
    ["down", 83],
  ]);
  gamekeydown({ keyCode: direction2KeyCode.get(newInfo.direction) });
  setTimeout(() => {
    gamekeyup({ keyCode: direction2KeyCode.get(newInfo.direction) });
  }, newInfo.duration * 3);
};
//canvas的绘制
const canvas = ref(null);
const responseCanvas = () => {
  canvas.value.width = 100;
  canvas.value.height = 100;
};
</script>
<template>
  <q-page
    class="flex flex-center"
    @keydown="gamekeydown"
    @keyup="gamekeyup"
    tabindex="0"
    v-touch-swipe.mouse="handleSwipe"
    ref="mask"
  >
  <!-- 占据剩余部分 -->
    <q-card class="q-ma-md" style="width: 50vh; height: 50vh">
      <canvas ref="canvas" style="width: 100%; height: 100%"></canvas>
    </q-card>
  </q-page>
</template>

<style scoped>
.header {
  height: 60px;
  width: 100%;
  line-height: 60px;
  background-color: white;
  display: flex;
  margin-top: 10px;
  justify-content: center;
}

.container {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.main {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
}

@media (max-width: 700px) {
  .responsive-button span {
    display: none;
  }
}
</style>
