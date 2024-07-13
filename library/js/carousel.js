let currentIndex = 0;

document.querySelector('.carousel-next').addEventListener('click', () => {
    const carouselContainer = document.querySelector('.carousel-container');
    const items = document.querySelectorAll('.carousel-item');
    if (currentIndex < items.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    carouselContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
});

document.querySelector('.carousel-prev').addEventListener('click', () => {
    const carouselContainer = document.querySelector('.carousel-container');
    const items = document.querySelectorAll('.carousel-item');
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = items.length - 1;
    }
    carouselContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
});
