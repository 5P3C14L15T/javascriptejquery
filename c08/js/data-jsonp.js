// função chamada showEvents que automaticamente recebe a resposta do servidor
// e retorna os dados JSONP

function showEvents(data) {
  console.log("Função showEvents iniciada!");
  console.log("Dados recebidos do servidor remoto: ", data);

  // Etapa 1: criar uma variável para receber o html
  var newContent = '';
  console.log("Etapa 1: Variável newContent criada (vazia)");

  // Etapa 2: Percorrer os eventos recebidos
  console.log("Etapa 2: Iniciando o loop pelos eventos...");

  for (var i = 0; i < data.events.length; i++) {
    console.log(`Processando o evento ${i + 1}`, data.events[i] );

      newContent += '<div class="event">';
      newContent += '<img src="' + data.events[i].map + '" ';
      newContent += 'alt="' + data.events[i].location + '" />' ;
      newContent += '<p><b>' + data.events[i].location + ' </b><br>';
      newContent += data.events[i].date + '</p>';
      newContent += '</div>';

      // mostrar o HTML sendo construído a cada iteração

      console.log("HTML parcial: ", newContent);

  }

  // Etapa 3: Insere o HTML completo na página
  document.getElementById('content').innerHTML = newContent;
  console.log("Etapa 3: Conteúdo final inserido na página!");

}