//be
function PigDice() {
  this.name = name,
  this.diceTotal = total

}

// var playerOne = new PigDice(name, diceTotal)
// var playerTwo = new PigDice(name, diceTotal)
var playerOne = new PigDice(playerOneName, playerOneDiceTotal);
var playerTwo = new PigDice(playerTwoName, playerTwoDiceTotal);

PigDice.prototype.diceRoll = function () {
  Math.floor(Math.random() * 6) + 1;
}

//fe
$(document).ready(function() {
  console.log("doc ready fxn?");
  $("#name-button").submit(function(event) {
    console.log("in name button fxn?");
    var name = $("input#name").val();
    console.log("name", name);
    });
  event.preventDefault();
});
