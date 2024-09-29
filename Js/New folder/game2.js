// Function to generate computer's choice
function computerPlay() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// javascript tutorial code
// Author: Rahmatullah Bizhan
// Email: rahmatullahbizhan@gmail.com

// Function to play a round of rock-paper-scissors
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        return `You win! ${playerSelection} beats ${computerSelection}.`;
    } else {
        return `You lose! ${computerSelection} beats ${playerSelection}.`;
    }
}

// Play a 5-round game
function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Enter your choice: rock, paper, or scissors");
        const computerSelection = computerPlay();
        const result = playRound(playerSelection, computerSelection);
        console.log(result);
    }
}

// Start the game
game();
