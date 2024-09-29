function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    if (y !== 0) {
        return x / y;
    } else {
        return "Error: Division by zero!";
    }
}

console.log(add(5, 3));       // Output: 8
console.log(subtract(10, 4)); // Output: 6
console.log(multiply(2, 6));  // Output: 12
console.log(divide(10, 2));   // Output: 5
console.log(divide(7, 0));    // Output: Error: Division by zero!


// javascript tutorial code
// Author: Rahmatullah Bizhan
// Email: rahmatullahbizhan@gmail.com
