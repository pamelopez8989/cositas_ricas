function enviarWhatsApp() {
    window.open("https://wa.me/543454962526", "_blank");
}

/* MENU */
function toggleMenu() {
    document.getElementById("menu").classList.toggle("active");
}

/* CARRUSEL */
function moverCarrusel(direction) {
    const carrusel = document.getElementById("carrusel");
    carrusel.scrollBy({
        left: direction * 250,
        behavior: "smooth"
    });
}