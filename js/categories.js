//Search Categories

//Init

var current_category = '#web-box';
var current_button = 'Web';

$(document).ready(function() {
	//$('#web-box').hide();
	$('#images-box').hide();
	$('#videos-box').hide();
	$('#maps-box').hide();


	$('.search-category').each(function(i, obj) {
		if ($(obj).text() == current_button) {
			$(obj).addClass('active-toggle');
		}
	});




});





function ChangeCategory(category) {

	$('.search-category').each(function(i, obj) {

		if ($(obj).text() == category) {

			//Remove Last Active
			$('.active-toggle').each(function(i1, obj1) {$(obj1).removeClass('active-toggle');});

			//Highlight current one
			$(obj).addClass('active-toggle');

			switch(category) {
				case 'Web':
					if (current_button == 'Web') {break;}
					$(current_category).hide();
					current_category = '#web-box';
					current_button = 'Web';
					$('#web-box').show();
					break;
				case 'Images':
				if (current_button == 'Images') {break;}
					$(current_category).hide();
					current_category = '#images-box';
					current_button = 'Images';
					$('#images-box').show();
					break;
				case 'Videos':
				if (current_button == 'Videos') {break;}
					$(current_category).hide();
					current_category = '#videos-box';
					current_button = 'Videos';
					$('#videos-box').show();
					break;
				case 'Maps':
				if (current_button == 'Maps') {break;}
					$(current_category).hide();
					current_category = '#maps-box';
					current_button = 'Maps';
					$('#maps-box').show();
					break;
			}
		}
	});
}