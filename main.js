// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form submission handling
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(this);
    // Here you would typically send the data to a server
    alert('Thank you for your message! We will get back to you soon.');
    this.reset();
});

// Parallax effect for hero section
window.addEventListener('scroll', function() {
    const video = document.getElementById('bgVideo');
    const scrolled = window.pageYOffset;
    video.style.transform = `translateY(${scrolled * 0.5}px)`;
});

// Registration button handler
function openRegistration() {
    const registrationURL = '#'; // Add your registration form URL here
    window.location.href = registrationURL;
    // For now, show an alert
    alert('Registration form will be available soon!');
}

// Add animation class to elements when they come into view
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, {
    threshold: 0.1
});

// Observe all sections
document.querySelectorAll('section').forEach((section) => {
    observer.observe(section);
});

// Add hover effect to event cards
document.querySelectorAll('.event-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});
