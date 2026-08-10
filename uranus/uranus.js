const globe = document.querySelector('#uranusGlobe');
const uranusImage = document.querySelector('#uranusImage');
const uranusGlow = document.querySelector('.uranus-glow');
const uranusHighlight = document.querySelector('.uranus-highlight');

if (globe && uranusImage) {
    const maxRotation = 10;
    const maxTranslation = 18;

    function updatePlanetPosition(event) {
        const rect = globe.getBoundingClientRect();
        const pointerX = event.clientX - rect.left;
        const pointerY = event.clientY - rect.top;
        const percentX = (pointerX / rect.width) * 2 - 1;
        const percentY = (pointerY / rect.height) * 2 - 1;

        const rotateY = percentX * maxRotation;
        const rotateX = percentY * -maxRotation;

        uranusImage.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        uranusImage.style.transition = 'transform 0.15s ease-out';

        if (uranusGlow) {
            uranusGlow.style.transform = `translate(${percentX * maxTranslation}px, ${percentY * maxTranslation}px)`;
        }
        if (uranusHighlight) {
            uranusHighlight.style.transform = `translate(${percentX * maxTranslation * 0.6}px, ${percentY * maxTranslation * 0.6}px)`;
        }
    }

    function resetPlanetPosition() {
        uranusImage.style.transform = 'rotateX(0deg) rotateY(0deg)';
        uranusImage.style.transition = 'transform 0.5s ease-out';

        if (uranusGlow) {
            uranusGlow.style.transform = 'translate(0, 0)';
        }
        if (uranusHighlight) {
            uranusHighlight.style.transform = 'translate(0, 0)';
        }
    }

    globe.addEventListener('pointermove', updatePlanetPosition);
    globe.addEventListener('pointerleave', resetPlanetPosition);
    globe.addEventListener('pointerenter', () => {
        globe.style.cursor = 'grab';
    });
    globe.addEventListener('pointerdown', () => {
        globe.style.cursor = 'grabbing';
    });
    globe.addEventListener('pointerup', () => {
        globe.style.cursor = 'grab';
    });
}

window.addEventListener('load', () => {
    if (uranusImage) {
        uranusImage.style.opacity = '1';
    }
});
