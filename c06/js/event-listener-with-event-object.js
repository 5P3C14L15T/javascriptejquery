function checkLength(e, minLength) {
    var el, elMsg;
    if(!e) {
        e = window.event;
    }

    el = e.target || e.srcElement;
    elMsg = el.nextSibling;

    if(el.value.length < minLength) {
        elMsg.innerHTML = "Nome do usuário deve ser " + minLength + " caracteres ou mais";
        
    } else {
        elMsg.innerHTML = "";
    }

}

var elUsername = document.getElementById('username');

if(elUsername.addEventListener) {
    elUsername.addEventListener('blur',function(e){
        checkLength(e,5);
    }, false);
} else {
    elUsername.attachEvent('onblur', function(e){
        checkLength(e,5);
    });
}