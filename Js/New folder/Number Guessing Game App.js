const randomNumber = Math.floor(Math.random() * 10) + 1;
let attempts = 3;

function guessNumber(number) {
    if (number === randomNumber) {
        return "Congratulations! You guessed the correct number.";
    } else {
        attempts--;
        return attempts > 0 ? `Incorrect! You have ${attempts} attempts left.` : `Sorry, you've run out of attempts. The correct number was ${randomNumber}.`;
    }
}

console.log(guessNumber(5)); // Example guess


// javascript tutorial code
// Author: Rahmatullah Bizhan
// Email: rahmatullahbizhan@gmail.com
