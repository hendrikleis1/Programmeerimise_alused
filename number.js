// NUMBER GUESSING GAME

const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
let userGuess = Number(
  window.prompt(
    "Guess an integer between 1 and 100 ja selle jaoks om 10 katset: "
  )
);
let counter = 1;
for (counter; counter <= 10; counter++) {
  if (isNaN(userGuess)) {
    window.alert("See ei ole number! Proovi uuesti");
    break;
  }
  if (userGuess === answer) {
    window.alert(
      "Congratulations! You guessed the correct number " +
        answer +
        " in " +
        counter +
        " attempts."
    );
    break;
  } else if (userGuess < answer) {
    userGuess = Number(window.prompt("Too low! Try again: "));
    window.alert("You have " + (10 - counter) + " attempts left.");
  } else if (userGuess > answer) {
    userGuess = Number(window.prompt("Too high! Try again: "));
    window.alert("You have " + (10 - counter) + " attempts left.");
  }
  if (counter == 10) {
    window.alert(
      "Sorry, you've used all 10 attempts. The correct number was " +
        answer +
        "."
    );
  }
}
