document.addEventListener("DOMContentLoaded", function () {

    let menuToggle = document.getElementById("btn-nav");
    let nav = document.getElementById("main-navigation");
    menuToggle.addEventListener("click", function () {
        if (window.getComputedStyle(nav, null).display == 'none') {
            nav.style.display = "block";

        } else {
            nav.style.display = "none";

        }
        menuToggle.classList.toggle("animation-btn");
    });
});