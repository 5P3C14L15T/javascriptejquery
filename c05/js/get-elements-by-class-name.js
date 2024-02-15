var elementos = document.getElementsByClassName('hot');

// console.log(elementos);

if(elementos.length > 2) {
    var el = elementos[2];
    el.className = 'cool';
}