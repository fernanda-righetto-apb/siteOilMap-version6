const sobreOsElementos = document.querySelector('#sobreOsElementos1');
const sobreOsElementos2 = document.querySelector('#sobreOsElementos2');
const x2 = document.querySelector('#x2');

sobreOsElementos.addEventListener('click', () => {
    sobreOsElementos2.style.display = 'block';
})

x2.addEventListener('click', () => {
    sobreOsElementos2.style.display = 'none';
})

const menu = document.getElementById('Modal_info');
function fechaModalInfos(){
    menu.style.display = 'none';
}
function AbreModalInfos(){
    menu.style.display = 'block';
}