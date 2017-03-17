//business logic
var result = [];

//user interface logic
$(document).ready(function(event){
  $("form#userInput").submit(function(event){
    event.preventDefault();
    var userInput = parseInt($("input#userInput").val());
    console.log(userInput);
    if (Number.isInteger(userInput) === false ) {
      $("#NaN").show();
    };
  });
});
