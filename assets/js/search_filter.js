$(document).ready(function(){
	$("#filter_box").keyup(function(){
		var value = $(this).val().toLowerCase();
		$(".inner li").each(function(index, element){
			console.log($(element).text());
			if ($(element).text().toLowerCase().indexOf(value) == -1){
				$(element).hide();
			} else{
				$(element).show();
			};
		});
	});
});