function menuOpen() {
    let element = document.getElementById("mobileMenuBlock");
    element.classList.toggle("show");
    let btnElement = document.getElementById("mobileMenuBtn");
    btnElement.classList.toggle("menu_mini-opened");
}