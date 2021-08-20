/*
Javascript JavaScript Programming Final Project
Name: Joel Macwan
Student ID:8716302
Description: In this i have added a form Validation for ContactUs page.
*/ 

//Contact Us form Validation
const inputs = document.querySelectorAll(".input"); //Selects all the input Fields

function focusFunc() {  //Declaration of Focus Function
  let parent = this.parentNode;
  parent.classList.add("focus");  //Adds Focus
}

function blurFunc() {   //Declaration of Blur Function
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");   //Removes Focus
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);   //Adds Focus to input fields
  input.addEventListener("blur", blurFunc);     //Removes Focus from input fields
});


$(document).ready(function() {
  $("#name").focus();     //setting focus to first name of the form.
$("#contact_form").submit(function(event)   //event handler for submitting form
  {
      
      var isValid = true;

      //Name
      var name = $("#name").val().trim();     //to trim the spaces
      $("#name").val().trim();        //to trim the spaces

      if(name == "")  //if this field is empty it will give the below message
      {
          isValid = false;
          $("#name").next().text("This field is required.");
      }
      else{
          $("#name").next().text("");     //if all the conditions above met it will remove the warnings of above conditions
      }
      $("#name").val(name);

      //Email
      var emailPattern =/\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
      var email = $("#email").val().trim();       //to trim the spaces

      if(email == "")     //if its empty it will give the below message
      {
          $("#email").next().text("This field is required.");
          isValid = false;
      } else if (!emailPattern.test(email))       //to check the format of entered email
      {
          $("#email").next().text("Must be a valid email.");
          isValid = false;
      } else{
          $("#email").next().text("");        //if all the conditions above met it will remove the warnings of above conditions
      }
      $("#email").val(email);

      //Phone Validation
      var phonePattern =  /^\d{3}-\d{3}-\d{4}$/;
      var phoneEntry = $("#phone").val().trim();      //to trim the spaces
      if(phoneEntry == "")        //if its empty it will give the below message
      {   
      $("#phone").next().text("This field is required.");
      isValid = false;
      } else if( !phonePattern.test(phoneEntry)) 
      {   ////to check the format of entered phone number
      $("#phone").next().text("use 999-999-9999.");
      isValid = false;
      } else{
      $("#phone").next().text("");        //if all the conditions above met it will remove the warnings of above conditions
      }
      $("#phone").val(phoneEntry);

      if(isValid == false)
      {
          event.preventDefault();
      }
  });
});
