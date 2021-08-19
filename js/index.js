$(document).ready(function(){

  var today = new Date().toJSON().slice(0,10).replace(/-/g,'-');
  $("#checkin").attr("min", today);

  $("#search-hotels").click(function(e){

    var dateIn = $("#checkin").val();
    var dateOut = $("#checkout").val();
    var rooms = $("#rooms").val();
    var adults = $("#adults").val();

    if(dateIn=="" || dateOut==""){
      e.preventDefault();
      return;
    }
    if(dateIn > dateOut){
      alert("Checkout date should be higher");
      return;
    }

    window.location.href = encodeURI(`/pages/reservations.html?dateIn=${dateIn}&dateOut=${dateOut}&rooms=${rooms}&adults=${adults}`)

  });
});