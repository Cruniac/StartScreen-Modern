
function StartSearch_Google() {
  $('#searchengine').empty();
  SearchQuery_Google($('#sbox-query').val());
}

function SearchQuery_Google(query) {

  var key = 'AIzaSyBlMNsGxO_4Vn8a9odoGbZiW7EXhR6NUq0';
  var engineid = '005962480996055108906:wpdor7vf40g';
  var url = 'https://www.googleapis.com/customsearch/v1';

  $.ajax({
    type: "GET",
    url: url,
    data: { key: key, cx: engineid , q: query}
  }).done(function( response ) {

    //Loop trough each Google search result and make it show up on the screen.
    for (var i = 0; i < response.items.length; i++) {
      var item = response.items[i];
      console.log(item);

      $( "#searchengine" ).append( '<div class="sr-title"><a class="sr-link" href="'+item.link+'">'+item.title+'</a></div><div class="sr-box">'+item.snippet+'<br>'+item.link+'</div>' );
    }

  });
}
