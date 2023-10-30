// index.js - Arrays & Objects
// Author: Vincent Stuhlmuller
// Date: 30 October 2023

// Define Variables
var myTransport = ["Car","Bus","Train","Run","Uber","Walking"];

// Create the object for my main ride
var myMainRide = {
    make: "Hyundai",
    model: "Elantra",
    color: "White",
    year: 2018,

    // Calculate age of ride
    age: function() {
        return 2023 - this.year;
    }
};

// Output

document.writeln("My modes of transportation: " + myTransport + "<br>");

document.writeln("My Main Ride: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>");