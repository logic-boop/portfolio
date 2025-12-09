// // Dynamic Year
// document.getElementById("year").textContent = new Date().getFullYear();


// // Hamburger Toggle (DOES NOT CHANGE YOUR STYLE)
// const bar = document.getElementById("bar");
// const menus = document.getElementById("menus");

// bar.onclick = () => {
//     menus.style.display = menus.style.display === "flex" ? "none" : "flex";
//     menus.style.flexDirection = "column";
//     menus.style.background = "rgb(5,5,75)";
//     menus.style.padding = "20px";
// };


// // Transparent Header on Scroll
// const header = document.getElementById("header");

// window.addEventListener("scroll", () => {
//     if (window.scrollY > 50) {
//         header.style.background = "rgba(5,5,75,0.4)";
//         header.style.backdropFilter = "blur(5px)";
//     } else {
//         header.style.background = "rgb(5,5,75)";
//     }
// });


// // Save Email Automatically
// const sendBtn = document.getElementById("sendBtn");
// sendBtn.addEventListener("click", function (e) {
//     e.preventDefault();

//     const email = document.getElementById("emailInput").value;

//     if (email.trim() === "") {
//         alert("Please enter an email.");
//         return;
//     }

//     let storedEmails = JSON.parse(localStorage.getItem("savedEmails")) || [];
//     storedEmails.push(email);

//     localStorage.setItem("savedEmails", JSON.stringify(storedEmails));

//     alert("Email saved successfully!");
// });


// HEADER GRADIENT ON SCROLL
const header = document.getElementById("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

// HAMBURGER MENU TOGGLE
const bar = document.getElementById("bar");
const menus = document.getElementById("menus");

bar.onclick = () => {
    menus.style.display = menus.style.display === "flex" ? "none" : "flex";
    menus.style.flexDirection = "column";
    menus.style.background = "rgb(5,5,75)";
    menus.style.padding = "20px";
};

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

