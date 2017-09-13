/*
* @Author: yatou
* @Date:   2017-07-04 17:07:58
* @Last Modified by:   yatou
* @Last Modified time: 2017-07-10 22:00:21
*/

//根据id获取对应的元素
function my$(id) {
    return document.getElementById(id);
}
/*
* element---任意的元素
* attr---属性
* */
function getAttrValue(element,attr) {
    return element.currentStyle?element.currentStyle[attr] : window.getComputedStyle(element,null)[attr]||0;
}

// 缓动动画函数
function animate(element,json,fn) {
    clearInterval(element.timeId);
    element.timeId=setInterval(function () {
        var flag=true;//假设都达到了目标
        for(var attr in json){
            if(attr=="opacity"){//判断属性是不是opacity
                var current= getAttrValue(element,attr)*100;
                //每次移动多少步
                var target=json[attr]*100;//直接赋值给一个变量,后面的代码都不用改
                var step=(target-current)/10;//(目标-当前)/10
                step=step>0?Math.ceil(step):Math.floor(step);
                current=current+step;
                element.style[attr]=current/100;
            }else if(attr=="zIndex"){//判断属性是不是zIndex
                element.style[attr]=json[attr];
            }else{//普通的属性

                //获取当前的位置----getAttrValue(element,attr)获取的是字符串类型
                var current= parseInt(getAttrValue(element,attr))||0;
                //每次移动多少步
                var target=json[attr];//直接赋值给一个变量,后面的代码都不用改
                var step=(target-current)/10;//(目标-当前)/10
                step=step>0?Math.ceil(step):Math.floor(step);
                current=current+step;
                element.style[attr]=current+"px";
            }
            if(current!=target){
                flag=false;//如果没到目标结果就为false
            }
        }
        if(flag){//结果为true
            clearInterval(element.timeId);
            if(fn){//如果用户传入了回调的函数
                fn(); //就直接的调用,
            }
        }
        console.log("target:"+target+"current:"+current+"step:"+step);
    },20);
}



 
var evtTools={
    //该函数的返回值是一个事件参数对象
    getEvent:function (e) {
      return window.event||e;
    },
    //获取的是相对于页面可视区域的横坐标
    getClientX:function (e) {
      return this.getEvent(e).clientX;
    },
    //获取的是相对于页面可视区域的纵坐标
    getClientY:function (e) {
      return this.getEvent(e).clientY;
    },
    //获取的是向左卷曲出去的横坐标---相对于页面
    getScrollLeft:function () {
      return window.pageXOffset||document.body.scrollLeft||document.documentElement.scrollLeft||0;
    },
    //获取的是向上卷曲出去的纵坐标---相对于页面
    getScrollTop:function () {
      return window.pageYOffset||document.body.scrollTop||document.documentElement.scrollTop||0;
    },
    setScrollTop:function(height) {
        if (window.pageYOffset) {
            window.pageYOffset = height;
        };
        if (document.body.scrollTop) {
            document.body.scrollTop = height;
        };
        if (document.documentElement.scrollTop) {
            document.documentElement.scrollTop = height;
        };
    },
    //获取的是相对于页面的横坐标----(卷曲出去的横坐标+可视区域的横坐标)
    getPageX:function (e) {
      return this.getEvent(e).pageX?this.getEvent(e).pageX:this.getScrollLeft()+this.getClientX(e);
    },
    //获取的是相对于页面的纵坐标----(卷曲出去的纵坐标+可视区域的纵坐标)
    getPageY:function (e) {
      return this.getEvent(e).pageY?this.getEvent(e).pageY:this.getScrollTop()+this.getClientY(e);
    }
};
