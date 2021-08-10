let color = document .querySelector('#input_color');
let enviar = document.querySelector("#enviar")
let cambio_color = document.querySelector("#cambio_color")
let button_a = document.querySelector("#button_a")
let button_a_i = document.querySelector("#button_a_i")
let button_min = document.querySelector("#button_min")
let button_max = document.querySelector("#button_max")
let contenido_principal = document.querySelector("#contenido_principal")

enviar.addEventListener("click",cambiarColor);
color.addEventListener("change",cambiarColor);
button_min.addEventListener("click",restarPixeles);
button_max.addEventListener("click",sumarPixeles);


let contador = 0;

function cambiarColor(){
    var value = color.value
    cambio_color.style.backgroundColor = value;
    button_a_i.style.color = value;
    button_a.style.backgroundColor = value;
}


function restarPixeles(){
    contador = contador-1;
    cambio_color.style.borderTopLeftRadius= contador + "px";
    cambio_color.style.borderTopRightRadius= contador + "px";
    contenido_principal.style.borderRadius = contador + "px";
    console.log(contador);
    
}

function sumarPixeles(){
    contador = contador+1;
    cambio_color.style.borderTopLeftRadius= contador + "px";
    cambio_color.style.borderTopRightRadius= contador + "px";
    contenido_principal.style.borderRadius = contador + "px";
    console.log(contador);
}