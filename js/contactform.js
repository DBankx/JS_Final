$(document).ready(function() {
    $("#name").focus();//setting focus to arrival date
	$("#contact_form").submit(function(event)//event handler for submitting form
    {
        
        var isValid = true;

        //Name
        var name = $("#name").val().trim();
        $("#name").val().trim();

        if(name == "")
        {
            isValid = false;
            $("#name").next().text("This field is required.");
        }
        else{
            $("#name").next().text("");
        }
        $("#name").val(name);

        //Email
        var emailPattern =/\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
        var email = $("#email").val().trim();

        if(email == "")
        {
            $("#email").next().text("This field is required.");
            isValid = false;
        } else if (!emailPattern.test(email))
        {
            $("#email").next().text("Must be a valid email.");
            isValid = false;
        } else{
            $("#email").next().text("");
        }
        $("#email").val(email);

        //Phone Validation
        var phonePattern =  /^\d{3}-\d{3}-\d{4}$/;
        var phoneEntry = $("#phone").val().trim();
        if(phoneEntry == "")
        {
        $("#phone").next().text("This field is required.");
        isValid = false;
        } else if( !phonePattern.test(phoneEntry)) 
        {
        $("#phone").next().text("use 999-999-9999.");
        isValid = false;
        } else{
        $("#phone").next().text("");
        }
        $("#phone").val(phoneEntry);

        if(isValid == false)
        {
            event.preventDefault();
        }
    });
});