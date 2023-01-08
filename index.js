var readlineSync = require("readline-sync");


var score = 0;
var userName = readlineSync.question("What's your name? ");

console.log("Welcome " +userName +" to Cricket quiz ")

//play function
function play(question, answer)    {
  var userAnswer = readlineSync.question(question);

  if (userAnswer === answer) {
    console.log("You are right!");
    score = score + 1;
  
  } else  {
    console.log("You are wrong!");
    
  }

  console.log("current score "+ score);
  console.log("-----------------")
} 

// array of objects
var questions = [{
 question: "Who was awarded as best batsman in last decade? ",
 answer: "Virat Kohli"
},{
  question: "Who won 2019 Men's Cricket world cup? ",
  answer: "England"
},{
  question: "Carlos Braithwaite smashed which bowler 4 sixes in a row to win 2016 World t20? ",
  answer: "Ben Stokes" 
},{
  question: "Which country has won Asia cup more? ",
  answer: "India"  
},{
  question: "Virat Kohli idolises which football player? ",
  answer: "Cristiano Ronaldo"
}];

// loop
for (var i=0; i<questions.length;i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer)
}  


 
