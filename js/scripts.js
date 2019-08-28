//be

//PigDice is the game Constructor
function PigDice(name, diceTotal, scoreTotal, turnTotal) {
  this.name = name,
  this.diceTotal = diceTotal,
  this.scoreTotal = scoreTotal,
  this.turnTotal = turnTotal
}

//user declaration
var playerOne = new PigDice();
var playerTwo = new PigDice();

var currentTurn;

PigDice.prototype.diceRoll = function () {
  Math.floor(Math.random() * 6) + 1;
}

//fe
$(document).ready(function() {
  console.log("doc ready fxn?");
  $("form").submit(function(event) {
    console.log("in name button fxn?");
    var name = $("#name").val();
    console.log("Your name is: ", name);
    event.preventDefault();
    });

  // Get random dice number
function throwDice () {
  var diceRoll = Math.floor( Math.random() * 6 ) +1;
  console.log(diceRoll);
  User.isOne(); // Need to be updated
}

// User Interface logic
function clickHold() {
    $("input#throw-total1").val("");
    $("input#throw-total2").val("");
    this.scoreTotal += this.turnTotal;
    $("input#score1").text(this.scoreTotal);
    $("input#score2").text(this.scoreTotal);
}

$(document).ready(function(){

  $("button#hold").on("click", function(event) {
    event.preventDefault();
    clickHold();
  });
});
// function attachListeners() {
//
// var rollButton =
//   $("form#roll-button").submit(function(event) {
//     console.log("in name roll-button fxn?");
//     var rollButton = parseInt($("#roll-button").val());
//     console.log("Your roll-button is: ", diceRoll(), rollButton);
//     event.preventDefault();
//     });
// var holdButton =
//   $("form#holdbutton").submit(function(event) {
//     console.log("in name hold-button fxn?");
//     var holdButton = $("#hold-button").val();
//     console.log("Your hold-button is: ", holdButton);
//     event.preventDefault();
//     });
//   };
  // var user = playerOne.diceRoll();
  // console.log("playerOne diceRoll", playerOne, user)
  // attachListeners();
});
