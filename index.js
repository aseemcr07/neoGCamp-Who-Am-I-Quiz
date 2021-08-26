var readlineSync = require('readline-sync');

var userName = readlineSync.question("Hey there!\nWhat is your name? ");
console.log("Welcome "+userName+"!\n");

var score = 0;

function playGame(question, answer){
  var userAnswer = readlineSync.question(question);

  if(userAnswer == answer){
    console.log("Correct answer!\n");
    score += 1; 
  }
  else{
    console.log("Oops! Wrong answer.\n");
  }
}

var questionOne = {
  question: "What is my full name? ",
  answer: "Abdul Aseem Shaikh"
}
var questionTwo = {
  question: "What is my age? ",
  answer: 20
}
var questionThree = {
  question: "Where do I live? ",
  answer: "Pune"
}
var questionFour = {
  question: "What is my favourite food? ",
  answer: "Biryani"
}
var questionFive = {
  question: "What is my favourite sport? ",
  answer: "Football"
}

var questions = [questionOne, questionTwo, questionThree, questionFour, questionFive];

for(var i=0; i<questions.length; i++){
  playGame(questions[i].question, questions[i].answer);
}

console.log("Your final score: "+score);

var player1 = {
  name: "Rohit",
  score: 5
}
var player2 = {
  name: "Virat",
  score: 4
}

var highScores = [player1, player2];

console.log("\nHigh scores:-");
for(var i=0; i<highScores.length; i++){
  console.log(highScores[i].name + ":" + highScores[i].score);
}

if(score > 3){
  console.log("\nWoah! You know me quite well!");
}
else{
  console.log("\nWe need to meet soon:|\nSee you!");
}
