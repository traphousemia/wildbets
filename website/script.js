document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.createElement("button");
    
    
   
    
    themeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-theme");
        localStorage.setItem("theme", document.body.classList.contains("dark-theme") ? "dark" : "light");
    });

    // Ensure header stays at the top and adjust for fixed positioning
    const header = document.querySelector(".header");
    if (header) {
        document.body.style.paddingTop = header.offsetHeight + "px";
    }
});







// JavaScript for Image Carousel functionality

let currentIndex = 0;
const images = document.querySelectorAll('.carousel-image');
const imageContainer = document.querySelector('.image-container');

// Auto transition the images every 3 seconds
setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    updateCarousel();
}, 3000);

// Function to update the carousel view
function updateCarousel() {
    const offset = -currentIndex * 100; // move the image container to the left by 100% of image width
    imageContainer.style.transform = `translateX(${offset}%)`;
}

// Left Arrow Click Event
document.querySelector('.arrow-left').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateCarousel();
});

// Right Arrow Click Event
document.querySelector('.arrow-right').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateCarousel();
});
















// Example JavaScript functionality, if needed
document.querySelectorAll('.game-item img').forEach(item => {
    item.addEventListener('click', function () {
        console.log(`Game clicked: ${this.alt}`);
    });
});
