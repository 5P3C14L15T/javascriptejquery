// criar uma variável para armazenar um valor aleatório entre 1 e 10

// var randomNum = Math.floor((Math.random() * 10) + 1);
var randomNum = Math.floor((Math.random() * 1000));


var el = document.getElementById('info');
el.innerHTML = randomNum;