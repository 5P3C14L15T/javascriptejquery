$(function () {
    var listItem, itemStatus, eventType;

    $('ul').on(
        'click mouseover',
        // ':not(#four)',
        { status: 'outracoisa' },
        function (e) {
            listItem    = 'Item: ' + e.target.textContent + '<br />';
            itemStatus  = 'Status: ' + e.data.status + '<br />';
            eventType   = 'Event: ' + e.type + '<br />';
            $('#notes').html(listItem + itemStatus + eventType);
        }
    );


});