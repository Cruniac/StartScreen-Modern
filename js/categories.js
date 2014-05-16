/*
| Info:
| This is the category Script that provides the functionality to split the
| different search engine buttons into categories, so the Page doesen't get
| filled with more buttons than needed.
|----------------------------------------------------------------------------
| Current Categories:
| * Web
| * Images
| * Videos
| * Maps
|----------------------------------------------------------------------------
| License: GPLv2
|
| This program is free software: you can redistribute it and/or modify
| it under the terms of the GNU General Public License as published by
| the Free Software Foundation, either version 3 of the License, or
| (at your option) any later version.
|
| This program is distributed in the hope that it will be useful,
| but WITHOUT ANY WARRANTY; without even the implied warranty of
| MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
| GNU General Public License for more details.
|
| You should have received a copy of the GNU General Public License
| along with this program.  If not, see <http://www.gnu.org/licenses/>.
\----------------------------------------------------------------------------*/

/*----------------------------------------------------------------------------
| This is the init of the category script. In here every category except the
| default category will be hidden, and the default category will receive
| the active-toggle class to be marked as active and be highlighted.
\----------------------------------------------------------------------------*/

var current_category = '#web-box';
var current_button = 'Web';

$(document).ready(function() {
	//$('#web-box').hide(); //Web category is default and thus not hidden
	$('#images-box').hide();
	$('#videos-box').hide();
	$('#maps-box').hide();

	$('.search-category').each(function(i, obj) {
		if ($(obj).text() == current_button) {
			$(obj).addClass('active-toggle');
		}
	});
});

/*----------------------------------------------------------------------------
| This function works by being executed by a button using the onclick attribute
| and passing the category you want to change to as an argument.
| There are currently 4 possible values for the categories:
| "Web", "Images", "Videos" and "Maps". More can be added.
\----------------------------------------------------------------------------*/

function ChangeCategory(category) {

	$('.search-category').each(function(i, obj) {

		if ($(obj).text() == category) { //Find the category to change to.

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
