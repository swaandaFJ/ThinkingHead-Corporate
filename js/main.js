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
// Contact form — submits to Formspree via fetch, no page reload.
// Falls back to a normal HTML form POST (still works, just leaves the page)
// if fetch fails for any reason — nothing breaks if JS doesn't run at all.
// ==========================================================================
const contactForm = document.querySelector("#contact-form");

if (contactForm) {
  const submitBtn = document.querySelector("#contact-submit");
  const statusEl = document.querySelector("#contact-status");

  contactForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = new FormData(contactForm);
    submitBtn.disabled = true;
    submitBtn.textContent = "Sending…";
    statusEl.textContent = "";
    statusEl.style.color = "";

    try {
      const response = await fetch(contactForm.action, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        contactForm.reset();
        statusEl.textContent =
          "Thanks — your message is on its way. We'll be in touch shortly.";
        statusEl.style.color = "var(--teal)";
      } else {
        const data = await response.json().catch(() => null);
        const detail =
          data?.errors?.map((e) => e.message).join(", ") ||
          "Something went wrong sending that. Please try again, or email hello@thinkinghead.ng directly.";
        statusEl.textContent = detail;
        statusEl.style.color = "#b3261e";
      }
    } catch (err) {
      statusEl.textContent =
        "Couldn't reach the server. Check your connection, or email hello@thinkinghead.ng directly.";
      statusEl.style.color = "#b3261e";
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = "Start a conversation";
    }
  });
}

// ==========================================================================
// Footer year
// ==========================================================================
const yearEl = document.querySelector("[data-year]");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}
