/ Muestra ejemplos de creación de todas las estructuras soportadas por defecto en Javascript

// Promesas

let myPromise = new Promise((resolve, reject) =>{
    resolve("Done it!")
})

// Arrays

let numbers = [1,2,3,4,5];
let matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
]

//Objetos

let objeto = {
 person  : {
    name: "Mike Rosss",
    age: "45",
    skills: "Php, Javascript, NodeJs"
},

adress:{
    city: "Madrid",
    country: "Spain"
},
};

// Utiliza operaciones de inserción, borrado, actualización y ordenación.

// Array Insercion
let myNumbers = [1,2,3];
myNumbers.push(4); //insertar al final
myNumbers.unshift(0); //insertar al inicio
console.log(myNumbers); 

// Borrado
myNumbers.pop(); // elimina el ultimo elemento
myNumbers.shift(); // elimina el primer elemento

//Actualizacion

myNumbers[1] = 5 // actualiza el segundo elemento

// Ordenacion

myNumbers.sort(); //ordena en orden ascendente
console.log(myNumbers);

myNumbers.sort((a, b)  => b - a); // ordena en orden descendente
