// ===== HEADER MENU TOGGLE =====
const bar = document.getElementById("bar");
const menus = document.getElementById("menus");

bar.addEventListener("click", () => {
    menus.classList.toggle("active");
});

// ===== BACK TO TOP =====
const backToTopBtn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        backToTopBtn.classList.add("show");
    } else {
        backToTopBtn.classList.remove("show");
    }
});

backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// ===== AUTO YEAR =====
document.getElementById("year").textContent = new Date().getFullYear();

// ===== EMAILJS FORM =====
// Replace YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, YOUR_PUBLIC_KEY
const form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const btn = form.querySelector(".send");
    const envelope = document.createElement("i");
    envelope.className = "fa fa-envelope fly-envelope";
    btn.appendChild(envelope);

    emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", this, "YOUR_PUBLIC_KEY")
        .then(() => {
            alert("Message sent successfully ✔");
            form.reset();
            envelope.remove();
        })
        .catch(() => {
            alert("Failed to send message ❌");
            envelope.remove();
        });
});
