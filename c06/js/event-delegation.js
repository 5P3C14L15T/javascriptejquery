function getTarget(e) {
    if (!e) {
        e = window.event;
    }
    return e.target || e.srcElement;
}


function itemDone(e) {
    var target, elParent, elGrandparent;
    target = getTarget(e);



    // elParent = target.parentNode;
    // elGrandparent = target.parentNode.parentNode;
    // elGrandparent.removeChild(elParent);
    
    if(target.nodeName.toLowerCase() == "a") {
        elListItem = target.parentNode;
        console.log(elListItem);
        elList = elListItem.parentNode;
        console.log(elList);
        elList.removeChild(elListItem);
    }
    if(target.nodeName.toLowerCase() == "em") {
        elListItem = target.parentNode.parentNode;
        console.log(elListItem);
        elList = elListItem.parentNode;
        console.log(elList);
        elList.removeChild(elListItem);
    }


    if(e.preventDefault) {
        e.preventDefault();
    } else {
        e.returnValue = false;
    }

}

var el = document.getElementById('shoppingList');
if(el.addEventListener) {
    el.addEventListener('click', function(e) {
        itemDone(e);
    }, false);
} else {
    el.attachEvent('click', function(e) {
        itemDone(e);
    });
}