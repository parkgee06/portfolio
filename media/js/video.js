//top 상단이동

$('.top_move').click(function(e){
  e.preventDefault();
  //상단으로 스르륵 이동합니다.
  $("html,body").stop().animate({"scrollTop":0},800); 
  //해당위치고 스크롤 탑값을 부드럽게 이동시키는 코드
});

$(document).ready(function() {
  var screenSize, screenHeight;
  var current=false;

  function screen_size(){
      screenSize = $(window).width(); //스크린의 너비
      screenHeight = $(window).height();  //스크린의 높이

      $("#content").css('margin-top',screenHeight);
      
      if( screenSize > 768 && current==false){
          $("#videoBG").show();
          $("#videoBG").attr('src','./images/back.mp4');
          $("#imgBG").hide();
          current=true;
        }
      if(screenSize <= 768){
          $("#videoBG").hide();
          $("#videoBG").attr('src','');
          $("#imgBG").show();
          current=false;
      }
  }

  screen_size();  //최초 실행시 호출
  
 $(window).resize(function(){    //웹브라우저 크기 조절시 반응하는 이벤트 메소드()
      screen_size();
  }); 
  
  $('.down').click(function(e){
      e.preventDefault();
      screenHeight = $(window).height();
      $('html,body').animate({'scrollTop':screenHeight}, 1000);
  });
  
   //헤더 스크롤 처리

$(window).on('scroll',function(){//스크롤의 거리가 발생하면
  var scroll = $(window).scrollTop();  

  //스크롤의 거리를 리턴하는 함수
  //console.log(scroll);

  if(scroll>screenHeight-150){//스크롤이 비주얼의 높이-header높이 까지 내리면
    $('#headerArea').css('background','rgba(27, 67, 99, .8)');
    $('#headerArea').css('backdrop-filter','blur(15px)');

  }else{//스크롤 내리기 전 디폴트(마우스올리지않음)
    $('#headerArea').css('background','rgba(0,0,0,0)');
    $('#headerArea').css('backdrop-filter','blur(0)');
  }; 

});
});

window.addEventListener('load', loadE => {
  let prevScrollVal = 0;
  let headerArea = document.getElementById('headerArea');

  window.addEventListener('scroll', scrollE => {
    // console.log(window.scrollY);

    if(window.scrollY > prevScrollVal) {
      // console.log('커짐');
      headerArea.style.transform = 'translateY(-150px)';
    } else {
      // console.log('작아짐');
      headerArea.style.transform = 'translateY(0)';
    }

    prevScrollVal = window.scrollY;
  });
});

