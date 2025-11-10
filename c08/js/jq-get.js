// NOTA: Este exemplo só funcionará se for executado em um servidor web
// (ele não funcionará localmente no navegador, apenas se houver um servidor rodando)

// 🔹 Esta primeira variável cria as opções de camisetas.
// O HTML completo dessa estrutura está mostrado na página 395 do livro.

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

</div>`;

// Adiciona o bloco "vote" dentro do elemento com id="selector"
$('#selector').append(vote);


// 🔹 Este trecho adiciona a funcionalidade de voto (requisição AJAX)
$('#selector a').on('click', function (e) {

  e.preventDefault(); // Impede que o link abra uma nova página

  // Cria uma query string com o ID da cor clicada
  var queryString = 'vote=' + $(e.target).attr('id');

  // Envia a requisição GET para o servidor (votes.php)
  // e, quando receber a resposta, substitui o conteúdo de #selector.
  $.get('/php/votes.php', queryString, function (data) {
    $('#selector').html(data);
  });
});
