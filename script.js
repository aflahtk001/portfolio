document.addEventListener('DOMContentLoaded', () => {
    
    // Custom Cursor Glow Effect
    const cursorGlow = document.querySelector('.cursor-glow');
    
    document.addEventListener('mousemove', (e) => {
        const x = e.clientX;
        const y = e.clientY;
        
        requestAnimationFrame(() => {
            cursorGlow.style.transform = `translate(${x}px, ${y}px)`;
        });
    });

    // Smooth Scroll for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            const headerOffset = 80;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        });
    });

    // Scroll Animations (Fade Up)
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-up-active');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Add fade-up class to elements we want to animate
    const animateElements = document.querySelectorAll('.hero-title, .hero-subtitle, .bento-card, .project-card, .section-header');
    
    animateElements.forEach(el => {
        el.classList.add('fade-up');
        observer.observe(el);
    });
});
