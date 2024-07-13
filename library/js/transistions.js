document.addEventListener("DOMContentLoaded", function() {
    const card = document.querySelector('.card');
    const imagesLeft = document.querySelectorAll('.slide-in-left');
    const imagesRight = document.querySelectorAll('.slide-in-right');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                card.classList.add('visible');
                imagesLeft.forEach(img => img.classList.add('visible'));
                imagesRight.forEach(img => img.classList.add('visible'));
            } else {
                card.classList.remove('visible');
                imagesLeft.forEach(img => img.classList.remove('visible'));
                imagesRight.forEach(img => img.classList.remove('visible'));
            }
        });
    }, {
        threshold: 0.1
    });
    
    observer.observe(card);
});
