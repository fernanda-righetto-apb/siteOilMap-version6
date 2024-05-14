const btn_filtrar = document.querySelector('#btn-filtrar');
const imgPesquisa = document.querySelector('#imgPesquisa');

btn_filtrar.addEventListener('click', () => {

    const filtro_operador = document.querySelector('#filtro-operador').value;
    const filtro_tipo = document.querySelector('#filtro-tipo').value;
    const filtro_terra_mar = document.querySelector('#filtro-terra-mar').value;
    const filtro_situacao = document.querySelector('#filtro-situacao').value;
    const filtro_estado = document.querySelector('#filtro-estado').value;
    if(
        (filtro_operador === 'Shell Brasil') || 
        (filtro_tipo === '1') || 
        (filtro_terra_mar === 'M') ||
        (filtro_situacao === 'Em perfuração') || 
        (filtro_estado === 'RJ')){
        
        poco.style.display = 'block';
    }

    else{
        poco.style.display = 'none';
    }
});

imgPesquisa.addEventListener('click', () => {
    const filtro_pesquisa = document.querySelector('.filtro-pesquisa').value;

    if(filtro_pesquisa === '1-SHEL-35A-RJS'){
        abreInfo();
        infoElementos.style.display = 'block';
        poco.style.display = 'block';
        mapMaker.setAttribute('class', 'block');
       
    }

    
})