// index.js - Functions
// Author: Vincent Stuhlmuller
// Date: 3 November 2023

function sortUserName(userName) {
    var nameWithoutSpaces = userName.replace(/\s/g, '');

    var nameArray = nameWithoutSpaces.toLowerCase().split('');

    var nameArraySort = nameArray.sort();

    var nameSorted = nameArraySort.join('');
    
    return nameSorted;
}


function shuffleAndCapitalize(userName) {
    var nameArray = userName.split('');

    var shuffledArray = nameArray.sort(() => Math.random() - 0.5);

    var shuffledName = shuffledArray.join('');

    var capitalizedName = shuffledName.toLowerCase().replace(/\b\w/g, l => l.toUpperCase());

    return capitalizedName;
}

var userName = window.prompt("Hi, what is your name so I can fix it for you.")

var sortedName = sortUserName(userName);

var anagramName = shuffleAndCapitalize(userName);

document.writeln("Hey look here is your fixed name: <div class='output'>" + sortedName + "</div>");

document.writeln("Here is an anagram using your name: <div class='output'>" + anagramName + "</div>");