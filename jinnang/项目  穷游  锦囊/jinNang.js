//顶部导航
    //获取li里的a标签
$(function () {
    //判断条件
    //设置锦囊的颜色为绿色不变
    $("#dh>.leftList>li>a:eq(1)").css("color","green");
    $("#dh>.leftList>li").mouseenter(function () {
        $(this).children().css("color","green");
        //显示或隐藏社区的下拉框
        if($(this).index()==4){
            $(this).find(".dropDown").stop().show(500);
        }else if($(this).index()==8){
            $(this).find(".dropDownRight").stop().show(500);
        }
    }).mouseleave(function () {
        //设置鼠标离开时字体的颜色
        if($(this).index()!=2){
            $(this).children().css("color","");
        }
        //鼠标离开时  下拉框隐藏
        if($(this).index()==4){
                $("#dh>.leftList>li .dropDown").stop().hide(500);
        }else if($(this).index()==8){
                $(this).find(".dropDownRight").stop().hide(500);
        }
    });
    //左侧下拉框
    //鼠标移到社区下拉框  下拉框的样式
    $("#dh>.leftList>li .dropDown>p").mouseenter(function () {
            $(this).css("backgroundColor","skyblue");
    }).mouseleave(function () {
            $(this).css("backgroundColor","");
    });
    //鼠标进入第一行是显示隐藏的侧框
    $("#dh>.leftList>li .dropDown>p:eq(0)").mouseenter(function () {
        $("#dh .hideDv").stop().show(500);
    }).mouseleave(function () {
            $("#dh .hideDv").stop().hide(500);
    });
    //侧框
    $("#dh .hideDv").mouseenter(function () {
        //进入时显示hideDv和dropDown
        $(this).stop(false,true).show();
        $("#dh>.leftList>li .dropDown").stop().show();
    }).mouseleave(function () {
        //离开时隐藏
            $("#dh .hideDv").stop().hide(500);
            $("#dh>.leftList>li .dropDown").stop().hide(500);
    });
    //右侧下拉框
    $("#dh>.leftList>li .dropDownRight>p").mouseenter(function () {
        $(this).css("backgroundColor","skyblue");
    }).mouseleave(function () {
        $(this).css("backgroundColor","");
    });

    //  登录搜索部分
    $("#dh>.rightList>ul>li>a").mouseenter(function () {
        $(this).css("color","green");
    }).mouseleave(function () {
        $(this).css("color","");
    });

    var flag=true;
    $("#dh>.rightList>ul>.search>input").mouseenter(function () {
        // flag=true;
        $(this).stop().animate({"width":"190"});
        $(this).css("backgroundColor","white")
    }).mouseleave(function () {
        if(flag){
            $(this).stop().animate({"width":"20"},function () {
                $("#dh>.rightList>ul>.search>input").css("backgroundColor","")
            });
        }
    }).focus(function () {
        flag=false;
    }).blur(function () {
        $(this).val("");
        $(this).stop().animate({"width":"20"},function () {
            $("#dh>.rightList>ul>.search>input").css("backgroundColor","")
        });
        flag=true;
    });


});
