function checkUsername() { //declarar a função
    var elMsg = document.getElementById('feedback');  // obtive o campo da mensagem
    if (this.value.length < 5) { // se username é curto
        elMsg.textContent = 'Username deve ser 5 caracteres ou mais'; // set a mesagem
    } else {
        elMsg.textContent = ''; // limpar a mensagem
    }
}

var elUsername = document.getElementById('username'); // obter o input
elUsername.onblur = checkUsername; // quando tirar o foco do input chamar a checkUsername()