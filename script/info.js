const info = document.querySelector('#info');
const mapa__svg = document.querySelector('#mapa__svg');
const fechaInfo = document.querySelector('#fechaInfo');
const mapMaker = document.querySelector('#mapMaker');

poco.addEventListener('click', () => {

    mapa__svg.setAttribute('class', 'mapa__svg setentaPorcento');
    info.setAttribute('class', 'informacoes block');
    mapMaker.setAttribute('class', 'block');
    info.style.backgroundImage="url(img/informacoes.jpg)";
    
    blocos.style.display = 'none';
    campos.style.display = 'none';
    icone_bacia_do_panara.style.display = 'none';
});

fechaInfo.addEventListener('click', () => {
    if(btnPocos.checked){


    } else if(btnBlocos.checked) {



    } else if(btnCampos.checked){


    } else if(btnBacia.checked){


    }  else {

        info.setAttribute('class', 'informacoes');
        mapa__svg.setAttribute('class', 'mapa__svg');
        mapMaker.setAttribute('class', 'none');
    }

    
    
    
    
    if(btnBacia.checked){

        icone_bacia_do_panara.style.display = 'block';
        contador_icone_do_parana = true;
        bacia_do_panara.style.display = 'none';
    }

    if(btnPocos.checked){
        
        infoPocos.style.display ='none';
    }
});

function abreInfo(){

    mapa__svg.setAttribute('class', 'mapa__svg setentaPorcento');
    info.setAttribute('class', 'informacoes block');
    info.style.backgroundImage="url(img/informacoes.jpg)";
}