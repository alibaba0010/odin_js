// const playerSelection = prompt("Enter your choice (Rock, Paper, or Scissors):");

function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
  // Convert playerSelection to lowercase for case-insensitivity
  const playerChoice = playerSelection.toLowerCase();
  const computerChoice = computerSelection.toLowerCase();

  // Check for a tie
  if (playerChoice === computerChoice) {
    return "It's a tie!";
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    return `You Win! ${playerSelection} beats ${computerSelection}`;
  } else {
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
  }
}

function playGame() {
  let playerScore = 0;
  let computerScore = 0;

  for (let round = 1; round <= 5; round++) {
    const playerSelection = prompt(
      `Round ${round}: Enter your choice (Rock, Paper, or Scissors):`
    );
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);

    console.log(result);

    // Update scores
    if (result.includes("Win")) {
      playerScore++;
    } else if (result.includes("Lose")) {
      computerScore++;
    }
  }

  // Determine the overall winner
  let winnerMessage;
  if (playerScore > computerScore) {
    winnerMessage = `Congratulations! You won with a score of ${playerScore}-${computerScore}.`;
  } else if (playerScore < computerScore) {
    winnerMessage = `Sorry, you lost with a score of ${playerScore}-${computerScore}.`;
  } else {
    winnerMessage = "It's a tie! No overall winner.";
  }

  alert(winnerMessage);
}

// Call playGame to start the five-round game
playGame();

// // Testing the function
// const computerChoice = getComputerChoice();
// console.log("Computer chose:", computerChoice);
// // const playerSelection = "Rock"; // This can be any case variation
// const result = playRound(playerSelection, computerChoice);
// console.log(result);
