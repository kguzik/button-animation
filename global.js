document.addEventListener("DOMContentLoaded", function () {

    let menuToggle = document.getElementById("btn-nav");
    let nav = document.getElementById("main-navigation");
    menuToggle.addEventListener("click", function () {
        if (window.getComputedStyle(nav, null).display == 'none') {
            nav.style.display = "block";

        } else {
            nav.style.display = "none";

        }
        this.classList.toggle("animation-btn");
    });

    this.addEventListener("keyup", function (event) {
        if (event.keyCode === 27) {
            nav.style.display = "none";
            menuToggle.classList.toggle("animation-btn");
        }
    });

});