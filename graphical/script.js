const canvas = document.getElementsByTagName("canvas")[0]
const ctx = canvas.getContext("2d")

canvas.width = 600
canvas.height = 600

function draw() {
  const x = document.getElementById("x").value
  const y = document.getElementById("y").value
  const s = document.getElementById("s").value
  ctx.strokeStyle = `#${Math.floor(Math.random() * 10 ** 6)}`
  ctx.beginPath()
  for (let i = -1000; i < 1000; i += 20) {
    const j = (s - i * x) / y
    ctx.lineTo(i, canvas.height - j)
    ctx.stroke()
    console.log(i, j)
  }

  ctx.closePath()
}

canvas.addEventListener("mousemove", (e) => {
  const coord = document.getElementById("coord")
  coord.innerHTML = `|X:${e.clientX} Y:${e.clientY}`
})
