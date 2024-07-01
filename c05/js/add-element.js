// criando um novo elemento e armazenar na variável
var newEl = document.createElement('li');

// criar um texto e armazenar na variável
var newText = document.createTextNode('quinoa');

// anexar o novo texto no novo elemento
newEl.appendChild(newText);

// encontrar uma posição onde o novo elemento vai ser adicionado
var position = document.getElementsByTagName('ul')[0];

// inserir o novo elemento dentro da posição
position.appendChild(newEl);