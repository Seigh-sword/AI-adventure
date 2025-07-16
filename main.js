import { gptRespond } from './chatgpt-model.js';

// Basic game start
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Player
let playerX = 100;
let playerY = 350;

// Game loop
function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  // Draw player
  ctx.fillStyle = 'lime';
  ctx.fillRect(playerX, playerY, 50, 50);

  requestAnimationFrame(gameLoop);
}
gameLoop();

// Talk to ChatGPT
function gptTalk() {
  const chat = document.getElementById("chat");
  chat.innerText = "ChatGPT: " + gptRespond();
}

window.gptTalk = gptTalk;
