// criar a mensagem HTML
var msg = '<div class=\"header\"><a id=\"close\" href="#">Fechar X</a></div>';
msg +='<div><h2>Sistema em Manutenção</h2>';
msg +='Nosso servidor será atualizado entre 3 e 4 da manhã';
msg +='Durante esse período, teremos pequenas instabilidades.</div>';

var elNote = document.createElement('div');
elNote.setAttribute('id','note');
elNote.innerHTML = msg;
document.body.appendChild(elNote);

function dismissNote() {
    document.body.removeChild(elNote);
}

var elClose = document.getElementById('close');
elClose.addEventListener('click',dismissNote, false);