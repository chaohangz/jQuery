/**
 * Created by 超航 on 2016/7/12.
 */
$(function () {
    var $content = $(".content");
    var content_width = $content.width();
    var $image = $(".content img");
    var i = 0;
    $(".change_btn .next").click(function () {
        if (!$image.is(":animated")) {
            if (i == 4) {
                $image.animate({left: "0px"}, "fast");
                i = 0;
            } else {
                $image.animate({left: "-=" + content_width}, "normal");
                i++;
            }
        }
        $(".highlight").find("div").eq(i).addClass("current").siblings().removeClass("current");
    });
    $(".change_btn .prev").click(function () {
        if (!$image.is(":animated")) {
            if (i == 0) {
                $image.animate({left: "-="+content_width*4}, "fast");
                i = 4;
            } else {
                $image.animate({left: "+=" + content_width}, "normal");
                i--;
            }
        }
        $(".highlight").find("div").eq(i).addClass("current").siblings().removeClass("current");
    })
});