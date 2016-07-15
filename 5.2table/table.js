/**
 * Created by 超航 on 2016/7/15.
 */
$(function () {
    $("tbody>tr:even").addClass("even");
    $("tbody>tr:odd").addClass("odd");
    $("#tbody1>tr").click(function () {
        $(this).addClass("selected")
            .siblings().removeClass("selected")
            .end()
            .find(":radio").prop("checked", true);
    });
    //多选框方法一
    /*$("#tbody2>tr").click(function () {
        if($(this).hasClass("selected")){
            $(this).removeClass("selected")
                .find(":checkbox").prop("checked", false);
        } else {
            $(this).addClass("selected")
                .find(":checkbox").prop("checked", true)
        }
    });*/
    //多选框方法二
    $("#tbody2>tr").click(function () {
        //判断当前是否被选中，并把值附给变量
        var hasSelected = $(this).hasClass("selected");
        //三元运算，如果true则remove,else add
        $(this)[hasSelected? "removeClass":"addClass"]("selected")
            .find(":checkbox").prop("checked", !hasSelected);
    });
    $("tr.parent").click(function () {
        $(this).toggleClass("selected")
            .siblings(".child_"+this.id).toggle();
    }).click();
    $("#filterName").keyup(function () {
        $("table tbody tr").hide()
            .filter(":contains('"+( $(this).val() )+"')").show();
    })
});
























