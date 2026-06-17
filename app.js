// Aktive Navigation beim Scrollen

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

let current = "";

sections.forEach(section => {

const sectionTop = section.offsetTop - 150;
const sectionHeight = section.clientHeight;

if (window.scrollY >= sectionTop) {

current = section.className;

}

});

navLinks.forEach(link => {

link.classList.remove("active");

const href = link.getAttribute("href");

if (href === "#" + current) {

link.classList.add("active");

}

});

});


// Navigation leicht durchsichtig machen

const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {

if (window.scrollY > 50) {

nav.style.background = "#1d2b18";

} else {

nav.style.background = "#24351d";

}

});


// Karten beim Scrollen einblenden

const cards = document.querySelectorAll(".card");

function revealCards() {

cards.forEach(card => {

const top = card.getBoundingClientRect().top;

if (top < window.innerHeight - 100) {

card.style.opacity = "1";

card.style.transform = "translateY(0)";

}

});

}

cards.forEach(card => {

card.style.opacity = "0";

card.style.transform = "translateY(60px)";

card.style.transition = ".8s ease";

});

window.addEventListener("scroll", revealCards);

revealCards();