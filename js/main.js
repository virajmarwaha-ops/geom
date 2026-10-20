/**
 * GEOmetric Portfolio Management Service (P) Ltd.
 * Client-side interactive script
 */

document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('mobileNavToggle');
  const navMenu = document.getElementById('primaryNavigation');

  if (toggleBtn && navMenu) {
    toggleBtn.addEventListener('click', () => {
      const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
      toggleBtn.setAttribute('aria-expanded', !isExpanded);
      navMenu.classList.toggle('is-active', !isExpanded);
    });

    // Close mobile menu on Escape key press
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && navMenu.classList.contains('is-active')) {
        navMenu.classList.remove('is-active');
        toggleBtn.setAttribute('aria-expanded', 'false');
        toggleBtn.focus();
      }
    });

    // Close menu when clicking outside
    document.addEventListener('click', (event) => {
      if (
        navMenu.classList.contains('is-active') &&
        !navMenu.contains(event.target) &&
        !toggleBtn.contains(event.target)
      ) {
        navMenu.classList.remove('is-active');
        toggleBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }
});
