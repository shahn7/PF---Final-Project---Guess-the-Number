/*This program was written by: Skyler Hahn
	Program Name: Guess the Number

- Programs Statement: Create a program where the program automatically generates a random number, with 3 different game modes (easy, medium, and hard)
	Where easy is ( 1-10 ), Medium is ( 1-100 ), and Hard is ( 1- 1000 )
	Once the number has been corretly identified, a response will tell the user how many attempts it took for the user to get the number right.
	
- Nouns (Person, place, or thing): program, game modes, easy, medium, hard, user
- Verbs (Action words): Create, automatically, generates, random, identified, response

-Inputs: Users guessed number
-Outputs: Number is higher message, number is lower message, the number is correct message, error message.

-Processing steps: 
1)Ask the user what they think the number is.
2)Check to see if the users guess was correct or wrong
3)If wrong, a message will tell the user if the answer is higher or lower. 
4)Reprompt the user for the next number
5)Once the number matches, a message will tell the user that they got it right.

**Flowchart located in seperate word document.

--Pseudocode: (This is just for the easy mode) If it were medium 10 would be 100, and hard would be 1000
	
	BEGIN
	
	variable randomNumber = Random generated number by using Math.Random()
	variable userGuess = Prompt user for userGuess
	initalize attempt = 0
	
	while userGuess is not equal to randomNumber
		if ((randomNumber < userGuess) && (userGuess >= 1) && (userGuess <= 10)) then
			Alert "Wrong! The number is lower"
			attempt++
			Reprompt user for a new number
		else if ((randomNumber > userGuess) && (userGuess >= 1) && (userGuess <= 10)) then
			Alert "Wrong! The number is higher!"
			attempt++
			Reprompt user for a new number
		else if (userGuess < 1) then
			Alert "The number that you have entered is too low. The number has to be between 1 and 10. Please try again."
			Reprompt user for a new number
		else if (userGuess > 10) then
			Alert "The number that you have entered is too low. The number has to be between 1 and 10. Please try again."
			Reprompt user for a new number
		else
			Alert "The value that you have entered it not valid, please try again."
			Reprompt user for a new number
			
	if userGuess equals randomNumber
		display "Correct! It took you (attempts) attempts to get the correct answer."
	
	END
	
- Test Plans
	1) If random number is 12
		- User number is 20
		- attempt++
		- Message "Wrong! Number is lower."
	2) If random number is 1
		- User number is 5
		- attempt++
		- Message "Wrong! Number is higher."
	3) If random number is 34
		- User number is -1
		- Message "The number that you have entered is too low. The number has to be between 1 and 10. Please try again."
	4) If random number is 100
		- User number is "as;lkj"
		- Message "The value that you entered is not valid, please try again"
*/

function easy() {
	
	//Generate random number
  var randomNumber = Math.floor(Math.random()*10) + 1;
	//alert(randomNumber);
	//Disable the above comment to show the number that is being used.
	
	//Prompt for number
  var userGuess = Number(prompt("What is your guess?"));
	//Initalize attempt to 0
  var attempt = 0;

	//Whenever the userGuess is wrong, the if / if else statment will display a certain message.
  while(userGuess !== randomNumber) {
		
		//IF the number is above the correct answer, message will say the number is lower. (1 attempt will be added, and a reprompt for a new number will come up)
    if ((randomNumber < userGuess) && (userGuess >= 1) && (userGuess <= 10)){
      alert("Wrong! The number is lower.");
      userGuess = Number(prompt("What is your next guess?"));
      attempt++;
		//IF the number is lower than the correct answer, message will say the number is higher. (1 attempt will be added, and a reprompt for a new number will come up)
    } else if ((randomNumber > userGuess) && (userGuess >= 1) && (userGuess <= 10)) {
      alert("Wrong! The number is higher.");
      userGuess = Number(prompt("What is your next guess?"));
      attempt++;
		//IF the number is below the range, it will say the number is out of range, and a reprompt message will come up for the new number.
    } else if (userGuess < 1) {
			alert("The number that you have entered is too low. The number has to be between 1 and 10. Please try again.");
			userGuess = Number(prompt("What is your next guess?"));
		//IF the number is above the range, it will say the number is out of range, and a reprompt message will come up for the new number.
		} else if (userGuess > 10) {
			alert("The number that you have entered is too high. The number has to be between 1 and 10. Please try again.");
			userGuess = Number(prompt("What is your next guess?"));
		//ELSE if the inputed answer is a string or black, an error message will come up, and a reprompt message will ask for the new number.
		} else {
      alert("The value that you entered is not valid, please try again");
      userGuess = Number(prompt("What is your next guess?"));
    }
	}
	
	//Once the number is corrent, the if statment will be executed
    if(userGuess === randomNumber) {
      attempt++;
      document.write("<center><h1>Correct! It took you " + attempt + " attempts to get the right number.<h1></center>");
			document.write("<br>");
			document.write("<center><h2>To play again, refresh the page.</h2></center>");
  }
}

