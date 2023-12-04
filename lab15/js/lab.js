// index.js - JavaScript Events and Forms
// Author: Vincent Stuhlmuller
// Date: 20 November 2023

$('#activate').click(function(){
//Core $.ajax() method
    $.ajax({
        url: 'https://yesno.wtf/api',
        method: 'GET',
        dataType: 'json',
        success: function (data) {
            var outputString = JSON.stringify(data);
            $('#output').text(outputString);
        },
        error: function (error) {
            //Handle the error
            console.error('Error fetching data:', error);
        }
    });
});