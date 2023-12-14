// Escreva um programa JavaScript para encontrar a área de um triângulo onde três lados são 5, 6, 7.
// definir variáveis para cada lado do triângulo
var a = 10;
var b = 13;
var c = 7;


// calcular o semi-perímetro
var p = (a + b + c)/2;
// console.log(p);


// criar a fórmula de heron - para calcular a área do triângulo (a.b.c)

var area = Math.sqrt(p * ((p - a) * (p - b) * (p - c)));

var el = document.getElementById('triangulo');
el.innerHTML = area;