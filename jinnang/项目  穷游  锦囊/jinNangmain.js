//搜索框
var f = true;  //判断
$(function () {
    $("#main>#mainTop>.bx>.mainSearch>.search").focus(function () {
        $(this).keydown(function () {
            if (f) {
                $(this).val("");
                console.log(f);
                f = false;
            }
        });
    }).blur(function () {
        $(this).val("搜索穷游锦囊");
        f = true;
    });
// 点击X
    $("#main>#mainTop>.bx>.mainSearch>.close").click(function () {
        $(this).prev().val("搜索穷游锦囊");
    }).mouseenter(function () {
        $(this).css("cursor", "pointer");
    });
//mainfixpr  轮播图位置  左侧
    //获取左侧的li列表
    $("#mainFixPr>.bx>.prLeft>.bigUl>li").mouseenter(function () {
        var index = $(this).index();
        if ($(this).index() != 10) {
            $(this).find("div").css("backgroundColor", "#ececec");
        }
        $("#mainFixPr>.bx>.prLeft>.hide>.hideBlock:eq(" + index + ")").show();
    }).mouseleave(function () {
        var index = $(this).index();
        $(this).find("div").css("backgroundColor", "");
        $("#mainFixPr>.bx>.prLeft>.hide>.hideBlock:eq(" + index + ")").hide();
    });
    //最后一个li里的样式 二维码那块
    $("#mainFixPr>.bx>.prLeft>.bigUl>li:eq(10)").find("a").mouseenter(function () {
        $(this).css("text-decoration", "underline");
    }).mouseleave(function () {
        $(this).css("text-decoration", "none");
    });

    //隐藏内容时隐藏的span
    var spans = $("#mainFixPr>.bx>.prLeft>.hide>.hideBlock>span");
    for (var i = 0; i < spans.length; i++) {
        if ($("#mainFixPr>.bx>.prLeft>.hide>.hideBlock>span:eq(" + i + ")").text() == "隐藏") {
            $("#mainFixPr>.bx>.prLeft>.hide>.hideBlock>span:eq(" + i + ")").css("display", "none");
        }
    }

    var flag = true;//用来判断是否隐藏
    // 鼠标移动到hideBlock的div上时不隐藏
    $("#mainFixPr>.bx>.prLeft>.hide>.hideBlock").mouseenter(function () {
        var index = $(this).index();
        $("#mainFixPr>.bx>.prLeft>.bigUl>li:eq(" + index + ")").find("div").css("backgroundColor", "#ececec");
        $(this).show();
        // console.log($(this).find("li"));
        $(this).css("width", $(this).find("li").length * 175)
    }).mouseleave(function () {

        var index = $(this).index();
        $("#mainFixPr>.bx>.prLeft>.bigUl>li:eq(" + index + ")").find("div").css("backgroundColor", "");
        if (flag) {
            $(this).hide();
        }
    });
    //点击span 进行切换内容
    var pic2 = 0;
    $("#mainFixPr>.bx>.prLeft>.hide>.hideBlock>span").click(function () {
        //若果点击的是spanL
        if ($(this).attr("class") == "spanL") {
            pic2--;
            if (pic >= 0) {
                flag = false;
            }
            if (pic2 <= 0) {
                pic2 = 0;
                $(this).parent().children("div").animate({"left": -pic2 * 700}, function () {
                    flag = true;
                });
                $(this).next().css("backgroundColor", "#737373");
                $(this).css("backgroundColor", "#cecece");
            } else {
                $(this).parent().children("div").animate({"left": -pic2 * 700}, function () {
                    flag = true;
                });
                $(this).next().css("backgroundColor", "#737373");
            }
            //若果点击的是spanR
        } else if ($(this).attr("class") == "spanR") {
            pic2++;
            if (pic2 <= Math.ceil($(this).parent().children("div").find("li").length / 4) - 1) {
                flag = false;
            }
            if (pic2 >= Math.ceil($(this).parent().children("div").find("li").length / 4) - 1) {
                pic2 = Math.ceil($(this).parent().children("div").find("li").length / 4) - 1;
                $(this).parent().children("div").animate({"left": -pic2 * 700}, function () {
                    flag = true;
                });
                $(this).css("backgroundColor", "#cecece");
                $(this).prev().css("backgroundColor", "#737373");
                $(this).parent().children("div").css("backgroundColor", "#f6f6f6");
            } else {
                $(this).parent().children("div").animate({"left": -pic2 * 700}, function () {
                    flag = true;
                });
                $(this).prev().css("backgroundColor", "#737373");
            }
        }
    });


    //mainfixpr  轮播图位置  右侧
    var pic = 0;
    //相框宽度
    var imgWidth = $("#mainFixPr>.bx>.prRight>.bigJpg").width();
    //小div  轮播图片列表
    var smallJpg = $("#mainFixPr>.bx>.prRight>.bigJpg>.smallJpg");
    var list = $("#mainFixPr>.bx>.prRight>.bigJpg>.radius>li");
    //克隆第一张图片放入到小div中
    $("#mainFixPr>.bx>.prRight>.bigJpg>.smallJpg>span:eq(0)").clone("true").appendTo($("#mainFixPr>.bx>.prRight>.bigJpg>.smallJpg"));
    //图片 小div里的
    var spanList = $("#mainFixPr>.bx>.prRight>.bigJpg>.smallJpg>span");
    // console.log(list.length);
    //设置定时器   
    smallJpg.timeId = setInterval(f1, 2000);
    $("#mainFixPr>.bx>.prRight>.bigJpg>.radius>li:eq(0)").css("backgroundColor", "#fff");
    function f1() {
        if (pic == spanList.length - 1) {
            pic = 0;
            $("#mainFixPr>.bx>.prRight>.bigJpg>.smallJpg").css("left", "0");
        }
        pic++;
        //小div移动  实现轮播图效果
        $("#mainFixPr>.bx>.prRight>.bigJpg>.smallJpg").animate({"left": -pic * imgWidth});
        for (var i = 0; i < list.length; i++) {
            $("#mainFixPr>.bx>.prRight>.bigJpg>.radius>li:eq(" + i + ")").css("backgroundColor", "");
        }
        if (pic == spanList.length - 1) {
            $("#mainFixPr>.bx>.prRight>.bigJpg>.radius>li:eq(0)").css("backgroundColor", "#fff");
        } else {
            $("#mainFixPr>.bx>.prRight>.bigJpg>.radius>li:eq(" + pic + ")").css("backgroundColor", "#fff");
        }
    }

    //鼠标进入图片的操作
    $("#mainFixPr>.bx>.prRight>.bigJpg>.smallJpg>span").mouseenter(function () {
        //进入图片清除定时器
        clearInterval(smallJpg.timeId);
    }).mouseleave(function () {
        //离开图片创建定时器
        smallJpg.timeId = setInterval(f1, 2000);
    });
    //鼠标进去图片下的小圆点的操作
    $("#mainFixPr>.bx>.prRight>.bigJpg>.radius>li").mouseenter(function () {
        clearInterval(smallJpg.timeId);
        var index = $(this).index();
        if (pic == 5) {
            pic = 0;
        }
        for (var i = 0; i < list.length; i++) {
            $("#mainFixPr>.bx>.prRight>.bigJpg>.radius>li:eq(" + i + ")").css("backgroundColor", "");
        }
        if (pic < index) {
            $("#mainFixPr>.bx>.prRight>.bigJpg>.smallJpg").css("left", -(index - 1) * imgWidth)
        } else if (pic > index) {
            $("#mainFixPr>.bx>.prRight>.bigJpg>.smallJpg").css("left", -(index + 1) * imgWidth)
        }
        pic = index;
        $(this).css("backgroundColor", "#fff");
        $("#mainFixPr>.bx>.prRight>.bigJpg>.smallJpg").animate({"left": -pic * imgWidth});
    }).mouseleave(function () {
        smallJpg.timeId = setInterval(f1, 2000);
    });


    var fla = "";
    // //编辑推荐
    //获取span标签中的a
    $("#edit>.bx>.rmd li>span>a").mousemove(function (e) {
        var spanA = $(this)[0];
        clearTimeout(spanA.timeId);
        if (fla != "block") {
            if ($("#cls")) {
                $("#cls").remove();
            }
            //创建div
            $("<div>" + $(this).parent().parent().find("i").text() + "穷游锦囊" + "</div>").appendTo($(this));
            //设置div样式
            $(this).find("div").attr("id", "cls");
            $(this).find("div").css("display", "none");
            //获取鼠标在图片中的位置
            var x = e.pageX - $(this).parent().parent().offset().left;
            var y = e.pageY - $(this).parent().parent().offset().top;
            spanA.timeId = setTimeout(function () {
                $("#edit>.bx>.rmd li>span>a").find("div").css({
                    "display": "block",
                    "fontSize": "12px",
                    "padding": "2px",
                    "width": $("#edit>.bx>.rmd li>span>a").find("div").text().length * 12,
                    "height": "14px",
                    "border": "1px solid #cccccc",
                    "backgroundColor": "#f6f6f6",
                    "position": "absolute",
                    "zIndex": "5",
                    "textAlign": "center",
                    "lineHeight": "14px",
                    "borderRadius": "3px",
                    "left": x,
                    "top": y + 15,
                    "color": "#635b48"
                });
                console.log("123");
                fla = "block";
            }, 500);

        }
    }).mouseleave(function () {
        clearTimeout($(this)[0].timeId);
        if ($("#cls")) {
            $("#cls").remove();
        }
        fla = "none";
    });
    //编辑推荐下图片的a
    $("#edit>.bx>.rmd li>.aN>a").mousemove(function (e) {
        var aObj = $(this)[0];
        clearTimeout(aObj.timeId);
        if (fla != "block") {
            //设置a标签的样式
            $(this).css("textDecoration", "underline");
            var dv = $(this).parent().parent().children("i");
            //鼠标放上显示的框   i标签
            dv.css("width", $(this).text().length * 12).css("height", "14");
            var x = e.pageX - $(this).parent().parent().offset().left;
            aObj.timeId = setTimeout(function () {
                console.log("hh");
                dv.css({
                    "left": x,
                    "display": "block",
                    "textAlign": "center",
                    "border": "1px solid #cccccc",
                    "lineHeight": "14px",
                    "borderRadius": "3px"
                });
                fla = "block";
            }, 500);
        }
    }).mouseleave(function () {
        clearTimeout($(this)[0].timeId);
        $(this).css("textDecoration", "");
        $(this).parent().parent().children("i").css("display", "none");
        fla = "none";
    });
//全部推荐模块
    //获取图片所在的a标签
    $("#allRmd .right .pictureR .top>a").mousemove(function (e) {
        var aObj = $(this)[0];
        clearTimeout(aObj.timeId);
        if (fla != "block") {
            //创建要显示的元素
            if ($("#cls")) {
                $("#cls").remove();
            }
            //创建元素 追加到a里
            var dv = $("<div></div>").appendTo($(this));
            //设置创建元素的id
            dv.attr("id", "cls");
            //获取bottom中的remind的内容
            var s = $(this).parent().next().find(".remind");
            //设置dv的内容
            dv.text(s.text() + "穷游锦囊");
            //获取鼠标距离li的距离横向
            var x = e.pageX - $(this).parent().parent().offset().left;
            var y = e.pageY - $(this).parent().parent().offset().top;
            //设置创建的元素开始隐藏
            dv.css("display", "none");
            //设置dv的样式
            aObj.timeId = setTimeout(function () {
                dv.css({
                    "display": "block",
                    "padding": "2px",
                    "width": dv.text().length * 12,
                    "height": "14px",
                    "border": "1px solid #cccccc",
                    "backgroundColor": "#f6f6f6",
                    "position": "absolute",
                    "zIndex": "5",
                    "lineHeight": "14px",
                    "textAlign": "center",
                    "borderRadius": "3px",
                    "left": x,
                    "top": y + 15,
                    "color": "#635b48"
                });
                console.log("123");
                fla = "block";
            }, 500);
        }
    }).mouseleave(function () {
        clearTimeout($(this)[0].timeId);
        if ($("#cls")) {
            //判断如果有测清除
            $("#cls").remove();
        }
        fla = "none";
    });


    //bottom里的 span 里的 a
    $("#allRmd .right .pictureR .bottom>span>a").mousemove(function (e) {
        var at = $(this)[0];
        clearTimeout(at.timeId);
        if (fla != "block") {
            //获取鼠标距离li的距离
            var x = e.pageX - $(this).parent().parent().parent().offset().left;
            //bottom里的提示  remind
            var dt = $(this).parent().parent().find(".remind");
            // 设置提示框的位置
            at.timeId = setTimeout(function () {
                dt.css({
                    "width": dt.text().length * 12,
                    "height": "16px",
                    "borderRadius": "3px",
                    "left": x + 10,
                    "display": "block"
                });
                fla = "block";
            }, 500);
        }
    }).mouseleave(function () {
        clearTimeout($(this)[0].timeId);
        //bottom里的提示  remind  隐藏
        $(this).parent().parent().find(".remind").css("display", "none");
        fla = "none";
    });

    $(window).scroll(function () {
        var x= $(document).scrollTop();
        if(x>700){
            $("#returnTop").css("display","block");

        }else {
            $("#returnTop").css("display","none");
        }
    });
    $("#returnTop").click(function () {

        $("body").animate({"scrollTop":0},function () {
            $("#returnTop").css("display","none");
        });

    });

});


