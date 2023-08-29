// como inicializar un arreglo array ejemplo: array de juegos

const videoJuegos = ['mario bros', 'mario 3', 'megaman', 1999, 2000+545,0,'formule one'];

// mostrar todos los datos del array de los juegos

console.log(videoJuegos);

// mostrar el primer dato del arreglo de los juegos o varios datos

console.log('el primer dato es: ' , videoJuegos[0]);
console.log('el primer dato es: ' , videoJuegos[3]);
console.log('el primer dato es: ' , videoJuegos[4]);

// mostrar el último dato del array
let ultimodato = videoJuegos[videoJuegos.length-1];
console.log('último dato', ultimodato);// me muestra el valor de la última posición
console.log('último dato', videoJuegos.length-1);//la última posicion del array

// metodo para añadir elemento al array push
let nuevoJuego = videoJuegos.push('Resident evil');
console.log(videoJuegos);

// metodo para añadir elemento al principio del array
let newJuego = videoJuegos.unshift('Dragon Ball');
console.log(videoJuegos);

// metodo para borrar datos del array
let borrarJuego = videoJuegos.pop();//elimina el ultmo elemento array
console.log(videoJuegos);

// eliminar por indice
// let pos =  3;
let eliminarJuego = videoJuegos.splice(3,1); 
console.log(videoJuegos);