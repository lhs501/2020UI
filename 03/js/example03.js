//이 스크립트는 변수의 범위를 보호하기 위해 즉시 호출 함수 표현식을 이용하여 작성되었다.

(function () {

  //첫번째 부분 : 호텔객체를 생성하고 할인 행사에 대한 상세 정보를 출력한다.

  //객체효현식을 이용하여 hotel 객체를 생성한다.
  var hotel = {
    name: 'Park',
    roomRate: 240,// 방의 가격
    discount: 15, // 할인률
    offerPrice: function() {
      var offerRate = this.roomRate * ((100 - this.discount) / 100);
      return offerRate;
    }
  }

  //호텔의 이름, 방의 가격, 할인율 등을 출력한다.
  var hotelName, roomRate, specialRate;

  hotelName = document.getElementById('hotelName');
  roomRate = document.getElementById('roomRate');
  specialRate = document.getElementById('specialRate');

  hotelName.textContent = hotel.name;
  roomRate.textContent = '$' + hotel.roomRate;
  specialRate.textContent = '$' + hotel.offerPrice().toFixed(2);

  //두번째 부분: 할인행사 상세 정보를 계산하여 출력한다.
  var expiryMsg;//사용자에게 보일 메시지
  var today; // 오늘 날짜
  var elEnds; //메시지를 출력할 요소

  function offerExpires(today) {
    //함수 내에 지역변수를 선언한다.
    var weekFromToday, day, date, month, year, dayNames, monthNames;
    //날짜에 7일을 더한다. (7일에 해당하는 밀리초를 더한다.)
    weekFromToday = new Date(today.getTime()+ 7 * 24 * 60 * 60 * 1000);
    //요일과 월 이름을 저장하는 배열을 선언
    dayNames = ['일요일', '월요일','화요일','수요일','목요일','금요일','토요일'];
    monthNames = ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'];
    //페이지에 날짜를 출력하기 위해 날짜의 각 부분 값을 가져온다.
    day = dayNames[weekFromToday.getDay()];
    date = weekFromToday.getDate();
    month = monthNames[weekFromToday.getMonth()];
    year = weekFromToday.getFullYear();
    //메시지를 생성
    expiryMsg = '할인행사는 ';
    expiryMsg += day+ ' 에 마감됩니다.<br /> (' + year+ '년 ' + month + ' ' + date +'일)';
    return expiryMsg;
  }

  today = new Date();
  elEnds = document.getElementById('offerEnds');
  elEnds.innerHTML = offerExpires(today);

  //즉시 호출 함수 표현식을 마무리 한다.
}());
