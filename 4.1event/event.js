/**
 * Created by 超航 on 2016/7/11.
 */
/*$(function () {
    $("#panel h5.head").mouseover(function () {
        $(this).next().show();
    }).mouseout(function () {
        $(this).next().hide();
    })
});*/

/*$(function () {
    $("#panel h5.head").hover(function () {
        $(this).next().slideUp();
    },function () {
        $(this).next().slideDown();
    })
});*/

$(function () {
    $("#panel h5.head").click(function () {
        $(this).next().toggle();
    })
});




