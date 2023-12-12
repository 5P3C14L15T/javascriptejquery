var pass = 50;
var score = 49;
var msg;

if (score > pass) {
msg = 'Parabéns, você passou!';
} else {
msg = 'Você não passou, tente novamente!';
}

var el = document.getElementById('answer');
el.textContent = msg;