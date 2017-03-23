//business logic
var pingPong = function(userInput) {
  for (var index = 1; index <= userInput; index ++) {
      if (index % 15 === 0 || index % 5 === 0 && index % 3 === 0) {
      $("ul#pingpong").append("<li>Pingpong!</li>");
    } else if (index % 5 === 0) {
      $("ul#pingpong").append("<li>Pong!</li>");
    } else if (index % 3 === 0) {
      $("ul#pingpong").append("<li>Ping!</li>");
    } else  {
      $("ul#pingpong").append("<li>" + index + "</li>");
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
      pingPong(userInput);

    };

  });
});
