// ==========================
// ANIMAÇÃO DA PÁGINA
// ==========================

document.addEventListener("DOMContentLoaded", () => {

    // ==========================
    // EFEITO DE APARECER
    // ==========================

    const elements = document.querySelectorAll(
        ".planet-info, .planet-image, .data-card, .fact, .curiosity-grid article"
    );

    const observer = new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.15
        }
    );

    elements.forEach((element) => {

        element.classList.add("hidden");

        observer.observe(element);

    });


    // ==========================
    // MOVIMENTO DO MOUSE
    // ==========================

    const planet = document.querySelector(".planet-image img");

    if (planet) {

        document.addEventListener("mousemove", (event) => {

            const x =
                (window.innerWidth / 2 - event.clientX) / 40;

            const y =
                (window.innerHeight / 2 - event.clientY) / 40;

            planet.style.transform =
                `translate(${x}px, ${y}px)`;

        });

    }


    // ==========================
    // SCROLL SUAVE
    // ==========================

    document.querySelectorAll('a[href^="#"]').forEach((link) => {

        link.addEventListener("click", (event) => {

            const target = document.querySelector(
                link.getAttribute("href")
            );

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth"
                });

            }

        });

    });


    // ==========================
    // NAVBAR AO ROLAR
    // ==========================

    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }

    });

});






// ==================================================
// TERRA — EFEITO 3D
// ==================================================

const globe = document.getElementById("earthGlobe");
const earth = document.getElementById("earthImage");


// ==================================================
// MOVIMENTO DO MOUSE
// ==================================================

if (globe && earth) {

    globe.addEventListener("mousemove", (event) => {

        const rect = globe.getBoundingClientRect();

        const x =
            event.clientX - rect.left;

        const y =
            event.clientY - rect.top;


        const centerX =
            rect.width / 2;

        const centerY =
            rect.height / 2;


        const rotateY =
            ((x - centerX) / centerX) * 15;

        const rotateX =
            ((centerY - y) / centerY) * 15;


        earth.style.transition =
            "transform .15s ease-out";


        earth.style.transform =
            `scale(1.04)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)`;

    });


    // ==================================================
    // MOUSE SAINDO
    // ==================================================

    globe.addEventListener("mouseleave", () => {

        earth.style.transition =
            "transform .8s ease";

        earth.style.transform =
            "scale(1)
             rotateX(0deg)
             rotateY(0deg)";

    });

}


// ==================================================
// MOVIMENTO COM O CELULAR
// ==================================================

if (window.DeviceOrientationEvent) {

    window.addEventListener(
        "deviceorientation",
        (event) => {

            if (!earth) return;


            const gamma =
                event.gamma || 0;

            const beta =
                event.beta || 0;


            const rotateY =
                Math.max(
                    -12,
                    Math.min(12, gamma)
                );


            const rotateX =
                Math.max(
                    -12,
                    Math.min(12, beta - 45)
                );


            earth.style.transform =
                `scale(1.03)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)`;

        }
    );

}