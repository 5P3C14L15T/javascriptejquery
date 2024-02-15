// Escreva um programa JavaScript para calcular
// a diferença absoluta entre um número especificado e 19.
//  Retorna o triplo da diferença absoluta se
//   o número especificado for maior que 19.

function diferenca_num(num) {
    if (num <= 19) {
        return (19 - num);
        
    } else {
        return (num - 19) * 3;
        
    }
}

console.log(diferenca_num(12));
console.log(diferenca_num(29));
console.log(diferenca_num(21));
console.log(diferenca_num(19));
