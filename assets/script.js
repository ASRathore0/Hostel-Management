document.addEventListener("DOMContentLoaded", () => {
    let slideIndex = 1;

    function openLightbox() {
        document.getElementById("lightbox").style.display = "block";
        showSlides(slideIndex);
    }

    function closeLightbox() {
        document.getElementById("lightbox").style.display = "none";
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function showSlides(n) {
        let slides = document.getElementsByClassName("slides");
        
        if (n > slides.length) {
            slideIndex = 1;
        } 
        if (n < 1) {
            slideIndex = slides.length;
        }
        
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        
        slides[slideIndex - 1].style.display = "block";
    }

    // Event listeners for lightbox controls
    document.querySelectorAll('.thumbnail').forEach((img, index) => {
        img.addEventListener('click', () => {
            openLightbox();
            currentSlide(index + 1);
        });
    });

    document.querySelector('.close').addEventListener('click', closeLightbox);
    document.querySelector('.prev').addEventListener('click', () => plusSlides(-1));
    document.querySelector('.next').addEventListener('click', () => plusSlides(1));
});

