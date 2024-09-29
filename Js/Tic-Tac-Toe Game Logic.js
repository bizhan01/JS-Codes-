const board = [
    ['X', 'O', 'X'],
    ['O', 'X', 'O'],
    ['X', 'O', 'X']
];

// Check for a winner
function checkWinner(board) {
    // Row check
    for (let row = 0; row < 3; row++) {
        if (board[row][0] === board[row][1] && board[row][1] === board[row][2]) {
            return board[row][0];
        }
    }

    // Column check
    for (let col = 0; col < 3; col++) {
        if (board[0][col] === board[1][col] && board[1][col] === board[2][col]) {
            return board[0][col];
        }
    }

    // Diagonal check
    if ((board[0][0] === board[1][1] && board[1][1] === board[2][2]) ||
        (board[0][2] === board[1][1] && board[1][1] === board[2][0])) {
        return board[1][1];
    }

    return 'No winner';
}

console.log('Winner:', checkWinner(board));



// javascript tutorial code
// Author: Rahmatullah Bizhan
// Email: rahmatullahbizhan@gmail.com
