/* =====================================================
   SHAYAN ALI MUGHAL
   PREMIUM PORTFOLIO MOTION ENGINE
===================================================== */


/* =====================================================
   LOADER
===================================================== */

const loader = document.getElementById("loader");
const loaderBar = document.getElementById("loaderBar");
const loaderPercent = document.getElementById("loaderPercent");

let progress = 0;

const loaderTimer = setInterval(() => {

    progress += Math.random() * 9 + 3;

    if (progress >= 100) {

        progress = 100;

        clearInterval(loaderTimer);

        setTimeout(() => {
            loader.classList.add("hide");
            document.body.classList.add("loaded");
        }, 450);
    }

    loaderBar.style.width = `${progress}%`;

    loaderPercent.textContent =
        `${Math.floor(progress)
            .toString()
            .padStart(2, "0")}%`;

}, 70);


/* =====================================================
   CURSOR
===================================================== */

const cursor = document.querySelector(".cursor");
const cursorDot = document.querySelector(".cursor-dot");

let mouseX = 0;
let mouseY = 0;

let cursorX = 0;
let cursorY = 0;

window.addEventListener("mousemove", e => {

    mouseX = e.clientX;
    mouseY = e.clientY;

    cursorDot.style.left = `${mouseX}px`;
    cursorDot.style.top = `${mouseY}px`;

});


function animateCursor() {

    cursorX += (mouseX - cursorX) * .15;
    cursorY += (mouseY - cursorY) * .15;

    cursor.style.left = `${cursorX}px`;
    cursor.style.top = `${cursorY}px`;

    requestAnimationFrame(animateCursor);
}

animateCursor();


/* =====================================================
   CURSOR INTERACTION
===================================================== */

document
    .querySelectorAll(
        "a, button, .skill-card, .project-card, .photo-frame"
    )
    .forEach(element => {

        element.addEventListener("mouseenter", () => {
            cursor.classList.add("active");
        });

        element.addEventListener("mouseleave", () => {
            cursor.classList.remove("active");
        });

    });


/* =====================================================
   MOBILE MENU
===================================================== */

const menuButton =
    document.getElementById("menuButton");

const mobileMenu =
    document.getElementById("mobileMenu");

if (menuButton && mobileMenu) {

    menuButton.addEventListener("click", () => {

        mobileMenu.classList.toggle("open");

    });

}


document
    .querySelectorAll(".mobile-menu a")
    .forEach(link => {

        link.addEventListener("click", () => {

            mobileMenu.classList.remove("open");

        });

    });


/* =====================================================
   REVEAL
===================================================== */

const revealElements =
    document.querySelectorAll(".reveal");

const revealObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: .12
        }
    );


revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* =====================================================
   STAGGER
===================================================== */

const staggerGroups = [
    ".skill-card",
    ".project-card",
    ".process-card"
];

staggerGroups.forEach(selector => {

    document
        .querySelectorAll(selector)
        .forEach((card, index) => {

            card.style.transitionDelay =
                `${index * 90}ms`;

        });

});


/* =====================================================
   NAVBAR
===================================================== */

const navbar =
    document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 60) {

        navbar.style.background =
            "rgba(7,7,7,.88)";

        navbar.style.backdropFilter =
            "blur(18px)";

    } else {

        navbar.style.background =
            "transparent";

        navbar.style.backdropFilter =
            "none";

    }

});


/* =====================================================
   HERO PARALLAX
===================================================== */

const heroVisual =
    document.querySelector(".hero-visual");

const heroCopy =
    document.querySelector(".hero-copy");

window.addEventListener("mousemove", e => {

    if (window.innerWidth <= 950) return;

    const x =
        e.clientX / window.innerWidth - .5;

    const y =
        e.clientY / window.innerHeight - .5;

    if (heroVisual) {

        heroVisual.style.transform =
            `translate(${x * 12}px, ${y * 8}px)`;

    }

    if (heroCopy) {

        heroCopy.style.transform =
            `translate(${x * -5}px, ${y * -3}px)`;

    }

});


/* =====================================================
   PROJECT MAGNETIC EFFECT
===================================================== */

document
    .querySelectorAll(".project-card")
    .forEach(card => {

        card.addEventListener("mousemove", e => {

            if (window.innerWidth <= 950) return;

            const rect =
                card.getBoundingClientRect();

            const x =
                e.clientX -
                rect.left -
                rect.width / 2;

            const y =
                e.clientY -
                rect.top -
                rect.height / 2;

            card.style.transform =
                `translate(${x * .012}px, ${y * .012}px)`;

        });

        card.addEventListener("mouseleave", () => {

            card.style.transform = "";

        });

    });


/* =====================================================
   SMOOTH ANCHORS
===================================================== */

document
    .querySelectorAll('a[href^="#"]')
    .forEach(link => {

        link.addEventListener("click", e => {

            const id =
                link.getAttribute("href");

            if (!id || id === "#") return;

            const target =
                document.querySelector(id);

            if (!target) return;

            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

    });


/* =====================================================
   IMAGE ERROR CHECK
===================================================== */

document
    .querySelectorAll("img")
    .forEach(image => {

        image.addEventListener("error", () => {

            console.warn(
                "Image could not be loaded:",
                image.src
            );

        });

    });


/* =====================================================
   REDUCED MOTION
===================================================== */

const reducedMotion =
    window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    );

if (reducedMotion.matches) {

    document
        .querySelectorAll(".reveal")
        .forEach(element => {

            element.style.opacity = "1";
            element.style.transform = "none";

        });

}


/* =====================================================
   CONSOLE
===================================================== */

console.log(`
╔══════════════════════════════════════════╗
║       SHAYAN ALI MUGHAL — PORTFOLIO     ║
║                                          ║
║       SAM.                               ║
║       PYTHON • AI • AUTOMATION • APIs    ║
║                                          ║
║       J.A.R.V.I.S. ONLINE               ║
╚══════════════════════════════════════════╝
`);