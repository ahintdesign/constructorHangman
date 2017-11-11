Pseudo Code of Constructor Homework - Hangman in node

// Instructions

// The completed game should meet the following criteria:
// The completed game should be able to receive user input 
// using the inquirer or prompt npm packages.
// Feel free to use as many different types of constructor 
// functions as you are able to, but at a minimum, you must 
// create the following constructor functions:
// Word: Used to create an object representing the current word 
// the user is attempting to guess. This should contain word 
// specific logic and data.
// Letter: Used for each letter in the current word. Each letter 
// object should either display an underlying character, or a blank 
// placeholder (such as an underscore), depending on whether or not 
// the user has guessed the letter. This should contain letter specific logic and data.
// You must keep track of the user's remaining guesses and prompt the user if they would like to end the game if none remain.
// Each constructor function should be in it's own file and be exported and required wherever needed.


Grab inquirer npm package and install.

Create letter constructor, use inquirer to grab user input.


Create constructor for all words you want user to guess (using array)

Create a function in constructor that will choose random word to display. The word will be displaed in dash.

Create constructor for user input that accepts letters from user using inquirer.

Export letters in the word and compare with random word letters. 
	Create if else for matches.
	If matches, push the letter to the dash
	If no match, decrement guess count variable.

To show user input, grab from letter constructor.


If guesses = 0, then you lose. 
When youre guesses are greater than zero, still in the game. 

(Check hangman hw for how to win the game after letters are guessed) 
If string does not contain any more dashes and guesses are not zero, you win the game.
- or can use index of for if string matches - 

create function in word to start game after losing or winning.


