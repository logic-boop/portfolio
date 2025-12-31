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
        emailjs.sendForm(
          "service_4j7jmt7",
          "template_wi7z1rj",
          this
        );

        contactForm.reset();
        resetBtn();
      },
      (err) => {
        // Error: apply your error styles
        console.error("EmailJS Error:", err);
        status.textContent = "Error sending message. Try again.";
        status.className = "error";
        resetBtn();
      }
    );
  });

  function resetBtn() {
    if (loader) loader.style.display = "none";
    document.querySelector(".btn-text").textContent = "Send Message";
  }

  // 5. Dynamic Footer Year
  document.getElementById("year").textContent = new Date().getFullYear();
});
