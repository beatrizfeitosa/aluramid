1//captura o teclado e o campo de telefone
const teclado = document.querySelectorAll('input[type=button]');
const campoDeTelefone = document.querySelector('input[type=tel]');

for (let contador = 0; contador < teclado.length; contador++) {
  //captura uma tecla do teclado
  const tecla = teclado[contador];

  tecla.onclick = function () {
    //escreve no campo de telefone o valor da tecla pressionada
    campoDeTelefone.value +=  tecla.value;
  }

  //eventos de teclado
  tecla.onkeydown = function (evento) {
    //console.log(evento.code)
    if (evento.code === 'Enter' || evento.code === 'Space') {
      tecla.classList.add('ativa');
    }
  }
  
  tecla.onkeyup = function () {
    tecla.classList.remove('ativa');
  }
}
