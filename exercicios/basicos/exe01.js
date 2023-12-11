// Escreva um programa JavaScript para exibir o dia e a hora atuais no seguinte formato
// Hoje é terça-feira
// O horário atual é 12h:22m:22s PM

// perar a date e o time atual
var today = new Date();
console.log(today);

// pegar o dia da semana (0-6) o é domingo e 6 é sábado
var day = today.getDay();
// console.log(day);

// criar um array com os nomes dos dias
var dayList = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
// console.log(dayList);

// pegar hora, minuto e segundo do objeto Date()
var hour    = today.getHours();
var minute  = today.getMinutes();
var second  = today.getSeconds();
// var hour    = 12;
// var minute  = 0;
// var second  = 0;

// determinar se é AM ou PM
var am_pm = (hour >= 12) ? "PM" : "AM";

// converter a hora de 24 para 12
hour = (hour >= 12) ? hour - 12 : hour;


// checar se é 0 para meio dia
if(hour === 0 && am_pm === "PM" ) {
    if(minute === 0 && second === 0) {
        hour = 12;
        am_pm = 'Meio dia';
    } else { 
        hour = 12;
        am_pm = "PM"
    }
}


// checar se é 0 para meio noite
if(hour === 0 && am_pm === "AM" ) {
    if(minute === 0 && second === 0) {
        hour = 12;
        am_pm = 'Meia noite';
    } else { 
        hour = 12;
        am_pm = "AM"
    }
}

// mostar a hora atual

var msg = "Hoje é: " + dayList[day] + "<br>" + "O horário atual é: " 
+ hour + "h: " + minute + "m: " + second + "s " + am_pm ;
var el = document.getElementById('hora');
el.innerHTML = msg;


