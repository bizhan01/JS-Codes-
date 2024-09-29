function generateRandomNumber() {
    const min = document.getElementById('minInput').value;
    const max = document.getElementById('maxInput').value;
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    document.getElementById('result').innerText = randomNumber;
}



// javascript tutorial code
// Author: Rahmatullah Bizhan
// Email: rahmatullahbizhan@gmail.com
