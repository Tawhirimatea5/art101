// index.js - JSON & APIs
// Author: Vincent Stuhlmuller
// Date: 7 December 2023

$.ajax({
    url: "https://xkcd.com/1942/info.0.json",
    type: "GET",
    dataType: "json",
    success: function (comicObj) {

        console.log(comicObj);

        $("#output").append("<h2>" + comicObj.title + "</h2>");

        const $comicImage = $("<img>");
        $comicImage.attr("src", comicObj.img);
        $comicImage.attr("alt", comicObj.alt);
        $comicImage.attr("title", comicObj.alt);


        $("#output").append($comicImage);
    },
    error: function (jqXHR, textStatus, errorThrown) {

        console.log("Error:", textStatus, errorThrown);
    },
});