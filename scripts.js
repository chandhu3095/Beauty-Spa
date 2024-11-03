// JavaScript for smooth scrolling and glowing nav items
const navItems = document.querySelectorAll('.nav-link');

// Smooth scrolling and active class handling
navItems.forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetSection = document.querySelector(this.getAttribute('href'));
        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const adjustNavbar = () => {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    if (window.innerWidth < 768) {
        navbar.classList.remove('bg-light');
        navbar.classList.add('bg-dark');
        navLinks.forEach(link => link.style.color = 'white');
    } else {
        navbar.classList.remove('bg-dark');
        navbar.classList.add('bg-light');
        navLinks.forEach(link => link.style.color = '#333');
    }
};

window.addEventListener('scroll', () => {
    navItems.forEach(item => {
        const section = document.querySelector(item.getAttribute('href'));
        const rect = section.getBoundingClientRect();
        
        if (rect.top <= 100 && rect.bottom >= 100) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
});

// Run on page load and window resize
document.addEventListener('DOMContentLoaded', adjustNavbar);
window.addEventListener('resize', adjustNavbar);


document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
    
    // Clear the form fields
    this.reset();
});

window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
