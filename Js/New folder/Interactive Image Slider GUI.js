let currentImageIndex = 0;
const images = ["image1.jpg", "image2.jpg", "image3.jpg"];

document.getElementById("nextBtn").addEventListener("click", function() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    document.getElementById("image").src = images[currentImageIndex];
});



// javascript tutorial code
// Author: Rahmatullah Bizhan
// Email: rahmatullahbizhan@gmail.com
