const CHOICES = ["rock", "paper", "scissors"];

let playerPoints = 0;
let computerPoints = 0;

const scoreParentDiv = document.getElementById("scoreDiv");
const scoreElement = document.querySelector("#score");
const roundResultsElement = document.querySelector("#round");

document
  .querySelectorAll("button")
  .forEach((button) => button.addEventListener("click", userClickButton));

function userClickButton(event) {
  const { id: playerSelection } = event.target;
  const computerSelection = computerPlay();
  playRound(playerSelection, computerSelection);
}

function computerPlay() {
  const randomIndex = Math.floor(Math.random() * 3);
  return CHOICES[randomIndex];
}

function didPlayerWin(playerSelection, computerSelection) {
  if (playerSelection === "rock") {
    return computerSelection === "scissors" ? true : false;
  }
  if (playerSelection === "paper") {
    return computerSelection === "rock" ? true : false;
  }
  if (playerSelection === "scissors") {
    return computerSelection === "paper" ? true : false;
  }
}

function endGame() {
  playerPoints = 0;
  computerPoints = 0;
  scoreElement.textContent = 'Choose your weapon!'; 
}

function playRound(playerSelection, computerSelection) {
  roundResultsElement.textContent = `You played ${playerSelection}, computer played ${computerSelection}`;
  const round = {
    playerSelection,
    computerSelection,
  };

  if (playerSelection === computerSelection) {
    return round;
  }

  const result = didPlayerWin(playerSelection, computerSelection);

  if (result) {
    playerPoints++;
    if (playerPoints === 5) {
        alert("YOU WON");
        endGame();
    }
  } else {
    computerPoints++;
    if (computerPoints === 5) {
        alert("YOU LOST");
        endGame();
    }
  }

  scoreElement.textContent = `Score: ${playerPoints} - ${computerPoints}`;

  return round;
}
