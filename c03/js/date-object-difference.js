// criar a variável para armazenar o new date object
var today = new Date();
// criar uma variável para pegar o ano
var year = today.getFullYear();

// Setar a data que o hotel foi criado
var criacao = new Date('May 21, 1984 12:30:40');

// obter a diferença entre a data antiga e a data de atual em milissegundos
var difference = today.getTime() - criacao.getTime();
console.log(difference);
// dividir a diferença pelos milissegundos de 1 ano em milissegudos
//  31556900000

difference = (difference / 31556900000 );
console.log(difference);

// criar o el que vai receber o id e trocar o valor
var el = document.getElementById('message');
el.textContent = Math.floor(difference) + ' anos de fundação';