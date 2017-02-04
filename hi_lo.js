

var secretNum = Math.floor((Math.random() * 100) + 1);
console.log(secretNum);
var guessCount = 1;
console.log("Counter: " + guessCount);
var guess;

function hiLo() {
 //  var name = prompt("Hello! Welcome to the Hi-Lo Game. What is your name?")
 // var guess = parseInt(document.getElementById("guess").value);
 if (isNaN(guess)) {
    $("#answer").append(" invalid. Please enter an integer.")
    console.log(guess);
 }
  // var guessCount = 0
  if (secretNum != guess && guessCount < 7 && secretNum < guess) {
      guessCount+=1;
      $("#answer").append(" too high. Please guess again.");
      console.log("Guess: " + guess);
      // guessCount+=1;
      console.log("Counter: " + guessCount);
  }
  else if (isNaN(guess)) {
      $("#answer").append(" invalid. Please enter an integer.")
      guessCount+=1;
  }
  else if (secretNum != guess && guessCount < 7 && secretNum > guess) {
      $("#answer").append(" too low. Please guess again.");
      console.log("Guess: " + guess);
      guessCount+=1;
      console.log("Counter: " + guessCount);
  } else if (secretNum != guess && guessCount === 7) {
      $("#winLose").append("Congratulations: You DIE!");
  } else if (secretNum === guess && guessCount < 7) {
      $("#winLose").append("Congratulations: You Win!");
  }
}

$(document).ready(function(){
  $("button").on("click", function(){
    guess = parseInt($("#textBox").val());
    hiLo()
  $("#textBox").val("");
  })
})

$(document).ready(function(){
  $("textBox").on("keypress", function(){

    guess = parseInt($("#textBox").val());
    hiLo()
  $("#textBox").val("");
  })
})
