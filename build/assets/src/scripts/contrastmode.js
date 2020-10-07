
var button = document.querySelector("[data-reveal-trigger]");
var content = document.querySelector("[data-reveal-content]");

button.addEventListener("click", ()=> {
    content.classList.remove("c-hidden-content");
}); 