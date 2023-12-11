// criando as variáveis e armazenando valores

var greeting = "Seja muito bem vindo!";
var name = " João Victor";
var message = ', por favor check o seu pedido!';

// criando uma variável de concatenação

var welcome = greeting + name + message;

// criando as variáveis sobre a assinatura e os cálculos

var sign = 'Joao Victor';
var tiles = sign.length;
var subTotal = tiles * 5;
var shipping = 7;
var grandTotal = subTotal + shipping;


// obter os elementos IDs para armanezar as variáveis criadas com a propriedade textContent

var el = document.getElementById('greeting');
el.textContent = welcome;

// obtendo o ID usersign

var elSign = document.getElementById('usersign');
elSign.textContent = sign;

// obtendo o ID tiles
var elTiles = document.getElementById('tiles');
elTiles.textContent = tiles;

// obtendo o ID subtotal
var elSubTotal = document.getElementById('subtotal');
elSubTotal.textContent = 'R$ ' + subTotal;

// obtendo o ID delivery
var elShipping = document.getElementById('shipping');
elShipping.textContent = 'R$ ' + shipping;

// obtendo o ID total
var elTotal = document.getElementById('grandtotal');
elTotal.textContent = 'R$ ' + grandTotal;
