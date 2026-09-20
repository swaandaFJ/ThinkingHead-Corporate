// ==========================================================================
// Mobile menu toggle
// ==========================================================================
const menuToggle = document.querySelector("[data-menu-toggle]");
const menuClose = document.querySelector("[data-menu-close]");
const mobileMenu = document.querySelector("[data-mobile-menu]");

if (menuToggle && mobileMenu) {
  menuToggle.addEventListener("click", () => {
    mobileMenu.classList.add("is-open");
    menuToggle.setAttribute("aria-expanded", "true");
  });
}

if (menuClose && mobileMenu) {
  menuClose.addEventListener("click", () => {
    mobileMenu.classList.remove("is-open");
    menuToggle?.setAttribute("aria-expanded", "false");
  });
}

// Close the mobile menu when a link inside it is tapped
document.querySelectorAll("[data-mobile-menu] a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("is-open");
    menuToggle?.setAttribute("aria-expanded", "false");
  });
});

// ==========================================================================
// Scroll-triggered fade-in (mirrors the Next.js version's .fade-in class)
// ==========================================================================
const fadeEls = document.querySelectorAll(".fade-in");

if ("IntersectionObserver" in window && fadeEls.length) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  fadeEls.forEach((el) => observer.observe(el));
} else {
  // No IntersectionObserver support — just show everything
  fadeEls.forEach((el) => el.classList.add("is-visible"));
}

// ==========================================================================
// Footer year
// ==========================================================================
const yearEl = document.querySelector("[data-year]");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}
