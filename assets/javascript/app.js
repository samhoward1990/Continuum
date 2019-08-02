$(document).ready(function () {

    $(document).on("click", ".destinationImage", function () {
        $("#display-planets").empty();
        var searchLocation = $(this).attr("id");
        
        var nasaURL = "https://images-api.nasa.gov/search?q="
            + searchLocation;
            console.log(searchLocation);

    $.ajax({
        url: nasaURL,
        method: "GET"
    })
        .then(function(nasaResponse){
            console.log(nasaURL);
            console.log(nasaResponse);
            
            for (var i=0; i < 4; i++) {
                var nasaImageURL = nasaResponse.collection.items[i].links[0].href;
                console.log(nasaImageURL);
                var nasaImageDiv = $("<div>");
                var nasaImage = $("<img>");
                nasaImage.attr("src", nasaImageURL)
                nasaImageDiv.append(nasaImage);
                nasaImageDiv.appendTo($("#display-planets"));
            }
        });

    });



    


});



//         .then(function (response) {
//             console.log(queryURL);
//             console.log(response);
//             var results = response.data;
//         });

//     var queryURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=surfing&key=AIzaSyBwnn85wMUw6B5v3IqxC2R54yYytQu2ChQ"

//     $.ajax({
//         url: queryURL,
//         method: "GET"
//     })
//         .then(function (response) {
//             console.log(queryURL);
//             console.log(response);
//             var results = response.data;

//         });

