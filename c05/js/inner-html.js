// innerHTML

var firstItem = document.getElementById('one');

var itemContent = firstItem.innerHTML;

firstItem.innerHTML = '<a href=\"https://www.cursodolivro.com.br\">' + itemContent + '</a>';