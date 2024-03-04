// criar nossa funçõa diferença de número

function diferenca_num(num) {

    if(num <= 19) {
        return (19 - num);
    } else {
        return (num - 19) * 3;
    }
    
}

var $resultado = diferenca_num(15);
var el = document.getElementById('conteudo');
el.innerHTML = $resultado;