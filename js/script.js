// Hamburger menu functionality for mobile navbar

document.addEventListener('DOMContentLoaded', function () {
  const menuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');

  // Toggle menu on hamburger button click
  menuButton.addEventListener('click', function (e) {
    e.stopPropagation(); // Prevent click from bubbling to document
    mobileMenu.classList.toggle('hidden');
  });

  // Close menu when clicking a menu item
  mobileMenu.querySelectorAll('a').forEach(function (menuItem) {
    menuItem.addEventListener('click', function () {
      mobileMenu.classList.add('hidden');
    });
  });

  // Close menu when clicking outside
  document.addEventListener('click', function (e) {
    if (!mobileMenu.classList.contains('hidden')) {
      if (!mobileMenu.contains(e.target) && e.target !== menuButton && !menuButton.contains(e.target)) {
        mobileMenu.classList.add('hidden');
      }
    }
  });
});
