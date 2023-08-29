// Funciones en JS

// const saludar = function(nombre) {
//     return `Hola, ${nombre}`
// }

const saludar2 = (nombre) => {
    return `Hola, ${nombre}`
}

const saludar3 = (nombre) => `Hola, ${nombre}`;
const saludar4 = () => `Hola, mundo`;

console.log(saludar3('Adrian'));
console.log(saludar4());

/**
 * Tarea
 * 1. convertir a funcion de flecha
 * 2. Retornar un objeto implicito
 * 3. Probar
 *
 */

const getUsuarioActivo = (nombre) => ({
    uid: 'fad645',
    username: nombre
})

const usuarioActivo = getUsuarioActivo('Adrian');

console.log(usuarioActivo);