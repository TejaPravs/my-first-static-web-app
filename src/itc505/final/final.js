// Create the board
const board = document.getElementById('board');
const squares = [];
const movesDisplay = document.getElementById('moves');
const timerDisplay = document.getElementById('timer');
const newGameButton = document.getElementById('newGameButton');

let moves = 0;
let timer = 0;
let timerInterval;


function startNewGame() {
  moves = 0;
  movesDisplay.textContent = moves;
  timer = 0;
  timerDisplay.textContent = timer;

 
  squares.forEach((square) => {
    square.classList.remove('is-off');
    // Randomly toggle squares to create a solvable starting configuration
    if (Math.random() < 0.5) {
      square.classList.toggle('is-off');
    }
  });

  
  clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    timer++;
    timerDisplay.textContent = timer;
  }, 1000);
}


function toggleSquare(index) {
  const row = Math.floor(index / 5);
  const col = index % 5;
  const adjacentSquares = [
    index,
    index - 5,
    index + 5,
    index - 1,
    index + 1,
  ];

  adjacentSquares.forEach((adjacentIndex) => {
    if (adjacentIndex >= 0 && adjacentIndex < 25) {
      const adjRow = Math.floor(adjacentIndex / 5);
      const adjCol = adjacentIndex % 5;
      if (Math.abs(row - adjRow) + Math.abs(col - adjCol) === 1) {
        squares[adjacentIndex].classList.toggle('is-off');
      }
    }
  });

  moves++;
  movesDisplay.textContent = moves;

  // Check for win
  const isWin = squares.every((square) => square.classList.contains('is-off'));
  if (isWin) {
    clearInterval(timerInterval);
    window.alert(`You win in ${timer} seconds with ${moves} moves!`);
    startNewGame(); // Start a new game after winning
  } else if (moves > 21) {
    clearInterval(timerInterval);
    window.alert('You exceeded the maximum number of moves. Try again!');
    startNewGame(); // Start a new game after exceeding moves limit
  }
}


newGameButton.addEventListener('click', startNewGame);


for (let i = 0; i < 25; i++) {
  const square = document.createElement('div');
  square.classList.add('square');
  squares.push(square);
  board.appendChild(square);

  
  square.addEventListener('click', () => {
    toggleSquare(i);
  });
}


startNewGame();
