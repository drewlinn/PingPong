//business logic
var pingPong = function(userInput) {
  var output;
  for (var index = 1; index <= userInput; index ++) {
      if (index % 15 === 0 || index % 5 === 0 && index % 3 === 0) {
        var output = "PingPong!";
    } else if (index % 5 === 0) {
        var output = "Pong!";
    } else if (index % 3 === 0) {
        var output = "Pong!";
    } else  {
        var output = index;
    };
  };
  return output;
};

//user interface logic
$(document).ready(function(event){
  $("form#userInput").submit(function(event){
    event.preventDefault();
    var userInput = parseInt($("input#userInput").val());
    if (Number.isInteger(userInput) === false ) {
        $(alert("Please enter a number!"));
    } else {
        $(userInput).pingPong();
        $("ul#pingpong").append("<li>" + output + "</li>");
    };
  });
});
