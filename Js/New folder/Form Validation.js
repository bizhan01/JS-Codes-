document.getElementById("submitBtn").addEventListener("click", function() {
    const email = document.getElementById("emailInput").value;
    if (email.includes("@")) {
        alert("Form submitted successfully!");
    } else {
        alert("Please enter a valid email address.");
    }
});

// javascript tutorial code
// Author: Rahmatullah Bizhan
// Email: rahmatullahbizhan@gmail.com
