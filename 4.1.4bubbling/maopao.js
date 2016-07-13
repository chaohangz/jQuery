/**
 * Created by 超航 on 2016/7/11.
 */
$(function () {
    $("span").click(function () {
        var txt = $("<p>span被点击</p>");
        $("#maopao").append(txt);
        //event.stopPropagation();   //停止冒泡事件
        return false;                //与上面方法等价
    });
    $("#content").click(function () {
        var txt = $("<p>div被点击</p>");
        $("#maopao").append(txt);
        event.stopPropagation();  //停止冒泡事件
    });
    $("body").click(function () {
        var txt = $("<p>body被点击</p>");
        $("#maopao").append(txt);
        event.stopPropagation();  //停止冒泡事件
    })
});