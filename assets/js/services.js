let menu = document.querySelector(".bi-list");
let nav2 = document.querySelector(".nav2");
let isMenuOpen = false;

menu.addEventListener("click", () => {
    if (!isMenuOpen) {
        nav2.style.left = "0";
        menu.classList.remove("bi-list");
        menu.classList.add("bi-x");
    } else {
        nav2.style.left = "-300px";
        menu.classList.remove("bi-x");
        menu.classList.add("bi-list");
    }
    isMenuOpen = !isMenuOpen;
});

window.addEventListener("resize", () => {
    if (window.innerWidth > 767) {
        nav2.style.left = "-300px";
        isMenuOpen = false;
        menu.classList.remove("bi-x");
        menu.classList.add("bi-list");
    }
});