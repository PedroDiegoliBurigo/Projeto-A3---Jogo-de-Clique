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
        custoPoder1 = Math.floor(custoPoder1 * 1.5);
        document.getElementById('custo1').innerText = 'Custo = '+ custoPoder1;
        document.getElementById('poderClique').innerText = 'Pontos por Clique = '+ pontosPorClique;
        
    } else {
        alert ('Pontos insuficientes');
    }       
}

