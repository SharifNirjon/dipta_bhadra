document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', () => {
            mainNav.classList.toggle('active');
            
            // Animate hamburger to X
            const spans = menuToggle.querySelectorAll('span');
            if (mainNav.classList.contains('active')) {
                spans[0].style.transform = 'translateY(8px) rotate(45deg)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'translateY(-8px) rotate(-45deg)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    }

    // Set active link based on current page URL
    const currentLocation = location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll('.nav-links a');
    
    // Default to index if empty (e.g., at root domain)
    const pageToMatch = currentLocation === "" ? "index.html" : currentLocation;

    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        if(linkHref === pageToMatch){
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // Add fade-in animation slightly delayed
    const fadeElements = document.querySelectorAll('.hero-content, .hero-image-wrapper');
    fadeElements.forEach((el, index) => {
        el.style.opacity = '0';
        setTimeout(() => {
            el.classList.add('fade-in');
        }, 150 * index);
    });
});
