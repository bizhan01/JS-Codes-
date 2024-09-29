function countdown(seconds) {
    let timer = setInterval(() => {
        console.log(seconds);
        seconds--;
        if (seconds < 0) {
            clearInterval(timer);
            console.log("Countdown complete!");
        }
    }, 1000);
}

countdown(5); // Start a countdown from 5 seconds


// javascript tutorial code
// Author: Rahmatullah Bizhan
// Email: rahmatullahbizhan@gmail.com
