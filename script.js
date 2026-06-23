const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

function scrollToAbout() {
    document.getElementById("about").scrollIntoView({
        behavior: "smooth"
    });
}