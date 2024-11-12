$('li[id!="one"]')
.hide()
.delay(5000)
.fadeIn(1400);

$('li:first-child').addClass('next');
$('li.hot').addClass('highlight');