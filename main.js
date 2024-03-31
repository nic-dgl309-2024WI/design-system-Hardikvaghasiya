document.addEventListener('DOMContentLoaded', function() {
    const heroContent = document.querySelector('.hero__content');
    heroContent.style.opacity = 0;
    window.setTimeout(function() {
        heroContent.style.transition = 'opacity 2s';
        heroContent.style.opacity = 1;
    }, 500);
});

