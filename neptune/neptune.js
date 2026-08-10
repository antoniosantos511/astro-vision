const globe = document.querySelector('#neptuneGlobe');
const neptuneImage = document.querySelector('#neptuneImage');
const neptuneGlow = document.querySelector('.neptune-glow');
const neptuneHighlight = document.querySelector('.neptune-highlight');

if (globe && neptuneImage) {
    const maxRotation = 14;
    const maxTranslation = 18;

    function updatePlanetPosition(event) {
        const rect = globe.getBoundingClientRect();
        const pointerX = event.clientX - rect.left;
        const pointerY = event.clientY - rect.top;
        const percentX = (pointerX / rect.width) * 2 - 1;
        const percentY = (pointerY / rect.height) * 2 - 1;

        const rotateY = percentX * maxRotation;
        const rotateX = percentY * -maxRotation;

        neptuneImage.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        neptuneImage.style.transition = 'transform 0.15s ease-out';

        if (neptuneGlow) {
            neptuneGlow.style.transform = `translate(${percentX * maxTranslation}px, ${percentY * maxTranslation}px)`;
        }
        if (neptuneHighlight) {
            neptuneHighlight.style.transform = `translate(${percentX * maxTranslation * 0.6}px, ${percentY * maxTranslation * 0.6}px)`;
        }
    }

    function resetPlanetPosition() {
        neptuneImage.style.transform = 'rotateX(0deg) rotateY(0deg)';
        neptuneImage.style.transition = 'transform 0.5s ease-out';

        if (neptuneGlow) {
            neptuneGlow.style.transform = 'translate(0, 0)';
        }
        if (neptuneHighlight) {
            neptuneHighlight.style.transform = 'translate(0, 0)';
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
    if (neptuneImage) {
        neptuneImage.style.opacity = '1';
    }
});
