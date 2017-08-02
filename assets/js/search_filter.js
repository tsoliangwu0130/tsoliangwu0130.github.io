$(document).ready(function() {
	$('#filter_box').keyup(function() {
		var value = $(this).val().toLowerCase();
		$('.item li').each(function(index, element) {
			if ($(element).text().toLowerCase().indexOf(value) == -1) {
				$(element).hide();
			} else {
				$(element).show();
			};
		});

		$('.skill_item').each(function(index, element) {
			if ($(element).find('ul').children(':visible').length == 0) {
				$(element).find('h5').hide();
			} else {
				$(element).find('h5').show();
			}
		});
	});
});
