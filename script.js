// Preloader logic
window.addEventListener('load', function() {
    const preloader = document.getElementById('preloader');
    if(preloader) {
        setTimeout(() => {
            preloader.classList.add('hidden');
        }, 800); // Slight delay so the user can see the logo pulse animation
    }
});

// Sticky Navbar logic
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if(navbar) {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
});

// Parallax effect for the about image
document.addEventListener('mousemove', (e) => {
    const parallaxImg = document.querySelector('.parallax-img');
    if(parallaxImg) {
        const speed = 2;
        const x = (window.innerWidth - e.pageX * speed) / 100;
        const y = (window.innerHeight - e.pageY * speed) / 100;
        parallaxImg.style.transform = `translateX(${x}px) translateY(${y}px) scale(1.05)`;
    }
});

document.addEventListener("DOMContentLoaded", function() {
    
    // Intersection Observer for scroll animations
    const revealElements = document.querySelectorAll('.reveal');

    const revealCallback = function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // Optional: unobserve after showing once
                // observer.unobserve(entry.target);
            }
        });
    };

    const revealOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealObserver = new IntersectionObserver(revealCallback, revealOptions);

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if(targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

});
