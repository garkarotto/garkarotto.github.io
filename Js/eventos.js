function Mostrar1(){
    document.getElementById("texto-de-mi").style.display = "block";
}

function Ocultar1(){
    document.getElementById("texto-de-mi").style.display = "none";
}

function Mostrar2(){
    document.getElementById("laboral").style.display = "block";
}

function Ocultar2(){
    document.getElementById("laboral").style.display = "none";
}


let sobre_mi = document.getElementById("sobre-mi");
let experiencia = document.getElementById("experiencia");


sobre_mi.onclick = function Mostrar_Ocultar(){
    var texto_de_mi =  document.getElementById("texto-de-mi");
    if(texto_de_mi.style.display == "none"){
        Mostrar1();
    }
    else{
        Ocultar1();
    }
}

experiencia.onclick = function Mostrar_Ocultar2(){
    var texto_de_mi =  document.getElementById("laboral");
    if(laboral.style.display == "none"){
        Mostrar2();
    }
    else{
        Ocultar2();
    }
}

/* hice dos funciones que activa el display de "Sobre mi" y "experiencia"*/