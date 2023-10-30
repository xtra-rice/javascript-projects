const prompt = require("prompt-sync")();
let score = 0;

console.log("Welcome to the Computer Hardware Quiz!");
const total = 3;


const answer1 = prompt("Brain of the computer? ").toUpperCase();
const correct_answer1 = "CPU";

if (answer1 == correct_answer1) {
  console.log("You got it right");
  score += 1;
}
else{
    console.log("You got it wrong...");
}


const answer2 = prompt("What is better a 3090ti or 4060? ").toLowerCase();
const correct_answer2 = "3090ti";

if (answer2 == correct_answer2) {
  console.log("You got it right");
  score += 1;
}
else{
    console.log("You got it wrong...");
}

const answer3 = prompt("What is the recommended RAM for 2023? ").toUpperCase();
const correct_answer3 = "16GB";

if (answer3 == correct_answer3) {
  console.log("You got it right");
  score += 1;
}
else{
    console.log("You got it wrong...");
}

const percent =  Math.round((score / total) * 100);
console.log("You got", score , "questions correct!");
console.log("You scored", percent.toString() + "%")
