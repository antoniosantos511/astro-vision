const globe = document.querySelector('#saturnGlobe');
const saturnImage = document.querySelector('#saturnImage');
const saturnGlow = document.querySelector('.saturn-glow');
const saturnHighlight = document.querySelector('.saturn-highlight');

if (globe && saturnImage) {
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

        saturnImage.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        saturnImage.style.transition = 'transform 0.15s ease-out';

        if (saturnGlow) {
            saturnGlow.style.transform = `translate(${percentX * maxTranslation}px, ${percentY * maxTranslation}px)`;
        }
        if (saturnHighlight) {
            saturnHighlight.style.transform = `translate(${percentX * maxTranslation * 0.6}px, ${percentY * maxTranslation * 0.6}px)`;
        }
    }

    function resetPlanetPosition() {
        saturnImage.style.transform = 'rotateX(0deg) rotateY(0deg)';
        saturnImage.style.transition = 'transform 0.5s ease-out';

        if (saturnGlow) {
            saturnGlow.style.transform = 'translate(0, 0)';
        }
        if (saturnHighlight) {
            saturnHighlight.style.transform = 'translate(0, 0)';
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
    if (saturnImage) {
        saturnImage.style.opacity = '1';
    }
});
