// criando a variável
let msg = "Inscreva-se para receber nossas promoções de 10% OFF no Newsletter!";

// Criar uma função para atualizar o conteúdo da mensagem no ID message

function updateMessage() {
    let el = document.getElementById('message');
    el.textContent = msg;
}

// call the function
// Chamar a função

updateMessage();
