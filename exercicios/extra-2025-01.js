// Pedra Papel Tesoura
//  ROCK, PAPER, SCISSORS
// Melhor de 5

// var - let
let playScoreHuman = 0; //Pontuação do humano
let playScoreComputer = 0; //Pontuação do Computador
const matches = 5; //Número de rodadas

// Função para escolha aleatória do computador
function getComputerChoice() {
    let randomNum = Math.random(); // Gerar um número de 0 e 1
    if (randomNum < 0.33) {
        return 'ROCK';
    } else if (randomNum < 0.66) {
        return 'PAPER';
    } else {
        return 'SCISSORS';
    }

}

// Função para obter a escolha do humano

function getHumanChoice() {
    let choice = prompt('ROCK, PAPER or SCISSORS').trim().toUpperCase();

    // VALIDAÇÃO SE A ENTRADA NÃO FOR VÁLIDA, PEDIR NOVAMENTE.
    while (choice !== 'ROCK' && choice !== 'PAPER' && choice !== 'SCISSORS') {
        console.log("Entrada inválida! Digite ROCK, PAPER ou SCISSORS!!!");
        choice = prompt('ROCK, PAPER or SCISSORS').trim().toUpperCase();
    }

    return choice; // Retorna a escolha válida do usuário

}


// função para determinar o vencedor da rodada

function determinateWinner(human, computer) {
    if(human === computer) {
        console.log(`Empate! Ambos escolheram ${human}.`);
        return 'tie';
    } else if (
        (human === 'ROCK' && computer === 'SCISSORS') ||
        (human === 'SCISSORS' && computer === 'PAPER') ||
        (human === 'PAPER' && computer === 'ROCK')
    ) {
        console.log(`Você venceu esta rodada! ${human} vence ${computer}.`);
        return 'human';
    } else {
        console.log(`Computador venceu esta rodada! ${computer} vence ${human}.`);
        return 'computer';
    }
    
}


// loop do jogo - melhor de 5 rodadas
for (let i = 1; i <= matches; i++) {
    
    console.log(`Rodada ${i} de ${matches}`);

    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();

    console.log(`Sua escolha: ${humanChoice}`);
    console.log(`Escolha do computador: ${computerChoice}`);

    let winner = determinateWinner(humanChoice, computerChoice);

    // atualiza a pontuação

    if(winner === 'human') {
        playScoreHuman++;
    } else if(winner === 'computer') {
        playScoreComputer++;
    }

    console.log(`Placar: Você ${playScoreHuman} X ${playScoreComputer} Computador`)
    console.log('--------------------------------------');
}


// resultado final após as 5 rodadas
console.log("=== RESULTADO FINAL ===");
if (playScoreHuman > playScoreComputer) {
    console.log(`Parabéns! você venceu com ${playScoreHuman} a ${playScoreComputer}!`);
    
} else if (playScoreHuman < playScoreComputer) {
    console.log(`O computador venceu com ${playScoreComputer} a ${playScoreHuman}!`);
    
} else {
    console.log(`O jogo terminou emparado com ${playScoreHuman} a ${playScoreComputer}!`)
}




