const boardEl = document.getElementById('board');

addSquares();

function addSquares() {
  for (let i = 0; i < 24 * 32; i++) {
    addSquare();
  }
}

function addSquare() {
  const square = document.createElement('div');
  square.className = 'square';
  square.addEventListener('mouseenter', paintSquare);
  square.addEventListener('mouseleave', cleanSquare);
  boardEl.appendChild(square);
}

function paintSquare(e) {
  const r = getRandom(255);
  const g = getRandom(255);
  const b = getRandom(255);

  e.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  e.target.style.transition = '';
}

function cleanSquare(e) {
  e.target.style.transition = 'background-color 1s ease-in 1s';
  e.target.style.backgroundColor = '#333';
}

function getRandom(max) {
  return Math.floor(Math.random() * max);
}
