//목록의 시작과 끝에 아이템을 추가한다.
var list = document.getElementsByTagName('ul')[0];

//목록의 끝에 아이템을 추가한다.
var newItemLast = document.createElement('li');
var newTextLast = document.createTextNode('크림');
newItemLast.appendChild(newTextLast);
list.appendChild(newItemLast);

//목록의 시작에 아이템을 추가한다. 
var newItemFirst = document.createElement('li');
var newTextFirst = document.createTextNode('양배추');
newItemFirst.appendChild(newTextFirst);
list.insertBefore(newItemFirst, list.firstChild);

var listItems = document.querySelectorAll('li'); // 모든 <li>요소를 찾는다.

//모든 아이템에 cool이라는 값을 갖는 class특성을 추가한다. 
var i;
for(i = 0; i < listItems.length; i++){
    listItems[i].className = 'cool';
}

//제목에 아이템의 개수를 추가한다. 
var heading = document.querySelector('h2');
var headingText = heading.firstChild.nodeValue;
var totalItems = listItems.length;
var newHeading = headingText + '<span>'+ totalItems + '</span>';
heading.innerHTML = newHeading;