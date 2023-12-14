// de quatro em quatro anos, temos um ano de 366 - comum é 365

// criar a variável ano
var ano = 2000;
// é ano bissexto
// não é ano bissexto

// (ano % 4 == 0 && ano % 100 !== 0 ) || ano % 400 == 0

var verifica1 = ano % 4;
console.log(verifica1);
var verifica2 = ano % 100;
console.log(verifica2);
var verifica3 = ano % 400;
console.log(verifica3);

function anoBissexto(ano) {
    if ((ano % 4 == 0 && ano % 100 !== 0) || ano % 400 == 0) {
        return "É ano bissexto!";
    } else {
        return "Não é ano bissexto!";
    }
}

var el = document.getElementById('bissexto');
el.innerHTML = anoBissexto(1600);