// armazene o elemento que será removido em uma variável
var removeEl = document.getElementsByTagName('li')[3];

// encontrar o elemento pai que contém o elemento a ser removido
var containerEl = document.getElementsByTagName('ul')[0];

// remover o elemento
containerEl.removeChild(removeEl);