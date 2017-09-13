/*
* @Author: yatou
* @Date:   2017-07-05 18:42:56
* @Last Modified by:   yatou
* @Last Modified time: 2017-07-15 11:35:22
*/


//为轮播图上部的版面列表注册鼠标进入离开事件
//获取版面列表的下拉框的div
$("#cn_banlist").mouseenter(function(){
	$("#cnb_cainner").show();
});
$("#cnb_cainner").mouseenter(function(){
	$(this).show();

}).mouseleave(function(){
	$(this).hide();
});


// var cnbCainner = my$("cnb_cainner");

// my$("cn_banlist").onmouseover = function(){
// 	cnbCainner.style.display = "block";
// };
// cnbCainner.onmouseover = function(){
// 	this.style.display = "block";
// };
// cnbCainner.onmouseout = function(){
// 	this.style.display = "none";
// };
//注册版面列表的a的鼠标进入事件
$("#cnb_cainner a").mouseenter(function(){
	$(this).css("color","#429B59").siblings('a').css("color","#636363");
}).mouseleave(function(){
	$(this).css("color","#636363");
});;
// var banlistLink = cnbCainner.getElementsByTagName("a");
// for(var m = 0;m < banlistLink.length;m++){
// 	banlistLink[m].onmouseover = function(){
// 		for(var n = 0;n < banlistLink.length;n++){
// 			banlistLink[n].style.color = "#636363";
// 		}
// 		this.style.color = "#429B59";
// 	};
// 	banlistLink[m].onmouseout = function(){
// 		this.style.color = "#636363";
// 	};
// }



//为轮播图注册轮播事件
var arr = [
		{"cover":"community-imgs/680x400(1).jpg","uImg":"community-imgs/200(1).jpg","uName":"aero4400","uNote":"【aero4400】品味英伦，从伦敦至爱丁堡的自驾"},
		{"cover":"community-imgs/680x400(2).jpg","uImg":"community-imgs/200(2).jpg","uName":"ivradss","uNote":"人人都爱这里，干了这杯Expresso，和花样夫妻一起来游玩吧..."},
		{"cover":"community-imgs/680x400(3).jpg","uImg":"community-imgs/200(3).jpg","uName":"avohover","uNote":"坐着游轮，或划着小舟，穿梭在这美丽的现代水城，放松自己"},
		{"cover":"community-imgs/680x400(4).jpg","uImg":"community-imgs/200(4).jpg","uName":"olodssa","uNote":"看那哥特式的建筑，安静的教堂，在夕阳中，显得那么安详，美好"},
		{"cover":"community-imgs/680x400(5).jpg","uImg":"community-imgs/200(5).jpg","uName":"lover","uNote":"走遍千山万水，看那美丽的壁画与雕塑，浓缩在古人们的智慧的结晶"},
	];
