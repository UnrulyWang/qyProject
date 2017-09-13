/**
 * Created by Administrator on 2017/7/3.
 */

//轮播图动画效果
window.onload = function () {
    //轮播图动画效果
    function print() {
        var banner = my$("banner");
        //获取ul外层盒子
        var imgBanner = my$("img-banner");
        //获取宽度
        var imgWidth = imgBanner.offsetWidth;
        //获取ul标签
        var ulObj = imgBanner.children[0];
        //获取ul中的li
        var list = ulObj.children;
        //获取左侧按钮
        var bLeft = my$("b-left").children[0];
        //获取右侧按钮
        var bRight = my$("b-right").children[0];

        var pic = 0;
        var flag = true;
        //创建span标签

        //创建第六个li便签
        ulObj.appendChild(ulObj.children[0].cloneNode(true));
        //页面加载后需要图片自动的移动
        var timer = setInterval(fn1, 5000);

        banner.onmouseover = function () {
            clearInterval(timer);
        };
        banner.onmouseout = function () {
            timer = setInterval(fn1, 5000);
        };

        bRight.onclick = fn1;

        function fn1() {
            clearInterval(timer);
            if (pic == list.length - 1) {
                pic = 0;
                ulObj.style.left = -pic * imgWidth + "px";
            }
            if (flag = true) {
                pic++;
                animate(ulObj, {"left": -pic * imgWidth}, 20, function () {
                    flag = true;
                });
            }
        };

        bLeft.onclick = function () {
            if (pic == 0) {
                pic = list.length - 1;
                ulObj.style.left = -pic * imgWidth + "px";
            }
            if (flag = true) {
                pic--;
                animate(ulObj, {"left": -pic * imgWidth}, 20, function () {
                    flag = true;
                });
            }
        };
    }

//
//
//    //头部按钮特效
//
//    //头部下拉菜单显示
//    function mouse() {
//        //获取nav中社区盒子li
//        var home = my$("home");
//        //获取要显示的div盒子
//        var hm = my$("hm");
//        //获取穷游下的li标签集合
//        var hmList = my$("uu").children;
//        //获取旅行论坛下子盒子
//        var layer = my$("layer");
//        //获取旅行论坛盒子
//        var box = layer.parentElement.children[0];
//
//
//        //获取预定盒子
//        var reserve = my$("reserve");
//        //获取显示的盒子
//        var show = my$("reserve-in");
//        //获取reverse下li
//        var lis = show.children[0].children;
//        var flag;
//        var num = 0;
//        //注册鼠标进入和离开事件
//        home.onmouseover = function () {
//            for (var i = 0; i < hmList.length; i++) {
//                hmList[i].onmouseout = function () {
//                    this.style.backgroundColor = "";
//                };
//                hmList[i].onmouseover = function () {
//                    this.style.backgroundColor = "skyBlue";
//                };
//            }
//
//            hm.style.display = "block";
//            box.onmouseover = function (e) {
//                e = window.event || e;
//                e.stopPropagation();
//                layer.style.display = "block";
//                num = 1;
//            }
//        };
//        layer.onmouseout = function (e) {
//            e = window.event || e;
//            e.stopPropagation();
//            if (num == 1) {
//                layer.style.display = "block";
//            }
//            hm.style.display = "none";
//        };
//
//
//        reserve.onmouseover = function () {
//            show.style.display = "block";
//            for (var i = 0; i < lis.length; i++) {
//                lis[i].onmouseout = function () {
//                    this.style.backgroundColor = "";
//                };
//                lis[i].onmouseover = function () {
//                    this.style.backgroundColor = "skyBlue";
//                };
//            }
//        };
//        reserve.onmouseout = function () {
//            show.style.display = "none";
//        };
//    }
//
//    //文本框效果
//    function caseFn() {
//        //获取目的地
//        var place = my$("place");
//        //获取文本框
//        var case1 = my$("case1");
//        //获取热门城市
//        var hot = my$("hot");
//        //注册点击事件
//        //获取热门城市
//        var city = hot.children[1].children;
//        //获取输入框文本
//        var text = my$("text");
//        //获取做行程按钮
//        var plan = my$("plan");
//        //做行程对应的盒子
//        var plans = my$("plans");
//        //获取按钮id
//        var but = my$("but");
//        //获取买折扣盒子
//        var pic = my$("discount");
//        //获取酒店盒子
//        var hotel = my$("hotel");
//        //获取大盒子
//        var search = my$("search");
//        var arr = ["香港", "曼谷", "东京", "澳门", "首尔"];
//        var timer = setInterval(function () {
//            var num = parseInt(Math.random() * 5);
//            for (var i = 0; i < arr.length; i++) {
//                case1.value = arr[num];
//            }
//        }, 4000);
//        //注册获得焦点事件
//        case1.onfocus = function () {
//            clearInterval(timer);
//            //case1.value = "";
//            hot.style.display = "block";
//            for (var i = 0; i < city.length; i++) {
//                city[i].onmouseover = function () {
//                    this.style.color = "red";
//                }
//                city[i].onmouseout = function () {
//                    this.style.color = "";
//                }
//                city[i].onclick = function () {
//                    alert("11");
//                    return false;
//                }
//            }
//        }
//        case1.onblur = function () {
//            timer = setInterval(function () {
//                var num = parseInt(Math.random() * 5);
//                for (var i = 0; i < arr.length; i++) {
//                    case1.value = arr[num];
//                }
//            }, 4000);
//            hot.style.display = "none";
//        }
//        plan.onclick = function () {
//            clearInterval(timer);
//            case1.style.display = "none";
//            but.style.display = "none";
//            plans.style.display = "block";
//            search.style.height = "152px";
//        };
//        pic.onclick = function () {
//            clearInterval(timer);
//            search.style.height = "104px";
//            case1.style.display = "block";
//            but.style.display = "block";
//            plans.style.display = "none";
//            case1.value = "搜索目的地/折扣类型/关键词";
//        };
//        hotel.onclick = function () {
//            clearInterval(timer);
//            search.style.height = "104px";
//            case1.style.display = "block";
//            but.style.display = "block";
//            plans.style.display = "none";
//            case1.value = "请输入目的地/酒店名";
//        };
//        place.onclick = function () {
//            search.style.height = "104px";
//            case1.style.display = "block";
//            but.style.display = "block";
//            plans.style.display = "none";
//            timer = setInterval(function () {
//                var num = parseInt(Math.random() * 5);
//                for (var i = 0; i < arr.length; i++) {
//                    case1.value = arr[num];
//                }
//            }, 4000);
//            case1.value = "惠灵顿";
//        };
//
//
//    }
//
//    //感兴趣模块交换
//    function change() {
//        //获取按钮交换
//        var btn = my$("btn");
//        //获取所有ul盒子
//        var ctl = my$("contentall").children;
//        btn.onclick = function () {
//            var num = parseInt(Math.random() * 6);
//            for (var i = 0; i < ctl.length; i++) {
//                for (var j = 0; j < ctl.length; j++) {
//                    ctl[j].className = "hide";
//                }
//                ctl[num].className = "show clearfix";
//            }
//        }
//
//    }
//
//    //穷游商城
//    function shop() {
//        //获取滑动盒子下的所有ul元素
//        var slider = my$("slider").children;
//        //获取图片下所有的a标签
//        var contrl = my$("b-icon").children;
//        for (var i = 0; i < contrl.length; i++) {
//            contrl[i].setAttribute("index", i);
//            contrl[i].onmouseover = function () {
//                for (var j = 0; j < contrl.length; j++) {
//                    contrl[j].style.backgroundColor = "";
//                }
//                this.style.backgroundColor = "#0886c6";
//                for (var i = 0; i < slider.length; i++) {
//                    slider[i].className = "item hide";
//                }
//                slider[this.getAttribute("index")].className = "item show";
//            };
//        }
//
//    }
//
//    //穷游体验馆tab栏切换
//    function tab() {
//        //获取文字li标签
//        var tab = my$("tab-bt").children;
//        //获取ol中的li
//        var liOl = my$("liols").children;
//        for (var i = 0; i < tab.length; i++) {
//            tab[i].setAttribute("index", i);
//            tab[i].onmouseover = function () {
//                for (var k = 0; k < tab.length; k++) {
//                    tab[k].removeAttribute("class");
//                }
//                this.className = "current";
//                for (var j = 0; j < liOl.length; j++) {
//                    liOl[j].className = "hide";
//                }
//                liOl[this.getAttribute("index")].className = "current";
//            };
//
//        }
//    }
////
////    //游记特效
//    function travel() {
//        var tnt = my$("tnt").children;
//        //获取图片下所有的a标签
//        var con = my$("con").children;
//        for (var i = 0; i < con.length; i++) {
//            con[i].setAttribute("index", i);
//            con[i].onmouseover = function () {
//                for (var j = 0; j < con.length; j++) {
//                    con[j].style.backgroundColor = "#fff ";
//                }
//                this.style.backgroundColor = "#0886c6";
//                for (var i = 0; i < tnt.length; i++) {
//                    tnt[i].className = "item hide";
//                }
//                tnt[this.getAttribute("index")].className = "item show";
//            };
//        }
//    }
////
//    //穷游体验馆小特效
//    function user() {
//        //获取ul的父盒子
//        var user = my$("user");
//        //获取user宽度
//        var imgWidth = user.offsetWidth;
//        //获取ul
//        var ulObj = user.children[0];
//        var n = 0;
//        //clearInterval(ulObj.timeId);
//        ulObj.timeId = setInterval(f1, 200);
//        function f1() {
//            n++;
//            //时时的获取元素的当前的位置
//            var current = ulObj.offsetLeft;
//            var target = -n*imgWidth;
//            //每次移动的步数
//            var step = 5;
//            //设置每次移动的步数是正数还是负数
//            step = current < target ? step : -step;
//            //移动后的当前的位置
//            current += step;
//            ulObj.style.left=current+"px";
//            if(parseInt(Math.ceil(current)) <= "-580"){
//                n = 0;
//                ulObj.style.left = "0px";
//            }
//        }
//        user.onmouseover = function () {
//            clearInterval(ulObj.timeId);
//        }
//        user.onmouseout = function () {
//            ulObj.timeId = setInterval(f1, 200);
//        }
//    }
//    mouse();
//    print();
//    caseFn();
//    change();
//    shop();
//    tab();
//    travel();
//    user();
}




