function countVowels(text) {
    const vowels = 'aeiouAEIOU';
    let count = 0;

    for (let char of text) {
        if (vowels.includes(char)) {
            count++;
        }
    }

    return count;
}

const text = 'JavaScript is awesome!';
console.log(`Number of vowels in "${text}": ${countVowels(text)}`);


// javascript tutorial code
// Author: Rahmatullah Bizhan
// Email: rahmatullahbizhan@gmail.com
