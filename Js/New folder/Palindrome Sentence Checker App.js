function isPalindromeSentence(sentence) {
    const formattedSentence = sentence.toLowerCase().replace(/[^a-zA-Z]/g, '');
    const reversedSentence = formattedSentence.split('').reverse().join('');
    return formattedSentence === reversedSentence;
}

console.log(isPalindromeSentence("A man, a plan, a canal, Panama!")); // Output: true


// javascript tutorial code
// Author: Rahmatullah Bizhan
// Email: rahmatullahbizhan@gmail.com
