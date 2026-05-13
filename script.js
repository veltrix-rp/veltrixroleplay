console.log("VELTRIX RP LOADED");

// Animation title
const title = document.querySelector("h1");

setInterval(() => {


    setTimeout(() => {
    }, 500);

}, 1000);


// Button effect
const button = document.querySelector(".btn");

button.addEventListener("mouseenter", () => {
    button.style.boxShadow = "0 0 30px #00aeff";
});

button.addEventListener("mouseleave", () => {
    button.style.boxShadow = "0 0 15px #00aeff";
});