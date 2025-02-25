// Criando um obejto XMLHttpRequest
var xhr = new XMLHttpRequest();

// Definindo a função que será chamada quando a resposta chegar

xhr.onload = function() {

  // CÓDIGO HTTP 200 significa OK
  if(xhr.status === 200) {
    document.getElementById('content').innerHTML = xhr.responseText;
  }

};

xhr.open('GET','data/data.html',true);
xhr.send(null);