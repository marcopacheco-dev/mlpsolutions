// Função para abrir o WhatsApp
function openWhatsApp() {
    window.open('https://wa.me/552175782947', '_blank');
}

// Função para Carrosel
let currentIndex = 0;

function moveSlide(step) {
    const slides = document.querySelectorAll(".carousel-slide");
    const totalSlides = slides.length;
    currentIndex = (currentIndex + step + totalSlides) % totalSlides;
    document.querySelector(".carousel-container").style.transform = `translateX(-${currentIndex * 100}%)`;
}

document.addEventListener("DOMContentLoaded", () => {
    setInterval(() => moveSlide(1), 3000); // Troca de slide a cada 3 segundos
});