$(document).ready(function() {
    $("#formOne").submit(function(event) {
      $("#person1").append("person1Input").val();
      $("#person2").append("person2Input").val();
      $("#person3").append("person3Input").val();
      $("#person4").append("person4Input").val();
      $("#person5").append("person5Input").val();
      $("#verb1").append("verb1Input").val();
      $("#verb2").append("verb2Input").val();
      $("#animal").append("animaInput").val();
      $("#noun").append("nounInput").val();
      $("#person7").append("person7Input").val();
      $("#person8").append("person8Input").val();
      $("#verb3").append("verb3Input").val();
     
      $("#letter").show();
     event.preventDefault();
    });
  });