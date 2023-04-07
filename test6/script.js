const botao = document.querySelector("button");
const div = document.querySelector("div");

function somar() {
  let total = Number(div.innerText) + 1;
  if (total <= 10) {
    div.innerText = total
  } else {
    div.innerText = 0
    console.log('Não é mais possível adicionar')
  }
}

if (botao){
  botao.addEventListener("click", somar);
}
