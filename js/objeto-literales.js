let movies = {
    nombre1: 'Flash',
    nombre2: 'Spiderman',
    nombre3: 'Dracula',
    precio_peli_1: 15000,
    precio_peli_2: 14000,
    precio_peli_3: 14000,
    EnSalas: true,
    lugar:{
         lat:6.200172318927795,
         lng:-75.57590811954108
    },

};

// mostrar todos los elementos el objeto
console.warn("mostrar todos los elementos el objeto");
console.log(movies);

// mostrar el elemento del lugar
console.warn("mostrar el elemento del lugar");
console.log('lugar: ', movies['lugar']);

