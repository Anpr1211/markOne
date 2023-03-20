var readlineSync = require('readline-sync');

console.log("Welcome to DO YOU KNOW ME?");
var userName = readlineSync.question("Please enter your name: ");

console.log("Let's get started!");

questions = [{
  question: "Which year was I born in? ",
  answer: "1998"
}, {
  question: "Which town was I born in? ",
  answer: "Rishra",
}, {
  question: "What is my favourite food? ",
  answer: "Biryani"
}, {
  question: "How many schools have I studied in? ",
  answer: "2"
}, {
  question: "Who is my favourite Marvel superhero? ",
  answer: "Captain America"
}]

var score = 0;

function quiz(question, rightAnswer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer === rightAnswer) {
    console.log("Right! Seems like you know me.");
    score = score + 1;
    console.log("Your score is " + score);
  }
  else {
    console.log("Wrong. You don't know me.");
    console.log("Your score is " + score);
  }
}

for (var i = 0; i < questions.length; i++) {
  console.log("\n")
  console.log("Question " + (i + 1) + " goes here -> ")
  quiz(questions[i].question, questions[i].answer);

}

console.log("\n");
console.log("Final score is ", score)