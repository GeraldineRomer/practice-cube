const cube = document.getElementById('animatedCube');

const optionsContainer = document.getElementById('options')
const option1 = document.getElementById('option1');
const option2 = document.getElementById('option2');
const option3 = document.getElementById('option3');

let animationPaused = false;

/* funcion que detiene y reactiva el movimiento  */
cube.addEventListener("click", () => {
    console.log('Di clic en el cubo');
    if (!animationPaused) {
        console.log('Animación pausada');
        cube.style.animationPlayState = 'paused';
        optionsContainer.style.display = 'flex';
        optionsContainer.style.flexDirection = 'column';
        animationPaused = true;
        setTimeout(() => {
            cube.style.animationPlayState = 'running';
            animationPaused = false;
            optionsContainer.style.display = 'none';
        }, 5000);
    }
});

/* función para paginas */
option1.addEventListener("click", () => {
    console.log('Di click en la opcion 1');
    window.location.href = '../pages/services.html';
});
option2.addEventListener("click", () => {
    console.log('Di click en la opcion 2');
    window.location.href = '../pages/newsletter.html';
});
option3.addEventListener("click", () => {
    console.log('Di click en la opcion 3');
    window.location.href = '../pages/contact.html';
});
