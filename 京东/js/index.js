$(function(){
	/*-----nav-----*/
	$(window).scroll(function(){
		if($(document).scrollTop() > 0){
			$(".nav").css({"background":"red"})
		}else{
			$(".nav").css({"background":"none"})
		}	
		if ($(document).scrollTop() > 500) {
			$(".scroll-top").fadeIn()
		} else{
			$(".scroll-top").fadeOut()
		}
	})
	
	/*-----scroll-top------*/
	$(".scroll-top").click(function(){
		var distance = $("html,body").scrollTop();
		var time = 500;
		var intervalTime = 10;
		var item = distance/(time/intervalTime);
		var timer = setInterval(function(){
			distance -= item;
			if(distance <= 0){
				distance = 0;
				clearInterval(timer)
			}
			$("html,body").scrollTop(distance)
		},intervalTime)
	})
	
	/*----banner-----*/
	var picindex = 0;
	var btnindex = 0;
	var imgwidth = $(".ban-img img").width();
	$(".ban-btn span").click(function(){
		$(".ban-btn span").removeClass("now");
		$(this).addClass("now")
		var index = $(this).index();
		$(".ban-img").animate({"margin-left":-index*imgwidth})
		picindex = btnindex = index;
	})
	var timer = null;
	clearInterval(timer);
	timer = setInterval(function(){
		if (picindex == $(".ban-img img").length-1){
			picindex = 0;
			$(".ban-img").css({"margin-left":0});
		}
		picindex++;
		$(".ban-img").animate({"margin-left":-picindex*imgwidth})
		btnindex++;
		if (btnindex == $(".ban-img img").length-1) {
			btnindex = 0;
		}
		$(".ban-btn span").removeClass("now");
		$(".ban-btn span").eq(btnindex).addClass("now")
	},3000)
})
$(function(){
	var timer = null;
	var tag = true;
	var wheight = $(".scroll_news ul li").height();
	clearInterval(timer)
	timer = setInterval(function(){
		$(".scroll_news ul").animate({"top":-wheight},500,function(){
			$(".scroll_news ul li").first().appendTo($(".scroll_news ul"));
			$(".scroll_news ul").css("top",0);
		})
	},2000)
})
