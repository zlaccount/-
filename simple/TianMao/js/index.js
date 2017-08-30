
jQuery(".picFocus").slide({ mainCell: ".bd ul", effect: "left", autoPlay: true });
jQuery(".picScroll-left").slide({ titCell: ".hd ul", mainCell: ".bd ul", autoPage: true, effect: "left", autoPlay: true, vis: 4, scroll: 4, trigger: "click" });

//侧导航
	var oNav=document.getElementById("SideNav");
	var currScrollTop=0;	
	window.onscroll=function(){	
		var scrollTop=document.body.scrollTop || document.documentElement.scrollTop;
		currScrollTop=scrollTop;
		if(scrollTop>=600){
			oNav.style.display="block"
			
		}else{
			oNav.style.display="none";
			
		}
		
	}
//瀑布流开始	

//获得高度最小ul的函数	
function checkHeight(oUl) {
	//初始化
	var height = 1000000;
	var index = 0;

	for(var a = 0; a < oUl.length; a++) {
		var nowHeight = oUl[a].offsetHeight;
		if(nowHeight < height) {
			height = nowHeight;
			index = a;

		}

	}
	return index //返回的索引值
}

window.onload = function() {
	//获取元素
	var oBox = document.getElementById("LikeBox");
	var oUl = oBox.getElementsByTagName("ul");
	var vH = document.documentElement.clientHeight;

	//滚动条事件
	window.onscroll = function() {
		var sTop = document.body.scrollTop || document.documentElement.scrollTop;
		
		if(sTop + vH > document.body.scrollHeight * 0.8) {
			//alert("到底了")
			//加载新内容
			createElement()
		}
	}

	//第一版调用
	createElement()
	function createElement() {
			
        for(var i = 1; i <= 18; i++) {
			
			var oImg = document.createElement("img");
			oImg.src = "img/" + i + ".jpg";
			oImg.style.width="100%";
            oImg.style.height="100%";
        
            var oA = document.createElement("a");
            oA.appendChild(oImg);
            
             
//          var oP1 = document.createElement("p");
//          oP1.addClass("detail")
//          oP1.html("打底显瘦黑色春季2016新款韩版百搭春秋小脚外穿不加绒薄款光泽裤")
//          
//          var ospan= document.createElement("span");
//          ospan.addClass("second_price")
//          ospan.Text("￥ 9.9")
//          
//          var oP2= document.createElement("p");
//          oP2.addClass("price_num")
//          oP2.appendChild(ospan);
       
			var oLi = document.createElement("li");
			oLi.style.background="#fff";
			oLi.style.marginBottom=10+"px";
			oLi.style.width=236+"px";
			oLi.style.height=238+"px";
			oLi.appendChild(oA);
//			oLi.appendChild(oP1);
//			oLi.appendChild(oP2);
         	//获得高度最小ul索引
			var min_Index = checkHeight(oUl);
			oUl[min_Index].appendChild(oLi)
		}
	}
		        						
}		
        	

