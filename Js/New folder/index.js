// javascript tutorial code
// Author: Rahmatullah Bizhan
// Email: rahmatullahbizhan@gmail.com

console.log("Hello, World!");

let message = "Hello, World!";
console.log(message);

let num1 = 10;
let num2 = 5;
let sum = num1 + num2;
console.log("The sum is: " + sum);



let x = 10;
if (x > 5) {
    console.log("x is greater than 5");
} else {
    console.log("x is 5 or less");
}


for (let i = 0; i < 5; i++) {
    console.log("Iteration: " + i);
}


function greet(name) {
    return "Hello, " + name + "!";
}

let greeting = greet("Alice");
console.log(greeting);

let fruits = ['Apple', 'Banana', 'Orange'];

// Loop through the array and log each fruit
fruits.forEach(function(fruit) {
    console.log(fruit);
});



let person = {
    name: 'Alice',
    age: 30,
    city: 'New York'
};

// Accessing object properties
console.log(person.name);
console.log(person.age);
console.log(person.city);




// Add a click event listener to a button
// let btn = document.getElementById('myButton');
// btn.addEventListener('click', function() {
//     console.log('Button clicked!');
// });



function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Data received!');
        }, 2000);
    });
}

getData().then((data) => {
    console.log(data);
});


// Storing data in local storage
localStorage.setItem('username', 'Alice');

// Retrieving data from local storage
let storedUsername = localStorage.getItem('username');
console.log('Username:', storedUsername);
