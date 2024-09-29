const images = ["image1.jpg", "image2.jpg", "image3.jpg"];
let currentImageIndex = 0;

function showNextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    document.getElementById("galleryImage").src = images[currentImageIndex];
}



// javascript tutorial code
// Author: Rahmatullah Bizhan
// Email: rahmatullahbizhan@gmail.com
