import {getHeroById} from './08-imp-exp'

export const getHeroeByIdAsync = (id) => new Promise((resolve, reject) => {
    setTimeout(() => {
        const heroe = getHeroById(id);
        if (heroe) {
            resolve(heroe);
        } else {
            reject('No se pudo encontrar el héroe');
        }
    }, 1000)
});

/*getHeroeByIdAsync(2)
    .then( console.log )
    .catch( console.warn )*/
