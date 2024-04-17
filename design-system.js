// JavaScript code for toggling the sidebar visibility
function toggleSidebar() {
  var sidebar = document.getElementById('c-side__sidebar'); // Corrected ID to match HTML
  var check = document.getElementById('check');
  // Toggle the "active" class on the sidebar
  sidebar.classList.toggle('active');

  // Optional: Also toggle the "checked" state of the checkbox if needed
  check.checked = !check.checked;
}

// Add the event listener to the hamburger icon
document.addEventListener('DOMContentLoaded', function() {
  var iconButton = document.querySelector('.c-c-navigation__icon-button'); // Corrected class name to match HTML
  iconButton.addEventListener('click', toggleSidebar);
});


