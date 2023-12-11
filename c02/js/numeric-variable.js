// criar 3 variáveis para armazenar as informações necessárias
var price;
var quantity;
var total;

// atribuir valores para as minhas variáveis
price = 5;
quantity = 14;

// calcular o valor total pegando a variável price * por quantidade
total = price * quantity;
var el = document.getElementById('cost');
el.textContent = '$' + total;



// internet explorer
// el.innerHTML = '$' + total;


// console.log(el);

// console.log(price);
// console.log(quantity);
// console.log(total);