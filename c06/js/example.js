var noteInput, noteName, textEntered, target;    // Declarar variáveis

noteName = document.getElementById('noteName');  // Elemento que contém a nota
noteInput = document.getElementById('noteInput');// Entrada para escrever a nota

function writeLabel(e) {                         // Declarar função
  if (!e) {                                      // Se o objeto de evento não estiver presente
    e = window.event;                            // Usar fallback para IE5-8
  }
  target = e.target || e.srcElement;             // Obter o alvo do evento
  textEntered = target.value;                    // Valor desse elemento
  noteName.textContent = textEntered;            // Atualizar o texto da nota
}


function recorderControls(e) {                   // Declarar recorderControls()
  if (!e) {                                      // Se o objeto de evento não estiver presente
    e = window.event;                            // Usar fallback para IE5-8
  }
  target = e.target || e.srcElement;             // Obter o alvo do evento
  if (e.preventDefault) {                        // Se preventDefault() for suportado
    e.preventDefault();                          // Impedir a ação padrão
  } else {                                       // Caso contrário
    e.returnValue = false;                       // Fallback para IE: impedir a ação padrão
  }

  switch(target.getAttribute('data-state')) {    // Obter o atributo data-state
    case 'record':                               // Se o valor for 'record'
      record(target);                            // Chamar a função record()
      break;                                     // Sair da função onde foi chamada
    case 'stop':                                 // Se o valor for 'stop'
      stop(target);                              // Chamar a função stop()
      break;                                     // Sair da função onde foi chamada
      // Mais botões poderiam ser adicionados aqui...
  }
}

function record(target) {                        // Declarar função
  target.setAttribute('data-state', 'stop');     // Definir o atributo data-state para stop
  target.textContent = 'stop';                   // Definir o texto para 'stop'
}

function stop(target) {
  target.setAttribute('data-state', 'record');   // Definir o atributo data-state para record
  target.textContent = 'record';                 // Definir o texto para 'record'
}

if (document.addEventListener) {                 // Se o listener de eventos for suportado
  document.addEventListener('click', function(e) {// Para qualquer clique no documento
    recorderControls(e);                         // Chamar recorderControls()
  }, false);                                     // Capturar durante a fase de propagação
  // Se o evento input for disparado no noteInput, chama writeLabel()
  noteInput.addEventListener('input', writeLabel, false); 
} else {                                         // Caso contrário
  document.attachEvent('onclick', function(e) {  // Fallback para IE: qualquer clique
    recorderControls(e);                         // Chamar recorderControls()
  });
 // Se o evento keyup for disparado no noteInput, chama writeLabel()
  noteInput.attachEvent('onkeyup', writeLabel);
}
