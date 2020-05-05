//Business or back-end logic:


// UI or front end logic
$(document).ready(function() {
  $("form#details").submit(function(event) {
    event.preventDefault();
      var christianName = $("#christianName").val();
      var surname = ($("#surname").val());
      var ageRange = $("#ageRange").val();

      var denomination = $("input:radio[name=denomination]:checked").val();

      var baptism = $("#baptism").val();




      var result = christianName + " " + surname + " is in the age range "+ ageRange + " and a member of the "+denomination+
        " church. They were baptised on "+baptism 
      $("#output").text(result);  
    });   
  
});