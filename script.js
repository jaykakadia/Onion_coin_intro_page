document.addEventListener("DOMContentLoaded", () => {
  // 1. Navigation Setup (Scroll effect)
  const navbar = document.querySelector(".navbar");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // 2. Intersection Observer for fade-in animations
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.15, // Trigger when 15% of the element is visible
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Add the 'is-visible' class to trigger CSS animation
        entry.target.classList.add("is-visible");
        // Optional: stop observing once animated to keep it visible
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Get all elements with animation classes
  const animatedElements = document.querySelectorAll(".fade-in, .fade-in-up");

  // Start observing them
  animatedElements.forEach((el) => {
    observer.observe(el);
  });

  // 3. Simple Mobile Menu Toggle implementation (Expandability)
  const mobileBtn = document.querySelector(".mobile-menu-btn");
  const navLinks = document.querySelector(".nav-links");

  if (mobileBtn && navLinks) {
    mobileBtn.addEventListener("click", () => {
      // Very basic toggle, could be expanded for a full mobile menu drawer
      // For now it toggles a class on the button itself.
      mobileBtn.classList.toggle("active");

      // To properly implement a full mobile menu we would expand this
      // but for a simple intro site, keeping it minimal initially.
      if (mobileBtn.classList.contains("active")) {
        // Future mobile menu logic here
      }
    });
  }

  // 4. Subtle Parallax effect on floating Background Glows
  const glows = document.querySelectorAll(".bg-glow");

  window.addEventListener("mousemove", (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    glows.forEach((glow, index) => {
      // Apply a slight transform based on mouse position
      const speed = (index + 1) * 20;
      const moveX = x * speed - speed / 2;
      const moveY = y * speed - speed / 2;

      glow.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
  });

  // Run observer once manually to catch elements already in viewport on load
  setTimeout(() => {
    animatedElements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      // If element is in viewport
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        el.classList.add("is-visible");
      }
    });
  }, 100);
});
