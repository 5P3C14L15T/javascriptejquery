$(function(){
    // obter o background color do primeiro item de lista
    var backGroundColor = $('li').css('background-color');

    // escrever o background-color após a lista
    $('ul').append('<p>Cor era: ' + backGroundColor + '</p>');

    // setar todos as propriedades dos itens de lista

    $('li').css({
        'background-color' : '#c5a996',
        'border' : '1px solid #fff',
        'color' : '#000',
        'text-shadow' : 'none',
        'font-family' : 'Georgia',
        'padding-left' : '+=75'


    });

});