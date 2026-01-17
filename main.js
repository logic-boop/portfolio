const bar = document.getElementById("bar");
const menus = document.getElementById("menus");
const menuLinks = menus.querySelectorAll("a");
const header = document.getElementById("header");

// Toggle dropdown menu and animate hamburger
bar.addEventListener("click", () => {
  menus.classList.toggle("show");
  bar.classList.toggle("active");

  // Trigger fade-in animation for menu links
  if (menus.classList.contains("show")) {
    menuLinks.forEach((link, index) => {
      link.style.animationDelay = `${index * 0.1}s`;
    });
  }
});

// Smooth scroll for menu links
menuLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);

    targetSection.scrollIntoView({
      behavior: "smooth",
    });

    // Close menu on mobile after click
    if (menus.classList.contains("show")) {
      menus.classList.remove("show");
      bar.classList.remove("active");
    }
  });
});

// Header transparency and shrink on scroll
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  // 1. Initialize EmailJS
  emailjs.init("rN0wluqj_kQGuEOWA");

  const header = document.getElementById("header");
  const backToTop = document.getElementById("backToTop");
  const contactForm = document.getElementById("contactForm");

  // FIX 1: Corrected ID to 'btnLoader' to match your HTML
  const loader = document.getElementById("btnLoader");
  const status = document.getElementById("formStatus");

  // 2. Scroll Animations
  window.addEventListener("scroll", () => {
    // Header Blur
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }

    // Back to Top Button
    if (window.scrollY > 500) {
      backToTop.style.display = "block";
    } else {
      backToTop.style.display = "none";
    }
  });

  // 3. Smooth Scroll to Top
  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // 4. Contact Form Submission (FIXED SECTION with Auto-Reply)
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Show loader and change text
    if (loader) loader.style.display = "inline-block";
    document.querySelector(".btn-text").textContent = "Sending...";

    // Ensure status is visible (opacity 1)
    status.style.opacity = "1";
    status.textContent = "Sending...";

    // FIRST: Send the email to YOU
    emailjs.sendForm("service_4j7jmt7", "template_wq02ihd", this).then(
      () => {
        // Success: apply your success styles
        status.textContent = "Message Sent Successfully! ✔";
        status.className = "success";

        // SECOND: Trigger the Auto-Reply to the CLIENT
        // Replace 'YOUR_AUTO_REPLY_TEMPLATE_ID' with the ID of your new template
        emailjs.sendForm("service_4j7jmt7", "template_wi7z1rj", this);

        contactForm.reset();
        resetBtn();
      },
      (err) => {
        // Error: apply your error styles
        console.error("EmailJS Error:", err);
        status.textContent = "Error sending message. Try again.";
        status.className = "error";
        resetBtn();
      },
    );
  });

  function resetBtn() {
    if (loader) loader.style.display = "none";
    document.querySelector(".btn-text").textContent = "Send Message";
  }

  // 5. Dynamic Footer Year
  document.getElementById("year").textContent = new Date().getFullYear();
});

// ==========================================
// PREMIUM 3D & TYPING ENHANCEMENTS
// ==========================================

document.addEventListener("DOMContentLoaded", () => {
  // 1. AUTO-TYPING EFFECT
  // We target your existing <h1> and <p> in the hero section
  const nameElement = document.querySelector(".name h1");
  const jobElement = document.querySelector(".name p");

  // Clear original text for typing to start
  const originalName = "Olubode Afolabi James";
  const originalJob = "Full-Stack Web Developer";
  nameElement.innerHTML = "";
  jobElement.innerHTML = "";

  new Typed(nameElement, {
    strings: [originalName],
    typeSpeed: 60,
    showCursor: true,
    cursorChar: "|",
    onComplete: () => {
      new Typed(jobElement, {
        strings: [originalJob, "Software Engineer", "Creative Technologist"],
        typeSpeed: 40,
        backSpeed: 30,
        loop: true,
      });
    },
  });

  // 2. 3D CONSTELLATION BACKGROUND
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000,
  );
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

  const heroSection = document.getElementById("home");
  renderer.setSize(window.innerWidth, heroSection.offsetHeight);
  renderer.setPixelRatio(window.devicePixelRatio);

  // Create a container for the 3D canvas
  const container = document.createElement("div");
  container.id = "canvas-container";
  heroSection.appendChild(container);
  container.appendChild(renderer.domElement);

  // Create Particles (Stars/Dots)
  const particlesGeometry = new THREE.BufferGeometry();
  const particlesCount = 1500;
  const posArray = new Float32Array(particlesCount * 3);

  for (let i = 0; i < particlesCount * 3; i++) {
    posArray[i] = (Math.random() - 0.5) * 10;
  }
  particlesGeometry.setAttribute(
    "position",
    new THREE.BufferAttribute(posArray, 3),
  );

  const material = new THREE.PointsMaterial({
    size: 0.005,
    color: "#0066ff",
    transparent: true,
    opacity: 0.8,
  });

  const particlesMesh = new THREE.Points(particlesGeometry, material);
  scene.add(particlesMesh);
  camera.position.z = 3;

  // Mouse Tracking Logic
  let mouseX = 0;
  let mouseY = 0;
  document.addEventListener("mousemove", (event) => {
    mouseX = event.clientX;
    mouseY = event.clientY;
  });

  function animate() {
    requestAnimationFrame(animate);

    // Smooth rotation
    particlesMesh.rotation.y += 0.001;

    // React to mouse movement
    if (mouseX > 0) {
      particlesMesh.rotation.x = mouseY * 0.00008;
      particlesMesh.rotation.y = mouseX * 0.00008;
    }

    renderer.render(scene, camera);
  }
  animate();

  // Handle Resize
  window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / heroSection.offsetHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, heroSection.offsetHeight);
  });
});

// For the skills section
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".skill");

  // 1. Reveal on scroll
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("reveal");
          }, index * 150); // Staggered entrance
        }
      });
    },
    { threshold: 0.1 },
  );

  cards.forEach((card) => {
    observer.observe(card);

    // 2. Premium Tilt Effect
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = (y - centerY) / 12;
      const rotateY = (centerX - x) / 12;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)`;
    });
  });
});
