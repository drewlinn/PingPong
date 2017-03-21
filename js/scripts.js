//business logic
var letsPlay = function(number) {
  var output;
  for (var index = 1; index <= userInput; index ++) {
      if ((index) % 15 === 0) {
        output = "PingPong!";
    } else if ((index) % 5 === 0) {
        output = "Pong!";
    } else if ((index) % 3 === 0) {
        output = "Pong!";
    } else  {
        output = index;
    };
  };
};

//user interface logic
$(document).ready(function(event){
  $("form#userInput").submit(function(event){
    event.preventDefault();
    var userInput = parseInt($("input#userInput").val());
    if (Number.isInteger(userInput) === false ) {
        $(alert("Please enter a number!"));
    } else {
        $(userInput).letsPlay();
        $("ul#pingpong").append("<li>" + output + "</li>");
    };
  });
});
