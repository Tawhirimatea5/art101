// index.js - Conditional
// Author: Vincent Stuhlmuller
// Date: 23 November 2023

function aptitudeTest(str) {
    len = str.length;
    mod = len % 6;
    if (mod == 0) {
        return "Abnegation"
    }
    else if (mod == 1) {
        return "Candor"
    }
    else if (mod == 2) {
        return "Erudite"
    }
    else if (mod == 3) {
        return "Dauntless"
    }
    else if (mod == 4) {
        return "Amity"
    }
    else if (mod == 5) {
        return "Divergent"
    }
}


var myButton = document.getElementById("button");
myButton.addEventListener("click", function() {
    var name = document.getElementById("input").value;
    var faction = aptitudeTest(name);
    newText = "<p>Your aptitude is for the faction of " + faction + "</p>";
    document.getElementById("output").innerHTML = newText;
})