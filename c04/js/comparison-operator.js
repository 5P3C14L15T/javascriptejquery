// declaração de variáveis
var pass = 50;
var score = 49;

// checar se o usuário passou
var hasPassed = score >= pass; // true ou false
console.log(hasPassed);

var el = document.getElementById('answer');
el.innerHTML = 'Passou: ' + hasPassed;
