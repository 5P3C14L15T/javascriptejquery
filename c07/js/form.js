$(function() {
    var $newItemButton  = $('#newItemButton');
    var $newItemForm    = $('#newItemForm');
    var $textInput      = $('input:text');

    $newItemForm.hide();
    $newItemButton.show();

    $('#showForm').on('click', function() {
        $newItemButton.hide();
        $newItemForm.show();
    });

    $newItemForm.on('submit', function(e){
        e.preventDefault();
        var newText = $textInput.val();
        $('li:last').after('<li>' + newText + '</li>');
        $newItemButton.show();
        $newItemForm.hide();
        $textInput.val('');
    });

});