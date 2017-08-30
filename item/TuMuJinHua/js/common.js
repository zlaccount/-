
		$(function() {
			var i = 0;
			var timer = null;
			
			var firstimg = $('.img li').first().clone(); //复制第一张图片
			$('.img').append(firstimg).width($('.img li').length * ($('.img img').width())); //将第一张图片放到最后一张图片后，设置ul的宽度为图片张数*图片宽度
			// 下一个按钮
			$('.next').click(function() {
				i++;
				if(i == $('.img li').length) {
					i = 1; //这里不是i=0
					$('.img').css({ left: 0 }); //保证无缝轮播，设置left值
				};
				$('.img').stop().animate({ left: -i * 730 }, 300);
				
				
			})
			// 上一个按钮
			$('.prev').click(function() {
				i--;
				if(i == -1) {
					i = $('.img li').length - 2;
					$('.img').css({ left: -($('.img li').length - 1) *730});
				}
				$('.img').stop().animate({ left: -i * 730 }, 300);
				
			})
			
		})