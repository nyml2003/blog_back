let fullMapCanvas = null;
let BackGroundCanvas = null;
const IMAGE_Length = 32;
const imgbackground = require('../assets/image/BackGround.png');
const images = [
  require("../assets/image/TransparentPicture.png"),
  require("../assets/image/Stone.png"),
  require("../assets/image/Exit.png"),
  require("../assets/image/Ball0.png"),
  require("../assets/image/Ball1.png"),
];
const heroImage = [
  require("../assets/image/Hero10.png"),
  require("../assets/image/Hero11.png"),
  require("../assets/image/Hero12.png"),
  require("../assets/image/Hero20.png"),
  require("../assets/image/Hero21.png"),
  require("../assets/image/Hero22.png"),
  require("../assets/image/Hero30.png"),
  require("../assets/image/Hero31.png"),
  require("../assets/image/Hero32.png"),
  require("../assets/image/Hero40.png"),
  require("../assets/image/Hero41.png"),
  require("../assets/image/Hero42.png")
];
export function initFullMapCanvas(map, row, col) {
  if (!fullMapCanvas) {
    fullMapCanvas = document.createElement('canvas');
    fullMapCanvas.width = col * IMAGE_Length;
    fullMapCanvas.height = row * IMAGE_Length;

    BackGroundCanvas = document.createElement('canvas');
    BackGroundCanvas.width = col * IMAGE_Length;
    BackGroundCanvas.height = row * IMAGE_Length;
    const ctx0 = BackGroundCanvas.getContext('2d');
    const ctx = fullMapCanvas.getContext('2d');
    const promises = [];
    for (let i = 0; i < row; i++) {
      for (let j = 0; j < col; j++) {
        let imgSrc = images[map[i][j]];
        const img = new Image();
        img.src = imgSrc;
        const img0 = new Image();
        img0.src = imgbackground
        const promise = new Promise((resolve) => {
          img.onload = () => {
            ctx0.drawImage(
              img0,
              j * IMAGE_Length,
              i * IMAGE_Length,
              IMAGE_Length,
              IMAGE_Length
            );
            ctx.drawImage(
              img0,
              j * IMAGE_Length,
              i * IMAGE_Length,
              IMAGE_Length,
              IMAGE_Length
            );
            ctx.drawImage(
              img,
              j * IMAGE_Length,
              i * IMAGE_Length,
              IMAGE_Length,
              IMAGE_Length
            );
            resolve();
          };
        });
        promises.push(promise);
      }
    }
    return Promise.all(promises);
  }
}


export function drawVisibleMapArea(canvas, hero, visibleLength, visibleRadius) {
  canvas.width = visibleLength * IMAGE_Length;
  canvas.height = visibleLength * IMAGE_Length;
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.drawImage(
    BackGroundCanvas,
    0,
    0,
    BackGroundCanvas.width,
    BackGroundCanvas.height,
  );
  for (let y = 0; y < canvas.height; y += BackGroundCanvas.height) {
    for (let x = 0; x < canvas.width; x += BackGroundCanvas.width) {
      ctx.drawImage(
        BackGroundCanvas,
        0,
        0,
        BackGroundCanvas.width,
        BackGroundCanvas.height,
        x,
        y,
        BackGroundCanvas.width,
        BackGroundCanvas.height,
      );
    }
  }
  ctx.drawImage(
    fullMapCanvas,
    IMAGE_Length * (hero.posy - (visibleLength - 1) / 2),
    IMAGE_Length * (hero.posx - (visibleLength - 1) / 2),
    visibleLength * IMAGE_Length,
    visibleLength * IMAGE_Length,
    0,
    0,
    visibleLength * IMAGE_Length,
    visibleLength * IMAGE_Length,
  );
  const tempCanvas = document.createElement('canvas');
  tempCanvas.width = canvas.width;
  tempCanvas.height = canvas.height;
  const tempCtx = tempCanvas.getContext('2d');
  tempCtx.filter = 'blur(30px)';
  tempCtx.drawImage(canvas, 0, 0);

  const pattern = ctx.createPattern(tempCanvas, 'repeat');
  ctx.beginPath();
  ctx.fillStyle = pattern;
  ctx.rect(0, 0, canvas.width, canvas.height);
  ctx.arc(canvas.width / 2, canvas.height / 2, visibleRadius * IMAGE_Length, 0, 2 * Math.PI);
  ctx.fill("evenodd");


  const img = new Image();

  img.src = heroImage[hero.orientation];
  img.onload = () => {
    ctx.drawImage(
      img,
      (visibleLength - 1) / 2 * IMAGE_Length,
      (visibleLength - 1) / 2 * IMAGE_Length,
    );
  };
  // for (let i=-visibleRadius; i<=visibleRadius; i++){
  //     for (let j=-visibleRadius; j<=visibleRadius; j++){

  //     }
  // }

}

