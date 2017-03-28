//business logic
var pingPong = function(userInput) {
  var outputs = [];
    for (var index = 1; index <= userInput; index ++) {
      if (index % 15 === 0 || index % 5 === 0 && index % 3 === 0) {
      outputs.push("Pingpong!");
    } else if (index % 5 === 0) {
      outputs.push("Pong!");
    } else if (index % 3 === 0) {
      outputs.push("Ping!");
    } else  {
      outputs.push(index);
    }
  }
  return outputs;
};

var resetFields = function()  {
  $("input#userInput").val("");
};

//user interface logic
$(document).ready(function(event){
  $("form#userInput").submit(function(event){
    event.preventDefault();
    $("ul#pingpong").empty();
    var userInput = parseInt($("input#userInput").val());
    if (Number.isInteger(userInput) === false ) {
        $(alert("Please enter a number!"));
    } else {
      var numbers = pingPong(userInput);
      numbers.forEach(function(number){
        $("ul#pingpong").append("<li>" + number + "</li>");
      })
    }
    resetFields();
  });
});
