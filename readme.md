# This is a project submission for The Odin Project

## Rock Paper Scissors Game
This project is to create a game of rock paper scissors which allow you to input your answers and play against a computer.

Planning 
---
Computer Choice

Create a function called getComputerChoice 
This function will randomly return rock paper scissors 

1) Create the function scope getComputerChoice
2) Initialize a global variable computerChoice to store the random computer choice.
3) Inside the function, initialize a switch case with an expression to randomize a number from 1 - 3
4) In the case of 1, store string "Rock" in computerChoice
5) In the case of 2, store string "Paper" in computerChoice
6) In the case of 3, store string "Scissors" in computerChoice
7) return computerChoice at the end.

---
Human Choice

Create a function called getHumanChoice to get the user's input whether they want to play Rock, Paper or Scissors.
The user input must be able to accomodate any sort of variation in uppercase and lowercase

1) Create the function scope getHumanChoice
2) Initialize a variable called userInput with the prompt method to get the user input
3) Initialize global variable called humanChoice that passes a toLowerCase() method to userInput.
4) If human choice != Rock, paper scissors - raise Error and reprompt user to key in a valid choice.
5) else return the variable humanChoice

--- 
Scoring

Create 2 global variables called humanScore and computerScore which will be used to store the scores respectively

1) Initialize variable called humanScore in the global scope with a value of 0
2) Initialize variable called computerScore in the global scope with a value of 0

---
Play Round

Create a new function called playRound that takes the human and computer player choices as arguments and play a single round.
Upon playing the round, the winner gets their score incremented and the function prints out a winner announcement.

1) Create new function named playRound with parameters humanChoice and computerChoice.
2) Create corresponding if statements and increment scores accordingly. 
3) Create a console.log() statement for the winner.