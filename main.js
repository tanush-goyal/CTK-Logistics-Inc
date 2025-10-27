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
