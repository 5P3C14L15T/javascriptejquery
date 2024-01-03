// Escreva um programa JavaScript para descobrir se 1º de janeiro será um domingo entre 2014 e 2050.

// Para descobrir quais anos entre 2014 e 2050 têm 1º de janeiro
// caindo em um domingo, podemos usar a seguinte abordagem:

// Percorra cada ano entre 2014 e 2050 e verifique se 1º de janeiro desse ano cai em um domingo.
// Para verificar se 1º de janeiro de um ano é domingo, podemos usar o objeto Date em JavaScript.
// Crie um objeto Date para 1º de janeiro de cada ano e use o método 
// getDay() para obter o dia da semana. O método getDay() retorna um número inteiro entre 0 e 6, onde 0 representa domingo, 1 representa segunda-feira e assim por diante.
// Se o dia da semana for 0 (domingo), podemos imprimir o ano.
// 0 domingo, 1 segunda... ...sábado 6
// 0 janeiro ...dezembro 11

// 2014 - 2050

// Log a separator to visually distinguish the output
// new Date(year, monthIndex)
// new Date(year, monthIndex, day)
// new Date(year, monthIndex, day, hours)
// new Date(year, monthIndex, day, hours, minutes)
// new Date(year, monthIndex, day, hours, minutes, seconds)
// new Date(year, monthIndex, day, hours, minutes, seconds, milliseconds)

for (var ano = 2014; ano <= 2050; ano++) {

    var diaDomingo = new Date(ano,0,1);
    // console.log(diaDomingo);

    if(diaDomingo.getDay() === 0) {
        document.write("É 1º de janeiro no domingo do ano de: " + ano + "<br>");
    }

}


var dia = new Date(2023, 11, 18);
console.log(dia.getDay());
