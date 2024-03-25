var hotItems = document.querySelectorAll('li.hot');

// console.log(hotItems.length);

if (hotItems.length > 0) {

    for(var i = 0; i < hotItems.length; i++) {
        hotItems[i].className = 'cool';
    }
}