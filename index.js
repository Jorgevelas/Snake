let canvas = document.getElementById("game");
let ctx = canvas.getContext("2d");

// Snake axis
class SnakePart {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

// Speed of the game
let speed = 7;
let tileCount = 20;
let tileSize = canvas.width / tileCount - 2;

// Snake head
let headX = 10;
let headY = 10;
let snakeParts = [];
let tailLength = 2;

// Apple size
let appleX = 5;
let appleY = 5;

// Movement
let inputsXVelocity = 0;
let inputsYVelocity = 0;

let xVelocity = 0;
let yVelocity = 0;

let score = 0;

let gulpSound = new Audio("gulp.mp3");

// Game loop
function drawGame() {
  xVelocity = inputsXVelocity;
  yVelocity = inputsYVelocity;

  changeSnakePosition();
  let result = isGameOver();
  if (result) {
    return;
  }

  clearScreen();

  checkAppleCollision();
  drawApple();
  drawSnake();

  drawScore();

  if (score > 5) {
    speed = 9;
  }
  if (score > 10) {
    speed = 11;
  }

  setTimeout(drawGame, 1000 / speed);
}

function isGameOver() {
  let gameOver = false;

  if (yVelocity === 0 && xVelocity === 0) {
    return false;
  }

  // Walls
  if (headX < 0 || headX === tileCount || headY < 0 || headY === tileCount) {
    gameOver = true;
  }

  for (let i = 0; i < snakeParts.length; i++) {
    let part = snakeParts[i];
    if (part.x === headX && part.y === headY) {
      gameOver = true;
      break;
    }
  }

  if (gameOver) {
    ctx.fillStyle = "white";
    ctx.font = "50px Verdana";
    ctx.textAlign = "center";
    ctx.fillText("Game Over!", canvas.width / 2, canvas.height / 2);
  }

  return gameOver;
}

function drawScore() {
  ctx.fillStyle = "white";
  ctx.font = "10px Verdana";
  ctx.fillText("Score " + score, canvas.width - 50, 10);
}

function clearScreen() {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function drawSnake() {
  ctx.fillStyle = "darkgreen";
  for (let i = 0; i < snakeParts.length; i++) {
    let part = snakeParts[i];
    ctx.fillRect(part.x * tileCount, part.y * tileCount, tileSize, tileSize);
  }

  snakeParts.push(new SnakePart(headX, headY));
  while (snakeParts.length > tailLength) {
    snakeParts.shift();
  }

  ctx.fillStyle = "darkgoldenrod";
  ctx.fillRect(headX * tileCount, headY * tileCount, tileSize, tileSize);
}

function changeSnakePosition() {
  headX = headX + xVelocity;
  headY = headY + yVelocity;
}

function drawApple() {
  ctx.fillStyle = "darkred";
  ctx.fillRect(appleX * tileCount, appleY * tileCount, tileSize, tileSize);
}

function checkAppleCollision() {
  if (appleX === headX && appleY === headY) {
    appleX = Math.floor(Math.random() * tileCount);
    appleY = Math.floor(Math.random() * tileCount);
    tailLength++;
    score++;
    gulpSound.play();
  }
}

document.body.addEventListener("keydown", keyDown);

function keyDown(event) {
  if (event.keyCode === 38 || event.keyCode === 87) {
    if (inputsYVelocity === 1) return;
    inputsYVelocity = -1;
    inputsXVelocity = 0;
  }
  if (event.keyCode === 40 || event.keyCode === 83) {
    if (inputsYVelocity === -1) return;
    inputsYVelocity = 1;
    inputsXVelocity = 0;
  }
  if (event.keyCode === 37 || event.keyCode === 65) {
    if (inputsXVelocity === 1) return;
    inputsYVelocity = 0;
    inputsXVelocity = -1;
  }
  if (event.keyCode === 39 || event.keyCode === 68) {
    if (inputsXVelocity === -1) return;
    inputsYVelocity = 0;
    inputsXVelocity = 1;
  }
}

drawGame();