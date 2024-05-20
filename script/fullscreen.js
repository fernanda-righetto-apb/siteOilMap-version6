const btnFullscreen = document.querySelector('#btnFullscreen');
const mapa = document.querySelector('#mapa');
const imgFiltro = document.querySelector('#imgFiltro');

btnFullscreen.addEventListener('click', () => {
    if(!document.fullscreenElement){
        mapa.requestFullscreen();
        imgFiltro.setAttribute('class', 'img__filtro block');
    } else {
        document.exitFullscreen();
        imgFiltro.setAttribute('class', 'img__filtro');
        filtro2.setAttribute('class', 'filtro2');
    }
})


document.addEventListener('fullscreenchange', function(event) {
    if (!document.fullscreenElement) {
        imgFiltro.setAttribute('class', 'img__filtro');
        console.log("O navegador saiu do modo de tela cheia!");
        filtro2.setAttribute('class', 'filtro2');
    }
});