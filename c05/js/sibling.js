// pegar o (nó) referencial
var itemStart = document.getElementById('two');
var firstItem = itemStart.previousSibling.previousSibling;
var nextItem = itemStart.nextSibling.nextSibling;

// trocar a classe dos itens de lista

firstItem.className = 'complete';
nextItem.className = 'cool';