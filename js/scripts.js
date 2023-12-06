$(document).ready(function() {
    $("#formOne").submit(function(event) {
      $("#person1").append("person1Input").val();
      $("#person2").append("person2Input").val();
      $("#animal").append("animalInput").val();
      $("#exclamation").append("exclamationInput").val();
      $("#verb").append("verbInput").val();
      $("#noun").append("nounInput").val();
  
      $("#story").show();
  
      event.preventDefault();
    });
  });