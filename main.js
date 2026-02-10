/**
 * OLUBODE AFOLABI JAMES - PREMIUM NEURAL INTERFACE SCRIPT
 * Adjusted for $350/hr Technical Growth Architect Role
 */

document.addEventListener("DOMContentLoaded", () => {
  // --- 1. CORE NAVIGATION & UI ELEMENTS ---
  const bar = document.getElementById("bar");
  const menus = document.getElementById("menus");
  const menuLinks = menus.querySelectorAll("a");
  const header = document.getElementById("header");
  const backToTop = document.getElementById("backToTop");
  const yearSpan = document.getElementById("year");

  // Toggle dropdown menu
  bar.addEventListener("click", () => {
    menus.classList.toggle("show");
    bar.classList.toggle("active");
    if (menus.classList.contains("show")) {
      menuLinks.forEach((link, index) => {
        link.style.animationDelay = `${index * 0.1}s`;
      });
    }
  });

  // Smooth scroll and auto-close menu
  menuLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
      if (menus.classList.contains("show")) {
        menus.classList.remove("show");
        bar.classList.remove("active");
      }
    });
  });

  // Global Scroll Handler
  window.addEventListener("scroll", () => {
    // Header Transparency
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }

    // Back to Top Visibility
    if (backToTop) {
      backToTop.style.display = window.scrollY > 500 ? "block" : "none";
    }
  });

  if (backToTop) {
    backToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  if (yearSpan) yearSpan.textContent = new Date().getFullYear();

  // --- 2. THE HIRED FORM (PURE CODE - NO REFRESH) ---
  const contactForm = document.getElementById("contactForm");
  const status = document.getElementById("formStatus");

  if (contactForm) {
    contactForm.addEventListener("submit", async function (e) {
      // CRITICAL FIX: Stops page refresh
      e.preventDefault();

      const btnText = this.querySelector(".btn-text");
      const loader = document.getElementById("btnLoader");

      // UI: Initiate Neural Uplink
      if (loader) loader.style.display = "inline-block";
      btnText.textContent = "Sending...";
      status.className = "";
      status.style.opacity = "1";
      status.textContent = "Initiating Request to Olubode...";

      const formData = new FormData(this);

      try {
        const response = await fetch("https://formspree.io/f/xreepjlv", {
          method: "POST",
          body: formData,
          headers: { Accept: "application/json" },
        });

        if (response.ok) {
          status.textContent = "MESSAGE SECURED. SYSTEM CLEAR. ✔";
          status.className = "success";
          contactForm.reset();
          contactForm.style.borderColor = "#00f2ff"; // Growth Architect Cyan
        } else {
          throw new Error("Uplink Rejected");
        }
      } catch (err) {
        status.textContent = "SENDING FAILED. RETRYING...";
        status.className = "error";
        console.error("Neuralis Error:", err);
      } finally {
        setTimeout(() => {
          if (loader) loader.style.display = "none";
          btnText.textContent = "Initiate Request";
          setTimeout(() => {
            contactForm.style.borderColor = "rgba(0, 242, 255, 0.2)";
          }, 5000);
        }, 3000);
      }
    });
  }

  // --- 3. PREMIUM AUTO-TYPING ---
  const nameElement = document.querySelector(".name h1");
  const jobElement = document.querySelector(".name p");

  if (nameElement && jobElement) {
    const originalName = "Olubode Afolabi James";
    nameElement.innerHTML = "";
    jobElement.innerHTML = "";

    new Typed(nameElement, {
      strings: [originalName],
      typeSpeed: 60,
      showCursor: false,
      onComplete: () => {
        new Typed(jobElement, {
          strings: [
            "Technical Growth Architect",
            "Full-Stack AI Developer",
            "Creative Technologist",
          ],
          typeSpeed: 40,
          backSpeed: 30,
          loop: true,
        });
      },
    });
  }

  // --- 4. 3D CONSTELLATION (THREE.JS) ---
  const heroSection = document.getElementById("home");
  if (heroSection) {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / heroSection.offsetHeight,
      0.1,
      1000,
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

    renderer.setSize(window.innerWidth, heroSection.offsetHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    const container = document.createElement("div");
    container.id = "canvas-container";
    heroSection.appendChild(container);
    container.appendChild(renderer.domElement);

    const particlesGeometry = new THREE.BufferGeometry();
    const posArray = new Float32Array(1500 * 3);
    for (let i = 0; i < 1500 * 3; i++) posArray[i] = (Math.random() - 0.5) * 10;
    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(posArray, 3),
    );

    const particlesMesh = new THREE.Points(
      particlesGeometry,
      new THREE.PointsMaterial({
        size: 0.005,
        color: "#0066ff",
        transparent: true,
        opacity: 0.8,
      }),
    );
    scene.add(particlesMesh);
    camera.position.z = 3;

    let mouseX = 0,
      mouseY = 0;
    document.addEventListener("mousemove", (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    function animate() {
      requestAnimationFrame(animate);
      particlesMesh.rotation.y += 0.001;
      if (mouseX > 0) {
        particlesMesh.rotation.x = mouseY * 0.00008;
        particlesMesh.rotation.y = mouseX * 0.00008;
      }
      renderer.render(scene, camera);
    }
    animate();

    window.addEventListener("resize", () => {
      camera.aspect = window.innerWidth / heroSection.offsetHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, heroSection.offsetHeight);
    });
  }

  // --- 5. NEURAL SKILLS (3D TILT & CUSTOM LOGIC) ---
  const skillCards = document.querySelectorAll(".skill");
  skillCards.forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const rotateX = (y - rect.height / 2) / 10;
      const rotateY = (rect.width / 2 - x) / 10;
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px) scale(1.05)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0) scale(1)`;
    });
  });

  // Tech Stack Injection for "DEVELOPMENT" card
  const devTitle = Array.from(document.querySelectorAll(".skill h2")).find(
    (h2) => h2.innerText.includes("DEVELOPMENT"),
  );
  if (devTitle) {
    devTitle.nextElementSibling.innerHTML = `
      <span style="color: #00f2ff; font-weight: bold;">STACK:</span> 
      React.js, Node.js, Three.js, & Growth Logic. 
      <br><br>Architecting immersive neural interfaces and $0-to-profit digital ecosystems.
    `;
  }
});

// Tilt logic for the Premium Card
const premiumCard = document.querySelector(".premium-card");
if (premiumCard) {
  premiumCard.addEventListener("mousemove", (e) => {
    const rect = premiumCard.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateX = (y - rect.height / 2) / 15;
    const rotateY = (rect.width / 2 - x) / 15;
    premiumCard.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  premiumCard.addEventListener("mouseleave", () => {
    premiumCard.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
  });
}
