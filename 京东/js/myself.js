$(function(){
	var tag = true;
	$(".art-input input").focus(function(){
		$(this).next().show()
		return false
	}).blur(function(){
		$(".imgnone").hide()
		return false
	})
	$(".art-input .img2").click(function(){
		$(this).hide();
		$(this).prev().show();
		$(this).parent().children("input").attr("type","text")
		$(this).parent().children(".imgnone").show()
	})
	$(".art-input .imgyan").click(function(){
		$(this).hide();
		$(this).next().show();
		$(this).parent().children("input").attr("type","password")
		$(this).parent().children(".imgnone").show()
	})
})