function animate(){
	
	//获取轮播图
	var coverImg = my$("cover_img");
	//获取用户头像
	var userImg = my$("user_img");
	//获取用户名
	var userName = my$("user_name");
	//获取用户游玩记录
	var userNote= my$("user_note");
	//获取轮播小图
	var smallImgUl = my$("cnsy_ul");
	var smallImgs = smallImgUl.getElementsByTagName("img");
	//获取轮播小图上面的三角
	var triangles = smallImgUl.getElementsByTagName("span");
	//获取轮播背景图
	var slideBgs = my$("cnbg_wrapid").getElementsByTagName("img");
	//注册轮播事件
	var i = 0;
	function f1(){
		if (i==arr.length) {
			i=0;
		};
		coverImg.src = arr[i].cover;
		// coverImg.style.opacity = "0.1";
		opacityChange(coverImg);
		userImg.src = arr[i].uImg;
		userName.innerHTML = arr[i].uName;
		userNote.innerHTML = arr[i].uNote;
		for(var j = 0;j < smallImgs.length;j++){
			smallImgs[j].className = "";
		}
		smallImgs[i].className = "sy_current";
		for(var k = 0;k < triangles.length;k++){
			triangles[k].className = "shangsanjiao";
		}
		triangles[i].className = "shangsanjiao current";
		for(var l = 0;l < slideBgs.length;l++){
			slideBgs[l].className = "";
		}
		slideBgs[i].className = "cnbg_current";
		i++;

	}
	
	var timeId = setInterval(f1, 2000);
	//为轮播小图注册鼠标进入离开事件
	for(var s = 0;s < smallImgs.length;s++){
		smallImgs[s].onmouseover = function(){
			//先移出定时器
			clearInterval(timeId);
			// console.log(arr[s]);
			//注册事件
			if (i==arr.length) {
				i=0;
			};
			coverImg.src = arr[i].cover;
			opacityChange(coverImg);
			userImg.src = arr[i].uImg;
			userName.innerHTML = arr[i].uName;
			userNote.innerHTML = arr[i].uNote;
			for(var j = 0;j < smallImgs.length;j++){
				smallImgs[j].className = "";
			}
			this.className = "sy_current";

			for(var k = 0;k < triangles.length;k++){
				triangles[k].className = "shangsanjiao";
			}
			triangles[i].className = "shangsanjiao current";
			for(var l = 0;l < slideBgs.length;l++){
				slideBgs[l].className = "";
			}
			slideBgs[i].className = "cnbg_current";
			i++;
		};
		smallImgs[s].onmouseout = function(){
			timeId = setInterval(f1, 2500);
		};
	}
}
animate();
//透明度渐变  有待改进
function opacityChange(element){
    var timeId=setInterval(function(){
		var opacity = 70;
		var target = 100;
    	// opacity ++;
    	//定义速度
    	var step = (target - opacity)/10;
    	step=step>0?Math.ceil(step):Math.floor(step);
    	opacity += step;
    	element.style.opacity = opacity/100;
    	if(opacity = target){
    		clearInterval(timeId);
    	}
    }, 20);
}





// 内容列表的左侧的游记攻略a链接鼠标事件

function flContentMouseover(){
	var flContBox = document.getElementsByClassName("yl_con");
	for(var i = 0;i < flContBox.length;i++){
		var box = flContBox[i];
		//获取每个div下的a
		var links = box.getElementsByTagName("a");
		for(var j = 0;j < links.length;j++){
			var thisOldColor = "";
			links[j].onmouseover = function(){
				thisOldColor = this.getAttribute("color");
				this.style.color = "#10b041";
			};
			links[j].onmouseout = function(){
				this.style.color = thisOldColor;
			};
		}
		
	}
}
flContentMouseover();



// 内容列表的右侧的a链接鼠标事件
$("#rt_reglink").mouseenter(function(){
	$(this).css("color","#10b041");
}).mouseleave(function(){
	$(this).css("color","#fff");
});;

// var rtRegLink = document.getElementById("rt_reglink");
// rtRegLink.onmouseover = function(){
// 	this.style.color = "#10b041";
// };
// rtRegLink.onmouseout = function(){
// 	this.style.color = "#fff"
// };
// 
// 


// 鼠标进入a链接时出现下划线 移出则没
$("#rtl_lglink").mouseenter(function(){
	$(this).css("textDecoration","underline");
}).mouseleave(function(){
	$(this).css("textDecoration","none");
});


$("#inIphone").mouseenter(function(){
	$(this).css("textDecoration","underline");
}).mouseleave(function(){
	$(this).css("textDecoration","none");
});


$("#inAndroid").mouseenter(function(){
	$(this).css("textDecoration","underline");
}).mouseleave(function(){
	$(this).css("textDecoration","none");
});


$("#lfc_con_link").mouseenter(function(){
	$(this).css("textDecoration","underline");
}).mouseleave(function(){
	$(this).css("textDecoration","none");
});


