$(function(){
	 $(".theme .tab_txt li").hover(function(){
         $(this).toggleClass("active");
           $(this).siblings().removeClass("active");
     });
});