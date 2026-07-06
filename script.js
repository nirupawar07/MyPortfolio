/* ==========================
   Day 7 - Typing Animation
========================== */

const words = [
    "Data Scientist",
    "AI Engineer",
    "Machine Learning Enthusiast",
    "Web Developer"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typingElement = document.querySelector(".typing");

function typeEffect() {

    if (!typingElement) return;

    const currentWord = words[wordIndex];

    if (isDeleting) {
        typingElement.textContent = currentWord.substring(0, charIndex--);
    } else {
        typingElement.textContent = currentWord.substring(0, charIndex++);
    }

    let speed = isDeleting ? 60 : 120;

    if (!isDeleting && charIndex === currentWord.length + 1) {
        speed = 1500;
        isDeleting = true;
    }

    if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();


/* ==========================
   Day 8 - Hamburger Menu
========================== */

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", () => {

        navLinks.classList.toggle("active");

    });

}


/* ==========================
   Day 8 - Active Navbar
========================== */

const sections = document.querySelectorAll("section");
const navLink = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLink.forEach((link) => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});
const revealElements = document.querySelectorAll(
".about-card,.skills-card,.stat-card"
);

function revealOnScroll(){

    revealElements.forEach((element)=>{

        const windowHeight=window.innerHeight;

        const revealTop=element.getBoundingClientRect().top;

        if(revealTop<windowHeight-100){

            element.classList.add("show");

        }

    });

}

window.addEventListener("scroll",revealOnScroll);

revealOnScroll();
//=========================
// Dark / Light Mode
//=========================

const themeToggle = document.querySelector(".theme-toggle");

const themeIcon = document.getElementById("theme-icon");

// Load saved theme

if(localStorage.getItem("theme") === "light"){

    document.body.classList.add("light-mode");

    themeIcon.classList.replace("fa-moon","fa-sun");

}

themeToggle.addEventListener("click",()=>{

    document.body.classList.toggle("light-mode");

    if(document.body.classList.contains("light-mode")){

        themeIcon.classList.replace("fa-moon","fa-sun");

        localStorage.setItem("theme","light");

    }

    else{

        themeIcon.classList.replace("fa-sun","fa-moon");

        localStorage.setItem("theme","dark");

    }

});