document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("[data-js-theme-switch]").onchange = themeSwitch;
});

let bodyThemeClass = "theme--dark";

function themeSwitch(event) {
    if (event.target.checked) {
        document.querySelector("body").classList.add("theme--dark");
    }
    else {
        document.querySelector("body").classList.remove("theme--dark");
    }
}