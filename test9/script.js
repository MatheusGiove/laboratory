const imagens = document.querySelectorAll("ul > li > img");

function trocar(event) {
  const principal = document.querySelector(".principal");
  const clicada = event.currentTarget;
  principal.setAttribute("src", clicada.getAttribute("src"));
  principal.setAttribute("alt", clicada.getAttribute("alt"));
}

function clique(imagem) {
  imagem.addEventListener("click", trocar);
}
imagens.forEach(clique);
