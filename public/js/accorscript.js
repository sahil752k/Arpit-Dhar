function toggleAccordion(header) {
    var item = header.parentElement;
    var content = item.querySelector(".content");

    if (item.classList.contains("active")) {
        content.style.maxHeight = "0px";
        content.style.padding = "0px 20px";
        item.classList.remove("active");
    } else {
        document.querySelectorAll(".accordion-item").forEach(acc => {
            acc.classList.remove("active");
            acc.querySelector(".content").style.maxHeight = "0px";
            acc.querySelector(".content").style.padding = "0px 20px";
        });

        item.classList.add("active");
        content.style.padding = "10px 20px";

        setTimeout(() => {
            content.style.maxHeight = content.scrollHeight + "px";
        }, 10);
    }
}
