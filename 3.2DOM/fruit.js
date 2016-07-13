/**
 * Created by 超航 on 2016/7/10.
 */
var $li_1 = $("<li title='香蕉'>香蕉</li>");
var $li_2 = $("<li title='雪梨'>雪梨</li>");
var $li_3 = $("<li title='葡萄'>葡萄</li>");

var $parent = $("ul");
var $two_li = $("ul li:eq(1)");
$parent.append($li_1);   //将$li_1插入ul的末尾
$parent.prepend($li_2);  //将$li_2插入ul的前方
$li_3.insertAfter($two_li);  //将li_3插入$two_li的后边

//复制节点的例子
$("ul li").click(function () {
    $(this).clone(true).appendTo("ul"); //将被点击的li复制并添加到ul的末尾
});             //clone中的true可以同时复制元素及其所绑定的事件

//替换节点
$("button").click(function () {
    $("<strong>你最不喜欢的水果</strong>").replaceAll("p");
});

//输入框提示
$address = $("#address");
$password = $("#password");
$address.focus(function () {
    var text_value = $(this).val();
    if (text_value == "请输入邮箱地址") {
        $(this).val("");
    }
});
$address.blur(function () {
    var text_value = $(this).val();
    if (text_value == "") {
        $(this).val("请输入邮箱地址");
    }
});
$password.focus(function () {
    var text_value = $(this).val();
    if (text_value == "请输入密码") {
        $(this).val("");
    }
});
$password.blur(function () {
    var text_value = $(this).val();
    if (text_value == "") {
        $(this).val("请输入密码");
    }
});

//表单
$("#single").val("选择3号");

$("#multiple").val(["选择2号","选择4号"]);

$(":checkbox").val(["check2","check4"]);

$(":radio").val(["radio2"]);
























