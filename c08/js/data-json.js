//  criar um objeto XMLHttpRequest - responsável por fazer a requisição AJAX
var xhr = new XMLHttpRequest();
console.log("Etapa 1: Objeto XMLHttpRequest criado", xhr);

// Etapa 2 definir o que fazer quando a resposta for carregada
xhr.onload = function() {

  console.log("Etapa 2: Resposta recebida do servidor!");

  // mostrar o status da resposta do servidor (200)
  console.log("Status da resposta: ", xhr.status);

  // verificar se o servidor respondeu corretamente
  if(xhr.status === 200) {
    console.log("Servidor respondeu com sucesso (status 200)!");
    // Converter o texto JSON recebido em obj JS
    var responseOject = JSON.parse(xhr.responseText);

    console.log("Objeto JSON convertido: ", responseOject);

    // criar uma variável para armazenar o novo HTML
    var newContent = '';
    console.log("Variável newContent criada (Vazia): ", newContent);

    // Percorrer cada item (evento) dentro do JSON
    for( var i = 0; i < responseOject.events.length; i++) {
      console.log(`Processando evento ${i + 1}:`,  responseOject.events[i]);

      // montar o HTML de cada evento e acumular na string
      newContent += '<div class="event">';
      newContent += '<img src="' + responseOject.events[i].map + '" ';
      newContent += 'alt="' + responseOject.events[i].location + '" />' ;
      newContent += '<p><b>' + responseOject.events[i].location + ' </b><br>';
      newContent += responseOject.events[i].date + '</p>';
      newContent += '</div>';

      console.log("HTML parcial gerado até agora: ", newContent);

    }

    // atualizar o conteúdo da página com o HTML montado
    document.getElementById('content').innerHTML = newContent;
    console.log("HTML final inserido na página!");


  } else {
console.log("Erro: servidor retornou status diferente de 200");
  }

}





// Etapa Final: preparar e enviar a requisição AJAX
console.log("Prepara requisição para 'data/data.json'...");
xhr.open('GET', 'data/data.json', true);
xhr.send(null);
console.log("Etapa 3: Requisição enviada ao servidor");