var today = new Date();
var hourNow = today.getHours();
var greeting;

if(hourNow > 18) {
    greeting = 'Boa noite! Seja Bem vindo!';
} else if (hourNow > 12) {
    greeting = 'Boa tarde, Seja bem vindo!';
} else  if (hourNow > 0) {
    greeting = 'Bom dia';
} else {
    greeting = 'Seja muito bem vindo!'
}

document.write('<h3>' + greeting + '</h3>');