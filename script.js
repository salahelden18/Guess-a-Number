'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
document.querySelector('.score').textContent = score;

function displayMessage(selector, text) {
  document.querySelector(selector).textContent = text;
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess);

  if (!guess) {
    displayMessage('.message', '⛔ No Number!');
  } else if (guess === secretNumber) {
    if (score > highScore) {
      highScore = score;
      displayMessage('.highscore', highScore);
    }
    document.querySelector('body').style.backgroundColor = '#60b357';
    document.querySelector('.number').style.width = '30rem';
    displayMessage('.message', '🎉 Correct Number!');
    displayMessage('.number', secretNumber);
  } else if (guess !== secretNumber) {
    if (score > 1) {
      guess > secretNumber
        ? displayMessage('.message', '📉 Too High')
        : displayMessage('.message', '📈 Too Low');
      score--;
      displayMessage('.score', score);
    } else {
      displayMessage('.message', 'You lost the game');
      displayMessage('.score', 0);
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('body').style.backgroundColor = '#222';
  score = 20;
  displayMessage('.score', score);
  document.querySelector('.guess').value = '';
  displayMessage('.message', 'start guessing...');
  document.querySelector('.number').style.width = '15rem';
  displayMessage('.number', '?');
});
