var elUsername = document.getElementById('username');
var elMsg      = document.getElementById('feedback');

function checkUsername(minLength) {
    if(elUsername.value.length < minLength){
        elMsg.innerHTML = 'Nome do usuário deve ser ' + minLength + ' caracteres ou mais';
    } else {
        elMsg.innerHTML = '';
    }
}

if(elUsername.addEventListener) {
elUsername.addEventListener('blur', function() {
    checkUsername(10);
}, false);
} else {
    elUsername.attachEvent('onblur', function() {
        checkUsername(10);
    });
}