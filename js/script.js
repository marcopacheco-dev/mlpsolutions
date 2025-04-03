// Função para abrir o WhatsApp
function openWhatsApp() {
    window.open('https://wa.me/552175782947', '_blank');
}

// Função para Carrosel
document.addEventListener("DOMContentLoaded", () => {
    const slideContainer = document.querySelector(".carousel-slide");
    const slides = document.querySelectorAll(".carousel-item");
    const totalSlides = slides.length;
    let currentIndex = 0;

    function moveSlide(step) {
        currentIndex += step;

        // Loop: volta ao início ou fim
        if (currentIndex >= totalSlides) currentIndex = 0;
        if (currentIndex < 0) currentIndex = totalSlides - 1;

        const offset = -(currentIndex * (100 / totalSlides));
        slideContainer.style.transform = `translateX(${offset}%)`;
    }

    // Eventos dos botões
    document.querySelector(".prev").addEventListener("click", () => moveSlide(-1));
    document.querySelector(".next").addEventListener("click", () => moveSlide(1));

    // Rotação automática
    setInterval(() => moveSlide(1), 5000);
});