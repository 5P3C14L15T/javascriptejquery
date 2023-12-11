// criar uma variável chamada : Seja Muito Bem Vindo
var boasVindas = 'Seja Muito Bem Vindo';

var msg = '<h2>Length</h2><p>' + boasVindas.length + '</p>';
msg += '<h2>uppercase</h2><p>' + boasVindas.toUpperCase() + '</p>';
msg += '<h2>lowercase</h2><p>' + boasVindas.toLocaleLowerCase() + '</p>';
msg += '<h2>Caractere indexado: 15</h2><p>' + boasVindas.charAt(15) + '</p>';
msg += '<h2>Primeiro B</h2><p>' + boasVindas.indexOf('B') + '</p>';
msg += '<h2>último o</h2><p>' + boasVindas.lastIndexOf('o') + '</p>';
msg += '<h2>Substring 4-15</h2><p>' + boasVindas.substring(4,15) + '</p>';
msg += '<h2>Replace</h2><p>' + boasVindas.replace('Bem', 'Mal') + '</p>';




// criar a variável chamada el que vai armazenar o atributo ID e colocar a
// informação na página
var el = document.getElementById('info');
el.innerHTML = msg;