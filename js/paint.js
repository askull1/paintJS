const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const saveBtn = document.getElementById("jsSave")

const INITIAL_COLOR = "#2c2c2c"
const CANVAS_WIDTH = 1000;
const CANVAS_HEIGHT = 700;

canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;

ctx.fillStyle = "white";
ctx.fillRect(0,0, CANVAS_WIDTH, CANVAS_HEIGHT)
ctx.strokeStyle = INITIAL_COLOR;
ctx.fillStyle = INITIAL_COLOR;
ctx.lineWidth = 2.5;

let painting = false;

function startPainting() {
  painting = true;
}
function stopPainting() {
  painting = false;
}
function onMouseMove(event) {
  const x = event.offsetX;
  const y = event.offsetY;
  if (!painting) {
    ctx.beginPath();
    ctx.moveTo(x,y);
  } else {
    ctx.lineTo(x,y);
    ctx.stroke();
  }
}
function handleCM(event) {
  event.preventDefalut()
}
function handleSaveClick() {
  const image = canvas.toDataURL();
  const link = document.createElement("a");
  link.href = image;
  link.download = "PaintJS[EXPORT]";
  link.click();
}

if(canvas) {
  canvas.addEventListener("mousemove",onMouseMove);
  canvas.addEventListener("mousedown",startPainting);
  canvas.addEventListener("mouseup",stopPainting);
  canvas.addEventListener("mouseleave",stopPainting);
  canvas.addEventListener("contextmenu",handleCM);
}

if(saveBtn) {
  saveBtn.addEventListener("click", handleSaveClick)
}