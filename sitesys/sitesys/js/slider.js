let slideIndex = 0;
const slides = document.querySelector('.slides');
const slideImages = document.querySelectorAll('.slides img');

function showSlides() {
    if (slideImages.length > 0) {
        // Calcula el nuevo desplazamiento
        const offset = -slideIndex * 100;
        slides.style.transform = `translateX(${offset}%)`;
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
});
window.addEventListener("scroll", function() {
    const header = document.getElementById("mainHeader");
    if (window.scrollY > 50) {
      header.classList.add("header-scrolled");
    } else {
      header.classList.remove("header-scrolled");
    }
  });
  