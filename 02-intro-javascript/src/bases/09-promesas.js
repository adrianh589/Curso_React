import {getHeroById} from './08-imp-exp'
import {heroes} from "../data/heroes";

// const promesa = new Promise( (resolve, reject) => {
//     setTimeout( () => {
//         // console.log('2 Segundos después')
//         // resolve();
//
//         const heroe = getHeroById(2);
//         // console.log(heroe);
//
//         resolve(heroe);
//
//     }, 2000)
// });
//
// promesa.then( (heroe) => {
//     console.log('Then de la promesa');
//     console.log(heroe)
// });

const getHeroeByIdAsync = (id) => new Promise((resolve, reject) => {
    setTimeout(() => {
        const heroe = getHeroById(id);
        if (heroe) {
            resolve(heroe);
        } else {
            reject('No se pudo encontrar el héroe');
        }
    }, 2000)
});

getHeroeByIdAsync(2)
    .then( console.log )
    .catch( console.warn )
