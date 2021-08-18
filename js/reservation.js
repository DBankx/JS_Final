$(document).ready(function(){

  
  $( function() {
    $( "#dateinpicker" ).datepicker({

      minDate: new Date()
    });
  } );

  $( function() {
    $( "#dateoutpicker" ).datepicker({
      
      minDate: new Date()
    });

  } );    

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

      $('#reservation_form').toggle("slow");
      $('#contents').toggle("hide");

      }

    });

      $("#reservation_form").submit( evt =>/// to submit form after validating the user entries
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
   
      const name = $("#name").val().trim();//to check if name is entered or not as this is mandatory field
	    $("#name").val(name);
	    if(name=="")
	    {
		    isValid=false;
		    $("#name").next().text("This field is required");
	    }
	    else
	    {
		    $("#name").next().text("");
	    }

      const phone = $("#phone").val().trim();//to check if phone is entered and is valid as this is mandatory field
      $("#phone").val(phone);
      if(phone=="")
      {
        isValid=false;
        $("#phone").next().text("This field is required");
      }
      else if(isNaN(phone) || phone.length!=10)
      {
        isValid=false;
        $("#phone").next().text("Please enter a valid number")
      }
      else
      {
        $("#phone").next().text("");
      }

     
      if(!isValid)//preventing the submission of the form if the entries are not valid
	    {
		      evt.preventDefault();
	    }
      
      
      $("#response").fadeIn(1000);
      
      
        });

       

        $("#cancel-booking").click( function(){

               $('#reservation_form').toggle("hide");
         
                $('#contents').toggle("slow");

                 $("#dateoutpicker").val("");
                 $("#dateinpicker").val("");

        });

       
     

});