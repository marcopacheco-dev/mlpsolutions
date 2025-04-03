// Função para abrir o WhatsApp
function openWhatsApp() {
    window.open('https://wa.me/552175782947', '_blank');
}

// Função para Carrosel
document.addEventListener("DOMContentLoaded", () => {
    let currentIndex = 0;
    const slides = document.querySelectorAll(".carousel-slide");
    const totalSlides = slides.length;
    const container = document.querySelector(".carousel-container");

    function moveSlide(step) {
        currentIndex = (currentIndex + step + totalSlides) % totalSlides;
        container.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    // Corrigindo os event listeners para os botões
    document.querySelector(".prev").addEventListener("click", () => moveSlide(-1));
    document.querySelector(".next").addEventListener("click", () => moveSlide(1));

    // Adicionando rotação automática no carrossel
    setInterval(() => moveSlide(1), 5000);
});