/**
 * Created by Administrator on 2017/7/5.
 */
//header下弹框,注册鼠标事件
//鼠标进入
//my$('down').onmouseover = function () {
//    my$('down').children[1].style.display = 'block';
//    animate(my$('down').children[1], {"width": 165, "height": 150, "opacity": 1}, function () {
//        // 获取nav-down下所有的li，把li里面a标签的字体大小标为16px
//        var list = my$('nav-down').children;
//        for (var i = 1; i < list.length; i++) {
//            list[i].children[0].style.fontSize = "16px";
//        }
//    });
//};
$("#down .lay-nav").hide();
$("#nav-down2>div").hide();
$("#navDownLast>ul").hide();
//$("#down .lay-nav").show();
//var list=my$("nav-down").children;
//my$("down").onmouseover=function(){
//  this.children[1].style.display="block";
//    animate(this.children[1],{"width": 165, "height": 150, "opacity": 1},function(){
//        //获取nav-down下的所有的li 把li里的a标签的字体海瑟薇16px
//        for(var i=1;i<list.length;i++){
//            list[i].children[0].style.fontSize = "16px";
//        }
//    })
//};
$("#down").mouseenter(function(){
    $("#down .lay-nav").stop().show(500);
});
$("#down").mouseleave(function(){
    $("#down .lay-nav").stop().hide(500);
});

$("#nav-down2").mouseenter(function(){
    $("#nav-down2>div").css("opacity","1").stop().show(500);
});
$("#nav-down2").mouseleave(function(){
    $("#nav-down2>div").stop().hide(500);
});

$("#navDownLast").mouseenter(function() {
    $("#navDownLast>ul").stop().show(500);
});
$("#navDownLast").mouseleave(function() {
    $("#navDownLast>ul").stop().hide(500);
});
//鼠标离开
//my$("down").onmouseout=function(){
//    animate(this.children[1],{ "opacity": 0},function(){
//        my$("down").children[1].style.display = "none";
//        my$("down").children[1].style.width = 0;
//        my$("down").children[1].style.height = 0;
//        for (var i = 1; i < list.length; i++) {
//            list[i].children[0].style.fontSize = "0px";
//        }
//    });
//};
//my$('down').onmouseout = function () {
//    animate(my$('down').children[1], {"opacity": 0}, function () {
//        my$('down').children[1].style.display = 'none';
//        my$('down').children[1].style.width = 0;
//        my$('down').children[1].style.height = 0;
//        my$('down').children[1].style.opacity = 0;
//        // 获取nav-down下所有的li，把li里面a标签的字体大小标为0px
//        var list = my$('nav-down').children;
//        for (var i = 1; i < list.length; i++) {
//            list[i].children[0].style.fontSize = '0px';
//        }
//    });
//
//};
//$("#nav-down2").mouseenter();
//获取二级下拉框的div
//var nextNav = my$("nav-down2").children[1];
////鼠标进入二级下拉框
//my$("nav-down2").onmouseover = function () {
//    nextNav.style.display = "block";
//    animate(nextNav, {"width": 570, "height": 300, "opacity": 1}, function () {
//        nextNav.style.fontSize = "16px";
//        nextNav.children[0].children[1].children[0].style.fontSize = "16px";
//        var aObj = nextNav.getElementsByTagName("a");
//        for (var i = 0; i < aObj.length; i++) {
//            aObj[i].style.display = "inline";
//        }
//    });
//};
//鼠标离开
//my$("nav-down2").onmouseout = function () {
//    animate(nextNav, {"opacity": 0}, function () {
//        nextNav.style.width = 0;
//        nextNav.style.height = 0;
//        nextNav.style.display = "none";
//        nextNav.style.fontSize = "0px";
//        nextNav.children[0].children[1].children[0].style.fontSize = "0px";
//        var aObj = nextNav.getElementsByTagName("a");
//        for (var i = 0; i < aObj.length; i++) {
//            aObj[i].style.display = "none";
//        }
//    });
//};
////预定下拉框注册事件
////获取预定下的ul
//var ulObj = my$('navDownLast').children[1];
////鼠标进入
//my$('navDownLast').onmouseover = function () {
//    ulObj.style.display = 'block';
//    animate(ulObj, {"width": 110, "height": 190, "opacity": 1}, function () {
//        //让li显示出来
//        for (var i = 0; i < ulObj.children.length; i++) {
//            ulObj.children[i].style.display = 'block';
//        }
//    });
//};
////鼠标离开
//my$('navDownLast').onmouseout = function () {
//    animate(ulObj, {"opacity": 0}, function () {
//        ulObj.style.display = 'none';
//        ulObj.style.width = 0;
//        ulObj.style.height = 0;
//        //让li消失
//        for (var i = 0; i < ulObj.children.length; i++) {
//            ulObj.children[i].style.display = 'none';
//        }
//    });
//};
////鼠标移到导航栏右侧搜索按钮，搜索框变宽
//my$('search').onmouseover = function () {
//    animate(getPreviousElement(this), {"width": 190});
//};
////对搜索框添加多个鼠标事件
//addEventListener(getPreviousElement(my$('search')), "focus", f2);
//addEventListener(getPreviousElement(my$('search')), "blur", f3);
////搜索框获得焦点
//function f2() {
//    this.style.backgroundColor = '190px';
//}
////搜索框失去焦点
//function f3() {
//    this.value = "";
//    animate(this, {"width": 10});
//}

$("#search").bind({"mouseenter":function(){
    //鼠标进入
    $(this).prev().stop().animate({"width":190});
}});
$(".fun .search").bind({"mouseleave":function(){
    //鼠标进入
    $(".fun input").stop().animate({"width":10});
}});
//$(".fun input").bind({"mouseleave":function(){
//    $(this).animate({"width":10});
//}});
$(".fun input").bind({"focus":function(){
    $(".fun .search").unbind("mouseleave")
},"blur":function(){
    $(this).stop().animate({"width":10});
    $(".fun .search").bind({"mouseleave":function(){
        //鼠标进入
        $(".fun input").stop().animate({"width":10});
    }});
}});