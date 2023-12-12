var score = 75; //score
var msg = ''; // vai ser inserida no html

function parabens() {
    msg += 'Parabéns';
}


if (score >= 50) {
// bloco de código
parabens();
// msg += 'Parabéns';
msg += ' prossiga para o próximo nível!';
}

var el = document.getElementById('answer');
el.textContent = msg;