// Função para abrir o WhatsApp
function openWhatsApp() {
    window.open('https://wa.me/552175782947', '_blank');
}

// Função para Carrosel
let currentSlide = 0;
function moveSlide(step) {
    const slides = document.querySelectorAll(".carousel-slide");
    slides[currentSlide].style.display = "none";
    currentSlide = (currentSlide + step + slides.length) % slides.length;
    slides[currentSlide].style.display = "block";
}
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".carousel-slide")[currentSlide].style.display = "block";
});