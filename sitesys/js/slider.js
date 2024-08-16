let slideIndex = 0;
const slides = document.querySelectorAll('#servicios .slides'); // Asegúrate de que este selector apunte a la sección correcta
const slideImages = document.querySelectorAll('#servicios .slides img'); // Imágenes dentro de la sección Servicios

function showSlides() {
    if (slideImages.length > 0) {
        const offset = -slideIndex * 100;
        slides.forEach(slide => {
            slide.style.transform = `translateX(${offset}%)`;
        });
    }
}

function plusSlides(n) {
    slideIndex = (slideIndex + n + slideImages.length) % slideImages.length;
    showSlides();
}

// Configura el slider para cambiar automáticamente cada 5 segundos
function autoSlides() {
    slideIndex = (slideIndex + 1) % slideImages.length;
    showSlides();
}

// Inicia la presentación automática y muestra la primera imagen
document.addEventListener('DOMContentLoaded', () => {
    showSlides();
    setInterval(autoSlides, 5000); // Cambia cada 5 segundos

    // Agrega eventos de clic para las flechas de navegación en la sección Servicios
    const prev = document.querySelector('#servicios .prev');
    const next = document.querySelector('#servicios .next');
    if (prev && next) {
        prev.addEventListener('click', () => plusSlides(-1));
        next.addEventListener('click', () => plusSlides(1));
    }
});

// Maneja el cambio de estilo del encabezado al hacer scroll
window.addEventListener("scroll", function() {
    const header = document.getElementById("mainHeader");
    if (window.scrollY > 50) {
        header.classList.add("header-scrolled");
    } else {
        header.classList.remove("header-scrolled");
    }
});






  