$(':header').addClass('headline');
$('li:lt(3)').hide().fadeIn(1000);
$('li').on('click', function() {
    $(this).remove();
})