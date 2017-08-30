
function manhuatoTop ()
{
	$(function() {
		$.fn.manhuatoTop = function(options) {
			var defaults = {
				showHeight : 150,
				speed : 1000
			};
			var options = $.extend(defaults,options);
			$("body").prepend("<div id='totop'><a></a></div>");
			var $toTop = $(this);
			var $top = $("#totop");
			var $ta = $("#totop a");
			$toTop.scroll(function(){
				var scrolltop=$(this).scrollTop();
				if(scrolltop>=options.showHeight){
					$top.show();
				}
				else{
					$top.hide();
				}
			});
			$ta.hover(function(){
				$(this).addClass("cur");
			},function(){
				$(this).removeClass("cur");
			});
			$top.click(function(){
				$("html,body").animate({scrollTop: 0}, options.speed);
			});
		}
	});
	$(function (){
		$(window).manhuatoTop({
			showHeight : 100,
			speed : 500
		});
	});
}
manhuatoTop();

(function($){
    $.extend({
        inputStyle:function(){
            function check(el,cl){
                $(el).each(function(){
                    $(this).parent('i').removeClass(cl);

                    var checked = $(this).prop('checked');
                    if(checked){
                        $(this).parent('i').addClass(cl);
                    }
                })
            }
            $('input[type="radio"]').on('click',function(){
                check('input[type="radio"]','radio_bg_check');
            })
            $('input[type="checkbox"]').on('click',function(){
                check('input[type="checkbox"]','checkbox_bg_check');
            })
        }

    })

})(jQuery)

//调用
$(function(){
    $.inputStyle();
});




