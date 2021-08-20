/*
Javascript Final Project
Developed by  : Sreenath Rao T S
Student ID : 8731569
Description : This confirmation.js file is used to display email from session storage
*/
$(document).ready(function() {
    // display date from session storage
    $("#email").text( sessionStorage.email );//getting data from session storage
    
}); // end of ready()