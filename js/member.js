/*
Javascript JavaScript Programming Final Project
Name: Hrithik Malhotra
Student ID:8738516
Description: In this i have added a form Validation for membership page.
*/ 

$(document).ready(function() {
    $("#name").focus();//setting focus to first name of the form.
	$("#membership_form").submit(function(event)//event handler for submitting form
                    {
                        var isValid = true;
                        var name = $("#name").val().trim();//to trim the spaces
                        $("#name").val().trim();//to trim the spaces

                        if(name == "")//if its empty it will give the below message
                        {
                            $("#name").next().text("This field is required.");
                            isValid = false;
						}
						else{
                            $("#name").next().text("");//if all the conditions above met it will remove the warnings of above conditions
                        }
                        $("#name").val(name);


                        var lname = $("#lname").val().trim();//to trim the spaces
                        $("#lname").val().trim();//to trim the spaces

                        if(lname == "")//if its empty it will give the below message
                        {
                            $("#lname").next().text("This field is required.");
                            isValid = false;
						}
						else{
                            $("#lname").next().text("");//if all the conditions above met it will remove the warnings of above conditions
                        }
                        $("#lname").val(lname);


                        var emailPattern =/\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
                        var email = $("#email").val().trim();//to trim the spaces

                        if(email == "")//if its empty it will give the below message
                        {
                            $("#email").next().text("This field is required.");
                            isValid = false;
                        } else if (!emailPattern.test(email))//to check the format of entered email 
                        {
                            $("#email").next().text("Must be a valid email.");
                            isValid = false;
                        } else{
                            $("#email").next().text("");//if all the conditions above met it will remove the warnings of above conditions
                        }
                        $("#email").val(email);


                        //Phone Validation
					    var phonePattern =  /^\d{3}-\d{3}-\d{4}$/;
                        var phoneEntry = $("#phone").val().trim();//to trim the spaces
                        if(phoneEntry == "")//if its empty it will give the below message
                        {
                        $("#phone").next().text("This field is required.");
                        isValid = false;
                        } else if( !phonePattern.test(phoneEntry)) 
                        {////to check the format of entered phone number
                        $("#phone").next().text("use 999-999-9999.");
                        isValid = false;
                        } else{
                        $("#phone").next().text("");//if all the conditions above met it will remove the warnings of above conditions
                        }
                        $("#phone").val(phoneEntry);



                        // Zip Code Validation
			var zipCode = $("#zip_code").val().trim();//trim() to trim the spaces
			if (zipCode == "") {//if its empty it will give the below message
				$("#zip_code").next().text("This field is required.");
				isValid = false;
			} else if ( zipCode.length != 5 ) {//to check the format of zip code
				$("#zip_code").next().text("Use 99999 format.");
				isValid = false;
			} else {
				$("#zip_code").next().text("");//if all the conditions above met it will remove the warnings of above conditions
			}
			$("#zip_code").val(zipCode);



                        if(isValid == false)
						{
							event.preventDefault();
						}



					});//ending submit here	
}); // end ready
