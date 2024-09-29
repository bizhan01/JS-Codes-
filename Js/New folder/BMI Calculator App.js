function calculateBMI(weight, height) {
    return (weight / Math.pow(height, 2)).toFixed(2);
}

const weight = 70; // in kilograms
const height = 1.75; // in meters
console.log(`BMI: ${calculateBMI(weight, height)}`);

// javascript tutorial code
// Author: Rahmatullah Bizhan
// Email: rahmatullahbizhan@gmail.com
