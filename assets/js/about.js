document.addEventListener('DOMContentLoaded', function () {
    // Add event listener for each accordion button
    var accordionButtons = document.querySelectorAll('.accordion-button');
    accordionButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            // Toggle the 'collapsed' class on the button to show/hide the accordion content
            button.classList.toggle('collapsed');

            // Get the target collapse element based on the data-bs-target attribute
            var targetId = button.getAttribute('data-bs-target');
            var targetCollapse = document.querySelector(targetId);

            // Toggle the 'show' class on the collapse element to show/hide the content
            targetCollapse.classList.toggle('show');
        });
    });
});


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