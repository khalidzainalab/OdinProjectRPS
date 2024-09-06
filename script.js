/* global variables that are declared to be passed on to other function scopes */

let humanScore= 0;
let computerScore = 0;

/* -- functions -- */

function getComputerChoice(){
    let computerChoice = '';
    switch (Math.floor(Math.random() * 3) + 1) {
        case 1:
            computerChoice = "rock";
            break;
        case 2:
            computerChoice = "paper";
            break;
        case 3:
            computerChoice = 'scissors';
    }
    return computerChoice;
} 

function getHumanChoice(){
    let humanChoice = '';
    let userInput = prompt("Rock, Paper or Scissors?", "Rock");
    humanChoice = userInput.toLowerCase();
    if (humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors"){
        
    }else{
        userInput = prompt("Invalid selection, must be rock, paper or scissors", "Rock");
        humanChoice = userInput.toLowerCase();
    }
    return humanChoice;
}

function playRound(humanChoice, computerChoice){
    const beatenBy = {
        'rock': 'scissors',
        'paper' : 'rock',
        'scissors' : 'paper'
    };
   
    if (humanChoice === computerChoice) {
        return console.log(`The game is a draw, computer answered ${computerChoice}. Score is still ${humanScore}-${computerScore}`);
    } else if (beatenBy[humanChoice] === computerChoice) {
        humanScore += 1;
        return console.log(`You won! computer answered ${computerChoice}. Score is ${humanScore}-${computerScore}`);
    } else {
        computerScore += 1;
        return console.log(`You lost :(. Computer answered ${computerChoice}. Score is ${humanScore}-${computerScore}`);
    }
}



function playGame(){
    let humanSelection 
    while (humanScore < 5 && computerScore < 5){
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection)
        console.log("Starting new Round")
    }
}

playGame();