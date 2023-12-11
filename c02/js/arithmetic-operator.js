// criar a variável subtotal
var subtotal = (13 + 1) * 5; //subtotal de 70

var shipping = 0.5 * (13 + 1); // entrega de 7

// criar a variável total
var total = subtotal + shipping;

var elSub = document.getElementById('subtotal');
elSub.textContent = subtotal;

var elShip = document.getElementById('shipping');
elShip.textContent = shipping;

var elTotal = document.getElementById('total');
elTotal.textContent = total;

var incremento;
incremento = 1;
console.log(incremento);
--incremento;

console.log(incremento);

// operadores aritméricos
/*

adição +
subtração -
divisão /
multiplicação *
incremento ++
decremento --
modulo %


*/