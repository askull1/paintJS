const range = document.getElementById("jsRange")

function handleRangeChange(event) {
  const size = event.target.value
  ctx.lineWidth = size;
}

if (range) {
  range.addEventListener("input", handleRangeChange)
}