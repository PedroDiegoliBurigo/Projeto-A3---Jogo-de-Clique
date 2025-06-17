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


document.getElementById('custo1').innerText = 'Custo = '+ custoPoder1;
document.getElementById('custo2').innerText = 'Custo = '+ custoPoder2;
document.getElementById('custo3').innerText = 'Custo = '+ custoPoder3;

function aumentarPontos () {
    pontos += pontosPorClique;
    document.getElementById('mostraPontos').innerText = "Pontos = " + pontos ;
    if ( pontos >= 500 ) {
        // alert ('Você acabou o jogo, parabéns! Mas caso queria você ainda pode continuar a jogar.')
    }

}

function poder1 () {
    const img1 = document.getElementById('img1');
    if ( pontos >= custoPoder1) {

        pontos -= custoPoder1;
        pontosPorClique += 1;
        quant1 += 1;
        telaPontos ();
        custoPoder1 = Math.floor(custoPoder1 * 1.2);
        document.getElementById('custo1').innerText = 'Custo = '+ custoPoder1;
        document.getElementById('poderClique').innerText = 'Pontos por clique = '+ pontosPorClique;
        document.getElementById('quanto1').innerText ='Possui ' + quant1 + ' poder1';
        
    } else {
        alert ('Pontos insuficientes');
    }

    if (quant1 >= 3) {
        img1.src = "assets/bananafarm22.png";
    }
    if (quant1 >= 5) {
        img1.src = "assets/bananafarm33.png";
    }
}

function poder3 () {
    if ( pontos >= custoPoder3) {
        pontos -= custoPoder3;
        pontosPorClique += 20;
        quant3 += 1;
        telaPontos ();
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
        document.getElementById('custo2').innerText = 'Custo = '+ custoPoder2 ;
        document.getElementById('quanto2').innerText ='Possui ' + quant2 + 'poder2';
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
}

setInterval (geradorPoder2, 1000);