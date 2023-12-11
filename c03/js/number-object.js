// criar uma variável que vai armazenar um valor que será usado
var originalNumber = 10.23456;

// criar a variável que receberá a mensagem
var msg = '<h2>Original Number</h2><p>' + originalNumber + '</p>';
msg += '<h2>Decimal 3</h2><p>' + originalNumber.toFixed(3) + '</p>';
msg += '<h2>3 Dígitos</h2><p>' + originalNumber.toPrecision(3) + '</p>';





// criar uma variável que se chamará el e receberá o elemento do atribudo id
var el = document.getElementById('info');
// escrever a mensagem dentro do info elemento
el.innerHTML = msg;