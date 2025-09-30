// Generate a random number between 1 and 6
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
console.log(randomNumber1); // Test output

// Generate a random number between 1 and 6 for player 2
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
console.log(randomNumber2); // Test output

// Set the left dice image based on randomNumber1
var randomDiceImage1 = "images/dice" + randomNumber1 + ".png";
document.querySelector(".img1").setAttribute("src", randomDiceImage1);

// Set the right dice image based on randomNumber2
var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";
document.querySelector(".img2").setAttribute("src", randomDiceImage2);

// Update h1 to show winner or draw
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}

// Add event listener for Play button to refresh page
var playBtn = document.getElementById("playBtn");
if (playBtn) {
  playBtn.addEventListener("click", function() {
    location.reload();
  });
}