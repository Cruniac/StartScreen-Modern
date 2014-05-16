/*
| Info:
| This is the script that provides the functionality for the search box.
| This script provides search functionality for a number of Search engines.
|----------------------------------------------------------------------------
| Suppoted Search engines:
| * Google
| * DuckDuckGo
| * DuckDuckGo Next
| * Bing
| * StartPage
| * Wolfram Alpha
| * Wikipedia
| * Youtube
| * OpenStreetMaps
| * Dailymotion
| * Vimeo
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

//Search Engine Search URL's
var Google = 'https://www.google.ch/#q=';
var DDG = 'https://duckduckgo.com/?q=';
var DDGN = 'https://next.duckduckgo.com/?q=';
var Bing = 'https://www.bing.com/search?q=';
var StartPage = 'https://startpage.com/do/search?language=english&cat=web&query=';
var Wolfram = 'https://www.wolframalpha.com/input/?i=';
var Wikipedia = 'https://wikipedia.org/wiki/Special:Search?search=';

//Video Search Engines
var Youtube = 'https://youtube.com/results?search_query=';
var Dailymotion = 'https://dailymotion.com/relevance/search/';
var Vimeo = 'http://vimeo.com/search?q=';
var Bing_vid = 'https://www.bing.com/videos/search?q=';

//Image Search Engines
var Google_im = 'https://www.google.com/search?tbm=isch&q=';
var Bing_im = 'https://bing.com/images/search?q=';


//Maps Search
var Google_maps = 'https://www.google.com/maps/place/';
var OpenStreetMaps = 'https://openstreetmap.org/search?query=';


var currentEngine = Google; //Search in Google by default.

//This function looks, from which button it was executed, and then sets the search engine to the one tha
//that has been requested.
function Search(engine) {
	switch(engine) {

    //Normal Search Engines
		case 'google':
			currentEngine = Google;
			break;
		case 'ddg':
			currentEngine = DDG;
			break;
		case 'ddgn':
			currentEngine = DDGN;
			break;
		case 'bing':
			currentEngine = Bing;
			break;
		case 'startpage':
			currentEngine = StartPage;
			break;
		case 'wolfram':
			currentEngine = Wolfram;
			break;
    case 'wikipedia':
      currentEngine = Wikipedia;
      break;

    //Image Search Engines
    case 'google-im':
      currentEngine = Google_im;
      break;
    case 'bing-im':
      currentEngine = Bing_im;
      break;

    //Video Search Engines
    case 'youtube':
      currentEngine = Youtube;
      break;
    case 'dailymotion':
      currentEngine = Dailymotion;
      break;
    case 'vimeo':
      currentEngine = Vimeo;
      break;
    case 'bing-vid':
      currentEngine = Bing_vid;
      break;

    //Map Search Engines
    case 'google-maps':
      currentEngine = Google_maps;
      break;
    case 'openstreetmaps':
      currentEngine = OpenStreetMaps;
      break;
	}
	SubmitSearch();
}

//Open New window with search engine and query defined.
function SubmitSearch() {
	searchquery = window.document.getElementById("sbox-query").value;
	window.location = currentEngine + encodeURIComponent(searchquery);
}

//When Enter is pressed, start searching
function onReturnPress(){
	searchbar = window.document.getElementById('sbox-query');
	searchbar.onkeyup = function(event) {
		if(event.keyCode == 13){ //keycode 13 = Enter
			SubmitSearch();
		}
	}
}
