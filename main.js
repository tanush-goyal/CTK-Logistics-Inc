// main.js

// ======== Load Navbar ========
fetch("navbar.html")
  .then((res) => res.text())
  .then((data) => {
    document.getElementById("navbar-placeholder").innerHTML = data;
  });

// ======== Load Meta and Handle SEO ========
fetch("meta.html")
  .then((res) => res.text())
  .then((metaData) => {
    document.head.insertAdjacentHTML("afterbegin", metaData);

    const page = window.location.pathname.split("/").pop().toLowerCase();
    const titleEl = document.getElementById("dynamic-title");
    const descEl = document.getElementById("dynamic-description");

    if (!titleEl || !descEl) return;

    // Customize per page
    switch (page) {
      case "index.html":
      case "":
        titleEl.textContent = "CTK Logistics | Reliable Freight & Trucking Services";
        descEl.setAttribute(
          "content",
          "Professional freight and trucking services across North America — CTK Logistics delivers reliability and excellence."
        );
        break;

      case "about.html":
        titleEl.textContent = "About CTK Logistics | Our Story & Mission";
        descEl.setAttribute(
          "content",
          "Learn about CTK Logistics’ mission, values, and dedication to providing dependable transport and logistics solutions."
        );
        break;

      case "services.html":
        titleEl.textContent = "CTK Logistics Services | Freight, Trucking & Supply Chain Solutions";
        descEl.setAttribute(
          "content",
          "Explore our full range of logistics and transportation services designed for speed, safety, and efficiency."
        );
        break;

      case "contact.html":
        titleEl.textContent = "Contact CTK Logistics | Get a Freight Quote Today";
        descEl.setAttribute(
          "content",
          "Reach out to CTK Logistics for shipping quotes, inquiries, and partnership opportunities. We’re here to help."
        );
        break;

      case "thankyou.html":
        titleEl.textContent = "Thank You | CTK Logistics";
        descEl.setAttribute(
          "content",
          "Thank you for contacting CTK Logistics. Our team will get back to you shortly."
        );
        break;
      case "thankyou.html":
        titleEl.textContent = "Import/Export| CTK Logistics";
        descEl.setAttribute(
          "content",
          "We import and export many tings including dirt and gravel"
        );
         break;

      default:
        titleEl.textContent = "CTK Logistics | Professional Freight & Transportation Services";
        descEl.setAttribute(
          "content",
          "Nationwide trucking and logistics solutions built on trust and reliability."
        );
        break;
    }
  });

// ======== Page Animations ========
document.addEventListener("DOMContentLoaded", () => {
  const fadeEls = document.querySelectorAll(".fade-in");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("visible");
      });
    },
    { threshold: 0.2 }
  );
  fadeEls.forEach((el) => observer.observe(el));

  // Auto update footer year
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
document.addEventListener("DOMContentLoaded", () => {
  const fadeEls = document.querySelectorAll(".fade-in");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.2 }
  );

  fadeEls.forEach((el) => observer.observe(el));
});
window.addEventListener("scroll", () => {
  const hero = document.querySelector(".carousel-item.active .hero-img");
  if (hero) {
    const offset = window.scrollY * 0.05;
    hero.style.transform = `translateY(${offset}px) scale(1.03)`;
  }
});
document.addEventListener("DOMContentLoaded", () => {

  /* ============================================
     CARD SCROLL REVEAL + LEFT/RIGHT ALTERNATION
  ============================================= */
  const cards = document.querySelectorAll(".info-card");

  // Assign left/right classes based on card index
  cards.forEach((card, i) => {
    if (i % 2 === 0) {
      card.classList.add("left");   // Even index → slide from left
    } else {
      card.classList.add("right");  // Odd index → slide from right
    }
  });

  const cardObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.2 }
  );

  cards.forEach(card => cardObserver.observe(card));




  /* ============================================
      PIXELATED → CLEAR IMAGE REVEAL
  ============================================= */
  const images = document.querySelectorAll(".service-image");

  const imageObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.3 }
  );

  images.forEach(img => imageObserver.observe(img));

});
// ===== CTK Logistics Smooth Blur Fade Page Transition =====
// Robust body-based blur/fade transitions (replace previous transition code)
// Only JS changes — no HTML/CSS changes required.

(function () {
  const body = document.body;
  if (!body) return;

  // Force reflow helper
  const forceReflow = () => void body.offsetHeight;

  // Ensure initial classes exist and trigger a reliable fade-in regardless of timing.
  function ensureInitialFadeIn() {
    // If class already present and fade-in is not active, still re-trigger removal to ensure animation runs.
    body.classList.add("transition-blur", "fade-in");

    // Use double rAF (or small timeout) to ensure class is applied before removing it.
    // This avoids the "added too late" problem on fast loads.
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        // Remove fade-in to start the transition to clear.
        body.classList.remove("fade-in");
        forceReflow();
      });
    });
  }

  // Called when page is shown (normal load or bfcache restore)
  function handlePageShow(event) {
    // Always clear any leftover fade-out
    body.classList.remove("fade-out");

    // Re-trigger fade-in so page becomes visible and animates to clear
    // (use same ensureInitialFadeIn to guarantee timing)
    ensureInitialFadeIn();
  }

  // DOM ready: if script ran before DOMContentLoaded, do the normal flow.
  if (document.readyState === "loading") {
    // Wait for DOMContentLoaded then ensure fade-in.
    document.addEventListener("DOMContentLoaded", () => {
      ensureInitialFadeIn();
    });
  } else {
    // DOM already loaded when script runs (fast load / cached). Trigger immediately.
    ensureInitialFadeIn();
  }

  // Navigation click handler (fade-out then navigate)
  document.addEventListener("click", (e) => {
    const link = e.target.closest("a");
    if (!link) return;

    // Ignore external links, downloads, anchors, same-page, or different origin
    if (
      link.target === "_blank" ||
      link.hasAttribute("download") ||
      link.href.includes("#") ||
      link.href === window.location.href ||
      link.origin !== window.location.origin
    ) {
      return;
    }

    // Allow modifier keys to open in new tab/window
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

    e.preventDefault();

    // Start fade-out
    body.classList.add("fade-out");
    forceReflow();

    // Wait for the fade-out (match your CSS timing: ~400ms)
    const OUT_MS = 420;
    setTimeout(() => {
      // Use location.assign so back-button works normally
      window.location.assign(link.href);
    }, OUT_MS);
  });

  // pageshow handles bfcache / back-forward restores reliably.
  window.addEventListener("pageshow", (event) => {
    // Some browsers set event.persisted, some don't — handle both.
    handlePageShow(event);
  });

  // Extra safety: visibilitychange can cover edge cases where pageshow isn't enough.
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible") {
      // Remove fade-out and reapply fade-in briefly to ensure visibility
      handlePageShow();
    }
  });
})();