// function confrLinkMouse(element){
// 	element.onmouseover = function(){
// 		this.style.textDecoration = "underline"
// 	};
// 	element.onmouseout = function(){
// 		this.style.textDecoration = "none";
// 	};
// }
// var rtlLlink = document.getElementById("rtl_lglink");
// var inIphone = document.getElementById("inIphone");
// var inAndroid = document.getElementById("inAndroid");
// var lfcConlink = document.getElementById("lfc_con_link");
// confrLinkMouse(rtlLlink);
// confrLinkMouse(inIphone);
// confrLinkMouse(inAndroid);
// confrLinkMouse(lfcConlink);




//内容列表
//点击h标签 移动下划线
$(".flcell").click(function(){
	// 获取当前的h标签的索引
	var index = $(this).index();
	// 设置下划线的移动动画
	$(".under_line").animate({"left":227*index+"px"},200);
});

// function removeUnderLine(){
// 	// 获取下划线对应的h标签
// 	var hs = document.getElementsByClassName("flcell");
// // 获取下划线
// 	var underLines = document.getElementsByClassName("under_line");
// 	var k = 0;
// 	for(var i = 0;i < hs.length;i++){
// 		//给h增加index属性
// 		hs[i].setAttribute("index", k)
// 		//h的点击事件
//     	hs[i].onclick = function(){
//         	for(var j = 0;j < underLines.length;j++){
//             	underLines[j].className = "under_line";
//         	}
//         	//获取h的index属性值
//         	var n = this.getAttribute("index");
//         	underLines[n].className = "under_line active";
//         	// console.log("aaa");
//     	};
//     	k++;
// 	}
// }
// removeUnderLine();


// 点击h标签 切换tabs
$(".flcell").click(function(){
	$(".fl_content_box>div").removeClass('active');
	var index = $(this).index();
	$(".fl_content:eq("+index+")")[0].className = "fl_content active";
});



//获取内容列表的div
var conList = document.getElementsByClassName("cont_cells");
// 获取内容列表的最大索引值
var conLastIndex = conList.length-1;
//关闭内容列表
function closeCont(){
    var j = 0;
        //获取关闭按钮
    var contCloses = document.getElementsByClassName("con_close");
    for(var i = 0;i < contCloses.length;i++){
    	//添加index属性
    	contCloses[i].setAttribute("index",j);
    	// alert(i);
    	//注册点击事件
        contCloses[i].onclick = function(){
        //获取关闭的div
        	var n = this.getAttribute("index");
            conList[n].style.display = "none";

            // 每点击关闭一次 内容列表的最后一个索引值减一
            conLastIndex--;
         	//最后一个内容的div没有竖线
			//获取最后一个竖线 并移出
       		var Lline = conList[conLastIndex].getElementsByClassName("ylc_line")[0];
    		Lline.style.display = "none";
       
        };
        j++;
    }
    
    
}
closeCont();


//移除最后一个内容列表的竖线
function removeLine(){
	//获取内容列表的div
	var conList = document.getElementsByClassName("cont_cells");
	var conLength = conList.length;
	//最后一个内容的div没有竖线
	//获取最后一个竖线 并移出
    var Lline = conList[conLength-1].getElementsByClassName("ylc_line")[0];
    Lline.style.display = "none";
}
removeLine();




// 获取底部nav
var footNav = document.getElementsByClassName("foot_nav")[0];
var footNavs = footNav.getElementsByTagName("a");
// console.log(footNavs);
// 获取底部友情链接
var friendLink = document.getElementsByClassName("frlk");
// console.log(friendLink);
//设置鼠标经过事件
navAmouseOver(footNavs);
navAmouseOver(friendLink);

