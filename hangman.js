// Grab inquirer npm package and install.


var game = require("./game.js");      
var word = require("./word.js") 
var letter = require("./letter.js");

var inquirer = require("inquirer");  


var words = {
    words: ["TURKEY", "HAM", "DRESSING", "RICE", "GRAVY", "MACANDCHEESE", "ROLLS", "COLLARDS", "SWEETPOTATOPIE"],
    randNum: 0,
    chosenWord: "",
    wordLetters:[],

    }

    this.pickWord = function(){
        this.randNum = Math.floor(Math.random()*this.words.length);
        this.chosenWord = this.words[this.randNum];
        this.wordLetters = this.chosenWord.split("");

};


var playerInfo = {
  userLetter: "",
  roundComplete: false,
  startGame: function(){
    console.log("\nARE YOU READY FOR THANKSGIVING? GUESS THE DISH...\n");
    words.pickWord();
    // console.log(game.chosenWord);
    letter.displayNewGuess();

    promptUser();
  },
  startRound: function(){
    this.roundComplete = false;

       words.pickWord();
    // console.log(game.chosenWord);
    letter.displayNewGuess();

    promptUser();
  },
  resetVariables: function(){
    letter.correctGuessesInOrder= [];
    word.allGuesses = [];
    word.incorrectGuesses = [];
    word.correctGuesses = [];
    word.isMatch = null;
    word.isRepeat = null;
    word.guessesRemaining = 15;
  }
}


var promptUser = function() {
    inquirer.prompt([{
        name: "letter",
        message: "Guess a letter: ",
        validate: function(value) {
            if (isNaN(value) == true) {
                return true;
            }
            else {
              return false;
            }
        }
    }]).then(function(answers) {

    console.log("--------------------------------- \n");

    //Store the input letter and push it into an allGuesses array
        playerInfo.userLetter = answers.letter;
      playerInfo.userLetter = playerInfo.userLetter.toUpperCase();
        word.allGuesses.push(playerInfo.userLetter);

        //Check the user input against the random word
        word.checkRepeat();

        //Display the letters or underscores for the random word
    letter.displayNewGuess();


        console.log("Guesses remaining: " + word.guessesRemaining);

        //Check to see if the game is still in progress
    letter.checkProgress();

    if (playerInfo.roundComplete == false){
        promptUser();
    }
    else if (playerInfo.roundComplete == true){
      playerInfo.startRound();
    }

    })

}

playerInfo.startGame();

exports.toWordJS = playerInfo;
exports.toLetterJS = playerInfo;


