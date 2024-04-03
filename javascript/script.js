document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector(".burgir--button")
    const menu = document.querySelector(".menu--toggle")

    let toggleMenu = () => {
        button.classList.toggle("menu__is-active");
        menu.classList.toggle("menu__is-active");
    }
    button.addEventListener("click", toggleMenu);
});



