function checkUsername() { //declarar a function
    var elMsg = document.getElementById('feedback');
    if(this.value.length < 5) {
        elMsg.textContent = "Nome do usuário não pode ser menor que 5 caracteres.";
    } else {
        elMsg.textContent = "";
    }
}

var elUsername = document.getElementById('username');
elUsername.addEventListener('blur',checkUsername,false);