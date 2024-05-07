const zoom = document.querySelector('#zoom');
const espiritoSanto = document.querySelector('#espirito-santo');

espiritoSanto.addEventListener('dblclick', () => {

    zoom.setAttribute('class', 'zoom-es');
});
