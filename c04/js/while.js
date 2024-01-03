var i = 1;
var msg = '';

while (i < 1) {
msg += i + ' x 2 = ' + (i * 2) + '<br>';
// console.log(i);
// i = i + 1; // 0 = 0 + 1;
i++;
}

document.getElementById('answer').innerHTML = msg;