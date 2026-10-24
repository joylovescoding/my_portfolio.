// Find the View My Projects button
const projectsButton = document.getElementById("projects-button");

// Listen for a click on the button
projectsButton.addEventListener("click", function () {

    // Find the Projects section
    const projectsSection = document.getElementById("projects");

    // Scroll smoothly to the Projects section
    projectsSection.scrollIntoView({
        behavior: "smooth"
    });

});

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", function () {
    const isOpen = navLinks.classList.toggle("active");

    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );

    menuToggle.textContent = isOpen ? "✕" : "☰";
});

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute(
            "aria-label",
            "Open navigation menu"
        );

        menuToggle.textContent = "☰";
    });
});

<script>
document.addEventListener("DOMContentLoaded", () => {
    const aboutSection = document.querySelector("#about");
    const cards = document.querySelectorAll(
        ".about-cue-card"
    );

    if (!aboutSection || cards.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                cards.forEach((card) => {
                    card.style.animation = "none";
                });

                // Restart the animations
                void aboutSection.offsetWidth;

                cards.forEach((card) => {
                    card.style.animation = "";
                });
            }
        });
    }, {
        threshold: 0.25
    });

    observer.observe(aboutSection);
});
</script>
