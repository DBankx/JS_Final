/* // Worked on by Deepanshu Joshi
// Student Id : 8726016
// Description: The details selected by the user at the Home Page are being redirected to reservations.html page

//-------------------------------------------

*/
$(document).ready(function(){

  var today = new Date().toJSON().slice(0,10).replace(/-/g,'-');
  $("#checkin").attr("min", today);             //setting the min attribute for checkin date 

 // registering click event handler on search button
  $("#search-hotels").click(function(e){

    var dateIn = $("#checkin").val();
    var dateOut = $("#checkout").val();
    var rooms = $("#rooms").val();
    var adults = $("#adults").val();

    //Checks if the value is null
    if(dateIn=="" || dateOut==""){
      e.preventDefault();
      return;
    }
    
    // Checks if the Checkin date is higher than checkout date
    if(dateIn > dateOut){
      alert("Checkout date should be higher");
      return;
    }

    window.location.href = encodeURI(`/pages/reservations.html?dateIn=${dateIn}&dateOut=${dateOut}&rooms=${rooms}&adults=${adults}`)

  });
});
