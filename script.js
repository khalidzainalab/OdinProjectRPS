/* global variables that are declared to be passed on to other function scopes */

let humanScore = 0;
let computerScore = 0;

const humanScoreText = document.getElementById("human-score");
const computerScoreText = document.getElementById("enemy-score");

humanScoreText.textContent = humanScore;
computerScoreText.textContent = computerScore;

/* -- functions -- */

function getComputerChoice() {
    let computerChoice = '';
    const computerSelection = document.getElementById('enemy');
    const enemyDescription = document.getElementById('enemy-description')
    switch (Math.floor(Math.random() * 3) + 1) {
        case 1:
            computerChoice = "rock";
            computerSelection.setAttribute("src", "https://mymodernmet.com/wp/wp-content/uploads/2019/11/animal-rock-paintings-akie-nakata-11.jpg");
            enemyDescription.textContent = "Rock";
            break;
        case 2:
            computerChoice = "paper";
            computerSelection.setAttribute("src", "https://images.kittyclysm.com/wp-content/uploads/2018/05/09174356/why-cats-lay-on-paper.jpg");
            enemyDescription.textContent = "Paper";
            break;
        case 3:
            computerChoice = 'scissors';
            computerSelection.setAttribute("src", "https://pbs.twimg.com/media/GNdRFMGXUAAZ240.jpg");
            enemyDescription.textContent = "Scissors";
    }
    return computerChoice;
}

function getHumanChoice() {
    let humanChoice = '';
    let userInput = prompt("Rock, Paper or Scissors?", "Rock");
    humanChoice = userInput.toLowerCase();
    if (humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors") {

    } else {
        userInput = prompt("Invalid selection, must be rock, paper or scissors", "Rock");
        humanChoice = userInput.toLowerCase();
    }
    return humanChoice;
}

function playRound(humanChoice, computerChoice) {
    const beatenBy = {
        'rock': 'scissors',
        'paper': 'rock',
        'scissors': 'paper'
    };

    if (humanChoice === computerChoice) {
        return results.textContent = `The game is a draw, computer answered ${computerChoice}. Score is still ${humanScore}-${computerScore}`;
    } else if (beatenBy[humanChoice] === computerChoice) {
        humanScore += 1;
        humanScoreText.textContent = humanScore;
        return results.textContent = `You won! computer answered ${computerChoice}. Score is ${humanScore}-${computerScore}`;
    } else {
        computerScore += 1;
        computerScoreText.textContent = computerScore;
        return results.textContent = `You lost :(. Computer answered ${computerChoice}. Score is ${humanScore}-${computerScore}`;
    }
}


/* UI */

const buttons = document.querySelectorAll(".button");
const results = document.querySelector(".results");
const announcement = document.querySelector('.announcement')


buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const humanValue = button.id;
        const computerValue = getComputerChoice();

        playRound(humanValue, computerValue);
        if (humanScore == 5) {
            results.textContent = 'You have won! resetting back to 0';
            humanScore = 0;
            computerScore = 0;
            humanScoreText.textContent = humanScore;
            computerScoreText.textContent = computerScore;
        } else if (computerScore == 5) {
            results.textContent = 'You have lost! resetting back to 0';
            humanScore = 0;
            computerScore = 0;
            humanScoreText.textContent = humanScore;
            computerScoreText.textContent = computerScore;
        }
    });
});

