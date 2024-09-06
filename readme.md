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