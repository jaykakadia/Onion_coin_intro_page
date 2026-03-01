// Register GSAP Plugins
gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {
  /* ==========================================================================
     1. Preloader Animation
     ========================================================================== */
  const tlPreloader = gsap.timeline({
    onComplete: () => {
      document.body.style.overflow = "auto";
      initHeroAnimations();
    },
  });

  // Temporarily lock scroll
  document.body.style.overflow = "hidden";

  tlPreloader
    .to(".preloader-progress", {
      width: "100%",
      duration: 1.5,
      ease: "power3.inOut",
    })
    .to(
      ".preloader-content",
      {
        opacity: 0,
        y: -20,
        duration: 0.5,
        ease: "power2.in",
      },
      "-=0.3",
    )
    .to(
      ".preloader",
      {
        yPercent: -100,
        duration: 1,
        ease: "power4.inOut",
      },
      "-=0.1",
    );

  /* ==========================================================================
     2. Lenis Smooth Scrolling Setup
     ========================================================================== */
  const lenis = new Lenis({
    duration: 2.2, // Increased from 1.2 to slow down scrolling and make it feel more "laggy"/"smooth"
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: "vertical",
    gestureDirection: "vertical",
    smooth: true,
    mouseMultiplier: 0.8, // Decreased so each mouse wheel turn scrolls less distance
    smoothTouch: false,
    touchMultiplier: 2,
    infinite: false,
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  // Sync GSAP ScrollTrigger with Lenis
  lenis.on("scroll", ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0, 0);

  /* ==========================================================================
     3. Custom Cursor
     ========================================================================== */
  const cursorDot = document.querySelector(".cursor-dot");
  const cursorOutline = document.querySelector(".cursor-outline");

  window.addEventListener("mousemove", (e) => {
    const posX = e.clientX;
    const posY = e.clientY;

    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    // Add a slight lag to the outline using GSAP for smoothness
    gsap.to(cursorOutline, {
      x: posX,
      y: posY,
      duration: 0.15,
      ease: "power2.out",
    });
  });

  // Cursor hover effects
  const interactables = document.querySelectorAll("a, button, .card");

  interactables.forEach((el) => {
    el.addEventListener("mouseenter", () => {
      cursorOutline.classList.add("cursor-hover");
      cursorDot.style.opacity = "0";
    });
    el.addEventListener("mouseleave", () => {
      cursorOutline.classList.remove("cursor-hover");
      cursorDot.style.opacity = "1";
    });
  });

  /* ==========================================================================
     4. Navigation Scroll Effect
     ========================================================================== */
  const navbar = document.querySelector(".navbar");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  /* ==========================================================================
     5. Hero Animations (Fired after Preloader)
     ========================================================================== */
  function initHeroAnimations() {
    // Split text for hero title
    const heroTitle = new SplitType(".hero-title", { types: "words, chars" });

    const tlHero = gsap.timeline();

    tlHero
      .from(heroTitle.chars, {
        opacity: 0,
        y: 50,
        rotateX: -90,
        stagger: 0.02,
        duration: 0.8,
        ease: "back.out(1.7)",
      })
      .from(
        ".hero-badge",
        {
          opacity: 0,
          y: 20,
          duration: 0.5,
          ease: "power2.out",
        },
        "-=0.6",
      )
      .from(
        ".hero-subtitle",
        {
          opacity: 0,
          y: 20,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.4",
      )
      .from(
        ".hero-actions",
        {
          opacity: 0,
          y: 20,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.4",
      )
      .from(
        ".hero-3d-element",
        {
          scale: 0,
          opacity: 0,
          duration: 1.2,
          ease: "elastic.out(1, 0.5)",
        },
        "-=0.8",
      );
  }

  /* ==========================================================================
     6. Scroll Trigger Animations for Sections
     ========================================================================== */
  // Reveal Elements globally
  const revealElements = document.querySelectorAll(".reveal-elem");

  revealElements.forEach((elem) => {
    gsap.from(elem, {
      scrollTrigger: {
        trigger: elem,
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    });
  });

  // Stagger Cards in Infrastructure Section
  gsap.from(".card", {
    scrollTrigger: {
      trigger: ".cards-grid",
      start: "top 80%",
    },
    y: 50,
    opacity: 0,
    stagger: 0.15,
    duration: 0.8,
    ease: "power3.out",
  });

  // Solutions Cards Parallax effect
  const solutionCards = document.querySelectorAll(".solution-card");
  solutionCards.forEach((card, index) => {
    gsap.to(card, {
      scrollTrigger: {
        trigger: ".solutions-grid",
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
      y: index % 2 === 0 ? -50 : 50, // Alternate directions for parallax
      ease: "none",
    });
  });

  /* ==========================================================================
     7. Card Glow Hover Effect (Mouse Tracking)
     ========================================================================== */
  const cards = document.querySelectorAll(".glass-card");

  cards.forEach((card) => {
    const glow = card.querySelector(".card-glow");

    if (glow) {
      card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        glow.style.transform = `translate(${x - 150}px, ${y - 150}px)`;
        glow.style.opacity = "1";
      });

      card.addEventListener("mouseleave", () => {
        glow.style.opacity = "0";
      });
    }
  });

  /* ==========================================================================
     8. Marquee Animation (Ecosystem Section)
     ========================================================================== */
  // Clone marquee items for infinite effect
  const track = document.querySelector(".marquee-track");
  if (track) {
    const items = track.innerHTML;
    track.innerHTML = items + items; // Duplicate content

    gsap.to(".marquee-track", {
      xPercent: -50,
      ease: "none",
      duration: 15,
      repeat: -1,
    });
  }

  /* ==========================================================================
     9. 3D Coin Rotation Effect (Scroll linked + Mouse)
     ========================================================================== */
  const coinContainer = document.querySelector(".coin-container");
  const coin3d = document.querySelector(".coin-3d");

  if (coinContainer && coin3d) {
    // Spin on scroll
    gsap.to(coin3d, {
      scrollTrigger: {
        trigger: ".token-content",
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
      rotateY: 720,
      ease: "none",
    });

    // Tilt on mouse move
    coinContainer.addEventListener("mousemove", (e) => {
      const rect = coinContainer.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -20;
      const rotateY = ((x - centerX) / centerX) * 20;

      gsap.to(coinContainer, {
        rotateX: rotateX,
        rotateY: rotateY,
        duration: 0.5,
        ease: "power2.out",
      });
    });

    coinContainer.addEventListener("mouseleave", () => {
      gsap.to(coinContainer, {
        rotateX: 0,
        rotateY: 0,
        duration: 1,
        ease: "elastic.out(1, 0.3)",
      });
    });
  }
});
