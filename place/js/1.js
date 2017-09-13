
////获取整个导航栏
//var nav = my$("nav");
////获取导航栏里面所有的li
//var list = nav.getElementsByTagName("li");
//for (var i = 0; i < list.length; i++) {
//    list[i].onmouseover = function () {
//        for (var j = 1; j < list.length; j++) {
//            list[j].children[0].style.color = "silver"
//        }
//        this.children[0].style.color = "#10b041"
//    }
//}
////社区下面的列表ul所有的li
//var list1 = list[3].children[2].children[0].children;
////    第一个li
//var list11 = list[3].children[2].children[0].children[0];
//var banK = list11.children[1];
////鼠标移动到社区时
//list[3].onmouseover = function () {
//    for (var j = 1; j < list.length; j++) {
//        list[j].children[0].style.color = "silver"
//    }
//    list[3].children[0].style.color = "#10b041";
//    animate(list[3].children[2], {"width": 190, "height": 160});
//    for (var k = 0; k <= list1.length; k++) {
////            list1[k].children[0].style.color="black";
//        list1[k].style.display = "block";
//        list1[k].onmouseover = function () {
//            this.style.backgroundColor = "skyblue";
//        };
//        list1[k].onmouseout = function () {
//            this.style.backgroundColor = "";
//        };
//    }
//};
//list[3].onmouseout = function () {
//    animate(this.children[2], {"width": 0, "height": 0, "font-size": 0});
//    for (var k = 0; k <= list1.length; k++) {
//        list1[k].style.display = "none";
//    }
//};
////第一个li鼠标移动上去
//list[3].children[2].children[0].children[0].onmousedown = function () {
//    for (var j = 1; j < list1.length; j++) {
//        list1[j].children[0].style.backgroundColor = ""
//    }
//    list11.style.backgroundColor = "skyblue";
//    animate(list11.children[1], {"width": 606, "height": 360});
//    for (var b = 0; b <= list11.children[1].children[0].children.length; b++) {
//        list11.children[1].children[0].children[b].style.display = "block"
//    }
//};
//console.log(list11.onmouseover());
////鼠标移开第一个li
//list[3].children[2].children[0].children[0].onmouseup = function () {
//    animate(list11.children[1], {"width": 0, "height": 0});
//    for (var b = 0; b <= list11.children[1].children[0].children.length; b++) {
//        list11.children[1].children[0].children[b].style.display = "none"
//    }
//};

///输入框中的 感叹号 鼠标进入时
//my$("box").onmouseover = function () {
//    animate(my$("p2"), {"width": 120}, function () {
//        my$("p1").style.display = "none";
//        my$("p2").style.display = "block";
//    });
//
//};
$("#box").mouseenter(function(){
    $("#p2").stop().animate({"width": 120},400,function(){
        $("#p1").css("display","none");
        $("#p2").css("display","block");

    })
});
$("#box").mouseleave(function(){
    $("#p2").stop().animate({"width": 0},800,function(){
        $("#p1").css("display","block");
        $("#p2").css("display","none");

    })
});
//my$("box").onmouseout = function () {
//    setTimeout(function () {
//        animate(my$("p2"), {"width": 0}, function () {
//            my$("p1").style.display = "block";
//            my$("p2").style.display = "none";
//        });
//    }, 1000);
//};
//获取输入框内所有的a
//var alist=my$("big").getElementsByTagName("a");
//console.log(alist);
//for(var i=0;i<alist.length;i++){
//    alist[i].onmouseover=function(){
//        //首先排他
//        for(var j=0;j<alist.length;j++){
//            alist[j].style.color="";
//        }
//        this.style.color="red";
//    };
//    alist[i].onmouseout=function(){
//        this.style.color="";
//    }
//}
$("#big a").mouseenter(function(){
    $(this).css("color","red")
}).mouseleave(function(){
    $(this).css("color","");
});
//    选取 金彩世界里面的li
//获取探索的大div
var explore = my$("explore");
//获取探索里的导航
var exNav = explore.children[0];
//获取导航列表
var exlist = exNav.children[1].children;
//用来保存索引值
var pic = 0;
//这是相框的宽度
var ulwidth = 980;
//上一个点击索引值
var lastPic;
for (var i = 0; i < exlist.length; i++) {
    exlist[i].children[0].setAttribute("index", i);
    //点击图片导航栏触发切换ul事件
    exlist[i].children[0].onclick = function () {
        for (var j = 0; j < exlist.length; j++) {
            exlist[j].children[0].removeAttribute("class");
        }
        this.className = "nowrent";
        //获取上一次点击的值
        lastPic = pic;
        console.log((lastPic));
        //获取每个点击的索引值
        pic = this.getAttribute("index");
        console.log((pic));
        for(var k=0;k< $(".pic>img").length;k++){
            $(".pic>img:eq("+k+")")[0].src="picture/u"+(Number(pic)+1)+"pic"+(k+1)+".jpg";
        }

        //当你点击的键在上一个键的右边的时候
        if (pic > lastPic) {
            //之前键的位置小于现在点击的键  例子 lastPic:0 pic:980
            if (my$("worldPic" + [lastPic]).offsetLeft < my$("worldPic" + [pic]).offsetLeft) {
                animate1(my$("worldPic" + [lastPic]), {"left": -ulwidth});
                animate1(my$("worldPic" + [pic]), {"left": 0});
            }
            //之前键的位置小于现在点击的键  例子 lastPic:0 pic:-980
            else {
                animate1(my$("worldPic" + [pic]), {"left": 0});
                animate1(my$("worldPic" + [lastPic]), {"left": ulwidth});
            }
        }
        //当你点击的键在上一个键的左边的时候
        else if (pic < lastPic) {
            // 之前键的位置大于现在点击的键位置 例子 lastPic:0  pic:-980
            if (my$("worldPic" + [lastPic]).offsetLeft > my$("worldPic" + [pic]).offsetLeft) {
                //animate1(my$("worldPic" + [lastPic]), {"left": ulwidth});
                $("#worldPic"+[lastPic]).animate({"left": ulwidth},"normal");
                $("#worldPic"+[pic]).animate({"left":0},"normal");
                //animate1(my$("worldPic" + [pic]), {"left": 0});
            }
            //之前键的位置小于现在点击的键  例子 lastPic:0 pic:980
            else {
                //animate1(my$("worldPic" + [pic]), {"left": 0});
                //animate1(my$("worldPic" + [lastPic]), {"left": -ulwidth});
                $("#worldPic"+[pic]).animate({"left": 0},"normal");
                $("#worldPic"+[lastPic]).animate({"left": -ulwidth},"normal");
            }

        }
    };
}

