
var finalUrl = '';


$(".buttonclass").on("click", function() {
	var q = $(this).attr("data-article");
	var fq = $(this).attr("data-fq");
	var begin = $(this).attr("data-begin");
	var end = $(this).attr("data-end");

	var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
	finalUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=ebf4281d051d4191be1f73b5a78f309b&q=president&begin_date=20150101&end_date20160101"; 
	console.log(finalUrl);

	results();

$.ajax({
  url: finalUrl,
  method: 'GET'
})
.done(function(response) {
  console.log(response.response.docs[0].headline);

  $('.title').text(response.response.docs[0]);

 function results(response){
 	for (var i = 0; i < fq; i++) {
 		Things[i]
 	}
 }
});
//}).fail(function(err) {
  //throw err;
});


