// Word: Used to create an object representing the current word the user is attempting 
// to guess. This should contain word specific logic and data.

var hangman = require("./hangman.js");	
var inquirer = require("inquirer");  		
			


var wordObject = {
	allGuesses:[],
	incorrectGuesses:[],
	correctGuesses:[],
	isMatch:null,
	isRepeat:null,
	guessesRehangmaning: 15,
	loseCount: 0,
	winCount: 0,

	checkMatch: function (){
		var matchCounter = 0;


		for (var i=0; i < words.length; i++){
			if (userLetter == words[i]){
				matchCounter++;
			}
		}
	
		if (matchCounter == 0){
			this.isMatch = false;
			this.checkMatchRepeat();
		}
		else{
			this.isMatch = true;
			this.checkMatchRepeat();
		}
	},



exports.toLetterJS = wordObject;
exports.tohangmanJS = wordObject;
