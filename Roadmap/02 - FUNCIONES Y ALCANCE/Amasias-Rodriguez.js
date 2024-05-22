// Funcion sin parametro  

function saludoBienvenida(){
    console.log("Hola, Bienvenido!");
}

saludoBienvenida();



// Funcion con Parametro 

function saludoNombre(nombre){
    console.log("Hola, " + Marc + "!");
}
 
saludoNombre();

// Funcion con retorno

function sumar(d, e){
    return d + e
}

let resultado = sumar(10, 22);
console.log(resultado);

// Funcion variable local

function showName(){
    let name = "Raul";
    console.log(name);
}

showName();

// Funcion variable global

let globalMessage = "Just Do It";

function showGlobalMessage(){
    console.log(globalMessage);

}

showGlobalMessage();
