let pontos = 0;
let pontosPorClique = 1;
let custoPoder1 = 10;

function aumentarPontos () {
    pontos += pontosPorClique;
    document.getElementById('mostraPontos').innerText = "Pontos = " + pontos ;
}

function poder1 () {
    if ( pontos >= custoPoder1) {
        pontos -= custoPoder1;
        pontosPorClique += 1;
        document.getElementById('mostraPontos').innerText = "Pontos = " + pontos ;
    } else {
        alert ('Pontos insuficientes');
    }
        
}

