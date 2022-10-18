// Reference: https://sebhastian.com/javascript-console-input/

// #1 Array for word list storage
// #2 random picker / number gen
// #3 input reader to take guesses
// #4 letter finder and verifier
// #5 updater to update new progress or status
// #6 printer to display current progress
// #7 Strike monitor
// #8 win condition check & lose condition check
// #9 game over screen

// VARIABLE DECLARATIONS
var strikes = 0;
var correctArray = [];

// #1 Array for word list storage
let words = ["cup", "john", "luke", "jim", "bob", "chris", "alan", "charles"]; 
let wordi = getRandomInt(0, 8);
var answerWord = words[wordi];
console.log(answerWord);

// #2 random picker / number gen


function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}


// #3 input reader to take guesses
//const input = prompt("Welcome to Word Guess");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
while(strikes<7){
  

rl.question("Welcome to Word Guess \nPlease Enter a letter: ", function (answer) {
  var guess = "";
  guess = answer;
  console.log("This is local "+guess);
search(guess);
	for(var i=0; i<answerword.length; i++){
    for(var j=0; j<guess.length; j++){
      if(answer[i]==guess[j]){
        correctArray.push(answer[i]);
      } 
      else {
        console.log("That's wrong!");
        strikes++;
      }
      if(correctArray==answerWord){
        console.log("You guessed all the letters of the word "+answerWord+" correctly. You're the best!" );
      }
    }//closes for j
  }//closes for i
	rl.close();
});
}//close while
//console.log(wordi); // Logs word selection index number
if (strikes>=7){
  console.log("You lose!");
}

// #7 Strike monitor


function strike(){
if (strikes = 7){
//youLose();
}
}


// #4 SEARCH FOR GUESS IN ANSWERWORD

function search(lookfor){
  
  for (i=0; i < answerWord.length; i++){
  if (!(guess == answerWord[i])){
    //strike();
    console.log('X NO MATCH X');
  } else {
    //correct();
    console.log('Match found: ${answerWord[i]}');
  }
}
}
