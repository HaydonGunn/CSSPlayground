// Import basic module
import {add} from './modules/Math/add.mjs';
import {multiply} from './modules/Math/multiply.mjs';

console.log(multiply(6, 4));
console.log(add(5,4,3,8));

import {MathAdd, Calc} from './modules/Math/math.mjs';

console.log(MathAdd(3,4));

var myCalc1 = new Calc(3);
myCalc1.add(5);
console.log(myCalc1.equals());

document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("[data-js-theme-switch]").onchange = themeSwitch;
    document.querySelector("[data-js-slider-weight]").oninput = rangeSliderWeight;
    document.querySelector("[data-js-slider-italic]").oninput = rangeSliderItalic;
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

    setFontVariationSettings();
}

function rangeSliderItalic(event) {
    fontVariationItalic = event.target.value;

    setFontVariationSettings();
}

function setFontVariationSettings() {
    var contentWrapper = document.querySelector("[data-js-content-wrapper]");
    
    contentWrapper.style.fontVariationSettings = "'wght' " + fontVariationWeight + ", 'ital' " + fontVariationItalic;
}

/*
    Idea for modules:
    HSLA Colour picker

    Math 



*/