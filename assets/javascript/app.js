$(document).ready(function(){

    $("button").on("click", function() {
        $("#gifs").empty();
        var animal = $(this).data("name");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + 
            animal + "&api_key=aU5lv5zCfbbY4WzYmQ3Xc0qtPjEliikq&limit=10";

        $.ajax({
            url: queryURL,
            method: "GET"
        })
            .then(function(response) {
                console.log(response);

                var results = response.data;

                for (var i = 0; i < results.length; i++) {
                    var animalDiv = $("<div/>");
                    var p = $("<p/>");
                    p.text(results[i].rating);
                    var animalImage = $("<img/>");
                    animalImage.addClass("anImg")
                    animalImage.attr("src", results[i].images.fixed_height.url);
                    animalImage.attr("data-still", results[i].images.fixed_height_still.url)
                    animalImage.attr("data-animate", results[i].images.fixed_height.url)
                    .attr("data-state", "still");
                    animalDiv.append(p);
                    animalDiv.append(animalImage);
                    animalDiv.prependTo($("#gifs"));
                }

                $(".anImg").on("click", function() {
                    var state = $(this).attr("data-state"); 
                    console.log(this);

                    if (state == "still") {
                        $(this).attr("src", $(this).data("animate"));
                        $(this).attr("data-state", "animate");
                    } 
                    else {       
                        $(this).attr("src", $(this).data("still"));
                        $(this).attr("data-state", "still");
                    }      
                });
            });
    });

    var animals = [""];


        $("#aButton").on("click", function(){
            $("#gifs").empty();
            var animalButton = $("#gif-input").val();
            console.log(animalButton);
            var newButton = $("<button/>").addClass("btn btn-info animal").attr("data-name", animalButton).html(animalButton);
            $(".someButtons").append(newButton);
            queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animalButton + "&api_key=aU5lv5zCfbbY4WzYmQ3Xc0qtPjEliikq&limit=10";

            $.ajax({
            url: queryURL,
            method: "GET"
            })

            .then(function(response) {
                var results = response.data;

                for (var i = 0; i < results.length; i++) {
                    var animalDiv = $("<div/>");
                    var p =$("<p/>");
                    p.text(results[i].rating);
                    var animalImage = $("<img/>");
                    animalImage.addClass("anImg")
                    animalImage.attr("src", results[i].images.fixed_height_still.url);
                    animalImage.attr("data-still", results[i].images.fixed_height_still.url)
                    animalImage.attr("data-animate", results[i].images.fixed_height.url)
                    .attr("data-state", "still");
                    animalDiv.append(p);
                    animalDiv.append(animalImage);
                    animalDiv.prependTo($("#gifs"));
                }

                $(".anImg").on("click", function() {
                    var state = $(this).attr("data-state"); 
                    console.log(this);

                        if (state == "still") {
                            $(this).attr("src", $(this).data("animate"));
                            $(this).attr("data-state", "animate");
                        } 

                        else {
                            $(this).attr("src", $(this).data("still"));
                            $(this).attr("data-state", "still");
                        }      
                });
            });

            $("#gif-input").val("");
            return false;
        })
  
});