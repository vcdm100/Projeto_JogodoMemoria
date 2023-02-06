var cartoes = document.querySelectorAll(".cartao");

var existeCartaoVirado = false;
var primeiroCartao, segundoCartao;

function virarCartao() {
  this.classList.add("virado");

  if (existeCartaoVirado == false) {
    existeCartaoVirado = true;
    primeiroCartao = this;
  } else {
    segundoCartao = this;
    existeCartaoVirado = false;

    if (primeiroCartao.dataset.info === segundoCartao.dataset.info) {
      primeiroCartao.removeEventListener("click", virarCartao);
      segundoCartao.removeEventListener("click", virarCartao);
    } else {
      setTimeout(function () {
        primeiroCartao.classList.remove("virado");
        segundoCartao.classList.remove("virado");
      }, 2000);
    }
  }
}

cartoes.forEach(function (cartao) {
  cartao.addEventListener("click", virarCartao);
});