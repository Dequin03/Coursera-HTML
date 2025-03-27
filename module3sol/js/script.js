document.addEventListener("DOMContentLoaded", function () {
    let navLinks = document.querySelectorAll(".navbar-nav .nav-link");
    let navbarCollapse = document.querySelector(".navbar-collapse");

    navLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            // Ensure the navbar collapses
            if (navbarCollapse.classList.contains("show")) {
                new bootstrap.Collapse(navbarCollapse).hide();
            }

            // Allow navigation to the section
            let targetId = this.getAttribute("href");
            if (targetId.startsWith("#")) {
                let targetSection = document.querySelector(targetId);
                if (targetSection) {
                    setTimeout(() => {
                        targetSection.scrollIntoView({ behavior: "smooth" });
                    }, 200); // Small delay to allow navbar to collapse before scrolling
                }
            }
        });
    });
});