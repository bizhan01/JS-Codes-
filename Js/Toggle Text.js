let isVisible = true;
const textElement = document.getElementById('text');

textElement.addEventListener('click', () => {
    textElement.textContent = isVisible ? 'Goodbye!' : 'Hello!';
    isVisible = !isVisible;
});


// javascript tutorial code
// Author: Rahmatullah Bizhan
// Email: rahmatullahbizhan@gmail.com
