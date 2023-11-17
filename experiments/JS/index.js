// index.js - purpose and description here
// Author: Your Name
// Date:

// Constants

// Functions

console.log("Javascript is working!");

$("#my-button").click(function(){
    console.log("Button Clicked!");
    var name = prompt("What is your name?");
    console.log("Prompt returned:" + name);
    newText = "Hello" + name + "!";
    $("#title").html(newText);
});