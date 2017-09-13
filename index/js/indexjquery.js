/**
 * Created by Administrator on 2017/7/14.
 */
//jQueryЧ��
$(function () {
    //ͷ头部开始
    $("#reserve").mouseenter(function () {
        $("#reserve-in").stop().show(200);
        $("#reserve-in li").mouseenter(function () {
            $(this).css("backgroundColor", "skyBlue").siblings("li").css("backgroundColor", "");
        });
    }).mouseleave(function () {
        $("#reserve-in li").css("backgroundColor", "");
        $("#reserve-in").stop().hide(200);
    });
    $("#home").mouseenter(function () {
        $("#hm").stop().show(200);
        $("#uu li").mouseenter(function () {
            $(this).css("backgroundColor", "skyBlue").siblings("li").css("backgroundColor", "");
        });
        $("#uu>li:first").mouseenter(function () {
            $(".mouse").css("display", "block");
            $("#layer").stop().show(200);
        });
        $("#layer").mouseenter(function () {
            $("this").css("color", "skyBlue");
        });
    }).mouseleave(function () {
        $("#uu li").css("backgroundColor", "");
        $("#hm").stop().hide(200);
        $("#uu>li:first").mouseleave(function () {
            $("#layer").stop().hide(200);
        });
        $("#layer").mouseleave(function () {
            $(".mouse").css("display", "none");
        });
    });
    //头部搜索区域
    $("#img-s").mouseenter(function () {
        $("#tt").css("width", "100").stop().show(200);
    });
    $("#is").mouseleave(function () {
        $("#tt").css("width", "0").stop().hide(200);
    });
    //地址
    $("#place").click(function () {
        $("#case1").show(200);
        $("#but").show(200);
        $("#plans").hide(200);
        $("#sec").hide(200);
        $("#search").css("height", "104px");
        $("#case1").show(200).val("你要去哪儿？");
    });
    $("#plan").click(function () {
        $("#case1").hide(200);
        $("#but").hide(200);
        $("#plans").show(200);
        $("#sec").hide(200);
        $("#search").css("height", "154px");
    });
    $("#discount").click(function () {
        $("#case1").show(200).val("搜索目的地/折扣类型/关键词？");
        $("#but").show(200);
        $("#plans").hide(200);
        $("#search").css("height", "104px");
        $("#case1").focus(function () {
            $("#sec").show(200);
        });
        $("#case1").blur(function () {
            $("#sec").hide(200);
        });
    });
    $("#hotel").click(function () {
        $("#case1").show(200).val("请输入目的地/酒店名");
        $("#but").show(200);
        $("#plans").hide(200);
        $("#sec").hide(200);
        $("#search").css("height", "104px");
        $("#case1").focus(function () {
            $("#hot").show(200);
        });
        $("#case1").blur(function () {
            $("#hot").hide(200);
        });
    });
    $("#case1").focus(function () {
        $("#hot").show(200);
    }).blur(function () {
        $("#hot").hide(200);
    });
    //轮播图
    var pic = 0;
    var imgWidth = $("#img-banner").width();
    $("#b-left>span").click(fn);
    //封装左侧轮播
    function fn() {
        clearInterval(timeId);
        if (pic == $('#img-banner>ul>li').length - 1) {
            pic = 0;
            $("#img-banner>ul").css('left', -pic * imgWidth);
        }
        //点击一次，移动一次图片
        pic++;
        $("#img-banner>ul").stop().animate({"left": -pic * imgWidth});
    }

    $("#b-right>span").click(function () {
        clearInterval(timeId);
        if (pic == 0) {
            pic = $('#img-banner>ul>li').length - 1;
            $("#img-banner>ul").css('left', -pic * imgWidth);
        }
        //点击一次，移动一次图片
        pic--;
        $("#img-banner>ul").stop().animate({"left": -pic * imgWidth});
    });
    //自动切换
    var timeId = setInterval(fn, 2000);
    //鼠标进入图片，停止切换
    $("#img-banner").mouseenter(function () {
        clearInterval(timeId);
    }).mouseleave(function () {
        //鼠标离开图片，自动切换
        timeId = setInterval(fn, 2000);
    });
    //感兴趣
    var num = 0;
    $("#btn").click(function () {
        if (num == 6) {
            num = 0;
            $("#contentall ul:eq(0)").show(200).removeClass("show").siblings("ul").hide(100);
        }
        num++;
        $("#contentall ul:eq(" + num + ")").show(200).siblings("ul").hide(100);
    });


    //感兴趣
    var n = 0;
    $("#b-icon a:eq(0)").css("backgroundColor", "skyBlue").siblings().css("backgroundColor", "");
    $("#b-icon a").mouseenter(function () {
        if (n == 5) {
            n = 0;
            $("#slider .item:eq(0)").show(0).siblings().hide(0);
            $("#b-icon a:eq(0)").css("backgroundColor", "skyBlue").siblings().css("backgroundColor", "");
        }
        n++;
        $("#slider .item:eq(" + n + ")").show(0).siblings().hide(0);
        $(this).css("backgroundColor", "skyBlue").siblings().css("backgroundColor", "");

    });
//热门游记与话题
    var x = 0;
    $("#con a:eq(0)").css("backgroundColor", "skyBlue").siblings().css("backgroundColor", "");
    $("#con a").mouseenter(function () {
        if (x == 5) {
            x = 0;
            $("#tnt .item:eq(0)").show().siblings().hide();
            $("#con a:eq(0)").css("backgroundColor", "skyBlue").siblings().css("backgroundColor", "");
        }
        x++;
        $("#tnt .item:eq(" + x + ")").show().siblings().hide();
        $(this).css("backgroundColor", "skyBlue").siblings().css("backgroundColor", "");
    });
    //近期参与
    var step = 0;
    var imgUser = $("#user ul li").width();

    var tiemr = setInterval(f2, 500);

    function f2() {
        if (parseInt(-step * imgUser) <= -560) {
            step = 0;
            $("#user>ul").css('left', 20);
        }
        step++;
        $("#user>ul").stop().animate({"left": -step * imgUser});
    }

    $("#user").mouseenter(function () {
        clearInterval(tiemr);
    }).mouseleave(function () {
        tiemr = setInterval(f2, 500);
    });
//特别策划
    $("#tab-bt li").mouseenter(function () {
        $(this).addClass("current");
        $(this).siblings("li").removeClass("current");
        var index = $(this).index();
        $("#liols>li:eq(" + index + ")").show();
        $("#liols>li:eq(" + index + ")").siblings("li").hide();
    });
    
    $(window).scroll(function () {
        if ($(document).scrollTop() > 900) {
            $('#scroll-top a').css('display', 'block');
        } else if($(document).scrollTop() <= 900) {
            $('#scroll-top a').css('display', 'none');
        }

    });
    //点击返回顶部
    $("#scroll-top a").click(function () {
        $('body').animate({scrollTop: 0}, 'normal');
    });
});


