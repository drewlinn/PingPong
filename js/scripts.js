//business logic
var result = [];

function resetFields()  {
  $("input#userInput").val();
};

//user interface logic
$(document).ready(function(event){
  $("form#userInput").submit(function(event){
    event.preventDefault();
    var userInput = parseInt($("input#userInput").val());
    if (Number.isInteger(userInput) === false ) {
      $(alert("Please enter a number!"));
    } else if ((userInput) % 15 === 0) {
        $("ul#pingpong").append("<li>" + "Ping-Pong!" + "</li>");
    } else if ((userInput) % 5 === 0) {
        $("ul#pingpong").append("<li>" + "Pong!" + "</li>");
    }  else if ((userInput) % 3 === 0)  {
        $("ul#pingpong").append("<li>" + "Ping!" + "</li>");
    };
  });
});
