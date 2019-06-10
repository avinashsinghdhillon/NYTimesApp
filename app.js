
///////////////////////////////////
//$("#butt").click(queryNYTApi);
/////////////////////////////////////


var results = new Array();
var searchTerm = "brexit";
var numResults = 10;
var minYear = '1900' + '0101';
var maxYear = '2019' + '1231';


// function to query NYT API
function queryNYTApi(){

var queryText = "https://api.nytimes.com/" + 
                    "svc/search/v2/articlesearch.json?" +
                    "q=" + searchTerm + "&api-key=betd7cROBjOvQs0Usm6AQc4Q7cQEUGPb" +
                    "&begin_date=" + minYear + "&end_date=" + maxYear

    $.ajax({
        url:queryText,
        method: "GET"
    }).then(function (response){
        console.log(response);
        createResultSet(response);
})

}

function createResultSet(items){
    debugger;
    for(var i = 0; i < items.response.docs.length; i++){
        var newItem = {
            headline: items.response.docs[i].headline,
            pubDate : items.response.docs[i].pub_date,
            brief: items.response.docs[i].snippet,
            url: items.response.docs[i].web_url
        };
        results.push(newItem);
    }
     
}