// BOW Criar uma variável de mensagem para colocar no html
// Essa mensagem vai trazer algumas propriedades da janela BOW

var msg = '<h2>Browser window (javela do navegador)</h2>' 
+ '<p>Width: ' + window.innerWidth + 'px</p>';
msg += '<p>height: ' + window.innerHeight + 'px </p>';

msg += '<h2>History</h2><p>Itens: ' + window.history.length + '</p>';
msg += '<h2>Screen</h2><p>Width: ' + window.screen.width + '</p>';
msg += '<p>Height: ' + window.screen.height + '</p>';



// criando uma variável que vai inserir os dados da mensagem dentro do
// HTML pelo atributo ID da div

var el = document.getElementById('info');
// escrever essa mensagem dentro daquele elemento
el.innerHTML = msg;
alert('Essa é uma mensagem de alerta!');