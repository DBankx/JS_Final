/*
Javascript JavaScript Programming Final Project
Name: Hrithik Malhotra
Student ID:8738516
Description: In this i have added toggle and animation effect for membership benefits content in membership page.
*/ 

$(document).ready(function() {
	
	// runs when an h3 heading is clicked
    $("#memdetails h3").click(function() {
		$(this).toggleClass("minus");
		if ($(this).attr("class") != "minus") {
	        $(this).next().slideUp(1000, "easeInBounce");
	   	}
	   	else {
		    $(this).next().slideDown(1000, "easeOutBounce");
	   	}
    }); // end click
});
