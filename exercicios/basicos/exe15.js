// Math.abs(x) retorna o valor absoluto de um número "x"

console.log(Math.abs("-1"));
console.log(Math.abs(-2));
console.log(Math.abs(null));
console.log(Math.abs(""));
console.log(Math.abs([]));
console.log(Math.abs([3]));
console.log(Math.abs([3,5]));
console.log(Math.abs({}));
console.log(Math.abs("string"));
console.log(Math.abs());

function testNumero(x) {
    return ((Math.abs(100 - x) <= 20) || (Math.abs(400 - x) <= 20));
}

console.log(testNumero(400));
console.log(testNumero(199));
console.log(testNumero(380));
console.log(testNumero(379));