/* global variables that are declared to be passed on to other function scopes */

let computerChoice = ''; /* initalize empty variable to store computerChoice*/
let humanChoice = '';



function getComputerChoice(){
   
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

console.log(getComputerChoice());

function getHumanChoice(){
    
}