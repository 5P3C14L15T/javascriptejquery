// Aqui eu vou criar minhas variáveis
var username;
var message;

// Vou atribuir valores as variáveis
username = 'João';
message = 'avance para o próximo capítulo.';

// obter o elemento com o id name
var elName = document.getElementById('name');

// console.log(elName);

// trocar o conteúdo do elemento name
elName.textContent = username;

// obter o elemento com o id note

var elNote = document.getElementById('note');

// trocar o conteúdo do elemento note

elNote.textContent = message;

// elName.innerHTML = username;