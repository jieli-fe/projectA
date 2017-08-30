$(document).ready(function(){
  $('.bxslider').bxSlider();

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
