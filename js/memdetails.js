$(document).ready(function() {
	
	// runs when an h2 heading is clicked
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