/**
 * Created by 超航 on 2016/7/9.
 */
var $category = $("ul li:gt(5):not(:last)");  //选中第六个品牌之后除了最后一个的全部品牌

$category.hide();  //隐藏选中的品牌

var $toggleBtn = $("div.showmore > a");  //选中“显示全部”按钮
$toggleBtn.click(function () {           //click 触发函数
    if ($category.is(":visible")) {      //if element is visible（visible 可见）
        $category.hide();                //hide
        $(this).find("span")             //change button
            .text("显示全部品牌");
        $("ul li").removeClass("prompted"); //remove height light
    }else {
        $category.show();                   //show $category
        $(this).find("span")                //change button text
            .text("精简显示品牌");
        $("ul li").filter(":contains('佳能'),:contains('索尼'),:contains('三星')")  //height light
                .addClass("prompted");
    }
    return false;  //超链接不跳转
});





