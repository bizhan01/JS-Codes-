const questions = [
    { question: 'What is the capital of France?', answer: 'Paris' },
    { question: 'Who wrote Romeo and Juliet?', answer: 'William Shakespeare' },
    { question: 'What is the largest mammal?', answer: 'Blue Whale' }
];

let score = 0;

questions.forEach(({ question, answer }) => {
    const userAnswer = prompt(question);
    if (userAnswer.toLowerCase() === answer.toLowerCase()) {
        score++;
    }
});

console.log(`You scored ${score} out of ${questions.length}`);


// javascript tutorial code
// Author: Rahmatullah Bizhan
// Email: rahmatullahbizhan@gmail.com
