let currentTestimonial = 0;
const testimonials = [
    '"Cuando de mi ropa se trata, La Aguja Mágica es el lugar".\nConchi R.',
    '"Agradezco a Sandra el haberme salvado con un arreglo de emergencia cuando más lo necesitaba".\nItziar A.',
    '"Sandra no sólo se ha convertido en mi costurera de confianza, sino en mi amiga".\nRaquel M.',
    '"Me he ahorrado un montón en La Aguja Mágica renovando toda mi ropa".\nPablo C.',
    '"Sí que le hace honor al nombre de la tienda".\nOlivel R.'
];

function changeTestimonial(direction) {
    currentTestimonial += direction;

    // Ciclo circular entre los testimonios
    if (currentTestimonial < 0) {
        currentTestimonial = testimonials.length - 1;
    } else if (currentTestimonial >= testimonials.length) {
        currentTestimonial = 0;
    }

    // Actualizar la imagen y el texto con transiciones suaves
    const images = document.querySelectorAll('.clientsContainer img');
    images.forEach((img, index) => {
        img.classList.toggle('active', index === currentTestimonial);
    });

    document.getElementById('testimonialText').innerText = testimonials[currentTestimonial];
}

document.querySelector('.reel a:first-child').addEventListener('click', (event) => {
    event.preventDefault();
    changeTestimonial(-1);
});

document.querySelector('.reel a:last-child').addEventListener('click', (event) => {
    event.preventDefault();
    changeTestimonial(1);
});

// Cambio automático cada 3 segundos
setInterval(() => {
    changeTestimonial(1);
}, 5000);

// Cambio automático también después de 3 segundos desde la carga inicial
setTimeout(() => {
    changeTestimonial(1);
}, 5000);

window.addEventListener('load', () => {
    changeTestimonial(0);
});