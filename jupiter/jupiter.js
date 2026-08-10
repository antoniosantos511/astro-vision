const globe = document.querySelector('#jupiterGlobe');
const jupiterImage = document.querySelector('#jupiterImage');
const jupiterGlow = document.querySelector('.jupiter-glow');
const jupiterHighlight = document.querySelector('.jupiter-highlight');

if (globe && jupiterImage) {
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

        jupiterImage.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        jupiterImage.style.transition = 'transform 0.15s ease-out';

        if (jupiterGlow) {
            jupiterGlow.style.transform = `translate(${percentX * maxTranslation}px, ${percentY * maxTranslation}px)`;
        }
        if (jupiterHighlight) {
            jupiterHighlight.style.transform = `translate(${percentX * maxTranslation * 0.6}px, ${percentY * maxTranslation * 0.6}px)`;
        }
    }

    function resetPlanetPosition() {
        jupiterImage.style.transform = 'rotateX(0deg) rotateY(0deg)';
        jupiterImage.style.transition = 'transform 0.5s ease-out';

        if (jupiterGlow) {
            jupiterGlow.style.transform = 'translate(0, 0)';
        }
        if (jupiterHighlight) {
            jupiterHighlight.style.transform = 'translate(0, 0)';
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
    if (jupiterImage) {
        jupiterImage.style.opacity = '1';
    }
});
