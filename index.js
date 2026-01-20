const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
const logo = document.querySelector(".logo");

toggle.addEventListener("click", () => {
    toggle.classList.toggle("active");
    nav.classList.toggle("active");
    logo.classList.toggle("hide");
});