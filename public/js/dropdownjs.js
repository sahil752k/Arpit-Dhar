document.addEventListener("DOMContentLoaded", function () {
    const logo = document.getElementById("logo");
    const dropdown = document.getElementById("logoDropdown");

    logo.addEventListener("click", function (event) {
        event.preventDefault();
        dropdown.classList.toggle("active");
    });

    // Close dropdown when clicking outside
    document.addEventListener("click", function (event) {
        if (!logo.contains(event.target) && !dropdown.contains(event.target)) {
            dropdown.classList.remove("active");
        }
    });
});
