const cardsContainer = document.getElementById('cardsContainer');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 0;

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % cardsContainer.children.length;
    updateCardContainer();
});

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + cardsContainer.children.length) % cardsContainer.children.length;
    updateCardContainer();
});

function updateCardContainer() {
    const cardWidth = cardsContainer.children[0].offsetWidth;
    const translateX = -currentIndex * cardWidth;
    cardsContainer.style.transform = `translateX(${translateX}px)`;
}
