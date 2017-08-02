$(document).ready(function(){
	$("#filter_box").keyup(function(){
		var value = $(this).val().toLowerCase();
		$(".item li").each(function(index, element){
			if ($(element).text().toLowerCase().indexOf(value) == -1){
				$(element).hide();
			} else{
				$(element).show();
			};
		});
	});
});
