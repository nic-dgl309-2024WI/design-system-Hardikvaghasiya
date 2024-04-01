document.addEventListener('DOMContentLoaded', function() {
    const heroContent = document.querySelector('.hero__content');
    heroContent.style.opacity = 0;
    window.setTimeout(function() {
        heroContent.style.transition = 'opacity 2s';
        heroContent.style.opacity = 1;
    }, 500);
});


// Function to toggle the accordion
function toggleAccordion() {
  const accordions = document.querySelectorAll('.faq-section__question');

  accordions.forEach(acc => {
    acc.onclick = function() {
      this.classList.toggle('active');
      this.setAttribute('aria-expanded', this.classList.contains('active'));

      let panel = this.nextElementSibling;
      if (panel.style.display === 'block') {
        panel.style.display = 'none';
      } else {
        panel.style.display = 'block';
      }
    }
  });
}

// Call the function when the DOM is fully loaded
window.onload = function() {
  toggleAccordion();
}

  