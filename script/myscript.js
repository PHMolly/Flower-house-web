$(function() {
    $("nav a").click(function() {
        var btn = $(this).attr("href"); //返回”這個按鈕“取得屬性與值
        var pos = $(btn).offset(); //抓取相對的座標位置 
        $("html,body").animate({ scrollTop: pos.top }, 1000); //變數position的top(y軸)
    });

    //banner影片移除
    if ($(window).width() < 769) {
        $(".bg-video").remove();
    };

    //置頂按鈕
    $('#gotop').click(function() {
        $("html,body").animate({ scrollTop: 0 }, slow);

    });

    //淡出淡入
    $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
            $('#gotop').stop().fadeIn("fast", 0.6);
        } else {
            $('#gotop').stop().fadeOut("fast");
        }
    });
    //滾動滑入效果
    $('.box').smoove({
        offset: "40%",

    });

});