// Criar uma variável para armazenar o objeto date
var today = new Date();
// criar uma variável ppara armazenar o ano do objeto date
var year = today.getFullYear();

// criar uma variável chamada el para armazenar o elemento id e ter o seu valor
var el = document.getElementById('footer');
// escrever o ano dentro deste elemento
el.innerHTML = '<p>Todos os Direitos Reservados &copy; ' + year + '</p>';