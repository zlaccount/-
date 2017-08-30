//header
(function() {
		//获取购物车详情
		var $Hcar=$(".H_Scar");
		var $Scar=$(".Scar_shop");	
			$Hcar.hover(function(){
				$Scar.stop(true).slideDown();
			},function(){
			    $Scar.stop(true).slideUp();
		    });
        //logo导航栏
		var $Lgnav=$(".Lg_Nav");
		var $LShop=$(".LNav_bg");
		var $Lshop=$(".nav_shop");	
		    $Lgnav.hover(function(){
			var L_index=$(this).index();
				$LShop.stop(true).slideDown(300);
			    $Lshop.eq(L_index).show().siblings().hide()
		    },function(){
			    $LShop.stop(true).slideUp(300);
		    });
		    $LShop.hover(function(){
		    	$(this).stop(true).slideDown(300);
		    },function(){
		    	$(this).stop(true).slideUp(300);
		    })
		//搜索框
		var $Allsearch=$(".C_search")
		var $search=$("#S_name");
		var $Moretext=$("#text_hide")
		    $search.focus(function(){
			   $Moretext.slideDown(500);
			   $Allsearch.addClass("border-color");
			   $(this).addClass("border-right")
		    }).blur(function(){
			   $Moretext.slideUp(500);
			   $Allsearch.removeClass("border-color");
			   $(this).removeClass("border-right");
		    })
		    
		//侧导航栏
		var $Sshop=$(".SideNav li");
		    $Sshop.hover(function(){
			    $(this).find(".Shide").show();
		    },function(){
			    $(this).find(".Shide").hide();
		    })
})();

//淡入淡出轮播图
(function() {
	//获取到小圆点
	var $tabLi = $("#top_btn li");
	var $tabLiA = $("#top_btn li a");
	//获取到箭头
	var $Szy=$("#top_zy div");

	//获取到图片
	var $picLi = $("#top_slider li");
	//设置定时器为空
	var timer = null;
	//设置信号量
	var index = 0;
	//小圆点被点击时
	$tabLi.hover(function(){
		clearInterval(timer);
		var _index=$(this).index();
		$tabLi.eq(_index).addClass("on").siblings().removeClass("on");
		$tabLiA.eq(_index).addClass("BtnActive").parent().siblings().children().removeClass("BtnActive")
		$picLi.eq(_index).fadeIn(1000).siblings().fadeOut(1000);

	},function(){
		auto();
	})
    //箭头被点击时
    $Szy.click(function(){
    	clearInterval(timer);
    	var _index=$(this).index();
    	if(_index){
    		index++
    		if(index>$tabLi.length-1){
    			index=0
    		}
    		plays()
    	}else{
    		index--;
    		if(index<0){
    			index=$tabLi.length-1;
    		}
    		plays()
    	}
    });

	function plays() {

		$tabLi.eq(index).addClass("on").siblings().removeClass("on");
		$tabLiA.eq(index).addClass("BtnActive").parent().siblings().children().removeClass("BtnActive")
		$picLi.eq(index).fadeIn(1000).siblings().fadeOut(1000);

	}
	//设置自动轮播
	function auto() {
		timer = setInterval(function() {
			index++;
			if(index > $tabLi.length - 1) {
				index = 0;
			}
			plays();
		}, 2000);
	}
	auto(); //默认执行定时轮播
	//鼠标移入时
	$picLi.mouseenter(function() {
		clearInterval(timer);
	});

	//鼠标移出时
	$picLi.mouseleave(function() {
		auto();
	});

})();

//小米明星单品
(function() {
	var $ul=$(".star")
	var html="";
    for(var i=1;i<11; i++){
    	html+='<li class="ta-c fl"><div class="ml18 A_area'
    	    +[i]+'"><a href="" target="_blank" class="inline-block  bg-gray1"><img src="images/lun0'
    	    +[i]+'.png" /><p class="mt50">小米电视3S 43英寸</p><p class="N_detail gray1 mt10 mb10">快、轻薄、美，青春五色可选</p><p class="red1 pb15">1099元</p></a></div></li>'
    };
    $ul.append(html);
    
    
    //点击左右按钮
    var $Z=$(".Z_btn");
    var $Y=$(".Y_btn");
    function toggle(){
    	$Z.toggleClass("zyActive");
    	$Y.toggleClass("zyActive");
    }
    $Z.click(function(){
    	clearInterval(timer)
    	$ul.stop(true).animate({
    		marginLeft:-margin
    	},500);
    	toggle();
    });
  
    $Y.click(function(){
        $ul.stop(true).animate({
    		marginLeft:0
    	},500);
    	toggle();
    });
    

    //自动轮播
    var $li=$(".star li");
    var margin=$li.eq(5).position().left;
    var $flag=true
    function auto(){
    	timer=setInterval(function(){
    		if($flag){
    			$flag=false;
    			$ul.stop(true).animate({
    				marginLeft:-margin
    			})
    			toggle()
    			clearInterval(timer)
    			auto()
    		}else{
    			$flag=true;
    			$ul.stop(true).animate({
    				marginLeft:0
    			})
    			toggle()
    			clearInterval(timer)
    			auto()
    		}
    		
    	},6000)
    };
    auto()
})();

