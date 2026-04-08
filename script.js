const text = "Front-End Developer | Building Modern Websites 🚀";
let i = 0;

function typeEffect() {
    if (i < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeEffect, 40);
    }
}

// SELECT sections
const sections = document.querySelectorAll("section");

// SCROLL animation
window.addEventListener("scroll", () => {
    sections.forEach(sec => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 200;

        if (top > offset) {
            sec.classList.add("show");
        }
    });
});

// ✅ FIX: combine everything in ONE onload
window.onload = () => {
    typeEffect(); // typing effect

    // show all sections initially
    sections.forEach(sec => sec.classList.add("show"));
};