function navAmouseOver(arr){
	for(var i = 0;i < arr.length;i++){
		arr[i].onmouseover = function(){
			for(var j = 0;j < arr.length;j++){
				arr[j].style.textDecoration = "none";
			}
			// console.log("aaa");
			this.style.textDecoration = "underline";
		};
		arr[i].onmouseout = function(){
			this.style.textDecoration = "none";
		};
	}
}


// 返回头部与底部
//获取向上返回的div
var returnUp = document.getElementsByClassName("up_arrow")[0];
returnUp.onmouseover = function(){
	this.style.backgroundImage = "url(community-imgs/uparrow2.jpg)";
};
returnUp.onmouseout = function(){
	this.style.backgroundImage = "url(community-imgs/uparrow.jpg)";
};
//注册点击事件 滚动到最顶部
returnUp.onclick = function(){
	clearInterval(returnUp.timeId);
	returnUp.timeId = setInterval(function(){
		var objTop = evtTools.getScrollTop();
		console.log("objTop");
		var target = 0;
		var step = (target-objTop)/10;
		step = step>0?Math.ceil(step):Math.floor(step);
		evtTools.setScrollTop(objTop+step);
		if((objTop+step) <= target){
			clearInterval(returnUp.timeId);
			return;
		}
	}, 20);
};




//获取向下返回的div  注册鼠标进入离开样式
$(".down_arrow").mouseenter(function(){
	$(this).css("backgroundImage","url(community-imgs/downarrow2.jpg)");
}).mouseleave(function(){
	$(this).css("backgroundImage","url(community-imgs/downarrow.jpg)");
});
// 注册鼠标点击事件 返回也页面底部
$(".down_arrow").click(function(){
	var h = document.documentElement.offsetHeight;
	
	$("html,body").animate({scrollTop:h},700);
});



// var returnDown = document.getElementsByClassName("down_arrow")[0];
// returnDown.onmouseover = function(){
// 	this.style.backgroundImage = "url(community-imgs/downarrow2.jpg)";
// };
// returnDown.onmouseout = function(){
// 	this.style.backgroundImage = "url(community-imgs/downarrow.jpg)";
// };
// 注册点击事件 返回底部/

// returnDown.onclick = function(){
// 	// 清空定时器
// 	clearInterval(returnDown.timeId);
// 	returnDown.timeId = setInterval(function(){
// 		// 获取当前的高度
// 		var objTop = evtTools.getScrollTop();
// 		// 获取整个页面的高度
// 		var target = document.documentElement.offsetHeight;
// 		console.log(target);
// 		var step = (target-objTop)/10;
// 		step = step>0?Math.ceil(step):Math.floor(step);
// 		evtTools.setScrollTop(objTop+step);
// 		if((objTop+step) <= target){
// 			clearInterval(returnUp.timeId);
// 			return;
// 		}
		
		
// 	}, 20);


// };



//显示二维码
function weichat(){
	//获取装二维码的div
	var erweima = document.getElementsByClassName("bigerweima")[0];
	//获取erweima的父元素
	var box = document.getElementsByClassName("ewm")[0];
	box.onmouseover = function(){
		erweima.style.display = "block";
	};
	erweima.onmouseover = function(){
		this.style.display = "block";
	};
	erweima.onmouseout = function(){
		this.style.display = "none";
	};
}
weichat();


// 问题反馈
$(".qui_feedback").click(function(){
	$(this).animate({"right":"0"},200);
	$(".js-feedback-cnt").focus();
});
$(".js-feedback-cnt").blur(function(){
	$(".qui_feedback").animate({"right":"-246px"});
	$(".js-feedback-cnt").val("");
});
// 提交按钮
// $(".js-submitbtn").click(function(){
// 	if($(".js-feedback-cnt").val().length==0){
// 		alert("意见或建议不能为空");
// 	}else if($(".js-feedback-cnt").val().length<10){
// 		alert("不能少于10个字");
// 	}else if($(".js-feedback-cnt").val().length>=10){
// 		alert("感谢您的意见，我们会做的更好！");
// 	}
// });