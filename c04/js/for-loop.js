var scores = [24, 32, 17];
// console.log(scores.length);

var arrayLength = scores.length;
var roundNumber = 0;
var msg = '';

// declara o for loop baseado nos itens do array
for (var i = 0; i < arrayLength; i++) {
    roundNumber = (i + 1);

    msg += 'Volta ' + roundNumber + ':  ';

    msg += scores[i] + '<br>';
}

document.getElementById('answer').innerHTML = msg;