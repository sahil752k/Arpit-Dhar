document.addEventListener("DOMContentLoaded", function () {
    const popup = document.getElementById("popup");
    const closeBtn = document.getElementById("close-btn");

    // Show popup after 3 seconds
    setTimeout(() => {
        popup.style.display = "flex";
    }, 3000);

    // Close popup
    closeBtn.addEventListener("click", function () {
        popup.style.display = "none";
    });

    // Close popup when clicking outside
    window.addEventListener("click", function (e) {
        if (e.target === popup) {
            popup.style.display = "none";
        }
    });
});
