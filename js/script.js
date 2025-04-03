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

    function updateSlide() {
        const offset = -(currentIndex * 100);
        slideContainer.style.transform = `translateX(${offset}%)`;
    }

    document.querySelector(".prev").addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        updateSlide();
    });

    document.querySelector(".next").addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateSlide();
    });

    // Mudança automática a cada 5 segundos
    setInterval(() => {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateSlide();
    }, 5000);
});

