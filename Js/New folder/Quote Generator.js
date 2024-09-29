const quotes = ["Quote 1", "Quote 2", "Quote 3"];

function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('quote').innerText = quotes[randomIndex];
}


// javascript tutorial code
// Author: Rahmatullah Bizhan
// Email: rahmatullahbizhan@gmail.com