//获取下面所有的li
var pic1list = explore.children[1].getElementsByTagName("li");
var a1 = pic1list[0].children[0];
//循环遍历li
for (var i = 0; i < pic1list.length; i++) {
    pic1list[i].children[0].onmouseover = function () {
        var mask = this.children[2];
        this.children[1].style.display = "none";
        animate(mask, {"bottom": 0});
        console.log("ni11");
    };
    //鼠标移开
    pic1list[i].children[0].onmouseout = function () {
        var mHeight = this.children[2].offsetHeight;
        var mask = this.children[2];
        animate(mask, {"bottom": -mHeight});
        this.children[1].style.display = "block";
    };
};



//  ///////////////////////////////////////////////////////////  国家
//国家列表
//先获取国家列表的ul
var u2=my$("u2");
//获取下面所有的li
var u2list=u2.children;
//获取索引值
var index=0;
var divlist=my$("coun-list").children;
//获取所有达州li里面的a；
var aobj=my$("coun-list").getElementsByTagName("a");
//循环遍历u2li
for(var i=0;i<u2list.length;i++){
    u2list[i].children[0].setAttribute("index",i);
    //鼠标点击
    u2list[i].children[0].onclick=function(){
        //点击背景色改变
        for(var j=0;j<u2list.length;j++){
            u2list[j].children[0].removeAttribute("class");
        }
        this.className="nowrent";
        index=this.getAttribute("index");
        if(index>0){
            //首先让所有的div都消失透明度变为0
            for(var k=0;k<divlist.length;k++){
                animate(divlist[k],{"opacity":0});
                divlist[k].style.display="none";
            }
            animate( my$("coun"+index),{"opacity":1});
            my$("coun"+index).style.display="block";
        }
        else{
            for(var k=0;k<divlist.length;k++){
                animate(divlist[k],{"opacity":1});
                divlist[k].style.display="block";
            }
        }
    };
}



////循环遍历所有li
//for(var i=0;i<aobj.length;i++){
//    aobj[i].onmouseover=function(){
//        for(var j=0;j<aobj.length;j++){
//            aobj[j].style.backgroundColor="";
//        }
//        this.style.backgroundColor="#CFFFBF";
//    }
//
//}
$("#coun-list a").mouseenter(function(){
    $("#coun-list a").css("backgroundColor","");
    $(this).css("backgroundColor","#CFFFBF");
});
//////信息反馈点击弹出





//获取信息反馈
//var fkpic=my$("fkpic");
//var fk=my$("fk");
//console.log("fk");
//fkpic.onclick=function(){
//    if(fk.style.right=="-246px"){
//        animate(fk,{"right":0},function(){
//            fkpic.style.backgroundPosition="-29px 0";
//        })
//    }
//    else{
//        animate(fk,{"right":-246},function(){
//            fkpic.style.backgroundPosition="";
//        })
//    }
//};
$("#fkpic").click(function(){
    if($("#fk").css("right")=="-246px"){
        $("#fk").animate({"right":0},400,function(){
            $("#fkpic").css("backgroundPosition","-29px 0");
        })
    }
    else{
        $("#fk").animate({"right":-246},400,function(){
            $("#fkpic").css("backgroundPosition","");
        })
    }
});

///回页顶
$(document).scroll(function(){
    if($(document).scrollTop()>400){
        $("#top").css("display","block")
    }
    else if($(document).scrollTop()<=400){
        $("#top").css("display","none")
    }
});

$("#top").click(function(){

    $("body").animate({scrollTop:0},400);
});
console.log($(document).scrollTop());

//滚动条国家列表
$(".city a").click(function () {
    $("body").animate({scrollTop:1600},500);
    return false;
});