$(function() {
    $('li:lt(2)').removeClass('hot'); // less than
    $('li').eq(0).addClass('complete'); // equals
    $('li:gt(2)').addClass('cool'); // greater than
}