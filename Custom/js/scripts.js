document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("[data-js-theme-switch]").onchange = themeSwitch;
    document.querySelector("[data-js-slider-weight]").onchange = rangeSliderWeight;
    document.querySelector("[data-js-slider-italic]").onchange = rangeSliderItalic;
});

let bodyThemeClass = "theme--dark";
let fontVariationWeight = 300;
let fontVariationItalic = 0;

function themeSwitch(event) {
    if (event.target.checked) {
        document.querySelector("body").classList.add("theme--dark");
    }
    else {
        document.querySelector("body").classList.remove("theme--dark");
    }
}

// Range slider 
function rangeSliderWeight(event) {
    fontVariationWeight = event.target.value;

    console.log("weight")
    setFontVariationSettings();
}

function rangeSliderItalic(event) {
    fontVariationItalic = event.target.value;

    setFontVariationSettings();
}

function setFontVariationSettings() {
    console.log("set method called")
    var contentWrapper = document.querySelector("[data-js-content-wrapper]");
    
    contentWrapper.style.fontVariationSettings = "'wght' " + fontVariationWeight + ", 'ital' " + fontVariationItalic;
}