$(function () {
    $("a.tooltip").mouseover(function (e) {
        this.myTitle = this.title;
        this.title = "";
        var tooltip = "<div id='tooltip'><img src='"+this.href+"'><br/>"+this.myTitle+"</div>";
        $("body").append(tooltip);
        $("#tooltip") .css({
            "top": (e.pageY+15) + "px",
            "left": (e.pageX+15) + "px",
            "position":"absolute"
        }).show("fast");
    }).mouseout(function () {
        $("#tooltip").remove();
        this.title = this.myTitle;
    }).mousemove(function (e) {
        $("#tooltip").css({
            "top": (e.pageY+15) + "px",
            "left": (e.pageX+15) + "px"
        });
    });
});