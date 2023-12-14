// Escreva um programa JavaScript para obter a data atual.
// Resultado esperado:
// mm-dd-aaaa, mm/dd/aaaa ou dd-mm-aaaa, dd/mm/aaaa

var today = new Date('01/11/2023');
// today = today.getFullYear().toString().substr(2,2);
console.log(today);

var dia = today.getDate();
console.log(dia);

// pegar o mês  0 - JANEIRO | 11 - DEZEMBRO (somar mais 1)
var mes = today.getMonth() + 1;
console.log(mes);

var ano = today.getFullYear();
console.log(ano);

// if do dia
if(dia < 10 || mes < 10) {
    dia = '0' + dia;
    mes = '0' + mes;
}

// id do mes
// if(mes < 10) {
//     mes = '0' + mes;
// }

var ano2digitos = ano.toString();
ano2digitos = ano2digitos.slice(2,4);

//mm-dd-aaaa
today = mes + '-' + dia + '-' + ano2digitos;
console.log(today);
//mm/dd/aaaa
today = mes + '/' + dia + '/' + ano2digitos;
console.log(today);
//dd-mm-aaaa
today = dia + '-' + mes + '-' + ano2digitos;
console.log(today);
//dd/mm/aaaa
today = dia + '/' + mes + '/' + ano2digitos;
console.log(today);