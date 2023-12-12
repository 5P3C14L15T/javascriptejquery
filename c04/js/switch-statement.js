var msg;
var level = 4;

// criar minha declaração de switch baseada no level

switch (1) {
    case 1:
        msg = 'Boa sorte, esse é o primeiro teste';
        break;

    case 2:
        msg = 'Você está em um nível mediano!';
        break;

    case 3:
        msg = 'Você chegou no estágio final!';
        break;

    default:
        msg = 'Boa sorte!';
        break;
}

var el = document.getElementById('answer');
el.textContent = msg;