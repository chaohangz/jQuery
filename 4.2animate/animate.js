/**
 * Created by 超航 on 2016/7/12.
 */
$(function () {
    $("#panel1").click(function () {
        $(this).animate({left: "500px",top: "200px",height: "200px"}, 3000)
            .animate({top: "0",width: "200px", left: "1000px"}, 3000);
    });
    $("#panel2").click(function () {
        $(this).animate({left: "400px", height: "200px", opacity: "1"},3000)
            .animate({top: "200px", width: "200px"},3000,function () {
                $(this).css("border", "5px solid red");                         //callback function 不能直接使用css()方法，
            })                                                               // 它不会加入到动画队列中，而是立即执行。
            .fadeOut("slow");
    });
    $("body").click(function () {
        $("#panel3").fadeToggle();
    })
});