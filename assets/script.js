 let currentSlide = 0;
let autoScrollInterval;

// Function to move slides manually or automatically
function moveSlide(direction) {
    const slides = document.querySelectorAll('.carousel-slide img');
    const totalSlides = slides.length;

    // Hide the current slide
    slides[currentSlide].style.display = "none";

    // Update the current slide index
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;

    // Show the new slide
    slides[currentSlide].style.display = "block";
}

// Initialize the carousel on page load
window.onload = () => {
    const slides = document.querySelectorAll('.carousel-slide img');
    
    // Hide all slides except the first one
    slides.forEach((slide, index) => {
        if (index !== currentSlide) {
            slide.style.display = "none";
        }
    });

    // Start auto-scrolling every 5 seconds
    autoScrollInterval = setInterval(() => moveSlide(1), 5000);
};

// Function to restart auto-scrolling after manual intervention
function restartAutoScroll() {
    clearInterval(autoScrollInterval);  // Stop current auto-scroll
    autoScrollInterval = setInterval(() => moveSlide(1), 5000);  // Restart after 5 seconds
}

// Move slide when clicking "prev" or "next" and restart auto-scroll
document.querySelector('.prev').onclick = function() {
    moveSlide(-1);
    restartAutoScroll();
};

document.querySelector('.next').onclick = function() {
    moveSlide(1);
    restartAutoScroll();
};

