var itemTwo = document.getElementById('two');

var elTexto = itemTwo.firstChild.nodeValue;

// console.log(elTexto);

elTexto = elTexto.replace('pine nuts','OUTRO VALOR');

itemTwo.firstChild.nodeValue = elTexto;