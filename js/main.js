$(function () {


    $('feature a, #scrollTopBtn').bind('click', function (event) {
        var $anchor = $(this);
        //宣告navbarHeight = 50
        var navbarHeight = 50;
        //宣告動畫的秒數為1250
        var animationDuration = 1250;
        //宣告timingFunction = 'easeInOutCubic'
        var timingFunction = 'easeInOutCubic';


        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - navbarHeight)
        }, animationDuration, timingFunction);
        event.preventDefault();
    });

    // window在捲動的時候
    $(window).scroll(function () {
        // 以上條件發生時所做的處理
        // 把$(window).scrollTop()存到$scrollPosition
        var $scrollPosition = $(window).scrollTop();
        // 把()的內容印到console裡面
        console.log($scrollPosition);

        //如果$scrollPosition大於500
        if ($scrollPosition > 500) {
            //#scrollTopBtn加上class scroll
            //$('#scrollTopBtn').addClass('scroll');
            $('#scrollTopBtn').fadeIn();
        } else {
            //#scrollTopBtn去除class scroll
            //沒有了scroll的#scrollTopBtn display為none
            //$('#scrollTopBtn').removeClass('scroll');
            $('#scrollTopBtn').fadeOut();
        }

        if ($scrollPosition > 20) {
            $('#header').addClass('scroll');
        } else {
            $('#header').removeClass('scroll');
        }

    });


});
