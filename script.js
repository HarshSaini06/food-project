// PRELOADER

window.addEventListener("load", () => {
    const preloader = document.getElementById("preloader");

    preloader.style.opacity = "0";

    setTimeout(() => {
        preloader.style.display = "none";
    }, 500);
});

// AOS ANIMATION

AOS.init({
    duration: 1000,
    once: true
});

// STICKY NAVBAR

const navbar = document.querySelector(".custom-navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});

// SCROLL PROGRESS BAR

window.addEventListener("scroll", () => {

    const scrollTop = document.documentElement.scrollTop;

    const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress = (scrollTop / scrollHeight) * 100;

    document.getElementById("progressBar").style.width =
        progress + "%";

});

// DARK MODE

const themeToggle = document.getElementById("themeToggle");

// Load saved theme
if (localStorage.getItem("theme") === "dark") {

    document.body.classList.add("dark-theme");

    themeToggle.innerHTML =
        '<i class="bi bi-sun-fill"></i>';

}

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark-theme");

    if (document.body.classList.contains("dark-theme")) {

        localStorage.setItem("theme", "dark");

        themeToggle.innerHTML =
            '<i class="bi bi-sun-fill"></i>';

    } else {

        localStorage.setItem("theme", "light");

        themeToggle.innerHTML =
            '<i class="bi bi-moon-fill"></i>';

    }

});

// SMOOTH SCROLL

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

// ACTIVE NAVBAR LINK

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

// SCROLL TO TOP BUTTON

// Create button

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

// Button Style

topBtn.style.position = "fixed";
topBtn.style.bottom = "25px";
topBtn.style.right = "25px";
topBtn.style.width = "50px";
topBtn.style.height = "50px";
topBtn.style.border = "none";
topBtn.style.borderRadius = "50%";
topBtn.style.background = "#ff6b35";
topBtn.style.color = "#fff";
topBtn.style.fontSize = "22px";
topBtn.style.cursor = "pointer";
topBtn.style.display = "none";
topBtn.style.zIndex = "9999";
topBtn.style.boxShadow = "0 8px 20px rgba(0,0,0,.25)";
topBtn.style.transition = ".3s";

// Show button

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

// Scroll to top

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

// BUTTON HOVER EFFECT

topBtn.addEventListener("mouseenter", () => {

    topBtn.style.transform = "scale(1.1)";

});

topBtn.addEventListener("mouseleave", () => {

    topBtn.style.transform = "scale(1)";

});

// CONSOLE MESSAGE

console.log("%c🍔 Welcome to FoodieHub",
"color:white;background:#ff6b35;padding:10px;font-size:18px;border-radius:5px;");

console.log("%cDeveloped with ❤️ using HTML CSS Bootstrap JavaScript",
"color:#ff6b35;font-size:14px;");