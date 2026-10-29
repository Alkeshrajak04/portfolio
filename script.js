
/* ==========================================
   ALKESH RAJAK — PREMIUM NAVBAR JAVASCRIPT
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    const menuIcon = document.getElementById("menuIcon");
    const navLinks = document.getElementById("navLinks");
    const navItems = document.querySelectorAll("#navLinks a");

    // Check if navbar elements exist
    if (!menuIcon || !navLinks) {
        console.warn("Navbar elements not found!");
        return;
    }

    // OPEN / CLOSE MENU
    menuIcon.addEventListener("click", (event) => {
        event.stopPropagation();

        const isOpen = navLinks.classList.toggle("show");

        menuIcon.classList.toggle("active", isOpen);

        menuIcon.setAttribute("aria-expanded", isOpen);

        menuIcon.setAttribute(
            "aria-label",
            isOpen ? "Close navigation menu" : "Open navigation menu"
        );
    });

    // CLOSE MENU AFTER CLICKING A NAVIGATION LINK
    navItems.forEach((link) => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("show");
            menuIcon.classList.remove("active");

            menuIcon.setAttribute("aria-expanded", "false");
            menuIcon.setAttribute("aria-label", "Open navigation menu");

        });

    });

    // CLOSE MENU WHEN CLICKING OUTSIDE
    document.addEventListener("click", (event) => {

        if (
            !navLinks.contains(event.target) &&
            !menuIcon.contains(event.target)
        ) {

            navLinks.classList.remove("show");
            menuIcon.classList.remove("active");

            menuIcon.setAttribute("aria-expanded", "false");
            menuIcon.setAttribute("aria-label", "Open navigation menu");

        }

    });

    // CLOSE MENU WITH ESCAPE KEY
    document.addEventListener("keydown", (event) => {

        if (event.key === "Escape") {

            navLinks.classList.remove("show");
            menuIcon.classList.remove("active");

            menuIcon.setAttribute("aria-expanded", "false");
            menuIcon.setAttribute("aria-label", "Open navigation menu");

        }

    });

    // CLOSE MOBILE MENU WHEN WINDOW RESIZES TO DESKTOP
    window.addEventListener("resize", () => {

        if (window.innerWidth > 760) {

            navLinks.classList.remove("show");
            menuIcon.classList.remove("active");

            menuIcon.setAttribute("aria-expanded", "false");

        }

    });

});
