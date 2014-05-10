
function StartSearch_DuckDuckGo() {
  $('#searchengine').empty();
  SearchQuery_DuckDuckGo($('#sbox-query').val());
}

function SearchQuery_DuckDuckGo(query) {

	var url = 'https://api.duckduckgo.com';

	$.ajax({
	  type: "GET",
	  url: url,
	  dataType: 'jsonp',
	  data: { q: query, format: 'json'}
	}).done(function( response ) {

	console.log(response)
	  //Loop trough each Google search result and make it show up on the screen.

	$( "#searchengine" ).append( '<div class="sr-title"><a class="sr-link" href="'+response.AbstractURL+'">'+response.Heading+'</a></div><div class="sr-box">'+response.Abstract+'<br><a class="des-link sr-link" href="'+response.AbstractURL+'">'+response.AbstractURL+'</a></div>' );

	});
}