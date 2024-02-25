// JavaScript code for toggling the sidebar visibility
function toggleSidebar() {
  var sidebar = document.getElementById('c-side-bar');
  var check = document.getElementById('check');
  // Toggle the "active" class on the sidebar
  sidebar.classList.toggle('active');

  // Optional: Also toggle the "checked" state of the checkbox if needed
  check.checked = !check.checked;
}

// Add the event listener to the hamburger icon
document.addEventListener('DOMContentLoaded', function() {
  var iconButton = document.querySelector('.c-icon-button');
  iconButton.addEventListener('click', toggleSidebar);
});
