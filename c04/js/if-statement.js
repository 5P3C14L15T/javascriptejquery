var score = 75; //score
var msg; // vai ser inserida no html

if (score >= 50) {
// bloco de código
msg = 'Parabéns!'
msg += ' prossiga para o próximo nível!';
}

var el = document.getElementById('answer');
el.textContent = msg;