let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
  return  Math.floor(Math.random() * 10);
}

const secretTarget = generateTarget()

//console.log(secretTarget);

function getAbsoluteDistance(contestantGuess, secretTarget) {
 return Math.abs(secretTarget - contestantGuess);
}

function rangeAlert(humanGuess){
  if (humanGuess < 0 || humanGuess > 9) {
    return alert("Please use a number from 0 to 9.")
  }
}

function compareGuesses(humanGuess, computerGuess, secretTarget) {
  rangeAlert(humanGuess);
  const humanDiff = getAbsoluteDistance(humanGuess, secretTarget);
  const computerDiff = getAbsoluteDistance(computerGuess, secretTarget);
  if (humanDiff <= computerDiff){
    return true;
  } else {
    return false;
  }
}

function updateScore(winner) {
  if (winner === 'human') {
    humanScore = humanScore + 1;
  } 
  if (winner === 'computer') {
    computerScore = computerScore + 1;
  }
}

const advanceRound = () => {
  currentRoundNumber = currentRoundNumber + 1
}