//全部穷游锦囊推荐 部分
//选择按什么规定显示  更新时间  和 七天下载
var right = my$("allRmd").children[0].children[1];
// 选择规定下的图片
var pictureR = right.children[2];
//图片列表 li
var piclist = pictureR.getElementsByTagName("li");
var select = right.children[1].children;
//获取用来替换的div
var replace = my$("replace");
var replaceList = replace.children[0].getElementsByTagName("li");
//声明变量记录数据   对象
var src = [];
var href = [];
var zt = [];
var country = [];
var reTime = [];
var prompt = [];

// 更新时间
select[0].children[0].style.color = "#000";
select[0].onclick = function () {
    this.children[0].style.color = "#000";
    select[2].children[0].style.color = "";
    for (var i = 0; i < piclist.length; i++) {
        piclist[i].children[0].children[0].children[0].src = src[i];
        piclist[i].children[1].children[0].children[0].href = href[i];
        piclist[i].children[1].children[0].children[0].innerText = zt[i];
        piclist[i].children[1].children[1].innerText = country[i];
        piclist[i].children[1].children[2].innerText = reTime[i];
        piclist[i].children[1].children[3].innerText = prompt[i];
    }
};
// 七天下载
select[2].onclick = function () {
    this.children[0].style.color = "#000";
    select[0].children[0].style.color = "";
    for (var i = 0; i < piclist.length; i++) {
        //图片的地址
        src.push(piclist[i].children[0].children[0].children[0].src);
        piclist[i].children[0].children[0].children[0].src = replaceList[i].children[0].children[0].children[0].src;
        //a标签超链接地址
        href.push(piclist[i].children[1].children[0].children[0].href);
        piclist[i].children[1].children[0].children[0].href = replaceList[i].children[1].children[0].children[0].href;
        //地点名
        zt.push(piclist[i].children[1].children[0].children[0].innerText);
        piclist[i].children[1].children[0].children[0].innerText = replaceList[i].children[1].children[0].children[0].innerText;
        //国家名
        country.push(piclist[i].children[1].children[1].innerText);
        piclist[i].children[1].children[1].innerText = replaceList[i].children[1].children[1].innerText;
        //更新时间
        reTime.push(piclist[i].children[1].children[2].innerText);
        piclist[i].children[1].children[2].innerText = replaceList[i].children[1].children[2].innerText;
        //提示信息
        prompt.push(piclist[i].children[1].children[3].innerText);
        piclist[i].children[1].children[3].innerText = replaceList[i].children[1].children[3].innerText;
    }
};