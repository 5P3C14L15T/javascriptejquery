// URL split pop

document.getElementById('conteudo').innerHTML = document.URL;
// alert(document.URL);


// método split()
var texto = "O Canal Curso do Livro é o mais fácil de aprender da internet";
// console.log(texto.split(" "));
var textoSeparado = texto.split(' ');
console.log(textoSeparado);



// método pop()

var carro = ["gol", "uno", "corolla", "creta"];
console.log(carro);

var carroPop = carro.pop();

console.log(carroPop);


console.log(carro);

// split e pop

var image = 'nomeDaImagem.jpeg';
var image2 = 'nomeDaImagem.png';

var extensao = image.split('.').pop();
var extensao2 = image2.split('.').pop();
console.log(extensao);
console.log(extensao2);

