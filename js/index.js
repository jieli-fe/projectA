$(document).ready(function(){
    var pageWidth = 1269;
$('.bxslider').bxSlider({
    slideWidth: pageWidth,
    minSlides: 4,
    maxSlides: 4,
    moveSlides: 1,
    startSlide: 1,
    slideMargin: 0,
    pager: false,
    infiniteLoop: false
});

function isMobild (){
  return  navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i) ? true : false;
}
  var pos_right ;
  if(($(window).width() - pageWidth)>0){
      pos_right = ($(window).width()-pageWidth)/2 - 45 ;
  }else {
      pos_right = 0;
  }
  if(isMobild()){
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
            scrollTop: 800
        }, 300); //html是为了兼容火狐和IE
    });

    $('#nav li').click(function(){
      var index = $(this).index();
        $("body,html").stop().animate({
            scrollTop: $('#area'+ index).offset().top
        }, 300);
    });
});
