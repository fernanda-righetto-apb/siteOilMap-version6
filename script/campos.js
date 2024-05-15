const campos = document.querySelector('#campos');
const btnCampos = document.querySelector('#btn-campos');
const iconeCampos = document.querySelector('#icone-campos');
let contadorIconeCampos = true;

btnCampos.addEventListener('click', () => {

    if(btnCampos.checked){

        iconeCampos.style.display = 'block';
        mapa__svg.setAttribute('class', 'mapa__svg setentaPorcento');
        info.setAttribute('class', 'informacoes block');
        info.style.backgroundImage="url(img/informacoes.jpg)";

        
    } else if(btnPocos.checked || btnBlocos.checked || btnBacia.checked) {

        iconeCampos.style.display = 'none';
        zoom.removeAttribute('class', 'zoom-es');
    } else {

        iconeCampos.style.display = 'none';
        info.setAttribute('class', 'informacoes');
        zoom.removeAttribute('class', 'zoom-es');
    }
})

iconeCampos.addEventListener('click', () => {
    
    zoom.setAttribute('class', 'zoom-es');
    iconeCampos.style.display = 'none';
    campos.style.display = 'block';

    poco.style.display = 'none';
    blocos.style.display = 'none';
    icone_bacia_do_panara.style.display = 'none';
    infoPocos.style.display = 'none';
})