let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Target function generator
function generateTarget(){
    return Math.floor(Math.random()*10);
   }
   
   function compareGuesses(userGuess, computerGuess, targetNumber) {
    if (userGuess < 0 || userGuess > 9) {
        alert("Your guess is out of range. Please enter a number between 0 and 9.");
        return;
      }
     const userDifference = Math.abs(targetNumber - userGuess);
     const computerDifference = Math.abs(targetNumber - computerGuess);
   
     if (userDifference === computerDifference) {
       return true; // Human wins if there's a tie
     } else if (userDifference < computerDifference) {
       return true; // Human wins if their guess is closer
     } else {
       return false; // Computer wins if its guess is closer
     }
   }
   

   function updateScore(winner) {
     if (winner === 'human') {
       humanScore++; // Increase humanScore by 1 if human wins
     } else if (winner === 'computer') {
       computerScore++; // Increase computerScore by 1 if computer wins
     }
   }
   
   function advanceRound(){
     currentRoundNumber++;
   }
