$(function(){
	$.ajax({
		type:"get",
		url:"json/combat.json",
		async:true,
		dataType:"json"
	}).done(function(str){
		data = str[0].data;
		for(var i=0; i<data.length; i++){
			$(".course-list ul").append(`
				<li class="clear" data-title="${data[i].title}">
					<div class="l-img">
						<img src="${data[i].dataimg}"/>
					</div>
					<div class="r-cell">
						<h2 class="class-name">${data[i].dataname}</h2>
						<p class="class-desc">${data[i].datadesc}</p>
						<p class="class-info">中级&nbsp;·NAN人学习</p>
						<p class="class-price">￥219.00</p>
					</div>
				</li>	
			`)
		}
		$(".course-list ul li").filter("[data-title=全部]").appendTo(".disblock");
		$(".btn-nav li").click(function(){
			$(this).addClass("active").siblings().removeClass("active")
			$(".disblock li").prependTo($(".course-list ul"))
			var val = $(this).html();
			var title =  $(".course-list ul li").filter("[data-title="+val+"]")
			title.appendTo(".disblock");
		})
	})	
})