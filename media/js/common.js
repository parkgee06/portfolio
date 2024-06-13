var screenHeight = $(window).height();

//헤더 스크롤 처리
  $(window).on('scroll',function(){//스크롤의 거리가 발생하면
    var scroll = $(window).scrollTop();  
  
    //스크롤의 거리를 리턴하는 함수
    //console.log(scroll);
  
    if(scroll>screenHeight-165){//스크롤이 비주얼의 높이-header높이 까지 내리면
      $('#headerArea').css('background','rgba(27, 67, 99, .8)');
      $('#headerArea').css('backdrop-filter','blur(15px)');
  
    }else{//스크롤 내리기 전 디폴트(마우스올리지않음)
      $('#headerArea').css('background','rgba(0,0,0,0)');
      $('#headerArea').css('backdrop-filter','blur(0)');
    }; 
  
  });
  
  window.addEventListener('load', loadE => {
    let prevScrollVal = 0;
    let headerArea = document.getElementById('headerArea');
  
    window.addEventListener('scroll', scrollE => {
      // console.log(window.scrollY);
  
      if(window.scrollY > prevScrollVal) {
        // console.log('커짐');
        headerArea.style.transform = 'translateY(-165px)';
      } else {
        // console.log('작아짐');
        headerArea.style.transform = 'translateY(0)';
      }
  
      prevScrollVal = window.scrollY;
    });
  });
  

    //DIVING STORIES
    var stories = [
        {'isrc':'./images/con_1/con_1_pic_1.jpg','tit5':'Experience Diving1','desc':'Experience diving is a program designed for non-professionals to try diving. It allows individuals to experience diving under the guidance of a professional diver in a safe environment.'},
        {'isrc':'./images/con_1/con_1_pic_2.jpg','tit5':'Freediving','desc':'Freediving is an activity where you hold your breath and move freely underwater without the use of breathing equipment.'},
        {'isrc':'./images/con_1/con_1_pic_3.jpg','tit5':'Scuba Diving','desc':'Scuba diving is an activity where you use breathing equipment to move underwater. It can be enjoyed in various environments such as different depths and underwater caves.'},
        {'isrc':'./images/con_1/con_1_pic_4.jpg','tit5':'Fun Diving','desc':'Fun diving is diving purely for enjoyment, aiming to enhance the diving experience and explore new areas.'}
    ];

    $('.menu_1 .con_1 .thum div a').click(function(e){ //이전버튼 클릭시
        e.preventDefault();

        var ind2 = $(this).index('.menu_1 .con_1 .thum div a');
        //console.log(ind2);   0 1 2 3
        $('#content .menu_1 .con_1 .box_1').css('background','url('+ stories[ind2].isrc+')').css('background-size', 'cover');
        $('#content .menu_1 .box h5').text(stories[ind2].tit5);
        $('#content .menu_1 .box p').text(stories[ind2].desc);
        
    });


    //DIVE MAP
    var MAP = [
        {'isrc':'./images/con_2/dive_site_1.jpg','desc':'Dokdo not only lies far from the mainland but also sits at the boundary where warm and cold ocean currents meet, giving it a unique geopolitical characteristic. This results in a distinct marine ecosystem different from that of the East Sea coast or Ulleungdo. Dokdo maintains the pristine and healthy conditions of the past East Sea, earning it the highest accolades such as "golden fishing grounds" and "treasure trove of biodiversity."'},
        {'isrc':'./images/con_2/dive_site_2.jpg','desc':'French Polynesia is known as one of the best shark diving destinations in the world, and what better place to dive with them than in Fakarava Island’s South Pass. Known locally as Tumakohua Pass, visitors can expect to encounter hundreds of lemon, whitetip, and hammerhead sharks patrolling the narrow sides of a submerged valley. The excellent visibility and dramatic topography provide the ideal setting for some top-notch shark encounters.'},
        {'isrc':'./images/con_2/dive_site_3.jpg','desc':'Beneath the little-known waters of the tiny island of Alor, a huge field of anemones is ripe for exploration. Quite possibly the largest of its kind in the world, this unique site is characterized by small volcanic boulders smothered in thousands of individual anemones in all colors, shapes, and sizes. Between the gently waving anemone fingers, countless clownfish dart to and fro, frantically protecting their patch from an unseen threat. It’s easy to become absorbed in the individual dramas of this strangely mesmerizing city. '},
        {'isrc':'./images/con_2/dive_site_4.jpg','desc':'A remote, rocky outcrop off the west coast of Thailand, Richelieu Rock attracts a huge diversity of marine life along its healthy reefs. Widely regarded as the best dive site in Thailand, visiting pelagics such as manta rays, whale sharks, and tuna mingle with resident reef species to create a variety and diversity of marine life that’s difficult to beat. To top it off, some excellent macro critters can also be discovered amongst the huge and intricate coral heads.'},
        {'isrc':'./images/con_2/dive_site_5.jpg','desc':'The tiger shark mecca of the Caribbean and arguably the world, the small sand flat of Tiger Beach is tucked away in an inconspicuous corner of the Bahamas and has a fearsome reputation. Divers can mix with dozens of these awesome predators as well as lemon sharks, Caribbean reef sharks, and countless tropical reef species during baited shark dives. This shallow site boasts clean, white sand and sparkling water, providing excellent photo conditions and some impressive subjects.'},
        {'isrc':'./images/con_2/dive_site_6.jpg','desc':'The only destination to feature twice on our list, Roca Partida is an epic dive site featuring the pick of Socorro’s exciting big animal action. Conditions at this isolated pinnacle are often challenging, but the strong currents and cool water upwellings attract huge numbers of silky, Galapagos, oceanic whitetip, and hammerhead sharks, as well as dolphins, whale sharks, and massive schools of jack and barracuda. Divers willing to brave the 24-hour crossing from mainland Mexico will be well rewarded.'},
        {'isrc':'./images/con_2/dive_site_7.jpg','desc':'A firm favorite amongst visitors to the Red Sea, the SS Thistlegorm is an exciting military wreck offering exploration opportunities for all levels of recreational divers. Swimming through the dark cargo holds reveals a fascinating collection of wartime artifacts, including jeeps, motorbikes, a shipment of boots, and plenty of ammunition. The wreck is home to abundant soft corals and some interesting macro hidden amongst the superstructure; a must-see for every wreck enthusiast.'},
        {'isrc':'./images/con_2/dive_site_8.jpg','desc':'A favorite of the Bluewater team, Blue Heron Bridge is a world-renowned site located at West Palm Beach’s Phil Foster Park. Popular with snorkelers as well as divers, a huge diversity of marine life can be found in the lagoon’s shallow waters. Macro critters such as seahorses, nudibranch, and pipefish abound, and the warm, sheltered waters offer a refuge for countless juvenile tropical fish. The site is easily accessible and offers something for all standards of diver.'},
        {'isrc':'./images/con_2/dive_site_9.jpg','desc':'The epitome of Raja Ampat in all its hugely diverse glory, Cape Kri in the Dampier Strait holds the world record for the most fish species identified in a single dive. The marine biodiversity here is the most impressive on the planet, with a whole host of weird and wonderful creatures encountered on every dive. While currents can often be brisk, this brings a multitude of reef fish out to play.'},
        {'isrc':'./images/con_2/dive_site_10.jpg','desc':'At first glance this inconspicuous jetty doesn’t appear promising, however, amongst the pier pilings, a multi-colored aquarium of schooling fish and some very unique macro is ripe for discovery. Rapid Bay Jetty is one of the most reliable sites in Australia for spotting the leafy sea dragon, a stunning relative of the seahorse and pipefish, evolved to blend seamlessly with its brown kelp habitat. Hiring a guide is often the best way to spot these amazing but rare fish.'}
    ];

    $('#content .menu_2 ul li a').click(function(e){ //이전버튼 클릭시
        e.preventDefault();

        var ind3 = $(this).index('#content .menu_2 ul li a');  // 0~9
        //console.log(ind3); 
        $('#content .menu_2 .con_2 .right_box').css('background','url('+ MAP[ind3].isrc+')').css('background-size', 'cover');
        $('#content .menu_2 .con_2 .right_box>p').text(MAP[ind3].desc);
        
    });



   //상단이동 코드
