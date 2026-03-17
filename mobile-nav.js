/**
 * Mobile Navigation
 * Wewillbebirds — Burger menu functionality
 */

(function() {
  'use strict';

  const burger = document.getElementById('burger-menu');
  const mobileNav = document.getElementById('mobile-nav');
  const closeBtn = document.getElementById('mobile-nav-close');
  const overlay = document.getElementById('mobile-nav-overlay');
  const body = document.body;

  if (!burger || !mobileNav) return;

  function openMenu() {
    mobileNav.classList.add('mobile-nav--open');
    body.style.overflow = 'hidden';
  }

  function closeMenu() {
    mobileNav.classList.remove('mobile-nav--open');
    body.style.overflow = '';
  }

  // Burger click
  burger.addEventListener('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    openMenu();
  });

  // Close button click
  if (closeBtn) {
    closeBtn.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      closeMenu();
    });
  }

  // Overlay click
  if (overlay) {
    overlay.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      closeMenu();
    });
  }

  // Close on escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && mobileNav.classList.contains('mobile-nav--open')) {
      closeMenu();
    }
  });

  // Prevent scroll on mobile menu links (page will navigate)
  const mobileLinks = mobileNav.querySelectorAll('a');
  mobileLinks.forEach(function(link) {
    link.addEventListener('click', function() {
      // Allow navigation, then close
      setTimeout(closeMenu, 100);
    });
  });
})();
