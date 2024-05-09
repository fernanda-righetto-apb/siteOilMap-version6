const btnPocos = document.querySelector('#btnPocos');
const infoPocos = document.querySelector('#info-pocos');

btnPocos.addEventListener('click', () => {
    if(btnPocos.checked){
        poco.setAttribute('class', 'block');
        mapa__svg.setAttribute('class', 'mapa__svg setentaPorcento');
        info.setAttribute('class', 'informacoes block');
        infoPocos.style.display ='block';
        info.style.backgroundImage="url(img/informacoes.jpg)";
    } else {
        poco.setAttribute('class', 'none');
        infoPocos.style.display ='none';
        info.setAttribute('class', 'informacoes');
    }
});

poco.addEventListener('click', () => {

    mapa__svg.setAttribute('class', 'mapa__svg setentaPorcento');
    info.setAttribute('class', 'informacoes block');
    mapMaker.setAttribute('class', 'block');
    info.style.backgroundImage="url(img/informacoes.jpg)";
    
    blocos.style.display = 'none';
    campos.style.display = 'none';
    icone_bacia_do_panara.style.display = 'none';
    infoPocos.style.display = 'none';
});