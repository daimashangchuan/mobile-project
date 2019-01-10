$(function(){
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
})
$(function(){
	var $wheight = $(window).height();
	var $hheight = $(".header").height();
	var artheight = $(".article").height($wheight-$hheight);	
	var artleft = document.getElementsByClassName("art-left")[0];
	var artright = document.getElementsByClassName("art-right")[0];
	var artleftul = $(".art-left ul");
	var artrightdiv = $(".atr-main");
	function animatemovetop(artleft,artleftul){
		var height = 0,first = 0,move = 0,last = 0,newtop = 0;	
		artleft.addEventListener("touchstart",function(ev){
			newtop = parseFloat(artleftul.css("top"));
			height = artleftul.height()
			first = ev.touches[0].pageY;
		})
		artleft.addEventListener("touchmove",function(ev){
			move = ev.touches[0].pageY;
			var movetop = move-first+newtop;	
			artleftul.animate({"top":movetop},10)
		})
		artleft.addEventListener("touchend",function(ev){
			last = ev.changedTouches[0].pageY;
			newtop = parseFloat(artleftul.css("top"));
			if (newtop>0) {
				artleftul.animate({"top":0})
				newtop = 0
			} else if(newtop< -(height-624)){
				artleftul.animate({"top":-(height-624)})
				newtop = -(height-624)
			}
		})
	}	
	animatemovetop(artleft,artleftul);
	animatemovetop(artright,artrightdiv);
})
$(function(){
	
	$.ajax({
		type:"get",
		url:"json/classify.json",
		async:false,
		datatype:"json"
	}).done(function(str){
		var arr = str[0];
		var datanumber = arr.length;
		for (let i=0; i<datanumber; i++) {
			var titleimg = arr[i].titleimg;
			var titleh3 = arr[i].titleh3;
			var list = arr[i].list; 
			if (titleimg !== undefined) {
				$(".art-cont").append(`
					<div class="disnone model-one">
						<img src="${titleimg}"/>
						<h3>${titleh3}</h3>
					</div>	
				`)
				for (let j=0; j<list.length; j++) {
					$(".art-cont").append(`
						<div class="disnone model-two">
							<img src="${list[j].img}"/>
							<p>${list[j].p}</p>
						</div>
					`)
				}
			} else{
				$(".art-cont").append(`
					<div class="disnone model-one">
						<h3>${titleh3}</h3>
					</div>	
				`)
				for (let j=0; j<list.length; j++) {
					$(".art-cont").append(`
						<div class="disnone model-two">
							<img src="${list[j].img}"/>
							<p>${list[j].p}</p>
						</div>
					`)
				}
			}
		}
	});
	$(".art-left li").click(function(){
		var index = $(this).index();
		var content = $(this).html();
		var liheight = $(".art-left li").height();
		var artleftul = $(".art-left ul");
		if (index>=24) {
			artleftul.animate({"top":-24*liheight});
		} else{
			artleftul.animate({"top":-index*liheight});
		}
		$(".art-left li").removeClass("now");
		$(this).addClass("now");
		$(".model").hide();
		$(".disnone").hide();
		$(".art-cont").filter("[data-title ="+content+"]").fadeIn();		
		$.ajax({
			type:"get",
			url:"json/classify.json",
			async:false,
			datatype:"json"
		}).done(function(str){
			var arr = str[index];
			var datanumber = arr.length
			for (let i=0; i<datanumber; i++) {
				var titleimg = arr[i].titleimg;
				var titleh3 = arr[i].titleh3;
				var list = arr[i].list; 
				if (titleimg !== undefined) {
					$(".art-cont").append(`
						<div class="model model-one" data-title="${content}">
							<img src="${titleimg}"/>
							<h3>${titleh3}</h3>
						</div>	
					`)
					for (let j=0; j<list.length; j++) {
						$(".art-cont").append(`
							<div class="model model-two" data-title="${content}">
								<img src="${list[j].img}"/>
								<p>${list[j].p}</p>
							</div>
						`)
					}
				} else{
					$(".art-cont").append(`
						<div class="model model-one" data-title="${content}">
							<h3>${titleh3}</h3>
						</div>	
					`)
					for (let j=0; j<list.length; j++) {
						$(".art-cont").append(`
							<div class="model model-two" data-title="${content}">
								<img src="${list[j].img}"/>
								<p>${list[j].p}</p>
							</div>
						`)
					}
				}
			}
		})
	})	
})
