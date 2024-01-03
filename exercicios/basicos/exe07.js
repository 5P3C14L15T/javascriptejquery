// Escreva um programa JavaScript onde o programa pega um número inteiro
// aleatório entre 1 e 10 e o usuário é então solicitado a inserir
// um número de estimativa.O programa exibe uma mensagem
// "Bom trabalho" se a entrada corresponder ao número adivinhado,
// caso contrário "Não corresponde".


var numero = Math.ceil(Math.random() * 10);
console.log(numero);

var pedirNumero = prompt('Por gentileza, tente acertar o número aleatório entre 1 e 10');

console.log(pedirNumero);

if (pedirNumero == numero) 
    console.log("Bom trabalho");

else 
    console.log("Não corresponde" + pedirNumero);


