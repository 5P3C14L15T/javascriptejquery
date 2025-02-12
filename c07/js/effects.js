$(function() { //$(document).ready(function() {...})
    $('h2').hide().slideDown();
    var $li = $('li');
    $li.hide().each(function(index) {
        $(this).delay(1000 * index).fadeIn(700);
    });

    $li.on('click',function() {
        $(this).fadeOut(1000);
    });
});