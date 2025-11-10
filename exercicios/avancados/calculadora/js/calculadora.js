// SELEÇÃO DOS ELEMENTOS PRINCIPAIS
var display = document.getElementById('display');
var buttons = document.querySelectorAll('.btn');
var clear = document.getElementById('clear');
var historyList = document.getElementById('historyList');

// Armazena os números e operadores digitados
var currentInput = '';
// Mudamos o nome para evitar conflito com o window.history
var calcHistory = [];

console.log("Sistema iniciado. Aguardando entrada do usuário!");


//------------------------------------------------------------------
// Percorrer todos os botões numéricos e operadores
//------------------------------------------------------------------
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
        // "this" se refere ao botão clicado
        var value = this.textContent;

        console.log("Botão clicado: ", value);

        //----------------------------------------------------------
        // Se o botão for "=", realizar o cálculo
        //----------------------------------------------------------

        if (value === '=') {
            try {
                console.log("Expressão antes do cálculo: ", currentInput);

                if (currentInput === '') {
                    console.log("Nenhuma expressão digitada.");
                    return;
                }

                var result = eval(currentInput);
                console.log("Resultado calculado: ", result);

                display.value = result;

                // agora usamos calcHistory
                calcHistory.push(currentInput + " = " + result);
                updateHistory();

                currentInput = result.toString();


            } catch (error) {
                console.error("Erro no cálculo: ", error);
                display.value = "Erro";
                currentInput = '';

            }

        } else {
            //----------------------------------------------------------
            // Adiciona o número ou operador ao input atual
            //----------------------------------------------------------

            currentInput += value;
            console.log("Input atualizado: ", currentInput);
            display.value = currentInput;

        }


    });
}

//----------------------------------------------------------
// Adiciona o número ou operador ao input atual
//----------------------------------------------------------

clear.addEventListener('click', function () {
    console.log("Limpeza de tela e variáveis.");
    currentInput = '';
    display.value = '';
});

//----------------------------------------------------------
// Função para atualizar o histórico de cálculos
//----------------------------------------------------------

function updateHistory() {
    console.log("Atualizando o histórico de cálculos...");
    historyList.innerHTML = ''; 

    var reserved = calcHistory.slice().reverse(); // invertendo a ordem

    for (var j = 0; j < reserved.length; j++) {
        var li = document.createElement('li');
        li.textContent = reserved[j];
        historyList.appendChild(li);
    }
}