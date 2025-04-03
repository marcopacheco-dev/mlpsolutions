// Função para abrir o WhatsApp
function openWhatsApp() {
    window.open('https://wa.me/552175782947', '_blank');
}

// Função para Carrosel
document.addEventListener("DOMContentLoaded", () => {
    let currentIndex = 0;
    const slideContainer = document.querySelector(".carousel-slide");
    const slides = document.querySelectorAll(".carousel-slide img");
    const totalSlides = slides.length;

    function moveSlide(step) {
        currentIndex = (currentIndex + step + totalSlides) % totalSlides;
        slideContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    document.querySelector(".prev").addEventListener("click", () => moveSlide(-1));
    document.querySelector(".next").addEventListener("click", () => moveSlide(1));

    // Adicionando rotação automática no carrossel
    setInterval(() => moveSlide(1), 5000);
});