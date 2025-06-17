let pontos = 0;
let pontosPorClique = 1;
let custoPoder1 = 10;
let quant1 = 0;

document.getElementById('custo1').innerText = 'Custo = '+ custoPoder1;

function aumentarPontos () {
    pontos += pontosPorClique;
    document.getElementById('mostraPontos').innerText = "Pontos = " + pontos ;
}

function poder1 () {
    if ( pontos >= custoPoder1) {
        pontos -= custoPoder1;
        pontosPorClique += 1;
        quant1 += 1;
        document.getElementById('mostraPontos').innerText = "Pontos = " + pontos ;
        custoPoder1 = Math.floor(custoPoder1 * 1.2);
        document.getElementById('custo1').innerText = 'Custo = '+ custoPoder1;
        document.getElementById('poderClique').innerText = 'Pontos por Clique = '+ pontosPorClique;
        document.getElementById('quanto1').innerText =' Pode1 = ' + quant1;
        
    } else {
        alert ('Pontos insuficientes');
    }       
}

