function checkUsername() {
    var username = el.value;
    if (username.length < 5) {
        elMsg.className = 'warning';
        elMsg.textContent = 'Não suficiente ainda';
    } else {
        elMsg.textContent = '';
    }
}

function tipUsername() {
    elMsg.className = 'tip';
    elMsg.innerHTML = 'Nome do usuário deve ser 5 ou mais caracteres';

}

var el      = document.getElementById('username');
var elMsg   = document.getElementById('feedback');

el.addEventListener('focus', tipUsername, false);
el.addEventListener('blur', checkUsername, false);