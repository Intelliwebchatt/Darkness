// Scroll-triggered animation
document.addEventListener('scroll', function() {
    const contents = document.querySelectorAll('.content');
    contents.forEach(content => {
        const contentPosition = content.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (contentPosition < screenPosition) {
            content.classList.add('visible');
        }
    });
});

// Carousel functionality
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Show slides
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName('carousel-slide');
    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slides[slideIndex - 1].style.display = 'block';
}

// Auto-play slides
let slideInterval = setInterval(function() {
    plusSlides(1);
}, 5000);

// Pause on hover
const carousel = document.querySelector('.carousel');
carousel.addEventListener('mouseover', function() {
    clearInterval(slideInterval);
});
carousel.addEventListener('mouseout', function() {
    slideInterval = setInterval(function() {
        plusSlides(1);
    }, 5000);
});

// Newsletter form submission
const newsletterForm = document.getElementById('newsletter-form');
newsletterForm.addEventListener('submit', function(e) {
    e.preventDefault();
    // Here you would integrate with your email marketing service
    alert('Thank you for subscribing! Check your email for the free download.');
    newsletterForm.reset();
});

// Contact form submission
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    // Here you would integrate with your email handling service
    alert('Thank you for your message! We will get back to you soon.');
    contactForm.reset();
});
