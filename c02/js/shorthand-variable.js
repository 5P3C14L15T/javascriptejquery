// método tradicional
// var nome;
// nome = "joao";

// método 1
// var price = 5;
// var quantity = 14;
// var total = price * quantity;

// método 2
/*
var price, quantity, total;
price = 5;
quantity = 14;
total = price * quantity;
*/

// método 3
var price = 5, quantity = 14;
var total = price * quantity;



var el = document.getElementById('cost');
el.textContent = 'R$' + total;