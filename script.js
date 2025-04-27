// Using ES6+ features for smooth scrolling
document.querySelectorAll('a.smooth-scroll').forEach(anchor => {
    anchor.addEventListener('click', e => {
        e.preventDefault();
        const blockID = anchor.getAttribute('href').substring(1);
        document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
        
        // Close mobile menu when a link is clicked
        const navMenu = document.querySelector('.nav-menu');
        if (navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
        }
    });
});

// Mobile navigation toggle
document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }
});

// Typewriter effect for the introduction text
const text = "Full Stack Web and App Developer ";
let i = 0;

const typeWriter = () => {
    if (i < text.length) {
        document.getElementById('typewriter').innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}

document.addEventListener('DOMContentLoaded', typeWriter);
