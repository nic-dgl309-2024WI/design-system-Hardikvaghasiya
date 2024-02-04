function toggleSidebar() {
    var sidebar = document.getElementById('side-bar');
    sidebar.classList.toggle('active');
  }

  document.addEventListener('DOMContentLoaded', function() {
    var iconButton = document.querySelector('.icon-button');
    iconButton.addEventListener('click', toggleSidebar);
  });
  