/**
 * Created by 超航 on 2016/7/13.
 */
$(function () {
    var $comment1 = $("#comment1");
    $(".bigger").click(function () {
        if(!$comment1.is(":animated")) {
            if ($comment1.height() < 500) {
                $comment1.animate({height: "+=50"}, 400)
            }
        }
    });
    $(".smaller").click(function () {
        if(!$comment1.is(":animated")) {
            if ($comment1.height() > 50) {
                $comment1.animate({height: "-=50"}, 400)
            }
        }
    })
});

$(function () {
    var $comment2 = $("#comment2");
    $(".up").click(function () {
        if(!$comment2.is(":animated")) {
            $comment2.animate({scrollTop: "+=50"}, 400)
        }
    });
    $(".down").click(function () {
        if(!$comment2.is(":animated")) {
            $comment2.animate({scrollTop: "-=50"}, 400)
        }
    })
});

$(function () {
    //定义临时变量，复选框组
    var $checkbox_items = $("[name=items]:checkbox");
    //全选
    $("#CheckedAll").click(function () {
        $checkbox_items.prop("checked", true);
    });
    //全不选
    $("#CheckedNo").click(function () {
        $checkbox_items.prop("checked",false);
    });
    //反选
    $("#CheckedRev").click(function () {
        $checkbox_items.each(function () {
            this.checked = !this.checked;
        })
    });
    //提交
    $(".send").click(function () {
        var str = "你选中的是: \r\n";
        $checkbox_items.each(function () {
            str += $(this).val()+"\r\n";
        });
        alert(str);
    });
    //全选/全不选
    $("#CheckedAll2").click(function () {
        $checkbox_items.prop("checked", this.checked);
    });
    //让全选/全不选按钮与其他按钮关联，设置flag
    $checkbox_items.click(function () {
        var flag = true;
        $checkbox_items.each(function () {
            if(!this.checked){
                flag = false;
            }
        });
        $("#CheckedAll2").prop("checked", flag);
    });
    //方法二
    $checkbox_items.click(function () {
        $("#CheckedAll2").prop("checked",
        $checkbox_items.length == $checkbox_items.filter(":checked").length);
    })
});

$(function () {
    $("#add").click(function () {
        var $options = $("#select1 option:selected");
        $options.appendTo("#select2");
    });
    $("#add_all").click(function () {
        var $options = $("#select1 option");
        $options.appendTo("#select2");
    });
    $("#select1").dblclick(function () {
        var $options = $("option:selected", this);
        $options.appendTo("#select2");
    })
});

$(function () {
    $(".required").each(function () {
        $(this).parent().append($("<strong class='high'>*</strong>"));
    });

    $("form :input").blur(function () {
        var $parent = $(this).parent();
        $parent.find(".formtips").remove();
        //验证用户
        if($(this).is("#username")){
            if(this.value == "" || this.value.length < 6){
                var errorMsg = '请输入至少6位的用户名.';
                $parent.append('<span class="formtips onError">'+errorMsg+"</span>");
            }else {
                var okMsg = '输入正确';
                $parent.append('<span class="formtips onSuccess">'+okMsg+"</span>");
            }
        };
        //验证邮箱
        if($(this).is("#email")){
            if(this.value == "" || (this.value != "" && !/.+@.+\.[a-zA-Z] {2,4}$/.test(this.value))){
                var errorMsg = '请输入正确的E-Mail地址';
                $parent.append('<span class="formtips onError">'+errorMsg+"</span>");
            }else {
                var okMsg = '输入正确';
                $parent.append('<span class="formtips onSuccess">'+okMsg+"</span>");
            }
        };

    }).keyup(function () {
        $(this).triggerHandler("blur");
    }).focus(function () {
        $(this).triggerHandler("blur");
    });
    //提交前的整体判断
    $("#send").click(function () {
        $("form .required:input").trigger('blur');
        var numError = $("form .onError").length();
        if(numError){
            return false;
        }
        alert("注册成功");
    })
});

























