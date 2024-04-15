document.addEventListener('DOMContentLoaded', function () {
  const heroContent = document.querySelector('.hero__content');
  heroContent.style.opacity = 0;
  window.setTimeout(function () {
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

// script for navbar
const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active');
});


// Add JavaScript to handle toggling for browsers that don't support CSS-only toggling
document.addEventListener('DOMContentLoaded', () => {
  const checkbox = document.getElementById('c-check');
  const toggle = document.querySelector('.c-navbar__toggle');

  toggle.addEventListener('click', () => {
    checkbox.checked = !checkbox.checked;
  });
});


/*code box js*/
function copyCode() {
  const code = document.querySelector('.codebox code').innerText;
  navigator.clipboard.writeText(code)
      .then(() => alert('Code copied to clipboard!'))
      .catch(err => console.error('Error copying text: ', err));
}


