/**
 * Created by 超航 on 2016/7/16.
 */
$(function () {
    $("span").click(function () {
        var thisEle = $("#para").css("font-size"); //获取font size
        var textFontSize = parseInt(thisEle, 10);  //去掉单位
        var unit = thisEle.slice(-2);              //把单位（px）提取出来，并赋值给变量 slice（切片）
        var cName = $(this).attr("class");
        if(cName == "bigger") {
            if(textFontSize <= 40) {
                textFontSize += 2;
            }
        }else if(cName == "smaller") {
            if(textFontSize >= 12)
            textFontSize -= 2;
        }
        $("#para").css("font-size", textFontSize + unit);
    });
    var $div_li = $("div.tab_menu ul li");
    $div_li.click(function () {
        $(this).addClass("selected")
            .siblings().removeClass("selected");
        var index = $div_li.index(this);      //元素在所有li元素中的索引
        $("div.tab_box > div").eq(index).show().siblings().hide();  //索引出对应的div并显示，隐藏同辈div元素
    })
});