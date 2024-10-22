function charCount(e) {
    var textEntered, charDisplay, lastKey, counter;
    textEntered = document.getElementById('message').value;
    charDisplay = document.getElementById('charactersLeft');
    counter = (180 - (textEntered.length));
    charDisplay.textContent = counter;
    lastKey = document.getElementById('lastKey');
    lastKey.textContent = 'Última tecla ASCII code: ' + e.keyCode;
}

var el;
el = document.getElementById('message');
el.addEventListener('keyup', charCount, false);