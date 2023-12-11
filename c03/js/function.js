// declaração de função

function sayHello() {
    document.write('Olá querido aluno!');
}

// chamando a função

sayHello();
document.write("<br><hr>");

// função com parâmetros

function obtenhaArea(width, height) {
    return width * height;
}

var area = obtenhaArea(5,10);
document.write(area);

document.write("<br><hr>");

var largura = 10;
var altura = 1000;

var areaOne = obtenhaArea(largura, altura);
document.write(areaOne);
document.write("<br><hr>");

areaOne = "joão";
document.write(areaOne);

document.write("<br><hr>");

// obtendo um único valor a partir de uma função

function calculateArea(w1,h1) {
    var area = w1 * h1;
    return area;
}

var wallOne = calculateArea(3,4);
var wallTwo = calculateArea(5,4);

document.write(wallOne);
document.write("<br>");
document.write(wallTwo);

document.write("<br><hr>");

// obter múltiplos valores dentro da função

function getSize(w,h,d) {
    var area = w * h;
    var volume = w * h * d;
    var size = [area,volume];
    return size;
}

var areaOne = getSize(3,100,4)[0];
var VolumeOne = getSize(3,5,4)[1];

document.write("Área: " + areaOne);
document.write("<br>");
document.write("Volume: " + VolumeOne);

document.write("<br><hr>");

var areaFuncaoAnonima = function(w, h) {
    return w * h;
}

var areaTotal = areaFuncaoAnonima(30,5);
document.write("Área: " + areaTotal);

document.write("<br><hr>");

var areaOne = ( function() {
    var w = 4;
    var h = 10;
    return w * h;
}());

document.write(areaOne);

document.write("<br><hr>");

function showPlotSize() {
    var w = 3;
    var h = 10;
    return "Área: " + w * h;
}
function showGardenSize() {
    var w = 50;
    var h = 10;
    return "Área do Jardim: " + w * h;
}

var msg = showPlotSize();
var msg1 = showGardenSize();
document.write(msg);
document.write(msg1);
