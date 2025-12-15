// variaveis let ,const
// funcoes  function
let imagemCopo = document.querySelector('.imagem-copo');
let fundo =  document.querySelector('.circulo');
function mudarImagem(enderecoImagem) {
    imagemCopo.src = enderecoImagem;

}
function trocaFundo(cor) {
    fundo.style.background = cor;
}