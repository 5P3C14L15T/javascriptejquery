var firstItem = document.getElementById('one');
var showTextContent = firstItem.textContent;
var showInnerText = firstItem.innerText; // evitar de usar

var msg = '<p>textContent: ' + showTextContent + '</p>';
msg += '<p>innetText: ' + showInnerText + '</p>';

var el = document.getElementById('scriptResults');
el.innerHTML = msg;


firstItem.textContent = 'Hamburguer';
