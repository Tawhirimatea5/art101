// index.js - Libraries and jQuery
// Author: Vincent Stuhlmuller
// Date: 12 November 2023

$(".minor-section").append("<button class='button-challenge'>Special Mode</button>");

$(".button-challenge").click(function() {

    var section = $(this).closest(".minor-section");
//find closest parent with the class minor-section
//add or subtract special class
    section.toggleClass("special");
 
});