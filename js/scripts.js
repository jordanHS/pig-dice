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
  Math.floor(Math.random() * 6) + 1;
}
//Constructor Object decleared for new user
var player1 = new PigDice();
var player2 = new PigDice();

var currentTurn;

//fe
$(document).ready(function() {
  console.log("doc ready fxn?");
  $("form").submit(function(event) {
    console.log("in name button fxn?");
    var name = $("#name").val();
    console.log("Your name is: ", name);
    event.preventDefault();
    });

    $("#roll").on("click", function(event){
//      $( "#target" ).click(function() {
        alert( "Handler for #roll.click() called." );
    });
    $( "#hold" ).click(function() {
      $( "#target" ).click();
        alert( "Handler for #hold.click() called." );
    });
      player.diceRoll();
    });
//});
