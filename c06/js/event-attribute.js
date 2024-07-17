function checkUsername() {  // declaração da função
    var elMsg = document.getElementById('feedback'); // obtive o elemento fb
    var elUsername = document.getElementById('username'); // o username

    if(elUsername.value.length < 5) { // se for menor que 5
elMsg.textContent = 'Username deve ser 5 ou mais caracteres'; 
    } else {
        elMsg.textContent = '';
    }

}