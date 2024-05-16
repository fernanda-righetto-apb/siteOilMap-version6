const info = document.querySelector('#info');
const mapa__svg = document.querySelector('#mapa__svg');
const fechaInfo = document.querySelector('#fechaInfo');
const mapMaker = document.querySelector('#mapMaker');
const detalhesPoco = document.querySelector(".detalhesPoco");
// const detalhesBlocos = document.querySelector(".detalhesBlocos");
const infoElementos = document.querySelector(".info-Elementos");


fechaInfo.addEventListener('click', () => {
    if(btnPocos.checked){


    } else if(btnBlocos.checked) {



    } else if(btnCampos.checked){


    } else if(btnBacia.checked){


    }  else {

        info.setAttribute('class', 'informacoes');
        mapa__svg.setAttribute('class', 'mapa__svg');
    }
    
    

    if(btnPocos.checked){
        infoPocos.style.display = 'block';
    } else {
        poco.style.display = 'none';
    }

    if(btnBlocos.checked){
        blocos.style.display = 'block';
    } 
    
    if(btnCampos.checked){
        iconeCampos.style.display = 'block';
        campos.style.display = 'none';     
        zoom.removeAttribute('class', 'zoom-es');
    }

    if(btnBacia.checked){

        icone_bacia_do_panara.style.display = 'block';
        contador_icone_do_parana = true;
        bacia_do_panara.style.display = 'none';
    }

    mapMaker.setAttribute('class', 'none');
    infoElementos.style.display = 'none';
   
    
    
    filtro_pesquisa.value = "";
});

function abreInfo(){

    mapa__svg.setAttribute('class', 'mapa__svg setentaPorcento');
    info.setAttribute('class', 'informacoes block');
    info.style.backgroundImage="url(img/informacoes.jpg)";
}