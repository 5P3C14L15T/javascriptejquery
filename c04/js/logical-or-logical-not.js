// criação e declaração das variáveis

var score1 = 8;
var score2 = 8;
var pass1 = 6;
var pass2 = 6;

var passBoth = (score1 >= pass1) || (score2 >= pass2);

// criar a mensagem
var msg = "Ambas são: " + !passBoth;

// escrever a mensagem na página
var el = document.getElementById('answer');
el.innerHTML = msg;