$(document).ready(function(){
  $("form#transportation_survey").submit(function(event){
    event.preventDefault();
    $("#work-responses").show();
    $("#other-responses").show();
    $("input:checkbox[name=work-transportation]:checked").each(function(){
      var workTransportationMode = $(this).val();
      $('#work-responses').append(workTransportationMode + "<br>");
    });
    $("input:checkbox[name=other-responses]:checked").each(function(){
      var otherTransportationMode = $(this).val();
      $("#other-responses").append(otherTransportationMode + "<br>");
    });
    $('#transportation_survey').hide();
  });
});
