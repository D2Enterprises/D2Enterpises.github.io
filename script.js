// Example: Animation on scroll
window.addEventListener('scroll', function() {
    const hero = document.querySelector('.hero');
    let scrollPosition = window.scrollY;

    hero.style.backgroundPositionY = -scrollPosition / 2 + 'px';
});
