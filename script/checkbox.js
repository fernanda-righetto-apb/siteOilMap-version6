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
    }
});

