$(document).ready(function(){
$('.bxslider').bxSlider({
    slideWidth: 954,
    minSlides: 4,
    maxSlides: 4,
    moveSlides: 1,
    startSlide: 1,
    slideMargin: 0,
    pager: false,
    infiniteLoop: false 
});

  var pos_right ;
  if(($(window).width() - 954)>0){
      pos_right = ($(window).width()-954)/2 - 45 ;
  }else {
      pos_right = 0;
  }
  $(".top").css("right",pos_right);
  $(window).scroll(function() {
      
        var t = $(this).scrollTop();
        if (t > 300) {
            $(".top").stop().fadeIn(300);
        } else {
            $(".top").stop().fadeOut(300);
        }
    });
    $(".top").click(function() {
        $("body,html").stop().animate({
            scrollTop: 0
        }, 300); //html是为了兼容火狐和IE
    });
    
});
