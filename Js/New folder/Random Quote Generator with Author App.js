const quotes = {
    "Albert Einstein": "Imagination is more important than knowledge.",
    "Mark Twain": "The secret of getting ahead is getting started.",
    "Maya Angelou": "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel."
};

const randomAuthor = Object.keys(quotes)[Math.floor(Math.random() * Object.keys(quotes).length)];
console.log(`${quotes[randomAuthor]} - ${randomAuthor}`);


// javascript tutorial code
// Author: Rahmatullah Bizhan
// Email: rahmatullahbizhan@gmail.com
