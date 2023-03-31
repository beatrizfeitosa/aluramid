function tocaSom(seletorAudio) {
    const elemento = document.querySelector(seletorAudio);
    
    /*do not pass any other parameter besides the 'audio' tag*/
    if (elemento && elemento.localName === 'audio') {
        elemento.play();  
    } else {
        console.log('Elemento não encontrado ou seletor inválido');
    }
    
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    
    //capture the second element of the class. ex: "tecla_pom"
    const instrumento = tecla.classList[1]; 
    
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (evento) {
        if (evento.code === "Enter" || evento.code === "Space") {
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }

}
