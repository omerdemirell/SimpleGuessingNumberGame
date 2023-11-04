let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
const displayNumber = function (number) {
  document.querySelector(".number").textContent = number;
};
const displayScore = function (score) {
  document.querySelector(".score").textContent = score;
};
displayNumber("❓");
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  // When there is no input.
  if (!guess) {
    displayMessage("⛔ No Number❗");
  }
  // When player wins.
  else if (guess === secretNumber) {
    displayMessage("🎉 Corret Number❗");
    displayNumber(secretNumber);
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "📈 Too High❗" : "📉 Too Low❗");
      score--;
      displayScore(score);
    } else {
      displayMessage("👾 You Lost The Game❗");
      displayScore(0);
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage("Start guessing..");
  displayScore(score);
  displayNumber("❓");
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector("guess").value = "";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".highscore").textContent = highScore;
});
