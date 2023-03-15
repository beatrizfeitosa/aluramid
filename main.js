function tocaSom(seletorAudio) {
    const elemento = document.querySelector(seletorAudio);
    /*essa verificação é importante para ter certeza
    que não é possível passar nenhum outro parâmetro
    além da tag audio, evitando possíveis erros*/

    //elemento != null > elemento
    if (elemento && elemento.localName === 'audio') {
        elemento.play();  
    } else {
        console.log('Elemento não encontrado ou seletor inválido');
    }
    
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    //captura o segundo elemento da classe. ex: "tecla_pom"
    const instrumento = tecla.classList[1]; 
    //template string (recomendado)
    const idAudio = `#som_${instrumento}`;
    /*tocaSom('#som_' + instrumento) 
        essa maneira de fazer é antiga e pouco recomendada
    */

    //função anônima
    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    //eventos de teclado
    tecla.onkeydown = function (evento) {
        if (evento.code === "Enter" || evento.code === "Space") {
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }

}   //é bom deixar uma linha vazia após o fim do código
