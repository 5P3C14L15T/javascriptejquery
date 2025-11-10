// ===========================================
// Capítulo 8 - Ajax & jQuery
// Exercício: Votação de camisetas (simulação)
// ===========================================

// 1. Criação dinâmica das opções de voto
// ---------------------------------------
// Aqui, criamos um bloco HTML com 3 imagens de camisetas
// Esse bloco será injetado dentro do elemento <p id="selector"> no HTML

var vote = `
  <div id="vote">
    <div class="third">
      <a href="http://example.org?tshirt=gray">
        <img src="img/t-gray.png" id="gray" alt="cinza" />
      </a>
    </div>

  <div class="third">
    <a href="http://example.org?tshirt=yellow" id="yellow">
      <img src="img/t-yellow.png" id="yellow" alt="amarela" />
    </a>
  </div>

  <div class="third">
    <a href="http://example.org?tshirt=green">
      <img src="img/t-green.png" id="green" alt="verde" />
    </a>
  </div>
  </div>
`;

// O Médoto .append() adiciona o conteúdo HTML no final do elemento
//  #selector
$('#selector').append(vote);
console.log("Etapa 1: Bloco de votação adicionado ao DOM.");

// ===========================================
// 2. CAPTURANDO O CLIQUE EM CADA CAMISETA
// ===========================================

// O evento 'click' é adicionado a todos os links dentro de #selector
$('#selector a').on('click', function(e){
  // Evitar que esse link vá para outra página
  e.preventDefault();

  // $(e.target) captura o elemento que foi clicado (a imagem)
  var color = $(e.target).attr('id');
  console.log("Etapa 2: Cor selecionada > ", color);


  // Criar uma string que seria enviada para o servidor PHP
  var queryString = 'vote=' + color;
  console.log("Etapa 3: Query String que seria enviada >", queryString);


// ===========================================
// 3. SIMULAÇÃO DE REQUISIÇÃO AJAX
// ===========================================
// No livro, aqui temos:
// $.get('php/votes.php', queryString, function(data) { ... });
// Mas como estamos sem servidor, simularemos essa resposta

console.log("Etapa 4: Enviando requisição simulada ao servidor...");

// Usamos o setTimout() para simular o tempo de resposta do sevidor
setTimeout(function(){
  // Criamos um resposta simulada que o servidor poderia retornar
  var simulatedResponse = `
    <p>Você votou na camiseta <strong>${color.toUpperCase()}<strong>!
    </p>
    <p>Obrigado por participar da votação!</p>
  `;

  // Substituiremos o conteúdo de #selector pela resposta do simulado
  $('#selector').html(simulatedResponse);
  console.log("Etapa 5: Reposta do servidor e DOM atualizado.");

}, 2000);


});
