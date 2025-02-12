$(function() {
   var $p = $('p');

   var $cloneQuote = $p.clone();
   $p.remove();

   var $moveItem = $('#one').detach();
   $moveItem.appendTo('ul');

});