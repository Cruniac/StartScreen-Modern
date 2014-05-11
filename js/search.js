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
*/

//Search Engine Search URL's
var Google = 'https://www.google.ch/#q=';
var DDG = 'https://duckduckgo.com/?q=';
var DDGN = 'https://next.duckduckgo.com/?q=';
var Bing = 'https://www.bing.com/search?q=';
var StartPage = 'https://startpage.com/do/search?language=english&cat=web&query=';
var Wolfram = 'https://www.wolframalpha.com/input/?i=';

var currentEngine = Google;

function Search(engine) {
	switch(engine) {
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
	$("#sbox-query").keyup(function(event){
		if(event.keyCode == 13){
			SubmitSearch();
		}
	});
}