// getting the buttons to work
$("button").on("click", function() {
    var gif = $(this).attr("data-gif");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
      gif + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10";

    $.ajax({
      url: queryURL,
      method: "GET"
    })
      .then(function(response) {
        var results = response.data;

        for (var i = 0; i < results.length; i++) {
          var gifDiv = $("<div>");

          var rating = results[i].rating;

          var p = $("<p>").text("Rating: " + rating);

          var gifImage = $("<img>");
          gifImage.attr("src" , results[i].images.fixed_height.url, );

          gifDiv.prepend(p);
          gifDiv.prepend(gifImage);

          $("#gifs-here").prepend(gifDiv);
        }
      });
  });

//   this was me trying to get the add gif category to work as well as the buttons to work along with it. I could not get it to work though.
// var gifs = ["dog", "car", "cat", "monkey"];

//   function renderButtons() {

//     $("#buttons-view").empty();

//     for (var i = 0; i < gifs.length; i++) {

//       var a = $("<button>");
//       a.addClass("gif-btn");
//       a.attr("data-name", gifs[i]);
//       a.text(gifs[i]);
//       $("#buttons-view").append(a);
//     }
//   }

//   $("#add-gif").on("click", function(event) {
//     event.preventDefault();
//     var gif = $("#gif-input").val().trim();

//     gifs.push(gif);

//     renderButtons();
//   });

//   $(document).on("click", ".gif-btn", results);

//   renderButtons();

//   how to animate the gifs
  $(".gif").on("click", function() {

    var state = $(this).attr("data-state");
    var stillImg = $(this).attr("data-still");
    var animateImg = $(this).attr("data-animate");
    console.log(state);


    if (state === "still") {
      $(this).attr("src", animateImg);
      $(this).attr("data-state", "animate");
    } else {
      $(this).attr("src", stillImg);
      $(this).attr("data-state", "still");
    }
  });