// 1. Criar um objeto XMLHttpRequest
var xhr = new XMLHttpRequest();
console.log("Etapa 1: Objeto criado", xhr);

// 2. Define o que fazer quando a resposta for carregada
xhr.onload = function () {
  console.log("Etapa 2: Requisição concluída, resposta recebida do servidor!");

  // 3. Verficar o status da resposta
  console.log("Status da resposta", xhr.status);

  if (xhr.status === 200) {
    console.log("Servidor respondeu com sucesso (status 200)!");

    // 4. Cpturar o XML retornado
    var response = xhr.responseXML;
    console.log("XML recebido", response);

    // 5. buscar todos os elementos <event> dentro do XML
    var events = response.getElementsByTagName('event');
    console.log("Eventos encontrados: ", events.length);
    console.log(events[0]); //Mostrar o primeiro evento

    // 6. Percorrer cada evento encontrado
    for (var i = 0; i < events.length; i++) {

      console.log("Processando evento", i + 1);
      
      // Criar o container principal do evento
      var container = document.createElement('div');
      container.className = 'event';
      console.log("Criando container:", container);

      // cria e adiciona a imagem do mapa
      var image = document.createElement('img');
      image.setAttribute('src', getNodeValue(events[i], 'map'));
      container.appendChild(image);
      console.log("Imagem adicionada:", image.src);


      // criar o parágrafo com local e data
      var location = document.createElement('p');
      var city = document.createElement('b')
      var newline = document.createElement('br');

      city.appendChild(document.createTextNode(getNodeValue(events[i], 'location')));
      location.appendChild(city);
      location.appendChild(newline);
      location.appendChild(document.createTextNode(getNodeValue(events[i], 'date')));
      container.appendChild(location);

      console.log("Conteúdo do Parágrafo:", location.innerHTML);

      // Adicionar tudo dentro da página (div#content)
      document.getElementById('content').appendChild(container);


    }

    console.log("Exemplo getNodeValue do primeiro evento:", getNodeValue(events[0], 'date'));


  }


}

// penúltimo passo
function getNodeValue(obj, tag){
  return obj.getElementsByTagName(tag)[0].firstChild.nodeValue;
}

// último passo, prepara e envia a requisição
xhr.open('GET', 'data/data.xml', true);
xhr.send(null);
console.log("Etapa 3: Requisição enviada ao servidor!");