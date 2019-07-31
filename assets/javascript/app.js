$(document).ready(function() {

    // var queryURL = "https://images-api.nasa.gov/search?q="
    // + searchLocation 

    var queryURL ="https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=surfing&key=AIzaSyBwnn85wMUw6B5v3IqxC2R54yYytQu2ChQ"

    


    // destination 
    ;



    $.ajax({
        url: queryURL,
        method: "GET"
    })
        .then(function (response) {
            console.log(queryURL);
            console.log(response);
            var results = response.data;

});




});