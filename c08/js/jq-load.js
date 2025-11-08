$('nav a').on('click', function(e) {
  e.preventDefault(); // impede o link de recarregar a página
  var url = this.href; //captura o endereço da página alvo
  console.log("Link clicado: ", url);

  // remover o destaque do link anterior
  $('nav a.current').removeClass('current');
  // adicionar destaque do link atual
  $(this).addClass('current');
  console.log("Novo link ativo: ", $(this).text());

  // remover o conteúdo antigo
  $('#container').remove();
  console.log("Conteúdo antigo removido!");

  // carregar o novo conteúdo com animação
  $('#content').load(url + ' #content', function() {
    console.log("Novo conteúdo carregado com sucesso de: ", url);
  }).hide()
  .fadeIn("slow");
  

});