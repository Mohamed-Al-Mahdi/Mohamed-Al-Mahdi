document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    const nav = document.querySelector('nav');
    const burger = document.querySelector('.burger-menu');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links li a');
    const scrollTopBtn = document.querySelector('.scroll-to-top');

    // Toggle mobile navigation
    burger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        burger.classList.toggle('toggle');
    });

    // Close menu when a link is clicked
    links.forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                burger.classList.remove('toggle');
            }
        });
    });

    // Scroll effect for navigation and scroll-to-top button
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
            scrollTopBtn.classList.add('visible');
        } else {
            nav.classList.remove('scrolled');
            scrollTopBtn.classList.remove('visible');
        }
    });

    // Fade-in effect for sections and elements
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, index * 100); // Staggered delay
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in').forEach(element => {
        observer.observe(element);
    });
});
