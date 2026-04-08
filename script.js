const text = "Front-End Developer | Building Modern Websites 🚀";
let i = 0;

function typeEffect() {
    if (i < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeEffect, 40);
    }
}

// Select all sections
const sections = document.querySelectorAll("section");

// Scroll animation
window.addEventListener("scroll", () => {
    sections.forEach(sec => {
        const offset = sec.offsetTop - 200;

        if (window.scrollY > offset) {
            sec.classList.add("show");
        }
    });
});

// ✅ IMPORTANT FIX
window.onload = function () {
    typeEffect();

    // Show all sections initially (so nothing is hidden)
    sections.forEach(sec => {
        sec.classList.add("show");
    });
};
