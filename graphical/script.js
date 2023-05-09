const canvas = document.getElementsByTagName("canvas")[0]
const ctx = canvas.getContext("2d")

canvas.width = 600
canvas.height = 600

const drawScaleNumbers = () => {
  ctx.font = "13px Arial"

  for (let y = 50; y < canvas.height; y += 50) {
    ctx.fillText(y, 1, canvas.height - y)
  }

  for (let x = 50; x < canvas.height; x += 50) {
    ctx.fillText(x, x, canvas.height - 3)
  }
}

drawScaleNumbers()

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
  }

  ctx.closePath()

  drawScaleNumbers()
}

canvas.addEventListener("mousemove", (e) => {
  const coord = document.getElementById("coord")
  coord.innerHTML = `|X:${e.offsetX} Y:${canvas.height - e.offsetY}`
})
