const text = "Front-End Developer | Building Modern Websites 🚀";
let i = 0;

function typeEffect() {
    if (i < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeEffect, 40);
    }
}

window.onload = typeEffect;
