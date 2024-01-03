today = new Date(2024,08,01);
console.log(today);

var ano = today.getFullYear();
console.log(ano);

var natal = new Date(ano,11,25);


if(today.getMonth() == 11 && today.getDate() > 25) {
    natal.setFullYear(natal.getFullYear() + 1);
    console.log(natal);
}

// calcular a diferença em dias entre os natais

var um_dia = 24 * 60 * 60 * 1000;
console.log(um_dia);

var novoNatal = Math.ceil((natal.getTime() - today.getTime()) / um_dia);
console.log("Faltam " + novoNatal + " dias para o natal!");
console.log(natal.getTime());
console.log(today.getTime());