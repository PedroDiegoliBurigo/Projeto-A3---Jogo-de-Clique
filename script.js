// infomações basicas
let pontos = 0;
let pontosPorClique = 1;
// primeiro poder variaveis
let custoPoder1 = 10;
let quant1 = 0;
// segundo poder variaveis
let PS = 0;
let custoPoder2 = 50;
let quant2 = 0;
// terceiro poder variaveis
let custoPoder3 = 100;
let quant3 = 0;




function aumentarPontos () {
    pontos += pontosPorClique;
    document.getElementById('mostraPontos').innerText = "Pontos = " + pontos ;
}

function poder1 () {
    const img1 = document.getElementById('img1');
    if ( pontos >= custoPoder1) {

        pontos -= custoPoder1;
        pontosPorClique += 1;
        quant1 += 1;
        telaPontos ();
        visual ();
        custoPoder1 = Math.floor(custoPoder1 * 1.2);
        document.getElementById('custo1').innerText = 'Custo = '+ custoPoder1;
        document.getElementById('poderClique').innerText = 'Pontos por clique = '+ pontosPorClique;
        document.getElementById('quanto1').innerText ='Possui ' + quant1 + ' poder1';
        
    } else {
        alert ('Pontos insuficientes');
    }
}

function visual () {
    let totalUp = quant1 + quant2 + quant3;

if (totalUp >= 3) {
    img1.src = "assets/bananafarm22.png";
}
if (totalUp >= 5) {
    img1.src = "assets/bananafarm33.png";
}
if (totalUp >= 10) {
    img1.src = "assets/bananafarm44.png";
}
if (totalUp >= 25) {
    img1.src = "assets/bananafarm55.png";
}
 
}

function poder3 () {
    if ( pontos >= custoPoder3) {
        pontos -= custoPoder3;
        pontosPorClique += 20;
        quant3 += 1;
        telaPontos ();
        visual ();
        custoPoder3 = Math.floor(custoPoder3 * 1.8);
        document.getElementById('custo3').innerText = 'Custo = '+ custoPoder3;
        document.getElementById('quanto3').innerText='Possui ' + quant3 + ' poder3';
        document.getElementById('poderClique').innerText = 'Pontos por clique = '+ pontosPorClique;
        
    }
}

function poder2 () {
    if ( pontos >= custoPoder2) {
        pontos -=custoPoder2;
        PS += 1;
        quant2 += 1;
        custoPoder2 = Math.floor(custoPoder2 * 1.5);
        telaPontos ();
        visual ();
        document.getElementById('custo2').innerText = 'Custo = '+ custoPoder2 ;
        document.getElementById('quanto2').innerText ='Possui ' + quant2 + ' poder2';
    } else {
        alert ('Pontos insuficientes');
    }
}

function geradorPoder2 () {
    pontos += PS;
    telaPontos ();
}

function telaPontos () {
    document.getElementById('mostraPontos').innerText = "Pontos = " + pontos ;      
    document.getElementById('pontoSegundo').innerText = 'Pontos gerados por segundo = ' + PS;

    if ( pontos >= 5000 ) {
        alert('Você alcançou 5000 pontos e venceu o jogo!');
        Fim ();
    }

}

const intervalo = setInterval (geradorPoder2, 1000);

function Fim () {
    document.getElementById('botaoClique').disabled = true;
    document.getElementById('botaoPoder1').disabled = true;
    document.getElementById('botaoPoder2').disabled = true;
    document.getElementById('botaoPoder3').disabled = true;

    clearInterval(intervaloPS);

}