function medium() {
	
	//Generate random number
  var randomNumber = Math.floor(Math.random()*100) + 1;
	//alert(randomNumber);
	//Disable the above comment to show the number that is being used.
	
	//Prompt for number
  var userGuess = Number(prompt("What is your guess?"));
	//Initalize attempt to 0
  var attempt = 0;

	//Whenever the userGuess is wrong, the if / if else statment will display a certain message.
  while(userGuess !== randomNumber) {
		
		//IF the number is above the correct answer, message will say the number is lower. (1 attempt will be added, and a reprompt for a new number will come up)
    if ((randomNumber < userGuess) && (userGuess >= 1) && (userGuess <= 100)){
      alert("Wrong! The number is lower.");
      userGuess = Number(prompt("What is your next guess?"));
      attempt++;
		//IF the number is lower than the correct answer, message will say the number is higher. (1 attempt will be added, and a reprompt for a new number will come up)
    } else if ((randomNumber > userGuess) && (userGuess >= 1) && (userGuess <= 100)) {
      alert("Wrong! The number is higher.");
      userGuess = Number(prompt("What is your next guess?"));
      attempt++;
		//IF the number is below the range, it will say the number is out of range, and a reprompt message will come up for the new number.
    } else if (userGuess < 1) {
			alert("The number that you have entered is too low. The number has to be between 1 and 100. Please try again.");
			userGuess = Number(prompt("What is your next guess?"));
		//IF the number is above the range, it will say the number is out of range, and a reprompt message will come up for the new number.
		} else if (userGuess > 100) {
			alert("The number that you have entered is too high. The number has to be between 1 and 100. Please try again.");
			userGuess = Number(prompt("What is your next guess?"));
		//ELSE if the inputed answer is a string or black, an error message will come up, and a reprompt message will ask for the new number.
		} else {
      alert("The value that you entered is not valid, please try again");
      userGuess = Number(prompt("What is your next guess?"));
    }
	}
	
	//Once the number is corrent, the if statment will be executed
    if(userGuess === randomNumber) {
      attempt++;
      document.write("<center><h1>Correct! It took you " + attempt + " attempts to get the right number.<h1></center>");
			document.write("<br>");
			document.write("<center><h2>To play again, refresh the page.</h2></center>");
  }
}

function hard() {
	
	//Generate random number
  var randomNumber = Math.floor(Math.random()*1000) + 1;
	//alert(randomNumber);
	//Disable the above comment to show the number that is being used.
	
	//Prompt for number
  var userGuess = Number(prompt("What is your guess?"));
	//Initalize attempt to 0
  var attempt = 0;

	//Whenever the userGuess is wrong, the if / if else statment will display a certain message.
  while(userGuess !== randomNumber) {
		
		//IF the number is above the correct answer, message will say the number is lower. (1 attempt will be added, and a reprompt for a new number will come up)
    if ((randomNumber < userGuess) && (userGuess >= 1) && (userGuess <= 1000)){
      alert("Wrong! The number is lower.");
      userGuess = Number(prompt("What is your next guess?"));
      attempt++;
		//IF the number is lower than the correct answer, message will say the number is higher. (1 attempt will be added, and a reprompt for a new number will come up)
    } else if ((randomNumber > userGuess) && (userGuess >= 1) && (userGuess <= 1000)) {
      alert("Wrong! The number is higher.");
      userGuess = Number(prompt("What is your next guess?"));
      attempt++;
		//IF the number is below the range, it will say the number is out of range, and a reprompt message will come up for the new number.
    } else if (userGuess < 1) {
			alert("The number that you have entered is too low. The number has to be between 1 and 1000. Please try again.");
			userGuess = Number(prompt("What is your next guess?"));
		//IF the number is above the range, it will say the number is out of range, and a reprompt message will come up for the new number.
		} else if (userGuess > 1000) {
			alert("The number that you have entered is too high. The number has to be between 1 and 1000. Please try again.");
			userGuess = Number(prompt("What is your next guess?"));
		//ELSE if the inputed answer is a string or black, an error message will come up, and a reprompt message will ask for the new number.
		} else {
      alert("The value that you entered is not valid, please try again");
      userGuess = Number(prompt("What is your next guess?"));
    }
	}
	
	//Once the number is corrent, the if statment will be executed
    if(userGuess === randomNumber) {
      attempt++;
      document.write("<center><h1>Correct! It took you " + attempt + " attempts to get the right number.<h1></center>");
			document.write("<br>");
			document.write("<center><h2>To play again, refresh the page.</h2></center>");
  }
}
