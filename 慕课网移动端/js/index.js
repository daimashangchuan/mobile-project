$(function(){
	var index = 0
	$(".btn-like").click(function(){
		if (index == 2) {
			$(".btn-like").remove()
		} 
		$(".displaynone").eq(index).show();
		index++
	})
})



