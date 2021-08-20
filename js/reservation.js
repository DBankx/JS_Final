/*
Javascript Final Project
Developed by  : Sreenath Rao T S
Student ID : 8731569
Description : This reservation.js file is used to book rooms for customers after basic validations
*/
$(document).ready(function(){

  var check = 0;
    
	
// This function takes query parameter name as input and gives the parameter value as output
  var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return typeof sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
    return false;
  };

  $("#availability").click( function(){
       
    var dateIn = $("#dateinpicker").val();
    var dateOut = $("#dateoutpicker").val();
    var adults = $("#adults").val()
    $("#checkindate").val(dateIn);
    $("#checkoutdate").val(dateOut);
    $("#checkInAdults").val(adults);
    //$("#wrapper").style.display="block";
    //  $("#content").style.display="none";
    if(dateIn=="" || dateOut==""){
      evt.preventDefault();
    }
    if(dateIn > dateOut){
      $("#dateoutpicker").val("");
      $("#checkindate").val("");
      $("#checkoutdate").val("");
      $("#checkInAdults").val("");
      alert("Checkout date should be higher");

      //document.getElementById('reservation_form').style.display = "block";
        //wrapper.style.display = "block";

        
    } else {

    $('#reservation_form').toggle("slow");//this displays reservation form
    $('#contents').toggle("hide");//this hides check availability form
    $('#sub-container').css('background-image', 'none');//this used to hide background-image
    }

  });

  let dateIn = getUrlParameter('dateIn')
  let dateOut = getUrlParameter('dateOut')
  let rooms = getUrlParameter('rooms')
  let adults = getUrlParameter('adults')

  if(dateIn) {
    $("#dateinpicker").val(dateIn);
  }
  if(dateOut) {
    $("#dateoutpicker").val(dateOut);
  }
  if(rooms) {
    //do nothing
  }
  if(adults) {
    $("#checkInAdults").val(adults);
  } 
  if (dateIn && dateOut && rooms && adults) {
    $("#availability").trigger('click')
  }

  $( function() {
    $( "#dateinpicker" ).datepicker({//datepicker

      minDate: new Date()//shows current date
    });
  } );

  $( function() {
    $( "#dateoutpicker" ).datepicker({
      
      minDate: "0+1"//shows current date + 1
    });

  } );    

      
      $("#reservation_form").submit( evt =>// to submit form after validating the user entries
        {
        let isValid=true;

        let emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;// to check if email_address is valid or not using regular expression
	      const email = $("#email").val().trim();
	      $("#email").val(email);
	      if(email=="")
      	{
	      	isValid=false;
	      	$("#email").next().text("This field is required");
	      }
    	else if(!emailPattern.test(email))
	      {
	      	isValid=false;
		      $("#email").next().text("Please enter a valid email");
	      }
	    else
	    {	
	    	$("#email").next().text("");
	    }
   
      const name = $("#name").val().trim();
	    $("#name").val(name);
	    if(name=="")//to check if name is entered or not as this is mandatory field
	    {
		    isValid=false;
		    $("#name").next().text("This field is required");
	    }
	    else
	    {
		    $("#name").next().text("");
	    }

      const phone = $("#phone").val().trim();
      $("#phone").val(phone);
      if(phone=="")
      {
        isValid=false;
        $("#phone").next().text("This field is required");
      }
      else if(isNaN(phone) || phone.length!=10)//to check if phone is entered and is valid as this is mandatory field
      {
        isValid=false;
        $("#phone").next().text("Please enter a valid number")
      }
      else
      {
        $("#phone").next().text("");
      }

      check=1;
      
      evt.preventDefault();//preventing the submission of the form if the entries are not valid

      if(isValid)
	    {
        sessionStorage.email = email;//storing email in session storage
        location.href = "confirmation.html";
	    }

        // send data to getform url
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('message', `
        Booking for: ${name}\n
        Email: ${email}\n
        No of adults: ${$('#checkInAdults').val()}\n
        No of Children: ${$('#checkInChildren').val()}\n
        Staying from: ${new Date($('#checkindate').val()).toDateString()} to ${new Date($('#checkoutdate').val()).toDateString()}\n
        Extra requests: ${$('#more').val()}
        `);

        fetch('https://getform.io/f/5216d441-c542-4746-8437-764de9fadb9a', {
            method: 'POST',
            body: formData
        });

        });       

        $("#cancel-booking").click( function(){//to cancel reservation form

               $('#reservation_form').toggle("hide");// this hides reservation form
                $('#contents').toggle("slow");//this displays check availability form
                $('#sub-container').css('background-image', "url('../images/customer.png')");//this updates css property to show background images
                 $("#dateoutpicker").val("");
                 $("#dateinpicker").val("");

        });

       
     

});
