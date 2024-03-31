document.addEventListener('DOMContentLoaded', function() {
    const heroContent = document.querySelector('.hero__content');
    heroContent.style.opacity = 0;
    window.setTimeout(function() {
        heroContent.style.transition = 'opacity 2s';
        heroContent.style.opacity = 1;
    }, 500);
});

document.addEventListener('DOMContentLoaded', () => {
    const announcementsList = document.getElementById('announcements-list');
  
    // Pause the scrolling when hovering over the list
    announcementsList.addEventListener('mouseover', () => {
      announcementsList.style.animationPlayState = 'paused';
    });
  
    // Resume the scrolling when not hovering over the list
    announcementsList.addEventListener('mouseout', () => {
      announcementsList.style.animationPlayState = 'running';
    });
  });

  