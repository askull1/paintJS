const mode = document.getElementById("jsMode")
let filling = false;

function handleModeClick() {
  if(filling === true) {
    filling = false;
    mode.innerText = "FILL"
  } else {
    filling = true;
    mode.innerText = "PAINT"
    ctx.fillStyle = ctx.strokeStyle;
  }
}
function handleCanvasClick() {
  if(filling) {
    ctx.fillRect(0,0,CANVAS_WIDTH, CANVAS_HEIGHT);
  }
}

if (mode) {
  mode.addEventListener("click",handleModeClick)
}
if (canvas) {
  canvas.addEventListener("click",handleCanvasClick);
}