const newGameBtn = document.getElementById("newGame");
const gameForm = document.getElementById("gameForm");
const startBtn = document.getElementById("startBtn");
const boardArr = document.getElementsByClassName("boardBtn");
const p1Input = document.getElementById("player1Name");
const p2Input = document.getElementById("player2Name");
const scoreboard = document.getElementsByClassName("scoreboard")[0];
const curTurn = document.getElementsByClassName("current-turn")[0];
alert("Click New Game to get started!");

let p1;
let p2;
let game;
let board;

newGameBtn.addEventListener("click", () => {
  gameForm.reset();
  gameForm.style.display = gameForm.style.display == "block" ? "none" : "block";
  console.log("newgameclick");
});

startBtn.addEventListener("click", () => {
  p1 = createPlayer(p1Input.value, "x");
  p2 = createPlayer(p2Input.value, "o");
  board = createBoard();
  game = createGame(p1, p2, board);
  gameForm.style.display = "none";
  scoreboard.textContent = `${p1.getName()}'s Score: ${p1.getScore()} | ${p2.getName()}'s Score: ${p2.getScore()}`;
  curTurn.textContent = `${game.getTurn().getName()}'s turn`;
});

//Player Factory Function
function createPlayer(playerName, playerSymbol) {
  let score = 0;
  const getSymbol = () => playerSymbol;
  const getName = () => playerName;
  const getScore = () => score;
  const increaseScore = () => score++;
  const resetScore = () => (score = 0);
  return {
    getName,
    getSymbol,
    getScore,
    increaseScore,
    resetScore,
  };
}

//Board Factory Function
function createBoard() {
  let board = new Array(9);
  const placePiece = (loc, playerSymbol) => (board[loc] = playerSymbol);
  const clearBoard = () => (board = new Array(9));
  const logBoard = () => board;
  const checkStaleMate = () => {
    if (board.includes(undefined)) {
      return false;
    } else {
      alert("Stalemate! No winner this round.");
      return true;
    }
  };
  const checkWin = (currentTurn) => {
    let symbol = currentTurn;
    console.log(`symbol: ${symbol}`);
    //Check horizontally
    for (let i = 0; i <= 6; i += 3) {
      console.log(`${i} , ${i + 1}, ${i + 2}`);
      console.log(`This: ${board[i]} ${board[i + 1]} ${board[i + 2]} `);
      if (
        board[i] == symbol &&
        board[i + 1] == symbol &&
        board[i + 2] == symbol
      ) {
        return true;
      }
    }
    //Check vertically
    for (let i = 0; i < 3; i++) {
      if (
        board[i] == symbol &&
        board[i + 3] == symbol &&
        board[i + 6] == symbol
      ) {
        return true;
      }
    }
    //Check Diagonally
    if (board[0] == symbol && board[4] == symbol && board[8] == symbol) {
      return true;
    }

    if (board[2] == symbol && board[4] == symbol && board[6] == symbol) {
      return true;
    }

    return false;
  };
  return {
    checkStaleMate,
    checkWin,
    placePiece,
    clearBoard,
    logBoard,
  };
}

function createGame(player1, player2, board) {
  let currentTurn = player1;
  const getTurn = () => currentTurn;
  const changeTurn = () =>
    (currentTurn = currentTurn == player1 ? player2 : player1);
  const giveWin = () => {
    if (currentTurn == player1 && board.checkWin(currentTurn.getSymbol())) {
      player1.increaseScore();
      console.log("Player 1 Wins!");
      console.log(currentTurn.getScore());
      board.clearBoard();
    } else if (
      currentTurn == player2 &&
      board.checkWin(currentTurn.getSymbol())
    ) {
      player2.increaseScore();
      console.log("Player 2 Wins!");
      console.log(currentTurn.getScore());
      board.clearBoard();
    }
  };
  return {
    giveWin,
    getTurn,
    changeTurn,
  };
}

function clearBtns() {
  [...boardArr].forEach((element) => {
    element.value = "";
    element.textContent = "";
  });
}

[...boardArr].forEach((element) => {
  element.addEventListener("click", () => {
    if (element.value === "") {
      board.placePiece(Number(element.id) - 1, game.getTurn().getSymbol());
      element.value = game.getTurn().getSymbol();
      element.textContent = element.value;
      element.style.color = element.textContent == "x" ? "red" : "blue";
      if (board.checkWin(game.getTurn().getSymbol())) {
        alert(`Player: ${game.getTurn().getName()} wins!`);
        game.giveWin();
        board.clearBoard();
        clearBtns();
        scoreboard.textContent = `${p1.getName()}'s Score: ${p1.getScore()} | ${p2.getName()}'s Score: ${p2.getScore()}`;
        game.changeTurn();
        curTurn.textContent = `${game.getTurn().getName()}'s turn`;
      } else if (board.checkStaleMate()) {
        board.clearBoard();
        clearBtns();
        game.changeTurn();
        curTurn.textContent = `${game.getTurn().getName()}'s turn`;
      } else {
        game.changeTurn();
        curTurn.textContent = `${game.getTurn().getName()}'s turn`;
      }
    }
  });
});
