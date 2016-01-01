$(document).ready(function(){

//hide the company more info divs
  $('#divMoreInfoOne').hide();
  $("#divMoreInfoTwo").hide();
  $("#divMoreInfoThree").hide();

  //event handlers for company more info divs
  $("#companyMoreInfo1").on("click", function(e) {
    e.preventDefault();
    //alert("glassdoor company one more info button working");
    $('#divMoreInfoOne').show();
    $('#divMoreInfoTwo').hide();
    $('#divMoreInfoThree').hide();
  });
  $("#companyMoreInfo2").on("click", function(e) {
    e.preventDefault();
    //alert("glassdoor company two more info button working");
    $('#divMoreInfoTwo').show();
    $('#divMoreInfoOne').hide();
    $("#divMoreInfoThree").hide();
  });
  $("#companyMoreInfo3").on("click", function(e) {
    e.preventDefault();
    //alert("glassdoor company three more info button working");
    $("#divMoreInfoThree").show();
    $("#divMoreInfoOne").hide();
    $("#divMoreInfoTwo").hide();
  });
  //event handles for the company more info close buttons
  $("#closeMoreInfo1").on("click", function(e) {
    e.preventDefault();
    $("#divMoreInfoOne").hide();
  });
  $("#closeMoreInfo2").on("click", function(e) {
    e.preventDefault();
    $("#divMoreInfoTwo").hide();
  });
  $("#closeMoreInfo3").on("click", function(e) {
    e.preventDefault();
    $("#divMoreInfoThree").hide();
  });

});