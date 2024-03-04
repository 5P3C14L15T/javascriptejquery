// criar minha função somaTriplo
function somaTriplo(num1, num2) {
    if (num1 == num2) {
        return 3 * (num1 + num2);
    } else {
        return num1 + num2;
    }
}

var $resultado = somaTriplo(4,4);

var el = document.getElementById('conteudo');
el.innerHTML = $resultado;
