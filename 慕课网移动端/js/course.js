$(function(){
	var wheight = $(window).height();
	var hheight = $(".header-wrap").height();
	var atrheight = wheight - hheight-10;
	$(".article").height(atrheight);
	var artleft = document.getElementsByClassName("art-left")[0];
	var artright = document.getElementsByClassName("art-right")[0];
	var artleftul = $(".art-left ul");
	var artrightdiv = $(".art-main");
	function animatemovetop(artleft,artleftul){
		var height = 0,first = 0,move = 0,last = 0,newtop = 0;	
		artleft.addEventListener("touchstart",function(ev){
			newtop = parseFloat(artleftul.css("top"));
			height = artleftul.height();
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
			} else if(newtop< -(height-570.375)){
				artleftul.animate({"top":-(height-570.375)})
				newtop = -(height-570.375)
			}
		})
	}
	animatemovetop(artleft,artleftul);
	animatemovetop(artright,artrightdiv);	
})
$(function(){
	$.ajax({
		type:"get",
		url:"json/course.json",
		async:false,
		datatype:"json"
	}).done(function(str){
		var list0 = str[0][0].list0;
		var data = str[0][0].data;
		$(".art-model-one").append(`
			<div class="base-block">
				<ul class="block-ul clear"></ul>
			</div>	
		`)
		for (var i=0; i<list0.length; i++) {
			$(".block-ul").append(`
				<li>
					<img src="${list0[i].titleImg}"/>
					<p>${list0[i].titleP}</p>
				</li>
			`)
		}
		for (var i=0; i<data.length; i++) {
			$(".list-ul").append(`
				<li class="clear">
					<img class="left-img" src="${data[i].contImg}"/>
					<div class="right-c fr">
						<h2>${data[i].contH2}</h2>
						<p><span class="pan">免费课程</span><span>初级&nbsp;·&nbsp;4726人在学 </span></p>
					</div>
				</li>
			`)
		}
	});
	
	var index = 0;
	$(".art-left ul li").click(function(){
		$(this).addClass("now").siblings("li").removeClass("now");
		$(".art-model-one").html("");
		$(".list-ul").html("");
		index = $(this).index()
		ajaxadddata()
		$(".art-main").animate({"top":0})
	})
	
	function ajaxadddata(){
		$.ajax({
			type:"get",
			url:"json/course.json",
			async:false,
			dataType:"json"
		}).done(function(str){
			var list0 = str[index][0].list0;
			var list1 = str[index][0].list1;
			var data = str[index][0].data;
			var title = str[index][0].title;
			console.log(title)
			if (title !== undefined) {
				for (var i=0; i<title.length;i++) {
					$(".art-model-one").append(`
						<h2 class="web-title">${title[i].webTitle}</h2>
						<div class="base-block block-top">
							<ul class="block-ul clear"></ul>
						</div>	
					`)
				}
				for (var i=0; i<list0.length; i++) {
					$(".block-ul").eq(0).append(`
						<li>
							<img src="${list0[i].titleImg}"/>
							<p>${list0[i].titleP}</p>
						</li>
					`)
				}
				for (var i=0; i<list1.length; i++) {
					$(".block-ul").eq(1).append(`
						<li>
							<img src="${list1[i].titleImg}"/>
							<p>${list1[i].titleP}</p>
						</li>
					`)
				}
			} else{
				$(".art-model-one").append(`
					<div class="base-block">
						<ul class="block-ul clear"></ul>
					</div>	
				`)
				for (var i=0; i<list0.length; i++) {
					$(".block-ul").append(`
						<li>
							<img src="${list0[i].titleImg}"/>
							<p>${list0[i].titleP}</p>
						</li>
					`)
				}	
			}	
			for (var i=0; i<data.length; i++) {
				$(".list-ul").append(`
					<li class="clear">
						<img class="left-img" src="${data[i].contImg}"/>
						<div class="right-c fr">
							<h2>${data[i].contH2}</h2>
							<p><span class="pan">免费课程</span><span>初级&nbsp;·&nbsp;4726人在学 </span></p>
						</div>
					</li>
				`)
			}
		});
	}
	
})




















