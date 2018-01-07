
$(document).ready(function(){
	var wins = 0;
	var losses = 0;
	var targetScore;
	var totalScore = 0;
	var gemArr = [];
	var messages;
	messages = {
		win: "Congratulations! You win! Play Again!",
		lose: "Sorry, you lose! Try again!",
		none: "",
};

	function initializeGame() {
		// Get random number between 19 and 120 including 120 itself.
		targetScore = Math.floor(Math.random() * 102) + 19;
		totalScore = 0;

		for (i=0; i<=3; i++) {
			gemArr[i] = Math.floor((Math.random() * 12) + 1);
		}
		console.log("targetScore: " + targetScore);
		console.log("gemArr: " + gemArr);
		console.log("totalScore " +totalScore)

		$("#target").text("Your Target Score: " + targetScore);
		$("#totalscore").text("Your Total Score: " + totalScore);
		$(".wins").text("Wins: " + wins);
		$(".losses").text("Losses: " + losses);
	}

	initializeGame();

	function checkSum() {

		if (totalScore == targetScore) {
			wins++;
			$(".wins").text("Wins: " + wins);
			$(".win-messages").text(messages.win);
			initializeGame();
		} else if (totalScore > targetScore) {
			losses++; 
			$(".losses").text("Losses: " + losses); 
			$(".lose-messages").text(messages.lose);
			console.log(".lose-messages: " + messages.lose);
			initializeGame();
		} 
	}
			
// Result of clicking on a gem.
	$(".gems").on("click", function() {
		var gemIndexValue = $(this).attr("value");
		console.log("gemIndexValue: " + gemIndexValue);
		$(".lose-messages").text(messages.none);
		$(".win-messages").text(messages.none);
		totalScore += gemArr[gemIndexValue];
		$("#totalscore").text("Your Total Score: " + totalScore);
		checkSum();
	});

})

