
/* Letter: Used for each letter in the current word. Each letter object should either 
display an underlying character, or a blank placeholder (such as an underscore), depending 
on whether or not the user has guessed the letter. This should contain letter specific 
logic and data.*/


// Create letter constructor, use inquirer to grab user input.


var hangman = require("./hangman.js");
var inquirer = require("inquirer");  



var displayLetter = {
  correctGuesses: [],
  displayNewGuess: function(){
 
    if (word.correctGuesses.length == 0 || word.correctGuesses == null){
      for (var i =0; i<hangman.words.length; i++){
        this.correctGuesses[i] = "_";
      }
    }
    else {
     
      for (var i=0; i<hangman.words.length; i++){
       
        if (this.correctGuesses[i] != hangman.words[i]){
         
          for (var j=0; j<word.correctGuesses.length; j++){ex i
            if (word.correctGuesses[j] == hangman.words[i]){
              this.correctGuesses[i] = hangman.words[i];
            }

            else {
              this.correctGuesses[i] = "_";
            }
          }
        }
      }
    }

    console.log(this.correctGuesses.join(" ") + "\n");
  },

 



// module.exports =



