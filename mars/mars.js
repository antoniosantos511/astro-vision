const globe = document.querySelector('#marsGlobe');
const marsImage = document.querySelector('#marsImage');
const marsGlow = document.querySelector('.mars-glow');
const marsHighlight = document.querySelector('.mars-highlight');

if (globe && marsImage) {
    const maxRotation = 14;
    const maxTranslation = 18;

    function updatePlanetPosition(event) {
        const rect = globe.getBoundingClientRect();
        const pointerX = event.clientX - rect.left;
        const pointerY = event.clientY - rect.top;
        const percentX = (pointerX / rect.width) * 5 - 5;
        const percentY = (pointerY / rect.height) * 5 - 5;

        const rotateY = percentX * maxRotation;
        const rotateX = percentY * -maxRotation;

        marsImage.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        marsImage.style.transition = 'transform 0.15s ease-out';

        if (marsGlow) {
            marsGlow.style.transform = `translate(${percentX * maxTranslation}px, ${percentY * maxTranslation}px)`;
        }
        if (marsHighlight) {
            marsHighlight.style.transform = `translate(${percentX * maxTranslation * 0.6}px, ${percentY * maxTranslation * 0.6}px)`;
        }
    }

    function resetPlanetPosition() {
        marsImage.style.transform = 'rotateX(0deg) rotateY(0deg)';
        marsImage.style.transition = 'transform 0.5s ease-out';

        if (marsGlow) {
            marsGlow.style.transform = 'translate(0, 0)';
        }
        if (marsHighlight) {
            marsHighlight.style.transform = 'translate(0, 0)';
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
    if (marsImage) {
        marsImage.style.opacity = '1';
    }
});
