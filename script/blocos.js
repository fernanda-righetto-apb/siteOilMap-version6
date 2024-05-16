const btnBlocos = document.querySelector('#btn-blocos');
const blocos = document.querySelector('#blocos');
const infoBlocos = document.querySelector('#info-blocos');

btnBlocos.addEventListener('click', () => {

    if(btnBlocos.checked){

        blocos.style.display = 'block';
        mapa__svg.setAttribute('class', 'mapa__svg setentaPorcento');
        info.setAttribute('class', 'informacoes block');
        info.style.backgroundImage="url(img/informacoes.jpg)";
        infoBlocos.style.display = 'block';
    } else if(btnPocos.checked || btnCampos.checked || btnBacia.checked){

        blocos.style.display = 'none';
        infoBlocos.style.display = 'none';

    } 
    else {
        infoBlocos.style.display = 'none';
        blocos.style.display = 'none';
        info.setAttribute('class', 'informacoes');
      
    }
});

blocos.addEventListener('click', () => {

    poco.style.display = 'none';
    campos.style.display = 'none';
    icone_bacia_do_panara.style.display = 'none';
    infoPocos.style.display = 'none';
    
})