const bar = document.getElementById('bar');
const menus = document.getElementById('menus');
const menuLinks = menus.querySelectorAll('a');
const header = document.getElementById('header');

// Toggle dropdown menu and animate hamburger
bar.addEventListener('click', () => {
    menus.classList.toggle('show');
    bar.classList.toggle('active');

    // Trigger fade-in animation for menu links
    if (menus.classList.contains('show')) {
        menuLinks.forEach((link, index) => {
            link.style.animationDelay = `${index * 0.1}s`;
        });
    }
});

// Smooth scroll for menu links
menuLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        targetSection.scrollIntoView({
            behavior: 'smooth'
        });

        // Close menu on mobile after click
        if (menus.classList.contains('show')) {
            menus.classList.remove('show');
            bar.classList.remove('active');
        }
    });
});

// Header transparency and shrink on scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});




// SAVE EMAIL
const sendBtn = document.getElementById("sendBtn");
sendBtn.addEventListener("click", function (e) {
    e.preventDefault();

    const email = document.getElementById("emailInput").value;

    if (email.trim() === "") {
        alert("Please enter an email.");
        return;
    }

    let storedEmails = JSON.parse(localStorage.getItem("savedEmails")) || [];
    storedEmails.push(email);

    localStorage.setItem("savedEmails", JSON.stringify(storedEmails));

    alert("Email saved successfully!");
});

// DYNAMIC YEAR
document.getElementById("year").textContent = new Date().getFullYear();


//For contact form
(function () {
    emailjs.init("rN0wluqj_kQGuEOWA"); //Public Key
})();

const form = document.getElementById("contactForm");
const status = document.getElementById("formStatus");
const btnLoader = document.getElementById("btnLoader");
const btnText = document.querySelector(".btn-text");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Show loader
    btnLoader.style.display = "inline-block";
    btnText.style.opacity = "0.6";

    emailjs.sendForm(
        "service_4j7jmt7",   //Service ID
        "template_wq02ihd",  //Template ID
        this
    )
        .then(() => {
            status.textContent = "Message sent successfully ✔";
            status.classList.remove("error");
            status.classList.add("success");
            form.reset();

            // Animate feedback
            status.style.opacity = 0;
            setTimeout(() => status.style.opacity = 1, 50);

            // Hide loader
            btnLoader.style.display = "none";
            btnText.style.opacity = "1";
        })
        .catch(() => {
            status.textContent = "Failed to send message ❌";
            status.classList.remove("success");
            status.classList.add("error");

            // Animate shake
            status.style.transform = "translateX(-5px)";
            setTimeout(() => status.style.transform = "translateX(5px)", 50);
            setTimeout(() => status.style.transform = "translateX(0px)", 100);

            // Hide loader
            btnLoader.style.display = "none";
            btnText.style.opacity = "1";
        });
});


//For footer
const yearSpan = document.getElementById("year");
const currentYear = new Date().getFullYear();
yearSpan.textContent = currentYear;

// ===== BACK TO TOP BUTTON =====
const backToTopBtn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
    if (window.scrollY > 200) { // show button after scrolling down 200px
        backToTopBtn.classList.add("show");
    } else {
        backToTopBtn.classList.remove("show");
    }
});

backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});



