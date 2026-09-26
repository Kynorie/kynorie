document.addEventListener("DOMContentLoaded", function () {
    var container = document.getElementById("links");

    if (!container || typeof KYNORIE_LINKS === "undefined") {
        return;
    }

    KYNORIE_LINKS.forEach(function (link) {
        var a = document.createElement("a");
        a.textContent = link.label || "(untitled)";

        if (link.url) {
            a.href = link.url;
        } else {
            a.href = "#";
            a.classList.add("link-disabled");
        }

        container.appendChild(a);
    });
});
