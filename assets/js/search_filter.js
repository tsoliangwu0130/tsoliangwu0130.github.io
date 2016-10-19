$(document).ready(function(){
	console.log("ob­ject-ori­ented pro­gram­ming ba­sics".indexOf("obj"));
	$("#filter_box").keyup(function(){
		var value = $(this).val().toLowerCase();
		$(".inner li").each(function(index, element){
			if ($(element).text().toLowerCase().indexOf(value) == -1){
				$(element).hide();
			} else{
				console.log($(element).text().toLowerCase());
				$(element).show();
			};
		});

		// $(".inner ul").each(function(index, element){
		// 	if ($(element).children(":visible").length == 0){
		// 		$(element).hide();
		// 	} else {
		// 		$(element).show();
		// 	};
		// });

		// $(".inner > ul").each(function(index, element){
		// 	if ($(element).children(":visible").length == 0){
		// 		$(element).closest("h3").hide();
		// 	} else {
		// 		$(element).closest("h3").show();
		// 	};	
		// });
	});
});