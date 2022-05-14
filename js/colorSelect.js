const colors = document.getElementsByClassName('jsColor')
function handleColorClick(event) {
  const color = event.target.style.backgroundColor;
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
}
if(colors) {
  Array.from(colors).forEach(color => 
    color.addEventListener("click",handleColorClick)
  );
} 