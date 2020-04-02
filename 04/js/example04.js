var table = 3;
var operator = 'addition';
var i = 1;
var msg = '';

if (operator === 'addition') {

  while (i < 11) {
    msg += i + ' + ' + table + ' = ' + (i + table) + '<br />';
    i++;
  }
}else {

  while (i < 11) {
    msg += i + ' x ' + table + ' = ' + ( i * table) + '<br />';
    i++;
  }
}

//페이지에 메시지를 출력한다.
var el = document.getElementById('blackboard');
el.innerHTML = msg;
