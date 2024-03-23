function generate_random_num(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

document.getElementById('startBtn').addEventListener('click', function() {
  const minRange = parseInt(document.getElementById('minRange').value);
  const maxRange = parseInt(document.getElementById('maxRange').value);
  const randomNumber = generate_random_num(minRange, maxRange);

  document.getElementById('gameOutput').innerHTML = `I'm thinking of a number between ${minRange} and ${maxRange}. Can you guess what it is?`;
  document.getElementById('guessInput').style.display = 'block';

  let attempts = 0;

  document.getElementById('submitGuessBtn').addEventListener('click', function makeGuess() {
    const userGuess = parseInt(document.getElementById('userGuess').value);
    attempts++;

    if (userGuess === randomNumber) {
      const message = `Congratulations! You've guessed the correct number (${randomNumber}) in ${attempts} attempts!`;
      document.getElementById('gameOutput').innerHTML = `<span class="congratulations">${message}</span>`;
      document.getElementById('guessInput').style.display = 'none'; 
      
      const playAgainBtn = document.createElement('button');
      playAgainBtn.textContent = 'Play Again';
      playAgainBtn.classList.add('btn', 'btn-info');
      playAgainBtn.addEventListener('click', function() {
        window.location.reload();
      });

      document.getElementById('gameOutput').appendChild(playAgainBtn);
    } else if (userGuess > randomNumber) {
      document.getElementById('gameOutput').innerHTML = "<span class='high'>It's high! Try again.</span>";
    } else {
      document.getElementById('gameOutput').innerHTML = "<span class='low'>It's low! Try again.</span>";
    }

    document.getElementById('userGuess').value = '';
  });
});

