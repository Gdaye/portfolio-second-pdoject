

/* 네비게이션 하이라이트 */

let navUnderline = document.getElementById("underline");

let navMenu = document.querySelectorAll(".nav_menu a");



navMenu.forEach((menu) => 

    menu.addEventListener("mouseover",(e) => navIndicator(e))

);




function navIndicator(e) {

    navUnderline.style.left = e.currentTarget.offsetLeft + "px";

    navUnderline.style.width = e.currentTarget.offsetWidth + "px";

    navUnderline.style.top = e.currentTarget.offsetTop + e.currentTarget.offsetHeight + "px";

}




console.log(navMenu)





/* 네비게이션 드롭다운 메뉴*/

$(document).ready(function(){

    $(".nav_menu a,.navList_area").hover(function(){

        $(".navList_area").stop().slideToggle("500");

    });

});





/* 카운트 다운 타이머 */

setInterval(function time(){

    var d = new Date();

    var hours = 24 - d.getHours();

    var min = 60 - d.getMinutes();

    if((min + '').length == 1){

        min = '0' + min;

    }

    var sec = 60 - d.getSeconds();

    if((sec + '').length == 1){

        sec = '0' + sec;

    }

    jQuery('#the-final-countdown p').html(hours+':'+min+':'+sec)

}, 1000);







/* 하트 아이콘 작용 */

$(document).ready(function(){

    $(".cont_heart_icon").click(function(){

        $(".cont_red_heart_icon").css({ "display" : "block" });

    })



    $(".cont_red_heart_icon").click(function(){

        $(".cont_red_heart_icon").css({ "display" : "none" });

    })

});







/* 아이템 슬라이드 */

$(function(){

    $('.slider-wrap').slick({

        slide: 'div',        //슬라이드 되어야 할 태그
        infinite : true,     //무한 반복 옵션     
        slidesToShow : 4,        // 한 화면에 보여질 컨텐츠 개수
        slidesToScroll : 1,        //스크롤 한번에 움직일 컨텐츠 개수
        speed : 500,     // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)
        arrows : true,         // 옆으로 이동하는 화살표 표시 여부
        dots : false,         // 스크롤바 아래 점으로 페이지네이션 여부
        autoplay : true,            // 자동 스크롤 사용 여부
        autoplaySpeed : 2000,         // 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms)
        pauseOnHover : true,        // 슬라이드 이동    시 마우스 호버하면 슬라이더 멈추게 설정
        vertical : false,        // 세로 방향 슬라이드 옵션
        prevArrow : "<img src='images/prevArrow.png' class='slick-prev'></img>",
        nextArrow : "<img src='images/nextArrow.png' class='slick-next'></img>",
        draggable : true,     //드래그 가능 여부 
        responsive: [ // 반응형 웹 구현 옵션

        {  
            breakpoint: 1200, //화면 사이즈 1200px
            settings: {
            slidesToShow: 3
            } 
        },

        {
            breakpoint: 888, //화면 사이즈 888px
            settings: {    
            slidesToShow: 2
            } 
        }

        ,

        { 
            breakpoint: 580, //화면 사이즈 888px
            settings: {    
            slidesToShow: 1
            } 
        }

        ]




    });

})




/* 회사소개 애니메이션 */

ScrollOut({});



/* 메뉴 경고창 띄우기 */
$(document).ready(function(){
    $(".category_link").click(function(){
        alert('향후 업데이트 예정입니다.')
    }),
    $(".event_link").click(function(){
        alert('향후 업데이트 예정입니다.')
    }),
    $(".newproduct_link").click(function(){
        alert('향후 업데이트 예정입니다.')
    }),
    $(".specialprice_link").click(function(){
        alert('향후 업데이트 예정입니다.')
    }),
    $(".best_link").click(function(){
        alert('향후 업데이트 예정입니다.')
    }),
    $(".special_link").click(function(){
        alert('향후 업데이트 예정입니다.')
    }),
    $(".brand_link").click(function(){
        alert('향후 업데이트 예정입니다.')
    }),
    $(".purchase_link").click(function(){
        alert('향후 업데이트 예정입니다.')
    }),
    $(".delivery_link").click(function(){
        alert('향후 업데이트 예정입니다.')
    }),

    $(".burger_menu_user").click(function(){
        alert('향후 업데이트 예정입니다.')
    })
});



/* 햄버거 메뉴 버튼 움직임 */

$(function(){

    $("#slide-open").click(function(){
        
    if($("#burger").hasClass('on')){
     //메뉴버튼이 "on" 클래스를 포함할 경우 "on"클래스를 제거
    $("#burger").removeClass('on');
    
    }else{
     //메뉴버튼이 "on" 클래스를 포함하지 않을 경우 "on"클래스를 추가
    $("#burger").addClass('on');
    }       
    });
});





/* 햄버거 메뉴 버튼 클릭시 나타남 */

$(document).ready(function(){
    $("#slide-open").click(function(){  //버튼 클릭 시

        if($("#burgur").hasClass('on')){ //메뉴가 X 상태일때
        
        $("#burgur").removeClass('on'); //메뉴 원복
        $("#popup_area").removeClass('on');  //슬라이드 메뉴 원복
        
        } else{
            $("#burgur").addClass('on'); //메뉴 원복
            $("#popup_area").addClass('on');  //슬라이드 메뉴 원복
        }
    });
});




$(document).ready(function(){
    $("#slide-open").click(function(){
        $(".burger_menu_black_area").toggle();
    });
});

