// criar as variáveis
var inStock;
var shipping;

inStock = true;
shipping = true;


// obter o elemento id do stock
var elStock = document.getElementById('stock');
// atribuir o valor a classname
elStock.className = inStock;

var elShip = document.getElementById('shipping');
elShip.className = shipping;