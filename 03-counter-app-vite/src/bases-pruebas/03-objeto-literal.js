const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 46566,
        lat: 645435435,
        lng: 654654
    }
};

console.log({ persona: persona });

const persona2 = persona;

console.log(persona2);

console.log(persona);