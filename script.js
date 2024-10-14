const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const teamContainer = document.querySelector('.team-container');
const teamMembers = document.querySelectorAll('.team-member');

let currentIndex = 0;
const teamCount = teamMembers.length;
const memberWidth = teamMembers[0].offsetWidth + 30; // 150px + margin

// Função para atualizar a posição do carrossel
function updateCarousel() {
    teamContainer.style.transform = `translateX(-${currentIndex * memberWidth}px)`;
}

// Evento de clique no botão anterior
prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = teamCount - 1;
    }
    updateCarousel();
});

// Evento de clique no botão próximo
nextBtn.addEventListener('click', () => {
    if (currentIndex < teamCount - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    updateCarousel();
});

// Ajusta o tamanho do carrossel ao redimensionar a janela
window.addEventListener('resize', () => {
    memberWidth = teamMembers[0].offsetWidth + 30;
    updateCarousel();
});
