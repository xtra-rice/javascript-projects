const prompt = require("prompt-sync")();
const target = Math.round(Math.random() * 100);

let guesses = 0;

while (true) {
  guesses += 1;

  const guess = Number(prompt("Guess the number (0-100): "));
  if (guess > target) {
    console.log("Your guess is too high.");
  } else if (guess < target) {
    console.log("Your guess is too low.");
  } else if (isNaN(guess)) {
    console.log("Invalid input. Please try again");
  } else if (guess == target) {
    console.log("You guessed it!");
    break;
  }
}

console.log("You guess it in", guesses, "tries!");
