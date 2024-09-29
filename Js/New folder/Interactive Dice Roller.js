document.getElementById("rollBtn").addEventListener("click", function() {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    document.getElementById("diceResult").innerText = "You rolled: " + randomNumber;
});


// javascript tutorial code
// Author: Rahmatullah Bizhan
// Email: rahmatullahbizhan@gmail.com
