// Tipos de operadores en Javascript 

// Operadores Aritmeticos 

let r = 2;
let t = 4;

console.log(r - - t); //decremento
console.log( r + + t);  //incremento
console.log( r * t);  //multiplicacion
console.log( r / t);  //division
console.log( r +  t);  //suma
console.log( r - t);  //resta
console.log( r & t);  //modulo


// Operadores de Asignacion

let m = 10;
let n = 21;

console.log(m = n); //Asignacion
console.log(m += n); //Suma y Asignacion
console.log(m -= n); //Resta y Asignacion
console.log(m *= n); //Multiplica y Asignacion
console.log(m /= n); //Divide y Asignacion
console.log(m %= n); //Calcular Modulo y Asignacion

// Operadores de Comparacion

let k = 5;
let l = 3;

console.log(k == l); // Igualdad no Estricta
console.log(k === l); // Igualdad Estricta
console.log(k != l); // Diferente no Estricta
console.log(k !== l); // Diferente Estricta
console.log(k < l); // Menor que
console.log(k > l); // Mayor que
console.log(k <= l); // Menor igual que
console.log(k >= l); // Mayor igual que

// Operadores de Concatenacion

let concatenarPalabras = 'Hello' + ' ' + 'world';
console.log(concatenarPalabras);

// Operadores Logicos

let operadorAnd = (20 > 1) && (17 < 6); //false
console.log(operadorAnd);
let operadorOr = (20 > 1) || (17 < 6); //true
console.log(operadorOr);
let negacionLogica = !(20 < 1)  //false
console.log(negacionLogica);


// Operador Ternario 

let age = 21;
let message = (edad >= 21) ? 'You are an adult' : 'You are a minor';
console.log(age + message);


