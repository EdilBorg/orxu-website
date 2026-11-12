/**
 * ORXU Institutional Website — main.js
 * Minimal vanilla JS for navigation and accessibility.
 */
(function () {
  "use strict";

  // Mobile navigation toggle
  const toggle = document.querySelector(".menu-toggle");
  const mobileNav = document.querySelector(".nav-mobile");
  const body = document.body;

  if (toggle && mobileNav) {
    toggle.addEventListener("click", function () {
      const isOpen = mobileNav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
      body.classList.toggle("nav-open", isOpen);
    });

    // Close on escape
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && mobileNav.classList.contains("is-open")) {
        mobileNav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        body.classList.remove("nav-open");
        toggle.focus();
      }
    });

    // Close when a link is activated
    mobileNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        mobileNav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        body.classList.remove("nav-open");
      });
    });
  }
})();
