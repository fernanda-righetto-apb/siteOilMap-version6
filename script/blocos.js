const btnBlocos = document.querySelector('#btn-blocos');
const blocos = document.querySelector('#blocos');

btnBlocos.addEventListener('click', () => {

    if(btnBlocos.checked){

        blocos.style.display = 'block';
        mapa__svg.setAttribute('class', 'mapa__svg setentaPorcento');
        info.setAttribute('class', 'informacoes block');
        info.style.backgroundImage="url(img/informacoes.jpg)";
    } else {

        blocos.style.display = 'none';
    }
});