function isPalindrome(str) {
    const reversedStr = str.split('').reverse().join('');
    return str.toLowerCase() === reversedStr.toLowerCase();
}

console.log(isPalindrome('radar')); // Output: true
console.log(isPalindrome('hello')); // Output: false


// javascript tutorial code
// Author: Rahmatullah Bizhan
// Email: rahmatullahbizhan@gmail.com