//    $(window).on('scroll',function(){ //스크롤 값의 변화가 생기면
//     var scroll = $(window).scrollTop(); //스크롤의 거리
//     // $('.text').text(scroll);

//     if(scroll>7050){ //7000이상의 거리가 발생되면
//         $('.move_top').fadeIn('slow');  //top보여라~~~~
//     }else{
//         $('.move_top').fadeOut('fast');//top안보여라~~~~
//     }
// });

$('.move_top').click(function(e){
  e.preventDefault();
    //상단으로 스르륵 이동합니다.
   $("html,body").stop().animate({"scrollTop":0},1000); //해당 위치로 스크롤 탑값을 부드럽게 이동시키는 코드
});


//햄버거 메뉴 처리
var onoff = false; //false(메뉴열림) true(메뉴닫힘)
$(".menuOpen").click(function(e){
  e.preventDefault();
  if(onoff == false){
    $("#gnb").slideDown('slow');
    $('#headerArea').addClass('mn_open');//메뉴모양변경
    onoff = true;
  }else{
    $("#gnb").slideUp('fast');
    $('#headerArea').removeClass('mn_open');
    onoff = false;
  }
});

//  네비높이 맞추기(페이지 로딩시 1회)
var screenSize = $(window).width();
var winh =  $(document).height();

if( screenSize > 768){
  $("#gnb").height('auto');
}else{
  $("#gnb").height(winh);
}

var current2=0; // 0(해상도가 모바일), 1(소형테블릿이상)

$(window).resize(function(){ 
   var screenSize = $(window).width();  //가로 해상도
   if( screenSize > 768){  //소형테블릿 이상이면
    $("#gnb").show();
    $("#gnb").height('auto');
         current2=1; //소형테블릿이상
        }
        if(current2==1 && screenSize <= 768){
          $("#gnb").hide();
          $("#gnb").height(winh);
      current2=0; //모바일
      onoff = false;
    }
  }); 

 //top 상단이동

$('.top_move').click(function(e){
    e.preventDefault();
    //상단으로 스르륵 이동합니다.
    $("html,body").stop().animate({"scrollTop":0},800); 
    //해당위치고 스크롤 탑값을 부드럽게 이동시키는 코드
  });
  
  $(document).ready(function() {});


