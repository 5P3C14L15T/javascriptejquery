var elList, addLink, newEl, newText, counter, listItems;

elList  = document.getElementById('list');
addLink = document.querySelector('a');
counter = document.getElementById('counter');

function addItem(e) {
    e.preventDefault();
    newEl = document.createElement('li');
    newText = document.createTextNode('Novo item de lista');
    newEl.appendChild(newText);
    elList.appendChild(newEl);
}

function updateCount() {
    listItems = elList.getElementsByTagName('li').length;
    counter.innerHTML = listItems;
}



addLink.addEventListener('click',addItem,false);
// elList.addEventListener('DOMNodeInserted', updateCount, false);

var observer = new MutationObserver(function(mutations){
    mutations.forEach(function(mutation){
        if(mutation.type === 'childList') {
            updateCount();
        }
    });
});

observer.observe(elList, {childList:true});
