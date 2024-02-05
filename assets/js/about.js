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
