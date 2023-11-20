// index.js - JavaScript Events and Forms
// Author: Vincent Stuhlmuller
// Date: 20 November 2023

function sortString(inputString) {

    return inputString.split('').sort().join('');
    //Convert string to array and back again in order to sort
}

//listener for button
$("#submit").click(function(){

    const userName = $("#user-name").val();
    //get input field value
    //and sort
    userNameSorted = sortString(userName);
    //append new div to output

    $("#output").html('<div class="text"><p>' + userNameSorted + '</p></div>');
});