const btnBacia = document.querySelector('#btnBacia');
const icone_bacia_do_panara = document.querySelector('#icone-bacia-do-parana');
const bacia_do_panara = document.querySelector('#bacia-do-parana');
let contador_icone_do_parana = true;
//bacia do parana


btnBacia.addEventListener('click', () => {

    if(btnBacia.checked){

        icone_bacia_do_panara.style.display = 'block';
        mapa__svg.setAttribute('class', 'mapa__svg setentaPorcento');
        info.setAttribute('class', 'informacoes block');
        info.style.backgroundImage="url(img/informacoes.jpg)";
    } else {
        
        icone_bacia_do_panara.style.display = 'none';
    }
})

icone_bacia_do_panara.addEventListener('mouseover', () => {

        bacia_do_panara.style.display = 'block';
});
    
icone_bacia_do_panara.addEventListener('mouseout', () => {
    
    if(contador_icone_do_parana){

        bacia_do_panara.style.display = 'none';
    }
});

icone_bacia_do_panara.addEventListener('click', () => {
    
    contador_icone_do_parana = false;
    icone_bacia_do_panara.style.display = 'none';
    abreInfo();

    poco.style.display = 'none';
    blocos.style.display = 'none';
    campos.style.display = 'none';
});


//bacia de santos



