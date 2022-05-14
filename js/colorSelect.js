const colors = document.getElementsByClassName('jsColor')
function handleColorClick(event) {
  const color = event.target.style.backgroundColor;
  ctx.strokeStyle = color;
  console.log(color)
}
if(colors) {
  Array.from(colors).forEach(color => 
    color.addEventListener("click",handleColorClick)
  );
} 