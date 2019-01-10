$(function(){
	/*-----scroll-top------*/
	$(window).scroll(function(){	
		if ($(document).scrollTop() > 500) {
			$(".scroll-top").fadeIn()
		} else{
			$(".scroll-top").fadeOut()
		}
	})
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
	
	$(".nav-ri").click(function(){
		$(".header-mask").show()
		return false;
	})
	$("body").click(function(){
		$(".header-mask").hide();
	})
	$(".header-mask ul").click(function(){
		return false;
	})
	/*----------导航栏-------------*/
	$(".ulli").click(function(){
		$(".lili").removeClass("now");
		$(".lili .model").hide();
		$(this).toggleClass("now");
		$(this).find(".modelbtn").toggle();
	})
	
	$(".lili").click(function(){
		$(".ulli").removeClass("now");
		$(".ulli .modelbtn").hide();				
		if ($(this).hasClass("now")) {
			$(".lili").removeClass("now");
			$(".lili .model").hide();
		} else{
			$(".lili").removeClass("now");
			$(".lili .model").hide();
			$(this).addClass("now");
			$(this).find(".model").show();
		}		
		return false
	})

	$(".model p").click(function(event){
		$(this).toggleClass("now")
		event.stopPropagation()
	})
	$(".resetting").click(function(){
		$(".model p").removeClass("now");
		event.stopPropagation()
	})
})
$(function(){
	var tag = true
	function addEvent(ele,e,fn){
		if (ele.addEventListener) {
			ele.addEventListener(e, fn);
		} else if(ele.attachEvent){
			ele.attachEvent('on' + e, fn);
		} else {
			ele['on' + e] = fn;
		}
	}
	addEvent(window, "mousewheel", mouseWheel)
	addEvent(window, "DOMMouseScroll", mouseWheel)
	function mouseWheel(ev){
		var ev = window.event || ev
		if(ev.wheelDelta){
			if (ev.wheelDelta > 0) {   //  1  向下滚     向上走
				scrollDown()
			} else {
				scrollUp()
			}
		}else{
			if (ev.detail > 0) {   //  1  向上滚     向下走
				scrollUp()
			} else {
				scrollDown()
			}
		}
	}
	function scrollDown(){
		if(tag){
			tag = !tag
			setTimeout(function(){
				tag = !tag
			},600)
			$(".header").animate({"top":0})
		}
	}
	function scrollUp(){
		if(tag){
			tag = !tag
			setTimeout(function(){
				tag = !tag
			},600)
			$(".header").animate({"top":-83})
		}
	}
})



















