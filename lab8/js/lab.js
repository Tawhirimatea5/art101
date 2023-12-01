// index.js - Anon Functions and Callbacks
// Author: Vincent Stuhlmuller
// Date: 6 November 2023

function subtractOne(x) {
    var result = (x - 2)
    return result;
}

console.log("What is 1 - 2? ", subtractOne(1));
console.log("What is 1 - 2? ", subtractOne(1));

var array = [100, 203, 23, 42, 30, 25, 93, 2]
console.log("My array", array);

var checkArray = array.map(subtractOne);
console.log("Results of subtracting 2 from array:", checkArray);

var checkArray = array.map(function(x){
    return x ** 3;
})

console.log("Multiplication of array by 3:", checkArray)

//Original
var originalArray = "Original: " + array.join(", ");

//Check subtraction
var subtractionResults = "Subtraction from the Array: " + array.map(subtractOne).join(", ");

//Squareroot
var squareRootResults = "Square root of Arrray: " + array.map(function(x) {
    return x ** 0.5;
}).join(", ");

//Combanashun man
var mapResults = originalArray + "<br>" + subtractionResults + "<br>" + squareRootResults;

//Select elemen by ID and set html content
$("#output").html(mapResults);