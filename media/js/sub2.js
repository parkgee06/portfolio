  // dive map 유튜브

    $('.popup-youtube').magnificPopup({
        disableOn: 320,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: true,

        fixedContentPos: false
    });


    //아코디언 처리
    var onoff =[false, false, false, false, false, false, false, false, false, false];//각각 열리고 닫혔을때 상태 처리 false:닫힘 / true:열림
    var s_height=$('#content>section h3').outerHeight(); //닫혔을때 메뉴 높이(h3의 높이)
    $('#content>section').height(s_height+'px'); //섹션의 높이로 설정

    $(window).on('resize', function(){ //윈도우 사이즈 변경 시 마다 높이 조절
      s_height=$('#content>section h3').outerHeight(); //닫혔을때 메뉴 높이(h3의 높이)
      $('#content>section').height(s_height+'px');
    });



    $('#content>section').click(function(e){
      e.preventDefault();
       
       var ind = $(this).index('#content>section'); // 0 1 2 3 4
       var sec_height = $(this).find('.con_all').outerHeight();   //클릭한 섹션의 전체 높이
       //console.log(ind , sec_height);

       if(onoff[ind]==false){ //클릭한 메뉴가 닫혀있으면

          for(var i=0; i<onoff.length ; i++){
            onoff[i] =false;
          }
          $('#content>section').height(s_height+'px');
          $('#content>section').removeClass('on');

          $(this).css('height',sec_height+'px');
          $(this).addClass('on');
          onoff[ind]=true;
       }else if(onoff[ind]==true){ //클릭한 메뉴가 열려있으면
          $(this).height(s_height+'px');
          $(this).removeClass('on');
          onoff[ind]=false;
       }
    });

    $('#content>section').hover(function(){
          $(this).addClass('on');     
    },function(){
          $(this).removeClass('on');
    });

    