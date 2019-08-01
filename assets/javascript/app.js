// Intialize firebase
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

$(document).ready(function () {

    // var queryURL = "https://images-api.nasa.gov/search?q="
    // + searchLocation 

    var queryURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=surfing&key=AIzaSyBwnn85wMUw6B5v3IqxC2R54yYytQu2ChQ"




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