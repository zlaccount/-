
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

//秒杀商品点击轮播
(function() {

	//获取到箭头
	var $Szy=$("#sex_zy div");

	//获取到图片
	var $picLi = $("#secUl li");
	//设置定时器为空
	var timer = null;
	//设置信号量
	var index = 0;
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
	
})();