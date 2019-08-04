$(document).ready(function () {

    // Coding for Firbase Database

    var firebaseConfig = {
        apiKey: "AIzaSyATFDUF2_xSvh_GtpEHJyy6zvdeMUUoXaA",
        authDomain: "continuum-7ea8b.firebaseapp.com",
        databaseURL: "https://continuum-7ea8b.firebaseio.com",
        projectId: "continuum-7ea8b",
        storageBucket: "",
        messagingSenderId: "755582892592",
        appId: "1:755582892592:web:a171da16a813efa4"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    // stored the database as a variable
    var database = firebase.database();
    // watch for on click on form submit button
    $("#submit").on("click", function (event) {
        event.preventDefault();
        // save form values as variables
        var firstName = $("#first-name").val().trim();
        var lastName = $("#last-name").val().trim();
        var email = $("#email").val().trim();
        var destination = $("#destination").val();
        var speed = $("#speed").val();
        // push data to database
        database.ref().push({
            firstName: firstName,
            lastName: lastName,
            email: email,
            destination: destination,
            speed: speed
        })

    });

    // function that listens for click on destination images then calls NASA and YouTube API -RS
    $(document).on("click", ".destinationImage", function () {
        $("#display-destination-image").empty();
        $("#display-destination-video").empty();
        var searchLocation = $(this).attr("id");
        
        // RS function for NASA API Call
        // var callNASAAPI = function () {
            var nasaURL = "https://images-api.nasa.gov/search?q="+searchLocation;
            console.log(nasaURL);
            $.ajax({
                url: nasaURL,
                method: "GET"
            })
                .then(function (nasaResponse) {
                    console.log(nasaResponse);

                    // pushes images returned from the NASA API call into html -RS
                    for (var i = 0; i < 4; i++) {
                        var nasaImageURL = nasaResponse.collection.items[i].links[0].href;
                        var nasaImageDiv = $("<div>");
                        var nasaImage = $("<img>");
                        nasaImage.attr("src", nasaImageURL)
                        nasaImageDiv.append(nasaImage);
                        $("#display-destination-image").append(nasaImageDiv)
                        // nasaImageDiv.appendTo($("#display-destination-image"));
                    }
                });



        var callYouTubeAPI = function () {

            var youtubeURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=" +
            searchLocation + "&key=AIzaSyBwnn85wMUw6B5v3IqxC2R54yYytQu2ChQ";

            console.log(searchLocation);

            $.ajax({
                url: youtubeURL,
                method: "GET"
            })
                .then(function (youtubeResponse) {
                    console.log(youtubeResponse.items[0]);

                    var youTubeVideoURL = youtubeResponse.items[1].id.videoId;
                    var fullYoutubeURL = "https://www.youtube.com/embed/" + youTubeVideoURL;
                    console.log(fullYoutubeURL);
// 

                    var youTubeVideoDiv = $("<div>");
                    var videoframe = $("<iframe>");
                    videoframe.attr("src", fullYoutubeURL);
                    youTubeVideoDiv.append(videoframe);
                    $("#display-destination-video").append(youTubeVideoDiv);
                });

        }
        callYouTubeAPI();
    });

    // This is the smooth scroll function that does not work yet

    // $("a").on('click', function(event) {

    //     // Make sure this.hash has a value before overriding default behavior
    //     if (this.hash !== "") {
    //       // Prevent default anchor click behavior
    //       event.preventDefault();
    
    //       // Store hash
    //       var hash = this.hash;
    
    //       // Using jQuery's animate() method to add smooth page scroll
    //       // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
    //       $('html, body').animate({
    //         scrollTop: $(hash).offset().top
    //       }, 1800, function(){
       
    //         // Add hash (#) to URL when done scrolling (default click behavior)
    //         window.location.hash = hash;
    //       });
    //     } // End if
    //   });

});