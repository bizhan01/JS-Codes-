
// javascript tutorial code
// Author: Rahmatullah Bizhan
// Email: rahmatullahbizhan@gmail.com

const secretNumber = Math.floor(Math.random() * 10) + 1;
let guess;

do {
    guess = parseInt(prompt('Guess a number between 1 and 10:'));
} while (guess !== secretNumber);

console.log('Congratulations! You guessed the correct number:', secretNumber);
