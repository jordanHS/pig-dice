//Business logic
//PigDice is the game Constructor & assigning parameters
function PigDice(name, score, turnTotal) {
//property aka parameters; key:value pairs
  this.name = name,
  this.score = score,
  this.turnTotal = turnTotal
}

//Prototypes
PigDice.prototype.diceRoll = function () {
  return Math.floor(Math.random() * 6) + 1;
}

//Constructor Object decleared for new user

var playerName1 = new PigDice("");
var playerName2 = new PigDice();

var currentTurn;
currentTurn = playerName1; //this way player1 start the game then switches on condition=1

//fe
$(document).ready(function() {
  console.log("doc ready fxn?");
  $("form").submit(function(event) {
    console.log("in name button fxn?");
    playerName1.name = $("#name").val(); //this.player var from above already has a stored name property
    // if (!playerName1.name===""){ playerName2.name = $("#name").val()};
    console.log("Your name is: ", playerName1, playerName2);
    event.preventDefault();ß
    });

    $("#roll").on("click", function(event){
//      $( "#target" ).click(function() {
        alert( "Handler for #roll.click() called." );
        currentTurn.diceRoll();
        console.log("currentTurn", currentTurn.diceRoll());
    });
    $( "#hold" ).click(function() {
      $( "#target" ).click();
        alert( "Handler for #hold.click() called." );
    });
  });
//});
