// pegar ponto referencial
var startItem = document.getElementsByTagName('ul')[0];
var fisrtItem = startItem.firstChild;
var lastItem = startItem.lastChild;

// trocar o atributo

fisrtItem.className = 'complete';
lastItem.className = 'cool';