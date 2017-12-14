// Global Variables
// =========================================================================

// Object values
var object = {
	masterSword: {
		value: 0
	},
	demonCarver: {
		value: 0
	},
	guardianSword: {
		value: 0
	},
	meteorRod: {
		value:0
	}
};

// Scores
var targetScore = 0;
var yourScore = 0;

// Win & Loss Counts
var nunWins = 0;
var numLosses = 0;

// Functions
// =========================================================================

// Starts and resets the game
var beginGame = function() {

	// Resets the target score
	yourScore = 0;

	// Randomly chooses a target score between 19-120
	targetScore = Math.floor(Math.random() * (120 - 19 + 1) + 19);

	// Randomly assigns a number to each object between 1-12
	object.masterSword.value = Math.floor(Math.random() * (12 - 1 + 1) + 1);
	object.demonCarver.value = Math.floor(Math.random() * (12 - 1 + 1) + 1);
	object.guardianSword.value = Math.floor(Math.random() * (12 - 1 + 1) + 1);
	object.meteorRod.value = Math.floor(Math.random() * (12 - 1 + 1) + 1);

	// Update Your Score & Target Score HTML
	$("#targetScore").html(targetScore);
	$("#yourScore").html(yourScore);

	// Testing
	console.log("--------");
	console.log("Target score: " + targetScore);
	console.log("Master sword: " + object.masterSword.value);
	console.log("Demon carver: " + object.demonCarver.value);
	console.log("Guardian sword: " + object.guardianSword.value);
	console.log("Meteor rod: " + object.meteorRod.value);
}

// Adding the Objects values to Your Score

var addObjects = function(object) {
	yourScore = yourScore + object.value;

	// Update HTML to reflect your current score
	$("#yourScore").html(yourScore);

	// Call the winOrLoss function
	winOrLoss();

	// Testing
	console.log("Your score: " + yourScore);
}

// Compare Target Score and Your Score and determine win/loss

var winOrLoss = function() {

	// Check if Your Score is more than the Target Score
	if (yourScore > targetScore) {
		alert("You lost :(");

		// Add the loss to the Loss Counter
		numLosses++;

		// Update the HTML for Loss Counter
		$("#losses").html(numLosses);

		// Restart game
		beginGame();

	} else if (yourScore == targetScore) {
		alert("You won!!");

		// Add the win to the Win Counter
		nunWins++;

		// Update the HTML for Win Counter
		$("#wins").html(nunWins);

		// Restart game
		beginGame();
	} 
}

// Main Process
// =========================================================================
beginGame();

$("#object1").on("click", function() {
	addObjects(object.masterSword);
});
$("#object2").on("click", function() {
	addObjects(object.demonCarver);
});
$("#object3").on("click", function() {
	addObjects(object.guardianSword);
});
$("#object4").on("click", function() {
	addObjects(object.meteorRod);
});

// Directions Toggle
// =========================================================================
$(".directionsToggle").click(function(){
    $("ul").toggle(1000);
});