function sobeMenu(id){
    var seuId = id; 
    var menuSobe = document.getElementById("menuSobe");

        if(menuSobe.style.height == "100vh" && menuSobe.style.width == "0vw"){
            menuSobe.style.width = "100vw";
            console.log("Deu boa");
        }else if(menuSobe.style.height == "100vh" && menuSobe.style.width == "100vw"){
            menuSobe.style.width = "0vw";
        }else if(menuSobe.style.height == "0vh" && menuSobe.style.width == "100vw"){
            menuSobe.style.height = "100vh";
        }else{
            menuSobe.style.height = "0vh";
        }
    
       
    
}

function sobeMenu2(id){
    var seuId = id; 
    var menuSobe = document.getElementById("menuSobe");

        
    if(largura>820){
        menuSobe.style.width = "0vw";
    }else{

        menuSobe.style.height = "0vh";
    }
       
    
}
function filtro(id){
    var nome = document.getElementById(id); 

    if( nome.style.height == "auto"){
        nome.style.height = "0px";

    }else{
        nome.style.height = "auto";

    }
}

var menuSobe = document.getElementById("menuSobe");
    var largura = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;
var altura = window.innerHeight
|| document.documentElement.clientHeight
|| document.body.clientHeight;
console.log(altura);
console.log(largura);

function teste() {

    if(largura>820){
        menuSobe.style.height = "100vh";
        menuSobe.style.width = "0vw";
        menuSobe.style.right = "0px"
        menuSobe.style.maxWidth = "30vw";

        inicio.style.top = "30%";
        inicio.style.right = "30%";
        


    }else{
       

        menuSobe.style.width = "100vw";
        menuSobe.style.height = "0vh";

        inicio.style.right = "0%";
        
        menuSobe.style.removeProperty("right");
        menuSobe.style.removeProperty("max-width");
        
    }
}

