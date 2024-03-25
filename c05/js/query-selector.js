// query selector
var el = document.querySelector('li.hot');
el.className = 'cool';
console.log(el);

var els = document.querySelectorAll('li.hot');
els[1].className = 'cool';
console.log(els);