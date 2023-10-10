// Desestructuracion
// Asignacion desestructurante

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman'
}

const {nombre, edad, clave} = persona;

// console.log(nombre);
// console.log(edad);
// console.log(clave);

const useContext = ( {nombre, edad} ) => {
    return {
        nombreClave: nombre,
        anios: edad,
        latlng: {
            lat: 45654,
            lng: 15654645
        }
    }
}

const {nombreClave, anios, latlng: {lat, lng}} = useContext( persona );

console.log(nombreClave, anios, lat, lng);