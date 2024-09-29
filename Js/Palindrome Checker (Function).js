function isPalindrome(word) {
    const reversedWord = word.split('').reverse().join('');
    return word === reversedWord;
}

const inputWord = 'level';
console.log(`Is "${inputWord}" a palindrome? ${isPalindrome(inputWord)}`);


// javascript tutorial code
// Author: Rahmatullah Bizhan
// Email: rahmatullahbizhan@gmail.com
