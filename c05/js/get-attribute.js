var firstItem = document.getElementById('one'); // pegar o primeiro item da lista

if (firstItem.hasAttribute('class')) {
    
    var attr = firstItem.getAttribute('class');

    var el = document.getElementById('scriptResults');
    el.innerHTML = '<p>A classe do primeiro item tem o nome de: ' + attr + '</p>'
}