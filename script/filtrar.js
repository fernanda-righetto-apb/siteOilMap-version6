const btn_filtrar = document.querySelector('#btn-filtrar');
const btnFiltrar2 = document.querySelector('#btn-filtrar2');
const imgPesquisa = document.querySelector('#imgPesquisa');


function btnFiltrar() {

    const filtro_operador = document.querySelector('.filtro-operador').value;
    const filtro_tipo = document.querySelector('.filtro-tipo').value;
    const filtro_terra_mar = document.querySelector('.filtro-terra-mar').value;
    const filtro_situacao = document.querySelector('.filtro-situacao').value;
    const filtro_estado = document.querySelector('.filtro-estado').value;
    if(
        (filtro_operador === 'Shell Brasil') || 
        (filtro_tipo === '1') || 
        (filtro_terra_mar === 'M') ||
        (filtro_situacao === 'Em perfuração') || 
        (filtro_estado === 'Rio de Janeiro - RJ')){
        
        poco.style.display = 'block';
    }

    else{
        poco.style.display = 'none';
    }
};

function btnFiltrar3() {

    const filtro_operador = document.querySelector('.filtro-operador2').value;
    const filtro_tipo = document.querySelector('.filtro-tipo2').value;
    const filtro_terra_mar = document.querySelector('.filtro-terra-mar2').value;
    const filtro_situacao = document.querySelector('.filtro-situacao2').value;
    const filtro_estado = document.querySelector('.filtro-estado2').value;
    if(
        (filtro_operador === 'Shell Brasil') || 
        (filtro_tipo === '1') || 
        (filtro_terra_mar === 'M') ||
        (filtro_situacao === 'Em perfuração') || 
        (filtro_estado === 'Rio de Janeiro - RJ')){
        
        poco.style.display = 'block';
    }

    else{
        poco.style.display = 'none';
    }
};

const filtro_pesquisa = document.querySelector('.filtro-pesquisa');
imgPesquisa.addEventListener('click', () => {
    
    const filtro_pesquisa2 = filtro_pesquisa.value;
    if(filtro_pesquisa2 === '1-SHEL-35A-RJS'){

        mapa__svg.setAttribute('class', 'mapa__svg setentaPorcento');
        info.setAttribute('class', 'informacoes block');
        info.style.backgroundImage="url(img/informacoes.jpg)";
        poco.style.display = 'block';
        detalhesPoco.style.display = 'block';
        mapMaker.setAttribute('class', 'block');        
    }

    
})