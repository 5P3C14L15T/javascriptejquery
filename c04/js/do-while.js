var i = 100;
var msg = '';

do {
msg += (i * 5);
i++;
} while (i < 1);

document.getElementById('answer').innerHTML = msg;