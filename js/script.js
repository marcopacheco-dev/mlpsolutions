// Função para abrir o WhatsApp
function openWhatsApp() {
    window.open('https://wa.me/552175782947', '_blank');
}

// Função para Carrosel
const container = document.querySelector('.carousel-container');
const items = document.querySelectorAll('.carousel-item');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
let index = 0;

function updateCarousel() {
    container.style.transform = `translateX(-${index * 100}%)`;
}

next.addEventListener('click', () => {
    index = (index + 1) % items.length;
    updateCarousel();
});

prev.addEventListener('click', () => {
    index = (index - 1 + items.length) % items.length;
    updateCarousel();
});