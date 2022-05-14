const mode = document.getElementById("jsMode")
let filling = false;

function handleModeClick() {
  if(filling === true) {
    filling = false;
    mode.innerText = "FILL"
  } else {
    filling = true;
    mode.innerText = "PAINT"
  }
}

if (mode) {
  mode.addEventListener("click",handleModeClick)
}