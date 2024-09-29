// javascript tutorial code
// Author: Rahmatullah Bizhan
// Email: rahmatullahbizhan@gmail.com

// Generate a random number between 1 and 10
const randomNumber = Math.floor(Math.random() * 10) + 1;

// Number of attempts allowed
let attempts = 3;

// Function to start the game
function startGame() {
    while (attempts > 0) {
        let guess = parseInt(prompt("Guess a number between 1 and 10:"));

        if (guess === randomNumber) {
            alert("Congratulations! You guessed the correct number.");
            break;
        } else {
            attempts--;
            if (attempts > 0) {
                alert(`Incorrect! You have ${attempts} attempts left.`);
            } else {
                alert(`Sorry, you've run out of attempts. The correct number was ${randomNumber}.`);
            }
        }
    }
}

// Start the game
startGame();
