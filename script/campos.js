const campos = document.querySelector('#campos');
const btnCampos = document.querySelector('#btn-campos');

btnCampos.addEventListener('click', () => {

    if(btnCampos.checked){

        campos.style.display = 'block';
        mapa__svg.setAttribute('class', 'mapa__svg setentaPorcento');
        info.setAttribute('class', 'informacoes block');
        info.style.backgroundImage="url(img/informacoes.jpg)";

        
    } else {

        campos.style.display = 'none';
        info.setAttribute('class', 'informacoes');
    }
})

campos.addEventListener('click', () => {

    poco.style.display = 'none';
    blocos.style.display = 'none';
    icone_bacia_do_panara.style.display = 'none';
    infoPocos.style.display = 'none';
})