//shop右侧标题
(function(){
        var $NRTitleA=$(".NR_Title li a");
        var $NRTitleLi=$(".NR_Title li");
        var $TabUl=$(".Tab ul")
		    $NRTitleLi.mouseover(function(){
		        var _index=$(this).index()
			       $NRTitleA.eq(_index).addClass("T_active").parent().siblings().children().removeClass("T_active");
			       $TabUl.eq(_index).show().siblings().hide()
		    })
})();

//内容区域
(function(){
	var $D1ul=$(".D1_ul")
	var html="";
    for(var i=1;i<5; i++){
    	html+='<div class="fl"><h3 class="mt30 f20">哈利波特与魔法石</h3><p class="N_detail gray1 pb30 f14">哈利波特来了</p><img src="images/book'
    	    +[i]+'.jpg" class="ma"/></div>'
    };
    $D1ul.append(html);
	
	var $D2ul=$(".D2_ul")
	var html="";
    for(var i=1;i<5; i++){
    	html+='<div class="fl"><h3 class="mt30 f20">哈利波特与魔法石</h3><p class="N_detail gray1 pb30 f14">哈利波特来了</p><img src="images/zhuti0'
			+[i]+'.jpg" class="ma"/></div>'
    };
    $D2ul.append(html);
    
    var $D3ul=$(".D3_ul")
	var html="";
    for(var i=1;i<5; i++){
    	html+='<div class="fl"><h3 class="mt30 f20">哈利波特与魔法石</h3><p class="N_detail gray1 pb30 f14">哈利波特来了</p><img src="images/game'
    	    +[i]+'.png" class="ma"/></div>'
    };
    $D3ul.append(html);
    
    var $D4ul=$(".D4_ul")
	var html="";
    for(var i=1;i<5; i++){
    	html+='<div class="fl"><h3 class="mt30 f20">哈利波特与魔法石</h3><p class="N_detail gray1 pb30 f14">哈利波特来了</p><img src="images/yingyong0'
    	    +[i]+'.png" class="ma"/></div>'
    };
    $D4ul.append(html);
	
	
	var $contentLi=$(".contentArea li")//放内容的板块
	var $LiImg=$(".D_ul");//放图片区域
	var $Btn=$(".DD_btn div")//箭头
	var $YLi=$(".DR_btn ul li")//小圆点
	var index=0;
	$LiImg.each(function(){
		this.a=0
	})
	
	//点击小圆点的时候
	$YLi.click(function(){
		    $(this).addClass("DLi_active").siblings().removeClass("DLi_active")
	    var index=$(this).index();
	    var PicIndex=$(this).parent().parent().parent().index();
	        $LiImg.eq(PicIndex)[0].a=index
	        $LiImg.eq(PicIndex).stop(true).animate({
	    	   marginLeft:-296*$LiImg.eq(PicIndex)[0].a
	        },300)
	 })
	//箭头被点击时
    $Btn.click(function(){
    	var index=$(this).index();
	    var PicIndex=$(this).parent().parent().index();
	    if(index){
	    	if($LiImg.eq(PicIndex)[0].a<$LiImg.length-1){
	    	    $LiImg.eq(PicIndex)[0].a++;
	    	}
	    }else{
	    	if($LiImg.eq(PicIndex)[0].a>0){
	    	    $LiImg.eq(PicIndex)[0].a--;
	    	}
	    }
	    $LiImg.eq(PicIndex).stop(true).animate({
	    	   marginLeft:-296*$LiImg.eq(PicIndex)[0].a
	        },300)
	    $(".DR_btn ul").eq(PicIndex).find("li").eq($LiImg.eq(PicIndex).get(0).a).addClass("DLi_active").siblings().removeClass("DLi_active")
    });	     
})();

(function(){
//视频模块
    var $videoHide=$(".videoHide");
    var $videoBg=$(".videoBg");
    var $videoLi=$(".videoLi");
    var $videoBtn=$(".videoLi img ,.videoLi span");
    var $videoH3=$(".videoHead h3");
    var $videoHclose=$(".videoHead .clo");
    var $videoBiframe=$(".videoBody iframe");
    function videoResize(){
    	$videoHide.css({
    		width:$(window).width(),
    		height:$(window).height()
    	})
    };videoResize();
    $(window).resize(videoResize);
    $videoBtn.click(function(){
    	$videoHide.fadeIn(300).find(".videoBg").show().stop(true).animate({
    		top:"50%",
    		opacity:1
    	});
    	$videoBiframe.css({
    		width:"880px",
    		height:"564px"
    	})
    	var src=$(this).parent().attr("src");
    	$videoBiframe.attr("src",src);
    	
    });
    $videoHclose.click(function(){
    	$videoBg.stop(true).animate({
    		top:"-20%",
    		opacity:0
    	},500,function(){
    		$videoHide.fadeOut(300)
    	})
    	$videoBiframe.attr("src",src);
    })

})();

