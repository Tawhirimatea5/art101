// index.js - Libraries and jQuery
// Author: Vincent Stuhlmuller
// Date: 12 November 2023

function generateRandomText() {
    const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    const min = 3;
    const max = 100;
    const randLen = Math.floor(Math.random() * (max - min + 1)) + min;
    //Random starting index
    const randStart = Math.floor(Math.random() * (text.length - randLen + 1));
    //Gen random text
    return text.slice(randStart, randStart + randLen);
}

//listener for button
$("#converse-with").click(function () {
    //get fake speech
    const newText = generateRandomText();



    //append new div to output div and with alternating sides
    $("#output").append('<div class="text"><p>' + newText + '</p></div>');

    //clear last inpuut
    $("#user-input").val("");
});


//keypress listener
$("#user-input").keypress(function (e) {
    if (e.which === 13) {
        const userText = $("#user-input").val();
        if (userText.trim() !== "") {
            //append new div 
            $("#output").append('<div class="text"><p>' + userText + '</p></div>');
            //clear input
            $("#user-input").val("");
        }
    }
});