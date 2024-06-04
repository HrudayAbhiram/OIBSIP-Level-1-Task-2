// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Responsive Menu
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.navbar ul.menu');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
});
