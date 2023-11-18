let pScore = 0;
let cScore = 0;

const btns = document.querySelectorAll("button");
const pScoreDiv = document.querySelector("#pScore");
const cScoreDiv = document.querySelector("#cScore");
const winnerDiv = document.querySelector("#winner");
const roundDiv = document.querySelector("#round");

function playRound(playerMove) {
  const computerMove = getComputerInput();
  console.log(
    "Player move: " + playerMove + "\nComputer move: " + computerMove
  );

  switch (playerMove) {
    case "Rock":
      if (computerMove == "Rock") {
        roundDiv.textContent = "Player: Rock | Computer: Rock";
        break;
      }
      if (computerMove == "Paper") {
        roundDiv.textContent = "Player: Rock | Computer: Paper";
        cScore++;
        break;
      }
      if (computerMove == "Scissors") {
        roundDiv.textContent = "Player: Rock | Computer: Scissors";
        pScore++;
        break;
      }
      break;
    case "Paper":
      if (computerMove == "Rock") {
        roundDiv.textContent = "Player: Paper | Computer: Rock";
        pScore++;
        break;
      }
      if (computerMove == "Paper") {
        roundDiv.textContent = "Player: Paper | Computer: Paper";
        break;
      }
      if (computerMove == "Scissors") {
        roundDiv.textContent = "Player: Paper | Computer: Scissors";
        cScore++;
      }
      break;
    case "Scissors":
      if (computerMove == "Rock") {
        roundDiv.textContent = "Player: Scissors | Computer: Rock";
        cScore++;
      }
      if (computerMove == "Paper") {
        roundDiv.textContent = "Player: Scissors | Computer: Paper";
        pScore++;
      }
      if (computerMove == "Scissors") {
        roundDiv.textContent = "Player: Scissors | Computer: Scissors";
        break;
      }
      break;
  }
  console.log(pScore + " " + cScore);

  pScoreDiv.textContent = pScore;
  cScoreDiv.textContent = cScore;

  if (pScore == 5 || cScore == 5) {
    btns.forEach((button) => {
      button.disabled = true;
      if (button.hasAttribute("id", "retry")) {
        button.disabled = false;
      }
    });
    if (pScore == 5) {
      winnerDiv.textContent = "Player Wins!";
    } else {
      winnerDiv.textContent = "Computer Wins!";
    }
  }
}

function correctInput(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

function getComputerInput() {
  let random = Math.floor(Math.random() * 3);

  switch (random) {
    case 0:
      return "Rock";
      break;
    case 1:
      return "Paper";
      break;
    case 2:
      return "Scissors";
      break;
  }
}

btns.forEach((button) => {
  if (!button.hasAttribute("id", "retry")) {
    button.addEventListener("click", (e) => {
      console.log(e.target.textContent);
      playRound(e.target.textContent);
    });
  } else {
    button.addEventListener("click", () => {
      location.reload();
    });
  }
});
