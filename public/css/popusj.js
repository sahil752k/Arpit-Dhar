document.addEventListener("DOMContentLoaded", function () {
    const popup = document.getElementById("popup");
    const closeBtn = document.getElementById("close-btn");

    // ✅ Ensure Popup is Hidden on Page Load
    popup.style.display = "none";

    // ✅ Show Popup After 7 Seconds
    setTimeout(() => {
        popup.style.display = "flex"; // Popup appears after 7 seconds
    }, 7000);

    // ✅ Close Popup When Clicking "X" Button
    closeBtn.addEventListener("click", function () {
        popup.style.display = "none";
    });

    // ✅ Close Popup When Clicking Outside of It
    window.addEventListener("click", function (e) {
        if (e.target === popup) {
            popup.style.display = "none";
        }
    });
});
