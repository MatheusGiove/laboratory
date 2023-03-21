const circulo = document.querySelector("div")

function mexer(local) {
  circulo.style.top = local.y + "px"
  circulo.style.left = local.x + "px"
}

window.addEventListener('mousemove', mexer)