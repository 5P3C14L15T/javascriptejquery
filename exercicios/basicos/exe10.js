/* Escreva um programa JavaScript para calcular
a soma dos dois números inteiros fornecidos.
Se os dois valores forem iguais, retorne o triplo da soma.*/

function somaTriplo(numero1,numero2) {
    
    if (numero1 == numero2) {
        return 3 * (numero1 + numero2);
    } else {
        return (numero1 + numero2);
    }

}

console.log(somaTriplo(10,30));
console.log(somaTriplo(10,10));