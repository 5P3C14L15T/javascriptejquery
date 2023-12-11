// Criando nossas variáveis
var title;
var message;

// atribuir valor a variável
title = "Molly's Special Offers";
message = '<a href=\"sale.html\">25% off</a>';

// pegar o título pelo id
var elTitle = document.getElementById('title');

// trocar o conteúdo do id title
elTitle.textContent = title;

// perar o note pelo id
var elNote = document.getElementById('note');

// trocar o conteúdo do id note
elNote.innerHTML = message;