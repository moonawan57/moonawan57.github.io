// ==========================================
// OMAMA AWAN PORTFOLIO - SCRIPT.JS
// ==========================================

document.addEventListener("DOMContentLoaded", function () {

    // ------------------------------------------
    // MOBILE NAVIGATION
    // ------------------------------------------

    const menuButton = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (menuButton && navLinks) {
        menuButton.addEventListener("click", function () {
            navLinks.classList.toggle("active");
            menuButton.classList.toggle("active");
        });

        // Close mobile menu after clicking a link
        const links = navLinks.querySelectorAll("a");

        links.forEach(function (link) {
            link.addEventListener("click", function () {
                navLinks.classList.remove("active");
                menuButton.classList.remove("active");
            });
        });
    }


    // ------------------------------------------
    // SCROLL REVEAL ANIMATION
    // ------------------------------------------

    const revealElements = document.querySelectorAll(".reveal");

    if ("IntersectionObserver" in window) {

        const revealObserver = new IntersectionObserver(
            function (entries, observer) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {
                        entry.target.classList.add("show");
                        observer.unobserve(entry.target);
                    }

                });

            },
            {
                threshold: 0.12
            }
        );

        revealElements.forEach(function (element) {
            revealObserver.observe(element);
        });

    } else {

        // Fallback for older browsers
        revealElements.forEach(function (element) {
            element.classList.add("show");
        });

    }


    // ------------------------------------------
    // ACTIVE NAVIGATION LINK
    // ------------------------------------------

    const currentPage = window.location.pathname.split("/").pop() || "index.html";
    const navigationLinks = document.querySelectorAll(".nav-links a");

    navigationLinks.forEach(function (link) {

        const linkPage = link.getAttribute("href");

        if (linkPage === currentPage) {
            link.classList.add("active");
        }

    });


    // ------------------------------------------
    // BACK TO TOP BUTTON
    // ------------------------------------------

    const topButton = document.querySelector(".back-to-top");

    if (topButton) {

        window.addEventListener("scroll", function () {

            if (window.scrollY > 400) {
                topButton.classList.add("visible");
            } else {
                topButton.classList.remove("visible");
            }

        });

        topButton.addEventListener("click", function () {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

    }


    // ------------------------------------------
    // SMOOTH SCROLL FOR SAME-PAGE LINKS
    // ------------------------------------------

    const smoothLinks = document.querySelectorAll('a[href^="#"]');

    smoothLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId = link.getAttribute("href");

            if (targetId === "#") {
                return;
            }

            const target = document.querySelector(targetId);

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });


    // ------------------------------------------
    // PROJECT CARD HOVER EFFECT
    // ------------------------------------------

    const projectCards = document.querySelectorAll(".project-card");

    projectCards.forEach(function (card) {

        card.addEventListener("mouseenter", function () {
            card.classList.add("hovered");
        });

        card.addEventListener("mouseleave", function () {
            card.classList.remove("hovered");
        });

    });


    // ------------------------------------------
    // CURRENT YEAR
    // ------------------------------------------

    const yearElements = document.querySelectorAll(".current-year");

    yearElements.forEach(function (element) {
        element.textContent = new Date().getFullYear();
    });


    // ------------------------------------------
    // CONTACT EMAIL
    // ------------------------------------------

    const email = "anasbilalawan967@gmail.com";

    const emailElements = document.querySelectorAll("[data-email]");

    emailElements.forEach(function (element) {

        element.textContent = email;

        if (element.tagName.toLowerCase() === "a") {
            element.href = "mailto:" + email;
        }

    });


    // ------------------------------------------
    // GITHUB PROFILE
    // ------------------------------------------

    const githubURL = "https://github.com/moonawan57";

    const githubElements = document.querySelectorAll("[data-github]");

    githubElements.forEach(function (element) {
        element.href = githubURL;
        element.target = "_blank";
        element.rel = "noopener noreferrer";
    });


    // ------------------------------------------
    // PAGE LOADING ANIMATION
    // ------------------------------------------

    document.body.classList.add("page-loaded");


    // ------------------------------------------
    // CONSOLE MESSAGE
    // ------------------------------------------

    console.log(
        "Omama Awan Portfolio | AI & Machine Learning"
    );

});
