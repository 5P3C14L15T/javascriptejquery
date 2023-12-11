// Criar uma variável, chamada msg para receber e mostrar na página
// Encontrar o título do documento e colocar na página

var msg = '<p><b>Título da página: </b>' + document.title + '<br>';
msg += '<b>Endereço da página: </b>' + document.URL + '<br>';
msg += '<b> Última modificação: </b>' + document.lastModified + '</p>';




// criar uma variável chamada el para armazenar o elemento do atributo ID
// e inserir o valor no footer

var el = document.getElementById('footer');
// escrever a mensagem dentro deste elemento
el.innerHTML = msg;